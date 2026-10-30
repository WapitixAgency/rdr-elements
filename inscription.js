/* rdr-elements inscription | source route-du-rhum d9cd9b2 | rdr-inscription-fiche-skipper.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["inscription"]="d9cd9b2";performance.mark("rdr-elements:inscription")}catch(e){}
;(function(){
(function () {
const BALISE_MEDIAS = 'rdr-envoi-medias';

 

 
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
      console.warn('[envoi-medias] Token introuvable, impossible de charger l\'état initial');
      return;
    }
    const gen = ++this._loadGen;
    try {
      const res = await fetch(`${CONFIG.STATE_ENDPOINT}?token=${encodeURIComponent(token)}`);
      if (gen !== this._loadGen) return;
      if (!res.ok) {
        console.warn('[envoi-medias] Chargement état initial : réponse non-OK', res.status);
        return;
      }
      const data = await this._safeJson(res);
      if (gen !== this._loadGen) return;
      if (data?.state) this._applyState(data.state);
    } catch (e) {
      if (gen !== this._loadGen) return;
      console.warn('[envoi-medias] Chargement état initial échoué', e);
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
      console.error('[envoi-medias] tile upload failed', {
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
        console.error('[envoi-medias] galerie upload failed', {
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
        console.error('[envoi-medias] remove failed', e);
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
        console.error('[envoi-medias] dossier de presse', { error: e?.message, fileName: file?.name, fileSize: file?.size });
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
      console.warn('[envoi-medias] Fichier refusé', { type, name, size: file.size });
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
          console.warn('[envoi-medias] createImageBitmap a échoué, fallback Image()', e2);
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
        console.warn('[envoi-medias] canvas.toBlob timeout', { type, quality });
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
        console.warn('[envoi-medias] canvas.toBlob throw', e);
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
        console.warn(`[envoi-medias] upload retry ${attempt + 1}/${CONFIG.UPLOAD_RETRIES} dans ${CONFIG.UPLOAD_RETRY_DELAY}ms`, e);
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
     
    if (kind === 'profil') this.dispatchEvent(new CustomEvent('medias-etat', { detail: { photoProfil: src || '' } }));

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
        font-family: 'Varien', 'Archivo Black', Impact, sans-serif; font-style: italic; font-weight: 400;
        font-size: 26px; letter-spacing: 0; text-transform: uppercase;
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
      .tile-drop.is-dragover{ border-color: var(--tile-border-hover); }@media (hover:hover) and (pointer:fine){.tile-drop:hover{ border-color: var(--tile-border-hover); }}
      .tile-drop:focus-visible {
        border-color: var(--tile-border-hover);
        background: var(--accent-soft);
      }
      .tile-drop.has-image { border-style: solid; border-color: rgba(255, 255, 255, 0.08); }
      .tile-drop.is-busy { cursor: progress; }
      @media (max-width: 640px) { .tile-drop { aspect-ratio: 16 / 9; } .tile-hint { min-height: 0; } }

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
      .tile-drop:focus-within .tile-overlay{ opacity: 1; }@media (hover:hover) and (pointer:fine){.tile-drop:hover .tile-overlay{ opacity: 1; }}
      .tile-drop.is-busy .tile-overlay { opacity: 0; }

      .btn-icon {
        width: 36px; height: 36px; border-radius: 8px;
        border: none; background: rgba(10, 26, 47, 0.9); color: #fff;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; transition: background-color 0.15s ease, transform 0.15s ease;
      }
      @media (hover:hover) and (pointer:fine){.btn-icon:hover{ background: var(--accent); color: #0a1a2f; transform: translateY(-1px); }}
      @media (hover:hover) and (pointer:fine){.btn-icon.btn-danger:hover{ background: var(--danger); color: #fff; }}
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
      @media (hover:hover) and (pointer:fine){.btn-cancel:hover{ background: var(--danger); }}
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
      .galerie-drop:focus-visible:not(.is-disabled),.galerie-drop.is-dragover:not(.is-disabled){
        border-color: var(--accent);
        background: var(--accent-soft);
      }@media (hover:hover) and (pointer:fine){.galerie-drop:hover:not(.is-disabled){
        border-color: var(--accent);
        background: var(--accent-soft);
      }}
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
      @media (hover:hover) and (pointer:fine){.thumb:hover .thumb-remove{ opacity: 1; }}
      @media (hover:hover) and (pointer:fine){.thumb-remove:hover{ background: var(--danger); }}
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
      @media (hover:hover) and (pointer:fine){.thumb-cancel:hover{ background: var(--danger); }}
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
      @media (hover:hover) and (pointer:fine){a.dossier-nom:hover{ color: var(--accent); text-decoration: underline; }}
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
      @media (hover:hover) and (pointer:fine){.btn-ligne:hover{ border-color: var(--accent); color: var(--accent); }}
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

if (!customElements.get(BALISE_MEDIAS)) {
  customElements.define(BALISE_MEDIAS, SkipperMediaUploader);
}

 

(function () {
  'use strict';
  const BALISE = 'rdr-inscription-fiche-skipper';
  if (customElements.get(BALISE)) return;

  



  const LOGO = 'https://static.wixstatic.com/shapes/7bb303_520140cd1a1e4d5faab4c5ab489ab525.svg';
  const MAX_PALMARES = 10;
  

  const DELAI_REPONSE = 20000;
  const DUREE_MESSAGE = 3000;

  






  const CHAMPS = [
    ['infos', 'l', 'prenom', 'texte', 50],
    ['infos', 'l', 'nom', 'texte', 50],
    ['infos', 'l', 'nationalite', 'texte', 50],
    ['infos', 'c', 'age', 'entier', 0],
    ['infos', 'c', 'participation', 'entier', 0],
    ['infos', 'l', 'portDAttache', 'texte', 100],
    ['infos', 'l', 'contactPresse', 'texte', 100],
    ['infos', 'p', 'porteBonheur', 'texte', 100],
    ['infos', 'p', 'biographie', 'long', 600],
    ['infos', 'p', 'citation', 'long', 220],
    ['bateau', 'l', 'bateau', 'texte', 100],
    ['bateau', 'c', 'nBateau', 'texte', 20],
    ['bateau', 'c', 'dateDeConstruction', 'entier', 0],
    ['bateau', 'l', 'chantier', 'texte', 80],
    ['bateau', 'l', 'architecte', 'texte', 100],
    ['bateau', 'd', 'longueur', 'decimal', 0],
    ['bateau', 'd', 'largeur', 'decimal', 0],
    ['bateau', 'd', 'tirantDeau', 'decimal', 0],
    ['bateau', 'd', 'hauteurDuMt', 'decimal', 0],
    ['bateau', 'd', 'poids', 'entier', 0],
    ['reseaux', 'l', 'facebook', 'url', 0],
    ['reseaux', 'l', 'instagram', 'url', 0],
    ['reseaux', 'l', 'linkedin', 'url', 0],
    ['reseaux', 'l', 'xTwitter', 'url', 0],
    ['reseaux', 'p', 'siteWeb', 'url', 0]
  ].map(([section, taille, cle, saisie, max]) => ({ section, taille, cle, saisie, max }));

  

  const MOTIFS = { url: 'https?://.+', decimal: '[0-9]+([.,][0-9]+)?', entier: '[0-9]+' };
  const CLAVIER = { entier: 'numeric', decimal: 'decimal', url: 'url' };

  



  const TXT = {
    fr: {
      edition: 'Route du rhum - Édition 2026',
      titre: 'Renseignement fiche skipper',
      chargement: 'Chargement en cours...',
      sansJeton: 'Lien invalide. Contactez-nous.',
      invalide: 'Lien invalide ou expiré. Contactez-nous.',
      erreur: 'Une erreur est survenue. Contactez-nous.',
      verrouTitre: 'Fiche verrouillée',
      verrouTexte: 'Votre fiche a été finalisée.\nPour toute modification, contactez-nous.',
      bonjour: 'Bonjour {n} 👋',
      complete: 'Complétez votre fiche ci-dessous.',
      intro: [
        'Les informations que vous remplissez ici alimentent directement votre fiche publique sur le site officiel de la Route du Rhum - Destination Guadeloupe 2026, visible de tous. Merci de compléter chaque champ avec soin.',
        'Vos photos, votre galerie et votre dossier de presse s\'envoient plus bas, dans « Photos & médias ». En cas de doute ou de difficulté, contactez notre équipe.'
      ],
      sections: { infos: 'Informations personnelles', bateau: 'Bateau & technique', reseaux: 'Réseaux sociaux & web' },
      aideReseaux: 'Remplissez uniquement les champs que vous souhaitez partager',
      sommaire: { titre: 'Parties de la fiche', infos: 'Informations', bateau: 'Bateau', reseaux: 'Réseaux', medias: 'Photos & médias', palmares: 'Palmarès' },
      champs: {
        prenom: ['Prénom', ''],
        nom: ['Nom', ''],
        participation: ['Participations à la Route du Rhum', 'Ex. : 2'],
        age: ['Âge', 'Ex. : 34'],
        nationalite: ['Nationalité', 'Ex. : Française'],
        portDAttache: ['Port d\'attache', 'Ex. : Saint-Malo'],
        contactPresse: ['Contact presse', 'Email ou téléphone'],
        porteBonheur: ['Porte-bonheur', 'Votre porte-bonheur embarqué'],
        biographie: ['Biographie', 'Présentez-vous en quelques mots... (600 caractères max)'],
        citation: ['Citation', 'Ex. : Le vent ne se négocie pas, il s\'apprivoise. (220 caractères max)'],
        nBateau: ['Numéro de voile', 'Ex. : FRA77'],
        bateau: ['Nom du bateau', ''],
        longueur: ['Longueur (m)', 'Ex. : 18.28'],
        chantier: ['Chantier', ''],
        largeur: ['Largeur (m)', 'Ex. : 5.80'],
        tirantDeau: ['Tirant d\'eau (m)', 'Ex. : 4.50'],
        hauteurDuMt: ['Hauteur du mât (m)', 'Ex. : 29.50'],
        poids: ['Poids (kg)', 'Ex. : 8500'],
        architecte: ['Architecte', ''],
        dateDeConstruction: ['Date de construction', 'Ex. : 2020'],
        facebook: ['Facebook', 'Ex. : https://facebook.com/...'],
        instagram: ['Instagram', 'Ex. : https://instagram.com/...'],
        siteWeb: ['Site web', 'Ex. : https://www.monsite.com'],
        linkedin: ['LinkedIn', 'Ex. : https://linkedin.com/in/...'],
        xTwitter: ['X / Twitter', 'Ex. : https://x.com...']
      },
      enregistrer: 'Enregistrer mes informations',
      enregistrement: 'Enregistrement...',
      enregistre: '✓ Vos informations ont bien été enregistrées',
      rien: 'Aucune modification à enregistrer',
      nonEnregistre: 'Modifications non enregistrées',
      enregistrerCourt: 'Enregistrer',
      progres: '{n} sur {t} renseignés',
      enregistreCourt: '✓ Enregistré',
      echecCourt: '✗ Réessayez',
      aPart: 'Les photos, les médias et le palmarès s’enregistrent à part, plus bas.',
      tropLong: 'Ce texte dépasse {max} caractères. Vous pouvez le raccourcir, pas l’allonger.',
      urlAide: 'Indiquez l’adresse complète, par exemple https://…',
      lireSuite: 'Lire la suite',
      reduire: 'Réduire',
      palmaresVide: 'Aucun palmarès pour l’instant.',
      palmaresAjoute: '✓ Palmarès ajouté',
      palmaresModifie: '✓ Palmarès modifié',
      palmaresSupprime: '✓ Palmarès supprimé',
      ouvrirFiche: 'Ouvrir ma fiche skipper',
      delai: 'Les modifications que vous faites ici apparaissent sur le site sous quelques secondes à minutes. Vous pouvez les consulter en direct après avoir enregistré.',
      nouvelOnglet: '(nouvel onglet)',
      trop: '✗ Trop d’envois, réessayez dans quelques minutes',
      echec: '✗ Une erreur est survenue, réessayez',
      palmares: 'Mon palmarès',
      compte: '{n} / {max} palmarès ajoutés',
      ajouterPalmares: 'Ajouter un palmarès',
      titreAjout: 'Ajouter un palmarès',
      titreModif: 'Modifier un palmarès',
      course: 'Course',
      choisir: 'Choisissez…',
      autre: 'Autre (préciser)',
      courseAutre: ['Nom de la course', 'Nom de l\'événement'],
      annee: ['Année', 'Ex. : 2024'],
      description: ['Description', 'Décrivez brièvement cette performance (150 caractères max)'],
      classe: 'Classe',
      position: ['Position', 'Ex. : 3'],
      mention: ['Mention', 'Ex. : Victoire majeure, Meilleure rookie, Top 5 général...'],
      ajouter: 'Ajouter',
      enregistrerModif: 'Modifier',
      annuler: 'Annuler',
      modifier: 'Modifier',
      supprimer: 'Supprimer',
      confirmer: 'Confirmer la suppression',
      aRemplir: '✗ À remplir : {l}',
      manquants: { course: 'course', annee: 'année', position: 'position', classe: 'classe' },
      rang: (p) => (p === 1 ? '1er' : p + 'e')
    },
    en: {
      edition: 'Route du Rhum - 2026 Edition',
      titre: 'Skipper profile information',
      chargement: 'Loading...',
      sansJeton: 'Invalid link. Contact us.',
      invalide: 'Invalid or expired link. Contact us.',
      erreur: 'An error occurred. Contact us.',
      verrouTitre: 'Locked entry',
      verrouTexte: 'Your profile has been finalized.\nFor any changes, please contact us.',
      bonjour: 'Hello {n} 👋',
      complete: 'Complete your form below.',
      intro: [
        'The information you enter here feeds directly into your public profile on the official Route du Rhum - Destination Guadeloupe 2026 website, visible to everyone. Please complete each field carefully.',
        'Your photos, gallery and press kit are uploaded further down, under “Photos & media”. If you have any questions or difficulties, please contact our team.'
      ],
      sections: { infos: 'Personal information', bateau: 'Boat & technical', reseaux: 'Social networks & web' },
      aideReseaux: 'Only fill in the fields you wish to share.',
      sommaire: { titre: 'Form sections', infos: 'Information', bateau: 'Boat', reseaux: 'Social', medias: 'Photos & media', palmares: 'Achievements' },
      champs: {
        prenom: ['First name', ''],
        nom: ['Last name', ''],
        participation: ['Participation in the Route du Rhum', 'e.g. 2'],
        age: ['Age', 'e.g. 34'],
        nationalite: ['Nationality', 'e.g. French'],
        portDAttache: ['Home port', 'e.g. Saint-Malo'],
        contactPresse: ['Press contact', 'Email or phone'],
        porteBonheur: ['Lucky charm', 'Your lucky charm on board'],
        biographie: ['Biography', 'Introduce yourself in a few words... (600 characters max)'],
        citation: ['Quote', 'e.g. The wind cannot be negotiated, it must be tamed. (Max 220 characters)'],
        nBateau: ['Sail number', 'e.g. FRA77'],
        bateau: ['Boat name', ''],
        longueur: ['Length (m)', 'e.g. 18.28'],
        chantier: ['Boatyard', ''],
        largeur: ['Width (m)', 'e.g. 5.80'],
        tirantDeau: ['Draft (m)', 'e.g. 4.50'],
        hauteurDuMt: ['Mast height (m)', 'e.g. 29.50'],
        poids: ['Weight (kg)', 'e.g. 8500'],
        architecte: ['Architect', ''],
        dateDeConstruction: ['Date of construction', 'e.g. 2020'],
        facebook: ['Facebook', 'e.g. https://facebook.com/...'],
        instagram: ['Instagram', 'e.g. https://instagram.com/...'],
        siteWeb: ['Website', 'e.g. https://www.mywebsite.com'],
        linkedin: ['LinkedIn', 'e.g. https://linkedin.com/in/...'],
        xTwitter: ['X / Twitter', 'e.g. https://x.com...']
      },
      enregistrer: 'Save my information',
      enregistrement: 'Saving...',
      enregistre: '✓ Your information has been saved',
      rien: 'No changes to save',
      nonEnregistre: 'Unsaved changes',
      enregistrerCourt: 'Save',
      progres: '{n} of {t} filled in',
      enregistreCourt: '✓ Saved',
      echecCourt: '✗ Try again',
      aPart: 'Photos, media and achievements are saved separately, further down.',
      tropLong: 'This text is over {max} characters. You can shorten it, not lengthen it.',
      urlAide: 'Enter the full address, for example https://…',
      lireSuite: 'Read more',
      reduire: 'Show less',
      palmaresVide: 'No achievements yet.',
      palmaresAjoute: '✓ Achievement added',
      palmaresModifie: '✓ Achievement updated',
      palmaresSupprime: '✓ Achievement deleted',
      ouvrirFiche: 'Open my skipper profile',
      delai: 'The changes you make here appear on the website within a few seconds to a few minutes. You can view them live once you have saved.',
      nouvelOnglet: '(new tab)',
      trop: '✗ Too many submissions, please try again in a few minutes',
      echec: '✗ An error occurred, please try again',
      palmares: 'My achievements',
      compte: '{n} / {max} achievements added',
      ajouterPalmares: 'Add an achievement',
      titreAjout: 'Add an achievement',
      titreModif: 'Edit an achievement',
      course: 'Race',
      choisir: 'Choose…',
      autre: 'Other (specify)',
      courseAutre: ['Race name', 'Event name'],
      annee: ['Year', 'e.g. 2024'],
      description: ['Description', 'Briefly describe this performance (150 characters max)'],
      classe: 'Class',
      position: ['Position', 'e.g. 3'],
      mention: ['Mention', 'e.g. Major win, Best rookie, Top 5 overall...'],
      ajouter: 'Add',
      enregistrerModif: 'Update',
      annuler: 'Cancel',
      modifier: 'Edit',
      supprimer: 'Delete',
      confirmer: 'Confirm deletion',
      aRemplir: '✗ Required: {l}',
      manquants: { course: 'race', annee: 'year', position: 'position', classe: 'class' },
      rang: (p) => {
        const d = p % 10, c = p % 100;
        return p + (c >= 11 && c <= 13 ? 'th' : d === 1 ? 'st' : d === 2 ? 'nd' : d === 3 ? 'rd' : 'th');
      }
    }
  };

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' })[c]);
  const enTexte = (v) => (v === undefined || v === null ? '' : String(v));
  const lireJson = (s) => { try { return JSON.parse(s); } catch (e) { return null; } };
  const remplir = (modele, vals) => modele.replace(/\{(\w+)\}/g, (m, k) => (k in vals ? vals[k] : m));

  







  const CSS = `
:host{display:block;position:relative;color:#fff;font-family:Montserrat,montserrat,system-ui,-apple-system,'Segoe UI',sans-serif;font-size:15px;line-height:1.6;--jaune:#FCDD00;--marine:#191D31;--vert:#00676E;--vert2:#419992;--teinte:#E2EFEE;--champ:#F5F9F9;--bord:#C5D8D7;--filet:#E1EBEB;--texte:#191D31;--gris:#545B6B;--erreur:#C8322E;--doux:rgba(255,255,255,.76);--rayon-carte:28px 3px 16px 3px;--rayon-btn:3px 15px 3px 15px;--rayon-petit:3px 10px 3px 10px;--marge:clamp(18px,3.6vw,48px);--toucher:40px}
*,*::before,*::after{box-sizing:border-box}
[hidden]{display:none!important}
.page{--cote:clamp(16px,4vw,48px);width:100%;max-width:calc(1120px + 2 * var(--cote));margin:0 auto;padding:clamp(24px,5vw,72px) var(--cote) clamp(56px,8vw,128px)}
.tete{padding:0 0 clamp(26px,4.6vh,44px)}
.marque{display:flex;flex-wrap:wrap;align-items:center;gap:10px clamp(12px,1.6vw,20px)}
.logo{display:block;flex:0 0 auto;width:clamp(60px,9vh,84px);height:auto;aspect-ratio:121/122}
.edition,.titre,.section-titre,.num{font-family:'Varien','Archivo Black',Impact,sans-serif;font-style:italic;font-weight:400;text-transform:uppercase}
.edition{margin:0;color:var(--jaune);font-size:clamp(17px,1.8vw,24px);line-height:1.15}
.nw{white-space:nowrap}
.titre{margin:clamp(14px,2.6vh,24px) 0 0;color:#fff;font-size:clamp(30px,4.3vw,58px);line-height:1;text-wrap:balance}
.etat{display:flex;align-items:flex-start;gap:14px;margin-top:clamp(18px,3vh,28px);max-width:640px;padding:18px 20px;border:1px solid rgba(255,255,255,.18);border-radius:var(--rayon-carte);background:rgba(255,255,255,.04)}
.etat svg{flex:0 0 auto;width:26px;height:26px;margin-top:1px;stroke:var(--jaune);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.etat-titre{margin:0;font-size:clamp(16px,1.5vw,19px);font-weight:700;line-height:1.4;white-space:pre-line}
.etat-texte{margin:4px 0 0;color:var(--doux);white-space:pre-line}
.etat[data-etat=chargement]{position:absolute;width:1px;height:1px;margin:0;padding:0;border:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.accueil{margin-top:clamp(18px,3vh,28px)}
.accueil-haut{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px 32px}
.identite{display:flex;align-items:center;gap:16px;min-width:0}
.avatar{position:relative;flex:0 0 auto;width:72px;height:88px;border-radius:22px 3px 14px 3px;overflow:hidden;background:var(--vert);border:2px solid rgba(255,255,255,.9);box-shadow:0 10px 24px -12px rgba(0,0,0,.6)}
.avatar img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 15%}
.initiales{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Varien','Archivo Black',Impact,sans-serif;font-style:italic;font-size:26px;color:#fff;text-transform:uppercase}
.avatar.photo .initiales{display:none}
.bonjour{margin:0;font-size:clamp(18px,1.6vw,21px);font-weight:700;line-height:1.35}
.complete{margin:2px 0 0;font-weight:700;color:var(--jaune)}
.voir{display:flex;flex-direction:column;align-items:flex-start;gap:8px;max-width:360px}
.voir-fiche{display:inline-flex;align-items:center;gap:10px;min-height:46px;padding:10px 18px;border:1px solid var(--jaune);border-radius:var(--rayon-btn);color:var(--jaune);font:700 14px/1.2 Montserrat,montserrat,system-ui,sans-serif;text-decoration:none;transition:background-color .15s ease,color .15s ease}
.voir-fiche svg{width:17px;height:17px;flex:0 0 auto;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.voir-fiche:focus-visible{outline:3px solid var(--jaune);outline-offset:3px}
@media (hover:hover) and (pointer:fine){.voir-fiche:hover{background:var(--jaune);color:var(--marine)}}
.delai{margin:0;font-size:13px;line-height:1.5;color:var(--doux)}
.lecteur{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.intro{max-width:74ch;margin-top:6px}
.lire{max-width:74ch}
.intro p{margin:12px 0 0;color:var(--doux)}
.lire{display:none}
.sommaire{display:flex;flex-wrap:wrap;gap:10px;margin-top:clamp(18px,3vh,26px)}
.sommaire a{display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:10px 18px 10px 14px;border:1px solid rgba(255,255,255,.4);border-radius:var(--rayon-petit);background:rgba(255,255,255,.08);color:#fff;font-size:14px;font-weight:700;text-decoration:none;transition:border-color .15s ease,background-color .15s ease,color .15s ease}
.sommaire svg{width:20px;height:20px;flex:0 0 auto;stroke:var(--jaune);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.sommaire a:focus-visible,.lire:focus-visible{outline:3px solid var(--jaune);outline-offset:2px}
@media (hover:hover) and (pointer:fine){.sommaire a:hover{border-color:var(--jaune);background:rgba(252,221,0,.12);color:var(--jaune)}}
.feuille{container:feuille / inline-size;background:#fff;color:var(--texte);border-radius:var(--rayon-carte);overflow:hidden;box-shadow:0 34px 70px -38px rgba(0,0,0,.7)}
.squelette .feuille{padding:clamp(26px,4vw,48px) var(--marge)}
.sq{display:block;height:14px;margin-top:14px;border-radius:var(--rayon-petit);background:linear-gradient(90deg,#EDF3F3 0%,#F7FAFA 50%,#EDF3F3 100%);background-size:200% 100%;animation:sq 1.4s ease-in-out infinite}
.sq.t{width:38%;height:24px;margin-top:0}
.sq.c{height:44px;margin-top:8px}
.sq.l{width:22%;margin-top:22px}
.sq-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 clamp(18px,2.2vw,30px)}
@keyframes sq{from{background-position:100% 0}to{background-position:-100% 0}}
form{margin:0}
.partie{padding:clamp(26px,4vw,48px) var(--marge);scroll-margin-top:16px}
.partie + .partie{border-top:1px solid var(--filet)}
.partie-tete{min-width:0}
.partie-corps{min-width:0;margin-top:18px}
.section-titre{margin:0;color:var(--vert);font-size:clamp(21px,2vw,28px);line-height:1.05}
.aide{margin:8px 0 0;color:var(--gris);font-size:14px}
.grille{display:grid;grid-template-columns:repeat(20,minmax(0,1fr));gap:22px clamp(16px,2vw,24px)}
.grille .champ{grid-column:span 10;margin-top:0}
.grille .champ.c{grid-column:span 5}
.grille .champ.d{grid-column:span 4}
.grille .champ.p{grid-column:1 / -1}
.grille .champ{justify-content:flex-end}
.progres{display:flex;flex-direction:column;align-items:flex-start;gap:7px;margin:14px 0 0;font-size:13px;line-height:1.3;color:var(--gris);font-variant-numeric:tabular-nums}
.jauge{width:100%;max-width:180px;height:4px;border-radius:2px;background:var(--filet);overflow:hidden}
.jauge span{display:block;width:0;height:100%;background:var(--vert2);transition:width .3s ease}
.progres.complet{color:var(--vert);font-weight:700}
.progres.complet .jauge span{background:var(--vert)}
.palmares .compte{margin-top:12px}
@container feuille (min-width:860px){
.partie{display:grid;grid-template-columns:minmax(0,210px) minmax(0,1fr);column-gap:clamp(28px,4cqi,56px)}
.partie-corps{margin-top:6px}
.section-titre{font-size:24px}
}
.champ{display:flex;flex-direction:column;margin-top:20px;min-width:0}
label{margin-bottom:7px;font-size:14px;font-weight:700;line-height:1.3;color:var(--texte)}
input,textarea,select{width:100%;min-width:0;margin:0;font:400 16px/1.45 Montserrat,montserrat,system-ui,sans-serif;color:var(--texte);background-color:var(--champ);border:1px solid var(--bord);border-radius:var(--rayon-petit);padding:11px 14px;outline:none;transition:border-color .15s ease,box-shadow .15s ease,background-color .15s ease}
textarea{min-height:168px;resize:vertical;padding:13px 15px}
textarea.court{min-height:92px}
select{appearance:none;-webkit-appearance:none;padding-right:40px;cursor:pointer;background-image:linear-gradient(45deg,transparent 50%,var(--texte) 50%),linear-gradient(135deg,var(--texte) 50%,transparent 50%);background-position:calc(100% - 20px) 55%,calc(100% - 14px) 55%;background-size:6px 6px,6px 6px;background-repeat:no-repeat}
::placeholder{color:#8B93A0;opacity:1}
@media (hover:hover) and (pointer:fine){input:hover,textarea:hover,select:hover{border-color:var(--vert2)}}
input:focus,textarea:focus,select:focus{border-color:var(--vert);background-color:#fff;box-shadow:0 0 0 3px rgba(0,103,110,.16)}
.touche:invalid,[aria-invalid=true]{border-color:var(--erreur);box-shadow:0 0 0 3px rgba(200,50,46,.12)}
.pied-champ{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-top:5px;min-height:0}
.compteur{margin-left:auto;font-size:12px;color:var(--gris);font-variant-numeric:tabular-nums;white-space:nowrap}
.compteur.trop{color:var(--erreur);font-weight:700}
.indice{display:none;font-size:12.5px;line-height:1.4;color:var(--erreur)}
.indice.vu,.touche:invalid ~ .indice{display:block}
.touche:invalid ~ .indice{margin-top:5px}
.actions{display:flex;flex-wrap:wrap;align-items:center;gap:10px 20px;padding:clamp(20px,3vw,30px) var(--marge);background:var(--teinte)}
.actions-texte{display:flex;flex-direction:column;gap:2px;min-width:0}
.statut{margin:0;min-height:1.4em;font-size:14px;color:var(--gris)}
.statut.sale{color:var(--vert);font-weight:700}
.a-part{margin:0;font-size:13px;color:var(--gris)}
.btn{font:700 15px/1.25 Montserrat,montserrat,system-ui,sans-serif;cursor:pointer;border:0;border-radius:var(--rayon-btn);transition:background-color .15s ease,border-color .15s ease,opacity .15s ease}
.btn:focus-visible{outline:3px solid var(--vert);outline-offset:3px}
.btn[disabled]{cursor:default;opacity:.6}
.principal{min-height:50px;padding:12px 28px;color:var(--marine);background:var(--jaune)}
@media (hover:hover) and (pointer:fine){.principal:not([disabled]):hover{background:#FFE83D}}
.secondaire{min-height:46px;padding:10px 20px;color:var(--marine);background:transparent;border:1px solid var(--bord)}
@media (hover:hover) and (pointer:fine){.secondaire:hover{border-color:var(--marine)}}
.petit{min-height:var(--toucher);padding:8px 14px;font-size:13px;border-radius:var(--rayon-petit);color:var(--marine);background:#fff;border:1px solid var(--bord)}
.petit.danger{color:var(--erreur)}
.petit.danger.confirme{color:#fff;background:var(--erreur);border-color:var(--erreur)}
.medias{padding:0 var(--marge);background:var(--marine);color:#fff;scroll-margin-top:16px}
.medias rdr-envoi-medias{--accent:#FCDD00;--accent-soft:rgba(252,221,0,.12);--radius:16px 3px 16px 3px}
.compte{margin:0;font-size:14px;font-weight:700;color:var(--gris);font-variant-numeric:tabular-nums}
.vide{margin:18px 0 0;padding:16px 18px;border:1px dashed var(--bord);border-radius:var(--rayon-petit);color:var(--gris);font-size:14px}
.liste{list-style:none;margin:20px 0 0;padding:0;border-top:1px solid var(--filet)}
.ligne{display:grid;grid-template-columns:76px minmax(0,1fr) auto;align-items:center;gap:8px 20px;padding:16px 0;border-bottom:1px solid var(--filet)}
.rang{display:flex;align-items:flex-start;color:var(--vert);line-height:1}
.num{font-size:32px}
.suf{margin:2px 0 0 2px;font-size:13px;font-weight:700}
.corps{min-width:0}
.ligne-titre{margin:0;font-size:16px;font-weight:700;overflow-wrap:anywhere}
.ligne-meta{display:flex;flex-wrap:wrap;align-items:center;gap:4px 10px;margin:5px 0 0;font-size:14px;color:var(--gris)}
.classe{padding:2px 8px;border-radius:var(--rayon-petit);background:var(--teinte);color:var(--vert);font-size:12px;font-weight:700}
.mention{font-style:italic;color:var(--texte)}
.ligne-desc{margin:5px 0 0;font-size:13px;color:var(--gris);overflow-wrap:anywhere}
.ligne-actions{display:flex;gap:8px}
.ajouter-palmares{margin-top:22px}
.form-palmares{margin-top:22px;padding:clamp(18px,2.6vw,30px);border-radius:var(--rayon-carte);background:var(--teinte)}
.form-titre{margin:0;font-size:16px;font-weight:700;color:var(--vert)}
.grille-p{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0 clamp(16px,2vw,24px)}
.grille-p .champ{grid-column:span 2}
.grille-p .champ.court{grid-column:span 1}
.grille-p .champ.pleine{grid-column:1 / -1}
.form-palmares input,.form-palmares select{background-color:#fff}
.form-actions{display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;margin-top:24px}
.palmares-statut{margin:12px 0 0;min-height:1.4em;font-size:14px;font-weight:700;color:var(--erreur)}
.palmares-statut.ok{color:var(--vert)}
.barre{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;gap:12px 20px;padding:10px 16px calc(10px + env(safe-area-inset-bottom));color:#fff;background:var(--marine);box-shadow:0 -12px 32px rgba(0,0,0,.32);transform:translateY(110%);visibility:hidden;transition:transform .2s ease,visibility 0s linear .2s}
.barre.vue{transform:none;visibility:visible;transition:transform .2s ease}
.barre p{margin:0;font-size:14px;font-weight:700;line-height:1.3}
.barre .principal{flex:0 0 auto;min-height:44px;padding:10px 22px;white-space:nowrap}
@media (max-width:900px){.sq-cols{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){
:host{--toucher:44px}
.logo{width:52px}
.edition{font-size:15px}
.grille{grid-template-columns:repeat(2,minmax(0,1fr));gap:18px 14px}
.grille .champ,.grille .champ.p{grid-column:1 / -1}
.grille .champ.c,.grille .champ.d{grid-column:span 1}
.sq-cols{grid-template-columns:minmax(0,1fr)}
.feuille{border-radius:20px 3px 12px 3px}
.intro{position:relative;max-height:9.6em;overflow:hidden}
.intro.ouverte{max-height:none}
.intro:not(.ouverte)::after{content:'';position:absolute;left:0;right:0;bottom:0;height:3.2em;background:linear-gradient(rgba(14,17,29,0),#0E111D)}
.voir{max-width:none;width:100%}
.voir-fiche{width:100%;justify-content:center;min-height:48px}
.avatar{width:60px;height:74px;border-radius:18px 3px 12px 3px}
.initiales{font-size:22px}
.lire{display:inline-flex;align-items:center;min-height:44px;margin-top:2px;padding:0;border:0;background:none;color:var(--jaune);font:700 14px/1.2 Montserrat,montserrat,system-ui,sans-serif;text-decoration:underline;text-underline-offset:3px;cursor:pointer}
.ligne{grid-template-columns:52px minmax(0,1fr);row-gap:10px}
.num{font-size:28px}
.ligne-actions{grid-column:2;justify-content:flex-start}
.grille-p{grid-template-columns:repeat(2,minmax(0,1fr));column-gap:14px}
.grille-p .champ{grid-column:1 / -1}
.grille-p .champ.court{grid-column:span 1}
.actions .principal,.form-actions .principal{flex:1 1 auto}
.barre{justify-content:space-between;padding:8px 12px calc(8px + env(safe-area-inset-bottom))}
.barre p{font-size:13px}
.barre .principal{min-height:44px;padding:8px 16px;font-size:14px}
}
@media (max-height:820px) and (min-width:641px){.logo{width:64px}.titre{font-size:clamp(28px,3.6vw,46px)}}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
`;
   
  const ICONES = {
    lien: '<path d="M9 17H7A5 5 0 0 1 7 7"/><path d="M15 7h2a5 5 0 0 1 4 8"/><line x1="8" x2="12" y1="12" y2="12"/><line x1="2" x2="22" y1="2" y2="22"/>',
    verrou: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    alerte: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    ouvrir: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    infos: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    bateau: '<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',
    reseaux: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
    medias: '<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',
    palmares: '<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"/><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"/><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/>'
  };
   
  const vignette = (src) => (/^https:\/\/static\.wixstatic\.com\/media\/[^/]+$/.test(src) ? src + '/v1/fill/w_144,h_176,al_t,q_80,enc_auto/photo.jpg' : src);
  const icone = (nom) => '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICONES[nom] + '</svg>';
  

  const DOMAINE = /^(www\.)?[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}(\/\S*)?$/i;

  class FicheSkipper extends HTMLElement {
    static get observedAttributes() { return ['lang', 'etat', 'jeu', 'reponse']; }

    constructor() {
      super();
      this._n = 0;
      this._attentes = new Map();
      this._vus = new Set();
      this._initial = {};
      this._jeuBrut = null;
      this._jeu = null;
      this._palmares = [];
      this._edition = null;
      this._minuteurs = {};
      this._actionsVues = true;
      this._avantDepart = (e) => { if (this._sale()) { e.preventDefault(); e.returnValue = ''; } };
    }

    get _l() { return this.getAttribute('lang') === 'en' ? 'en' : 'fr'; }
    get _t() { return TXT[this._l]; }

    connectedCallback() {
      if (!this.shadowRoot) {
        this.attachShadow({ mode: 'open' });
        this._dessiner();
      }
      window.addEventListener('beforeunload', this._avantDepart);
      this._appliquerEtat();
      this._lireJeu();
    }

    disconnectedCallback() {
      window.removeEventListener('beforeunload', this._avantDepart);
      Object.values(this._minuteurs).forEach((m) => clearTimeout(m));
      this._attentes.forEach((a) => clearTimeout(a.minuteur));
      if (this._observateur) { this._observateur.disconnect(); this._observateur = null; }
    }

    attributeChangedCallback(nom, avant, apres) {
      if (!this.shadowRoot || avant === apres) return;
      if (nom === 'lang') { this._dessiner(); this._jeu = null; this._jeuBrut = null; this._appliquerEtat(); this._lireJeu(); }
      else if (nom === 'etat') this._appliquerEtat();
      else if (nom === 'jeu') this._lireJeu();
      else if (nom === 'reponse') this._lireReponse(apres);
    }

    _$(s) { return this.shadowRoot.querySelector(s); }
    _$$(s) { return Array.from(this.shadowRoot.querySelectorAll(s)); }

     
    _dessiner() {
      if (this._observateur) { this._observateur.disconnect(); this._observateur = null; }
      const t = this._t;
      const champ = (c) => {
        const [lib, ex] = t.champs[c.cle];
        const id = 'f-' + c.cle;
        const commun = 'id="' + id + '" name="' + c.cle + '" data-cle="' + c.cle + '" data-saisie="' + c.saisie + '"' +
          ' placeholder="' + esc(ex || ' ') + '"' + (c.max ? ' maxlength="' + c.max + '"' : '');
        if (c.saisie === 'long') {
          return '<div class="champ ' + c.taille + '"><label for="' + id + '">' + esc(lib) + '</label><textarea ' + commun + ' aria-describedby="i-' + c.cle + '"' +
            (c.cle === 'citation' ? ' class="court" rows="3"' : ' rows="6"') + '></textarea>' +
            '<div class="pied-champ"><span class="indice" id="i-' + c.cle + '">' + esc(remplir(t.tropLong, { max: c.max })) + '</span><span class="compteur" data-compteur="' + c.cle + '"></span></div></div>';
        }
        const type = c.saisie === 'url' ? 'url' : 'text';
        return '<div class="champ ' + c.taille + '"><label for="' + id + '">' + esc(lib) + '</label><input type="' + type + '" ' + commun +
          (MOTIFS[c.saisie] ? ' pattern="' + MOTIFS[c.saisie] + '"' : '') + (CLAVIER[c.saisie] ? ' inputmode="' + CLAVIER[c.saisie] + '"' : '') +
          (c.saisie === 'url' ? ' aria-describedby="i-' + c.cle + '"' : '') +
          ' autocomplete="off" spellcheck="' + (c.saisie === 'texte' ? 'true' : 'false') + '">' +
          (c.saisie === 'url' ? '<span class="indice" id="i-' + c.cle + '">' + esc(t.urlAide) + '</span>' : '') + '</div>';
      };
       
      const section = (nom, aide, progres) => '<section class="partie" data-section="' + nom + '" id="' + nom + '">' +
        '<div class="partie-tete"><h2 class="section-titre">' + esc(t.sections[nom]) + '</h2>' +
          (aide ? '<p class="aide">' + esc(aide) + '</p>' : '') +
          (progres ? '<p class="progres" data-progres="' + nom + '"><span class="jauge"><span></span></span><span class="progres-texte"></span></p>' : '') + '</div>' +
        '<div class="partie-corps"><div class="grille">' + CHAMPS.filter((c) => c.section === nom).map(champ).join('') + '</div></div></section>';
      const pal = (cle, contenu, lib, classe, compteur) => '<div class="champ' + (classe ? ' ' + classe : '') + '"' + (cle === 'courseAutre' ? ' data-autre hidden' : '') + '><label for="p-' + cle + '">' + esc(lib) + '</label>' + contenu +
        (compteur ? '<div class="pied-champ"><span class="compteur" data-compteur-p="' + cle + '"></span></div>' : '') + '</div>';
      const sommaire = [['infos', t.sommaire.infos], ['bateau', t.sommaire.bateau], ['reseaux', t.sommaire.reseaux], ['medias', t.sommaire.medias], ['palmares', t.sommaire.palmares]]
        .map(([cible, lib]) => '<a href="#' + cible + '" data-cible="' + cible + '">' + icone(cible) + '<span>' + esc(lib) + '</span></a>').join('');
       
      const edition = t.edition.split(' - ').map((m, i, l) => '<span class="nw">' + esc(m) + (i < l.length - 1 ? ' -' : '') + '</span>').join(' ');
      const sq = (n) => { let h = ''; for (let i = 0; i < n; i++) h += '<span class="sq l"></span><span class="sq c"></span>'; return h; };
      this.shadowRoot.innerHTML = '<style>' + CSS + '</style>' +
        '<div class="page">' +
          '<header class="tete">' +
            '<div class="marque"><img class="logo" src="' + LOGO + '" alt="Route du Rhum - Destination Guadeloupe" width="121" height="122"><p class="edition">' + edition + '</p></div>' +
            '<h1 class="titre">' + esc(t.titre) + '</h1>' +
            '<div class="etat" role="status" aria-live="polite"><span class="etat-icone"></span><div><p class="etat-titre"></p><p class="etat-texte" hidden></p></div></div>' +
            '<div class="accueil" hidden><div class="accueil-haut">' +
              '<div class="identite"><span class="avatar"><img alt="" hidden><span class="initiales" aria-hidden="true"></span></span>' +
                '<div><p class="bonjour"></p><p class="complete">' + esc(t.complete) + '</p></div></div>' +
              '<div class="voir"><a class="voir-fiche" target="_blank" rel="noopener" hidden>' + icone('ouvrir') + '<span>' + esc(t.ouvrirFiche) + '</span><span class="lecteur">' + esc(t.nouvelOnglet) + '</span></a>' +
                '<p class="delai">' + esc(t.delai) + '</p></div></div>' +
              '<div class="intro" id="intro">' + t.intro.map((p) => '<p>' + esc(p) + '</p>').join('') + '</div>' +
              '<button type="button" class="lire" aria-controls="intro" aria-expanded="false">' + esc(t.lireSuite) + '</button>' +
              '<nav class="sommaire" aria-label="' + esc(t.sommaire.titre) + '">' + sommaire + '</nav></div>' +
          '</header>' +
          '<div class="squelette" aria-hidden="true" hidden><div class="feuille"><span class="sq t"></span><div class="sq-cols"><div>' + sq(3) + '</div><div>' + sq(3) + '</div><div>' + sq(2) + '</div></div></div></div>' +
          '<div class="formulaire" hidden><div class="feuille">' +
            '<form class="fiche" novalidate>' +
              section('infos', '', true) + section('bateau', '', true) + section('reseaux', t.aideReseaux, false) +
              '<div class="actions"><button type="submit" class="btn principal enregistrer">' + esc(t.enregistrer) + '</button>' +
                '<div class="actions-texte"><p class="statut" aria-live="polite"></p><p class="a-part">' + esc(t.aPart) + '</p></div></div>' +
            '</form>' +
            '<div class="medias" id="medias"></div>' +
            '<section class="partie palmares" id="palmares">' +
              '<div class="partie-tete"><h2 class="section-titre">' + esc(t.palmares) + '</h2><p class="compte"></p></div>' +
              '<div class="partie-corps">' +
              '<p class="vide" hidden>' + esc(t.palmaresVide) + '</p>' +
              '<ul class="liste"></ul>' +
              '<button type="button" class="btn principal ajouter-palmares">' + esc(t.ajouterPalmares) + '</button>' +
              '<form class="form-palmares" novalidate hidden>' +
                '<p class="form-titre"></p>' +
                '<div class="grille-p">' +
                  pal('course', '<select id="p-course" name="course"></select>', t.course) +
                  pal('classe', '<select id="p-classe" name="classe"></select>', t.classe) +
                  pal('courseAutre', '<input type="text" id="p-courseAutre" name="courseAutre" maxlength="100" placeholder="' + esc(t.courseAutre[1]) + '" autocomplete="off">', t.courseAutre[0], 'pleine') +
                  pal('annee', '<input type="text" id="p-annee" name="annee" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="' + esc(t.annee[1]) + '" autocomplete="off">', t.annee[0], 'court') +
                  pal('position', '<input type="text" id="p-position" name="position" inputmode="numeric" pattern="[0-9]+" maxlength="3" placeholder="' + esc(t.position[1]) + '" autocomplete="off">', t.position[0], 'court') +
                  pal('mention', '<input type="text" id="p-mention" name="mention" maxlength="30" placeholder="' + esc(t.mention[1]) + '" autocomplete="off">', t.mention[0], '', true) +
                  pal('description', '<input type="text" id="p-description" name="description" maxlength="150" placeholder="' + esc(t.description[1]) + '" autocomplete="off">', t.description[0], 'pleine', true) +
                '</div>' +
                '<div class="form-actions"><button type="submit" class="btn principal enregistrer-palmares"></button>' +
                  '<button type="button" class="btn secondaire annuler-palmares">' + esc(t.annuler) + '</button></div>' +
              '</form>' +
              '<p class="palmares-statut" aria-live="polite"></p>' +
            '</div></section>' +
          '</div></div>' +
          '<div class="barre" aria-hidden="true"><p>' + esc(t.nonEnregistre) + '</p><button type="button" class="btn principal enregistrer-barre" tabindex="-1">' + esc(t.enregistrerCourt) + '</button></div>' +
        '</div>';
      this._brancher();
    }

    _brancher() {
      const fiche = this._$('form.fiche');
      fiche.addEventListener('submit', (e) => { e.preventDefault(); this._enregistrerFiche(); });
      fiche.addEventListener('input', (e) => {
        const el = e.target;
        if (!el || !el.dataset || !el.dataset.cle) return;
        this._nettoyerSaisie(el);
        el.classList.add('touche');
        this._compter(el);
        this._progres();
        this._montrerSale();
      });
      fiche.addEventListener('focusout', (e) => {
        const el = e.target;
        if (!el || !el.dataset || el.dataset.saisie !== 'url' || !el.classList.contains('touche')) return;
        const v = el.value.trim();
        if (v && !/^https?:\/\//i.test(v) && DOMAINE.test(v)) { el.value = 'https://' + v; this._montrerSale(); }
      });
      this._$('.enregistrer-barre').addEventListener('click', () => this._enregistrerFiche());
      this._$('.lire').addEventListener('click', (e) => {
        const intro = this._$('.intro');
        const ouverte = intro.classList.toggle('ouverte');
        e.currentTarget.setAttribute('aria-expanded', ouverte ? 'true' : 'false');
        e.currentTarget.textContent = ouverte ? this._t.reduire : this._t.lireSuite;
      });
      this._$('.sommaire').addEventListener('click', (e) => {
        const a = e.target.closest && e.target.closest('a[data-cible]');
        if (!a) return;
        e.preventDefault();
        const cible = this._$('#' + a.dataset.cible);
        if (cible) { try { cible.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (x) { cible.scrollIntoView(); } }
      });
      const fp = this._$('form.form-palmares');
      fp.addEventListener('submit', (e) => { e.preventDefault(); this._enregistrerPalmares(); });
      fp.addEventListener('input', (e) => { if (e.target) { e.target.removeAttribute('aria-invalid'); this._compterPalmares(); } });
      fp.addEventListener('change', (e) => { if (e.target) e.target.removeAttribute('aria-invalid'); });
      this._$('#p-course').addEventListener('change', () => this._montrerAutre());
      this._$('#p-annee').addEventListener('input', (e) => this._nettoyerSaisie(e.target, 'entier'));
      this._$('#p-position').addEventListener('input', (e) => this._nettoyerSaisie(e.target, 'entier'));
      this._$('.annuler-palmares').addEventListener('click', () => this._fermerPalmares(true));
      this._$('.ajouter-palmares').addEventListener('click', () => this._ouvrirPalmares(null));
      this._$('.liste').addEventListener('click', (e) => {
        const b = e.target.closest && e.target.closest('button[data-action]');
        if (!b) return;
        const ligne = this._palmares.find((p) => String(p._id) === b.dataset.id);
        if (!ligne) return;
        if (b.dataset.action === 'modifier') this._ouvrirPalmares(ligne);
        else this._supprimerPalmares(ligne, b);
      });
       
      if ('IntersectionObserver' in window) {
        this._observateur = new IntersectionObserver((entrees) => {
          entrees.forEach((x) => { this._actionsVues = x.isIntersecting; });
          this._majBarre();
        });
        this._observateur.observe(this._$('.actions'));
      }
    }

    

    _nettoyerSaisie(el, saisie) {
      const s = saisie || el.dataset.saisie;
      let v = el.value;
      if (s === 'entier') v = v.replace(/[^0-9]/g, '');
      else if (s === 'decimal') v = v.replace(/[^0-9.,]/g, '').replace(/^([^.,]*[.,][^.,]*)[.,].*$/, '$1');
      else return;
      if (v !== el.value) el.value = v;
    }

    

    _compter(el) {
      const c = this._$('[data-compteur="' + el.dataset.cle + '"]');
      if (!c) return;
      const max = Number(el.getAttribute('maxlength')) || 0;
      const trop = !!max && el.value.length > max;
      c.textContent = el.value.length + ' / ' + max;
      c.classList.toggle('trop', trop);
      const aide = this._$('#i-' + el.dataset.cle);
      if (aide) aide.classList.toggle('vu', trop);
    }

     
    _progres() {
      this._$$('[data-progres]').forEach((p) => {
        const cs = CHAMPS.filter((c) => c.section === p.dataset.progres);
        const n = cs.filter((c) => { const el = this._$('[data-cle="' + c.cle + '"]'); return el && el.value.trim() !== ''; }).length;
        p.querySelector('.progres-texte').textContent = remplir(this._t.progres, { n, t: cs.length });
        p.querySelector('.jauge span').style.width = Math.round((n / cs.length) * 100) + '%';
        p.classList.toggle('complet', n === cs.length);
      });
    }

    _compterPalmares() {
      ['mention', 'description'].forEach((k) => {
        const el = this._$('#p-' + k);
        const c = this._$('[data-compteur-p="' + k + '"]');
        if (el && c) c.textContent = el.value.length + ' / ' + el.getAttribute('maxlength');
      });
    }

     
    _appliquerEtat() {
      if (!this.shadowRoot) return;
      const t = this._t;
      let etat = this.getAttribute('etat') || 'chargement';
      if (etat === 'ok' && !this._jeu) etat = 'chargement';
      const bloc = this._$('.etat');
      const titre = this._$('.etat-titre'), texte = this._$('.etat-texte');
      bloc.dataset.etat = etat;
      const formulaire = this._$('.formulaire');
      const accueil = this._$('.accueil');
      this._$('.squelette').hidden = etat !== 'chargement';
      if (etat === 'ok') {
        bloc.hidden = true;
        formulaire.hidden = false;
        accueil.hidden = false;
        this._poserMedias();
        this._majBarre();
        return;
      }
      formulaire.hidden = true;
      accueil.hidden = true;
      bloc.hidden = false;
      texte.hidden = etat !== 'verrouillee';
      this._$('.etat-icone').innerHTML = etat === 'verrouillee' ? icone('verrou') : etat === 'erreur' ? icone('alerte') : etat === 'chargement' ? '' : icone('lien');
      if (etat === 'verrouillee') { titre.textContent = t.verrouTitre; texte.textContent = t.verrouTexte; }
      else if (etat === 'sans-jeton') titre.textContent = t.sansJeton;
      else if (etat === 'invalide') titre.textContent = t.invalide;
      else if (etat === 'erreur') titre.textContent = t.erreur;
      else titre.textContent = t.chargement;
      this._majBarre();
    }

    

    _poserMedias() {
      const lieu = this._$('.medias');
      if (!lieu || lieu.firstChild) return;
      const medias = document.createElement(BALISE_MEDIAS);
      medias.addEventListener('medias-etat', (e) => this._photo(e.detail && e.detail.photoProfil));
      lieu.appendChild(medias);
    }

    


    _photo(src) {
      const avatar = this._$('.avatar');
      if (!avatar) return;
      const img = avatar.querySelector('img');
      if (!src) { img.hidden = true; img.removeAttribute('src'); avatar.classList.remove('photo'); return; }
      img.onload = () => { img.hidden = false; avatar.classList.add('photo'); };
      img.onerror = () => { img.hidden = true; avatar.classList.remove('photo'); };
      img.src = vignette(src);
    }

     
    _lien(lien) {
      const a = this._$('.voir-fiche');
      if (!a) return;
      let adresse = typeof lien === 'string' && lien.charAt(0) === '/' && lien.charAt(1) !== '/' ? lien : '';
      if (adresse && this._l === 'en' && adresse.indexOf('/en/') !== 0) adresse = '/en' + adresse;
      a.hidden = !adresse;
      if (adresse) a.setAttribute('href', adresse); else a.removeAttribute('href');
    }

     
    _lireJeu() {
      const brut = this.getAttribute('jeu');
      if (!brut || brut === this._jeuBrut) return;
      const jeu = lireJson(brut);
      if (!jeu || typeof jeu !== 'object' || !jeu.fiche) return;
      if (this._jeu && this._sale()) return;
      this._jeuBrut = brut;
      this._jeu = jeu;
      this._remplir(jeu.fiche);
      this._lien(jeu.lien);
      this._palmares = Array.isArray(jeu.palmares) ? jeu.palmares : [];
      this._listes();
      this._dessinerPalmares();
      this._appliquerEtat();
    }

    _remplir(fiche) {
      const f = fiche || {};
      const nom = [enTexte(f.prenom).trim(), enTexte(f.nom).trim()].filter(Boolean).join(' ');
      this._$('.bonjour').textContent = remplir(this._t.bonjour, { n: nom }).replace(/\s+👋/, ' 👋');
      this._$('.initiales').textContent = [enTexte(f.prenom).trim(), enTexte(f.nom).trim()].filter(Boolean).map((m) => m.charAt(0)).join('').slice(0, 2);
      CHAMPS.forEach((c) => {
        const el = this._$('[data-cle="' + c.cle + '"]');
        el.value = enTexte(f[c.cle]);
        el.classList.remove('touche');
        this._initial[c.cle] = el.value;
        this._compter(el);
      });
      this._progres();
      this._montrerSale();
    }

     
    _changes() {
      const champs = {};
      CHAMPS.forEach((c) => {
        const el = this._$('[data-cle="' + c.cle + '"]');
        if (el && c.cle in this._initial && el.value !== this._initial[c.cle]) champs[c.cle] = el.value;
      });
      return champs;
    }

    _sale() { return !!this._jeu && Object.keys(this._changes()).length > 0; }

    _montrerSale() {
      const st = this._$('.statut');
      if (!st || this._attenteDe('fiche')) return;
      clearTimeout(this._minuteurs.statut);
      this._minuteurs.statut = null;
      const sale = this._sale();
      st.textContent = sale ? this._t.nonEnregistre : '';
      st.classList.toggle('sale', sale);
      this._majBarre();
    }

    

    _majBarre() {
      const barre = this._$('.barre');
      if (!barre) return;
      const ouverte = (this.getAttribute('etat') || '') === 'ok' && !!this._jeu;
      const utile = this._sale() || !!this._attenteDe('fiche') || !!this._minuteurs.fiche;
      const vue = ouverte && utile && !this._actionsVues;
      barre.classList.toggle('vue', vue);
      barre.setAttribute('aria-hidden', vue ? 'false' : 'true');
      this._$('.enregistrer-barre').tabIndex = vue ? 0 : -1;
    }

    

    _bouton(texte, court, desactive) {
      const b = this._$('.enregistrer'), c = this._$('.enregistrer-barre');
      b.textContent = texte; b.disabled = !!desactive;
      c.textContent = court; c.disabled = !!desactive;
    }

    _attenteDe(quoi) {
      for (const a of this._attentes.values()) if (a.quoi === quoi && !a.perdue) return a;
      return null;
    }

     
    _emettre(nom, detail, quoi, extra) {
      const n = ++this._n;
      const minuteur = setTimeout(() => this._sansReponse(n), DELAI_REPONSE);
      this._attentes.set(n, Object.assign({ quoi, minuteur }, extra || {}));
      this.dispatchEvent(new CustomEvent(nom, { detail: Object.assign({ n }, detail), bubbles: true, composed: true }));
      return n;
    }

    _sansReponse(n) {
      const a = this._attentes.get(n);
      if (!a) return;
      a.perdue = true;
      if (a.quoi === 'fiche') this._finFiche(this._t.echec, this._t.echecCourt);
      else this._finPalmares(a, this._t.echec);
    }

    _lireReponse(brut) {
      const r = lireJson(brut);
      if (!r || !Number.isInteger(r.n) || this._vus.has(r.n)) return;
      const a = this._attentes.get(r.n);
      if (!a) return;
      this._vus.add(r.n);
      this._attentes.delete(r.n);
      clearTimeout(a.minuteur);
      if (r.raison === 'verrouillee') { this.setAttribute('etat', 'verrouillee'); return; }
      if (a.quoi === 'fiche') this._reponseFiche(r, a);
      else this._reponsePalmares(r, a);
    }

    _enregistrerFiche() {
      if (this._attenteDe('fiche')) return;
      const champs = this._changes();
      const t = this._t;
      if (!Object.keys(champs).length) { this._finFiche(t.rien, '', true); return; }
      this._bouton(t.enregistrement, t.enregistrement, true);
      const st = this._$('.statut');
      st.textContent = '';
      st.classList.remove('sale');
      this._emettre('fiche-enregistrer', { champs }, 'fiche', { envoyes: champs });
      this._majBarre();
    }

    _reponseFiche(r, a) {
      const t = this._t;
      if (!r.ok) { this._finFiche(r.raison === 'trop' ? t.trop : t.echec, t.echecCourt); return; }
      

      const fiche = r.fiche && typeof r.fiche === 'object' ? r.fiche : null;
      Object.keys(a.envoyes).forEach((k) => {
        const el = this._$('[data-cle="' + k + '"]');
        if (!el) return;
        const encore = el.value === a.envoyes[k];
        if (fiche) {
          const avant = el.value;
          el.value = enTexte(fiche[k]);
          this._initial[k] = el.value;
          if (!encore) el.value = avant;
        } else this._initial[k] = a.envoyes[k];
        if (encore) el.classList.remove('touche');
        this._compter(el);
      });
      if (fiche && this._jeu) this._jeu.fiche = Object.assign({}, this._jeu.fiche, fiche);
      this._progres();
      if (a.perdue) { this._montrerSale(); return; }
      this._finFiche(t.enregistre, t.enregistreCourt);
    }

    


    _finFiche(message, court, sousLeBouton) {
      const t = this._t;
      if (sousLeBouton) {
        const st = this._$('.statut');
        st.textContent = message;
        st.classList.remove('sale');
        clearTimeout(this._minuteurs.statut);
        this._minuteurs.statut = setTimeout(() => this._montrerSale(), DUREE_MESSAGE);
        return;
      }
      clearTimeout(this._minuteurs.fiche);
      this._bouton(message, court, true);
      this._minuteurs.fiche = setTimeout(() => {
        this._minuteurs.fiche = null;
        this._bouton(t.enregistrer, t.enregistrerCourt, false);
        this._montrerSale();
      }, DUREE_MESSAGE);
      this._majBarre();
    }

     
    _listes() {
      const t = this._t;
      const jeu = this._jeu || {};
      const courses = Array.isArray(jeu.courses) ? jeu.courses : [];
      const classes = Array.isArray(jeu.classes) ? jeu.classes : [];
      this._$('#p-course').innerHTML = '<option value="">' + esc(t.choisir) + '</option>' +
        courses.map((c) => '<option value="' + esc(c) + '">' + esc(c) + '</option>').join('') +
        '<option value="autre">' + esc(t.autre) + '</option>';
      this._$('#p-classe').innerHTML = '<option value="">' + esc(t.choisir) + '</option>' +
        classes.map((c) => '<option value="' + esc(c.id) + '">' + esc(c.nom) + '</option>').join('');
    }

    _dessinerPalmares() {
      const t = this._t;
      const liste = this._$('.liste');
      const n = this._palmares.length;
      this._$('.compte').textContent = remplir(t.compte, { n, max: MAX_PALMARES });
      liste.hidden = !n;
      this._$('.vide').hidden = !!n;
      liste.innerHTML = this._palmares.map((p) => {
        const pos = Number(p.position);
        const rang = pos ? t.rang(pos) : '';
        const num = pos ? String(pos) : '';
        const meta = (p.classes && p.classes.nom ? '<span class="classe">' + esc(p.classes.nom) + '</span>' : '') +
          (p.annee ? '<span class="annee">' + esc(p.annee) + '</span>' : '') +
          (p.mention ? '<span class="mention">' + esc(p.mention) + '</span>' : '');
        return '<li class="ligne" data-id="' + esc(p._id) + '">' +
          '<span class="rang" aria-label="' + esc(rang) + '">' + (pos ? '<span class="num">' + esc(num) + '</span><span class="suf">' + esc(rang.slice(num.length)) + '</span>' : '') + '</span>' +
          '<div class="corps"><p class="ligne-titre">' + esc(p.course) + '</p>' +
            (meta ? '<p class="ligne-meta">' + meta + '</p>' : '') +
            (p.description ? '<p class="ligne-desc">' + esc(p.description) + '</p>' : '') + '</div>' +
          '<div class="ligne-actions">' +
            '<button type="button" class="btn petit" data-action="modifier" data-id="' + esc(p._id) + '">' + esc(t.modifier) + '</button>' +
            '<button type="button" class="btn petit danger" data-action="supprimer" data-id="' + esc(p._id) + '">' + esc(t.supprimer) + '</button>' +
          '</div></li>';
      }).join('');
      this._$('.ajouter-palmares').disabled = n >= MAX_PALMARES || !!this._attenteDe('palmares');
    }

    _ouvrirPalmares(ligne) {
      const t = this._t;
      const fp = this._$('.form-palmares');
      this._edition = ligne ? String(ligne._id) : null;
      this._$('.form-titre').textContent = ligne ? t.titreModif : t.titreAjout;
      this._$('.enregistrer-palmares').textContent = ligne ? t.enregistrerModif : t.ajouter;
      this._viderPalmares();
      if (ligne) {
        const course = enTexte(ligne.course);
        const connue = Array.from(this._$('#p-course').options).some((o) => o.value === course && o.value !== '' && o.value !== 'autre');
        this._$('#p-course').value = connue ? course : 'autre';
        this._$('#p-courseAutre').value = connue ? '' : course;
        this._$('#p-annee').value = enTexte(ligne.annee);
        this._$('#p-position').value = enTexte(ligne.position);
        this._$('#p-classe').value = (ligne.classes && ligne.classes._id) || '';
        this._$('#p-mention').value = enTexte(ligne.mention);
        this._$('#p-description').value = enTexte(ligne.description);
      }
      this._montrerAutre();
      this._compterPalmares();
      fp.hidden = false;
      this._$('.ajouter-palmares').hidden = true;
      this._$('.palmares-statut').textContent = '';
      try { this._$('#p-course').focus({ preventScroll: true }); fp.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {   }
    }

    _viderPalmares() {
      ['#p-course', '#p-courseAutre', '#p-annee', '#p-position', '#p-classe', '#p-mention', '#p-description'].forEach((s) => {
        const el = this._$(s);
        el.value = '';
        el.removeAttribute('aria-invalid');
      });
      this._montrerAutre();
      this._compterPalmares();
    }

    _montrerAutre() {
      const autre = this._$('#p-course').value === 'autre';
      this._$('[data-autre]').hidden = !autre;
      if (!autre) this._$('#p-courseAutre').value = '';
    }

    _fermerPalmares(rendreFocus) {
      this._viderPalmares();
      this._edition = null;
      this._$('.form-palmares').hidden = true;
      this._$('.ajouter-palmares').hidden = false;
      if (rendreFocus) { try { this._$('.ajouter-palmares').focus({ preventScroll: true }); } catch (e) {   } }
    }

    _enregistrerPalmares() {
      const t = this._t;
      if (this._attenteDe('palmares')) return;
      const choix = this._$('#p-course').value;
      const course = (choix === 'autre' ? this._$('#p-courseAutre').value : choix).trim();
      const annee = Number(this._$('#p-annee').value);
      const position = Number(this._$('#p-position').value);
      const classes = this._$('#p-classe').value;
      const manque = [];
      if (!course) manque.push(['course', choix === 'autre' ? '#p-courseAutre' : '#p-course']);
      if (!annee) manque.push(['annee', '#p-annee']);
      if (!position) manque.push(['position', '#p-position']);
      if (!classes) manque.push(['classe', '#p-classe']);
      if (manque.length) {
        manque.forEach(([, s]) => this._$(s).setAttribute('aria-invalid', 'true'));
        this._statutPalmares(remplir(t.aRemplir, { l: manque.map(([k]) => t.manquants[k]).join(', ') }));
        try { this._$(manque[0][1]).focus(); } catch (e) {   }
        return;
      }
      const ligne = { course, annee, position, classes, mention: this._$('#p-mention').value.trim(), description: this._$('#p-description').value.trim() };
      if (this._edition) ligne._id = this._edition;
      this._$('.enregistrer-palmares').disabled = true;
      this._statutPalmares('', true);
      this._occuperListe(true);
      this._emettre('palmares-enregistrer', { ligne }, 'palmares', { geste: this._edition ? 'modifier' : 'ajouter' });
    }

    

    _supprimerPalmares(ligne, bouton) {
      const t = this._t;
      if (this._attenteDe('palmares')) return;
      if (!bouton.classList.contains('confirme')) {
        this._$$('.petit.danger.confirme').forEach((b) => { b.classList.remove('confirme'); b.textContent = t.supprimer; });
        bouton.classList.add('confirme');
        bouton.textContent = t.confirmer;
        clearTimeout(this._minuteurs.confirme);
        this._minuteurs.confirme = setTimeout(() => {
          if (bouton.isConnected) { bouton.classList.remove('confirme'); bouton.textContent = t.supprimer; }
        }, 4000);
        return;
      }
      clearTimeout(this._minuteurs.confirme);
      this._statutPalmares('', true);
      this._occuperListe(true);
      this._emettre('palmares-supprimer', { id: String(ligne._id) }, 'palmares', { geste: 'supprimer' });
    }

    _occuperListe(oui) {
      this._$$('.liste button, .ajouter-palmares').forEach((b) => { b.disabled = oui || (b.classList.contains('ajouter-palmares') && this._palmares.length >= MAX_PALMARES); });
    }

    _reponsePalmares(r, a) {
      const t = this._t;
      if (!r.ok) { this._finPalmares(a, r.raison === 'trop' ? t.trop : t.echec); return; }
      if (Array.isArray(r.palmares)) this._palmares = r.palmares;
      if (this._jeu) this._jeu.palmares = this._palmares;
      this._dessinerPalmares();
      this._$('.enregistrer-palmares').disabled = false;
      if (a.perdue) return;
      if (a.geste !== 'supprimer') this._fermerPalmares(true);
      const fait = a.geste === 'ajouter' ? t.palmaresAjoute : a.geste === 'modifier' ? t.palmaresModifie : t.palmaresSupprime;
      this._statutPalmares(fait, true);
      clearTimeout(this._minuteurs.palmares);
      this._minuteurs.palmares = setTimeout(() => { if (this._$('.palmares-statut').textContent === fait) this._statutPalmares('', true); }, DUREE_MESSAGE);
    }

    _finPalmares(a, message) {
      this._$('.enregistrer-palmares').disabled = false;
      this._occuperListe(false);
      this._dessinerPalmares();
      this._statutPalmares(message);
    }

    _statutPalmares(message, ok) {
      const st = this._$('.palmares-statut');
      st.textContent = message || '';
      st.classList.toggle('ok', !!ok);
    }
  }

  customElements.define(BALISE, FicheSkipper);
})();
})();
})();
