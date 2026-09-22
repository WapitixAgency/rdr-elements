/* rdr-elements accueil | source route-du-rhum 8e46037 | home-news.js skippers-showcase.js rdr-espace-promo.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["accueil"]="8e46037";performance.mark("rdr-elements:accueil")}catch(e){}
;(function(){
if (!customElements.get('home-news')) {

   
   
   
  const CAT_STYLE = {
    actu:  { c:'#0B6E6B', bg:'#DCF2EF' },
    photo: { c:'#5747C9', bg:'#E9E6FB' },
    video: { c:'#A14D00', bg:'#FBEAD6' },
    audio: { c:'#0E5B84', bg:'#DCEBF7' }
  };
   
   
   
  const CAT_COLORS = { actu:'#0e9aaa', photo:'#1a6b9a', video:'#c17b2a', audio:'#7b3fa0' };
  const CAT_LABELS = {
    fr:{ actu:'Actualités', photo:'Photos', video:'Vidéos', audio:'Audio' },
    en:{ actu:'News', photo:'Photos', video:'Videos', audio:'Audio' }
  };
  const CAT_ICONS = {
    actu:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    photo:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 3l1.5 2h5L16 3"/></svg>',
    video:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    audio:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
  };
  const CLOCK_ICON = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  const ARROW_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
   
   
   
   
   
  const HUB = { fr:'/medias-actualites', en:'/en/medias-actualites' };
  const ROUTES = {
    fr:{ actu:'/medias-actualites?cat=actualites', photo:'/medias-actualites?cat=image', video:'/medias-actualites?cat=video', audio:'/medias-actualites?cat=audio', interview:'/medias-actualites?cat=interview' },
    en:{ actu:'/en/medias-actualites?cat=news', photo:'/en/medias-actualites?cat=image', video:'/en/medias-actualites?cat=video', audio:'/en/medias-actualites?cat=audio', interview:'/en/medias-actualites?cat=interview' }
  };

  class HomeNews extends HTMLElement {
    constructor() {
      super();
      this._posts = [];
      this._lang = 'fr';
      this._page = 0;
      this._PAGE_SIZE = 3;
      this._heroRendered = false;
      this._dragState = null;
      this._uid = Math.random().toString(36).slice(2);  
      this._ind = null;           
      this._dragAbort = null;     
      this._suppressClickUntil = 0;  
       
       
       
       
       
      this._newWindowH = 48;
      















      this._UNE_COTE = 2;
      this._mq = null;
      this._surSeuil = () => {
        if (!this._posts.length) return;
        this._page = 0;
        this._render();
      };
    }

    connectedCallback() {
      this.style.display='block'; this.style.width='100%';
      if (!this._mq && typeof window.matchMedia === 'function') {
        this._mq = window.matchMedia('(min-width:1200px) and (max-width:1599px), (min-width:1200px) and (max-height:900px)');
        try { this._mq.addEventListener('change', this._surSeuil); } catch (e) { try { this._mq.addListener(this._surSeuil); } catch (e2) {   } }
      }
      this._render();
    }

    _une() { return !!(this._mq && this._mq.matches); }
    

    _reste() { return this._posts.slice(this._une() ? 1 + this._UNE_COTE : 1); }

    static get observedAttributes() { return ['posts','lang','new-window-h']; }
    





    attributeChangedCallback(name,ancienne,val) {
      if (ancienne===val) return;
      if (name==='posts') { try { this._posts=JSON.parse(val||'[]'); } catch { this._posts=[]; } this._page=0; this._heroRendered=false; }
      if (name==='lang') { this._lang=val||'fr'; }
      if (name==='new-window-h') { const h=Number(val); this._newWindowH = h>0 ? h : 48; }
      if (this.isConnected) this._render();
    }

    disconnectedCallback() {
       
       
      if (this._dragAbort) { this._dragAbort.abort(); this._dragAbort = null; }
      if (this._ind) { try { this._ind.remove(); } catch(e) {} this._ind = null; }
      if (this._mq) {
        try { this._mq.removeEventListener('change', this._surSeuil); } catch (e) { try { this._mq.removeListener(this._surSeuil); } catch (e2) {   } }
        this._mq = null;
      }
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

    _wixUrl(v, w, h) {
      if (!v) return '';
      let fileId = '';
      if (typeof v === 'string') {
        if (v.startsWith('http')) {
          const m = v.match(/\/media\/([^/~]+)/);
          fileId = m ? m[1] : null;
          if (!fileId) return v;
        } else {
          const m = v.match(/wix:image:\/\/v1\/([^/#]+)/);
          fileId = m ? m[1] : null;
          if (!fileId) return v;
        }
      } else {
        return this._wixUrl(v.src || v.url || v.uri || '', w, h);
      }
      const ext = fileId.split('.').pop() || 'jpg';
      const name = 'img.' + ext;
      const params = [];
      if (w && h) { params.push(`w_${w}`); params.push(`h_${h}`); }
      else if (w) { params.push(`w_${w}`); }
      else { params.push('w_800'); }
      params.push('al_c');
      params.push('q_70');
      params.push('enc_avif');
      params.push('quality_auto');
      return `https://static.wixstatic.com/media/${fileId}/v1/fill/${params.join(',')}/${name}`;
    }

    _date(d,lang) {
      if (!d) return '';
      const date = new Date(d);
      const isRecent = (Date.now() - date.getTime()) < 24 * 3600 * 1000;
      if (isRecent) {
        return new Intl.DateTimeFormat(lang==='en'?'en-GB':'fr-FR',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(date).replace(',', ' ·');
      }
      return new Intl.DateTimeFormat(lang==='en'?'en-GB':'fr-FR',{day:'2-digit',month:'short',year:'numeric'}).format(date);
    }

    _isNew(d) {
      if (!d) return false;
      const h = Number(this._newWindowH) > 0 ? Number(this._newWindowH) : 48;
      return (Date.now() - new Date(d).getTime()) < h * 3600 * 1000;
    }

    _readTime(post, lang) {
      const mins = post.minutesToRead || post.timeToRead || null;
      if (mins && Number(mins) > 0) return lang==='en' ? `${mins} min read` : `${mins} min`;
      const words = String(post.excerpt||post.plainContent||'').replace(/<[^>]*>/g,'').split(/\s+/).filter(Boolean).length;
      return lang==='en' ? `${Math.max(1,Math.round(words/200))} min read` : `${Math.max(1,Math.round(words/200))} min`;
    }

    _catKey(lbl) {
      const n=(lbl||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
      if (n.includes('photo')) return 'photo';
      if (n.includes('video')||n.includes('vid')) return 'video';
      if (n.includes('audio')) return 'audio';
      return 'actu';
    }

     
     
     
    _badge(key,lang,_outline,catUrl) {
      const st=CAT_STYLE[key]||CAT_STYLE.actu, l=(CAT_LABELS[lang]||CAT_LABELS.fr)[key]||key, icon=CAT_ICONS[key]||CAT_ICONS.actu;
      const r=this._safeUrl(catUrl||(ROUTES[lang]||ROUTES.fr)[key]||'');
      return `<a class="badge" href="${r}" data-href="${r}" style="color:${st.c};background:${st.bg}">${icon}${l.toUpperCase()}</a>`;
    }

    _hub() { return this._safeUrl(HUB[this._lang] || HUB.fr); }

     
     
    _cle(p) { return (p && (p._id || p.postPageUrl || p.publishedDate)) || ''; }

     
     
     
     
    _newBadge(lang, post) {
      const vif = post && this._cleRecente && this._cle(post) === this._cleRecente;
      return `<span class="badge-new${vif ? ' badge-new-vif' : ''}">${lang==='en'?'NEW':'NOUVEAU'}</span>`;
    }

     
     
     
    _cut(t,n) { const s=String(t||'').replace(/\s+/g,' ').trim(); const c=s.length<=n?s:s.slice(0,n).replace(/\s+\S*$/,'')+'\u2026'; return this._esc(c); }
    _go(url) {
      url = this._safeUrl(url);
      if (!url) return;
      try {
        this.dispatchEvent(new CustomEvent('hn-navigate', { bubbles:true, composed:true, detail:{ url } }));
      } catch {
        try { window.location.href=url; } catch {}
      }
    }

    _renderHero(hero,lang,hKey,hImg,hColor,isFirst) {
      const rt=this._readTime(hero,lang), readLabel=lang==='en'?'READ':'LIRE', isNew=this._isNew(hero.publishedDate);
      return `<div class="hero${isFirst?' hero-anim':''}" id="hn-hero" style="--hc:${hColor}">
        ${hImg?`<img class="hero-img" src="${this._safeUrl(hImg)}" alt="${this._cut(hero.title||'',80)}" fetchpriority="high" decoding="async" />`:'<div class="noimg"></div>'}
        <div class="hero-grad"></div>
        <div class="hero-cta">${readLabel} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        <div class="hero-body">
          <div class="hero-accent"></div>
          <div class="hero-top">
            <span class="hero-date">${this._date(hero.publishedDate,lang)}</span>
            ${this._badge(hKey,lang,true,hero._categoryUrl||'')}
            ${isNew?this._newBadge(lang,hero):''}
            <span class="hero-read">${CLOCK_ICON}${rt}</span>
          </div>
          <div class="hero-title"><a class="hn-title-link" href="${this._safeUrl(hero.postPageUrl||'')}">${this._cut(hero.title||'',150)}</a></div>
          <div class="hero-excerpt">${this._cut(hero.excerpt||hero.plainContent||'',280)}</div>
        </div>
      </div>`;
    }

     
    _renderGrid(items,lang) {
      if (this._une()) return `<div class="grid grid-rangee" id="hn-grid">${items.map(p=>this._carteSm(p,lang)).join('')}</div>`;
      return this._renderGridClassique(items,lang);
    }

    _renderGridClassique(items,lang) {
      const cardMain=items[0], cardStack=items.slice(1);
      return `<div class="grid" id="hn-grid">
        ${cardMain?`
        <div class="card-main" data-url="${this._safeUrl(cardMain.postPageUrl||'')}" style="--cc:${CAT_COLORS[this._catKey(cardMain._categoryLabel||'')]||'#0e9aaa'}">
          <div class="card-accent-top"></div>
${this._wixUrl(cardMain.coverImage, 1000, 620)?`<img src="${this._safeUrl(this._wixUrl(cardMain.coverImage, 1000, 620))}" alt="${this._cut(cardMain.title||'',60)}" loading="lazy" decoding="async" />`:'<div class="noimg"></div>'}
          <div class="cg"></div>
          <div class="cb">
            <div class="ct">
              ${this._badge(this._catKey(cardMain._categoryLabel||''),lang,false,cardMain._categoryUrl||'')}
              ${this._isNew(cardMain.publishedDate)?this._newBadge(lang,cardMain):''}
              <span class="cd">${this._date(cardMain.publishedDate,lang)}</span>
              <span class="crd">${CLOCK_ICON}${this._readTime(cardMain,lang)}</span>
            </div>
            <div class="ctit"><a class="hn-title-link" href="${this._safeUrl(cardMain.postPageUrl||'')}">${this._cut(cardMain.title||'',90)}</a></div>
            <div class="cex">${this._cut(cardMain.excerpt||cardMain.plainContent||'',120)}</div>
          </div>
        </div>`:''}
        <div class="card-stack">
          ${cardStack.map(post=>this._carteSm(post,lang)).join('')}
        </div>
      </div>`;
    }

    _carteSm(post,lang) {
      const cKey=this._catKey(post._categoryLabel||''), img=this._safeUrl(this._wixUrl(post.coverImage, 640, 400)), cc=CAT_COLORS[cKey]||'#0e9aaa';
      return `<div class="card-sm" data-url="${this._safeUrl(post.postPageUrl||'')}" style="--cc:${cc}">
    ${img?`<img src="${img}" alt="${this._cut(post.title||'',60)}" loading="lazy" decoding="async" />`:'<div class="noimg"></div>'}
              <div class="cg"></div>
              <div class="cb">
                <div class="ct">
                  ${this._badge(cKey,lang,false,post._categoryUrl||'')}
                  ${this._isNew(post.publishedDate)?this._newBadge(lang,post):''}
                  <span class="cd">${this._date(post.publishedDate,lang)}</span>
                  <span class="crd">${CLOCK_ICON}${this._readTime(post,lang)}</span>
                </div>
                <div class="ctit"><a class="hn-title-link" href="${this._safeUrl(post.postPageUrl||'')}">${this._cut(post.title||'',70)}</a></div>
                <div class="cex">${this._cut(post.excerpt||post.plainContent||'',80)}</div>
              </div>
            </div>`;
    }

    _css(isFirst) {
      return `<style>
        









        home-news{display:block;width:100%;font-family:'Montserrat',sans-serif;}
        home-news,home-news *,home-news *::before,home-news *::after{box-sizing:border-box;margin:0;padding:0;}

        @keyframes hn-in{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}

        





        .hn-wrap{max-width:1200px;margin-inline:auto;}

        .hero{position:relative;width:100%;border-radius:18px;overflow:hidden;cursor:pointer;background:#080f1e;min-height:400px;display:flex;flex-direction:column;justify-content:flex-end;}
         
        .hn-title-link{color:inherit;}
        .hn-title-link,.badge{text-decoration:none;}
        .hn-title-link:focus-visible{outline:2px solid #5DBFC0;outline-offset:3px;border-radius:4px;}
        .badge:focus-visible{outline:2px solid #5DBFC0;outline-offset:2px;}
        .hero-anim{animation:hn-in 0.55s ease both;}
        .hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);}
        .hero:hover .hero-img{transform:scale(1.04);}
        .noimg{position:absolute;inset:0;background:linear-gradient(135deg,#0a1628,#0e3a4a);}
        .hero-grad{position:absolute;inset:0;background:linear-gradient(to top,rgba(4,10,28,0.98) 0%,rgba(4,10,28,0.65) 38%,rgba(4,10,28,0.1) 100%);transition:opacity 0.4s;}
        .hero:hover .hero-grad{opacity:0.88;}
        .hero-cta{position:absolute;bottom:38px;right:40px;display:flex;align-items:center;gap:6px;font-family:'Montserrat',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.9);opacity:0;transform:translateX(-8px);transition:opacity 0.35s,transform 0.35s;pointer-events:none;}
        .hero:hover .hero-cta{opacity:1;transform:translateX(0);}
        .hero-body{position:relative;padding:38px 42px 38px;transition:transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);}
        .hero:hover .hero-body{transform:translateY(-6px);}
        .hero-accent{position:absolute;left:0;top:38px;bottom:38px;width:3px;border-radius:0 2px 2px 0;background:var(--hc,#0e9aaa);}
        .hero-top{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap;}
        .hero-date{font-family:'Montserrat',sans-serif;font-size:12px;color:rgba(255,255,255,0.7);font-weight:500;}
        .hero-read{font-family:'Montserrat',sans-serif;font-size:11px;color:rgba(255,255,255,0.65);display:flex;align-items:center;gap:4px;}
        .hero-read svg{opacity:0.65;}
        .hero-title{font-family:'Varien',sans-serif;font-style:italic;font-size:clamp(26px,2.8vw,46px);color:#fff;line-height:1.05;text-transform:uppercase;margin-bottom:14px;}
        .hero-excerpt{font-family:'Montserrat',sans-serif;font-size:14px;color:rgba(255,255,255,0.75);line-height:1.65;max-width:680px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}

        



        .badge{display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:6px 2px 6px 2px;font-family:'Montserrat',sans-serif;font-size:9.5px;font-weight:800;letter-spacing:0.1em;cursor:pointer;flex-shrink:0;transition:transform 0.15s,box-shadow 0.15s;}
        .badge:hover{transform:translateY(-1px);box-shadow:0 2px 8px rgba(10,26,53,0.2);}
        .badge svg{width:10px;height:10px;flex-shrink:0;}
        


        .badge-new{display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:6px 2px 6px 2px;background:#FCF150;font-family:'Montserrat',sans-serif;font-size:9px;font-weight:800;color:#0A1A35;letter-spacing:0.12em;flex-shrink:0;}
        .badge-new::before{content:'';width:6px;height:6px;border-radius:50%;background:#0A1A35;}
        

        .badge-new-vif::before{animation:pulse 1.5s ease-in-out infinite;}


        .sep{display:flex;align-items:center;gap:10px;margin:18px 0 16px;}
        .sep-dot{width:5px;height:5px;border-radius:50%;background:var(--sc,#0e9aaa);flex-shrink:0;box-shadow:0 0 6px var(--sc,#0e9aaa);}
        .sep-line{flex:1;height:1px;background:linear-gradient(to right,rgba(255,255,255,0.12) 0%,rgba(255,255,255,0.06) 60%,rgba(255,255,255,0.02) 100%);}

        .grid{display:grid;grid-template-columns:1.6fr 1fr;gap:14px;user-select:none;}
        .grid.is-dragging{cursor:grabbing;}

        .card-main{position:relative;border-radius:14px;overflow:hidden;cursor:pointer;background:#080f1e;min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;}
        .card-main img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.6s ease;}
        .card-main:hover img{transform:scale(1.05);}

        .card-stack{display:flex;flex-direction:column;gap:14px;}
        


        .card-sm{position:relative;border-radius:14px;overflow:hidden;cursor:pointer;background:#080f1e;flex:1;min-height:230px;display:flex;flex-direction:column;justify-content:flex-end;}
        .card-sm img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.55s ease;}
        .card-sm:hover img{transform:scale(1.06);}

        .cg{position:absolute;inset:0;background:linear-gradient(to top,rgba(4,10,28,0.97) 0%,rgba(4,10,28,0.5) 50%,rgba(4,10,28,0.05) 100%);}
        .cb{position:relative;padding:16px 18px 18px;transition:transform 0.3s ease;z-index:2;}
        .card-main:hover .cb,.card-sm:hover .cb{transform:translateY(-4px);}
        .ct{display:flex;align-items:center;gap:7px;margin-bottom:6px;flex-wrap:wrap;}
        .cd{font-family:'Montserrat',sans-serif;font-size:11px;color:rgba(255,255,255,0.7);}
        .crd{font-family:'Montserrat',sans-serif;font-size:10px;color:rgba(255,255,255,0.6);display:flex;align-items:center;gap:3px;}
        .crd svg{opacity:0.6;}
        .ctit{font-family:'Varien',sans-serif;font-style:italic;color:#fff;line-height:1.15;text-transform:uppercase;margin-bottom:4px;}
        .card-main .ctit{font-size:clamp(16px,1.5vw,22px);}
        .card-sm .ctit{font-size:clamp(13px,1.1vw,16px);}
        .cex{font-family:'Montserrat',sans-serif;color:rgba(255,255,255,0.7);line-height:1.5;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;}
        .card-main .cex{font-size:13px;-webkit-line-clamp:2;}
        .card-sm .cex{font-size:12px;-webkit-line-clamp:1;}

        .nav{display:flex;align-items:center;gap:10px;margin-top:16px;}
        .nav-dots{display:flex;gap:6px;align-items:center;}
        .dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.2);border:none;padding:0;cursor:pointer;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);position:relative;overflow:hidden;flex-shrink:0;}
        .dot.on{width:32px;border-radius:4px;background:rgba(255,255,255,0.15);}
        .dot.on::after{content:'';position:absolute;inset:0;background:rgba(255,255,255,0.9);border-radius:4px;animation:dot-fill 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both;}
        @keyframes dot-fill{from{transform:scaleX(0);transform-origin:left}to{transform:scaleX(1);transform-origin:left}}
        .dot:hover:not(.on){background:rgba(255,255,255,0.4);}
        .nav-progress{flex:1;height:2px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden;margin:0 4px;}
        .nav-progress-bar{height:100%;background:rgba(255,255,255,0.5);border-radius:2px;transition:width 0.4s cubic-bezier(0.25,0.46,0.45,0.94);}
        .nav-btn{width:42px;height:42px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.04);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;}
        .nav-btn:hover:not(:disabled){background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.4);}
        .nav-btn:disabled{opacity:0.2;cursor:default;}
        .nav-btn svg{width:17px;height:17px;stroke:#fff;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;}

        




        


        .hn-more{display:flex;justify-content:center;margin-top:78px;}
        .hn-morebtn{display:inline-flex;align-items:center;gap:14px;height:45px;padding:0 16px 0 24px;border-radius:10px 0 10px 0;border:2px solid #fff;color:#fff;font-family:'Montserrat',sans-serif;font-size:14px;font-weight:400;background:transparent;text-decoration:none;cursor:pointer;transition:background 0.25s,color 0.25s;}
        .hn-btnic{width:26px;height:26px;border-radius:50%;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform 0.25s;}
        .hn-btnic svg{width:12px;height:12px;}
        .hn-morebtn:hover{background:#fff;color:#0A1A35;}
        .hn-morebtn:hover .hn-btnic{transform:translateX(3px);}
        .hn-morebtn:focus-visible{outline:2px solid #5DBFC0;outline-offset:3px;}

        @media(min-width:1200px){
          


          .hero{aspect-ratio:16 / 9;min-height:420px;}
          .hero-grad{background:linear-gradient(to top,rgba(4,10,28,0.92) 0%,rgba(4,10,28,0.55) 42%,transparent 75%);}
          .hero-title{font-size:clamp(28px,2vw,34px);line-height:1.05;}
          .hero-body{padding:44px 48px;}
          .hero-accent{top:44px;bottom:44px;}
          .hero-cta{bottom:40px;right:44px;}
        }

        




        .hn-cote{display:none;}
        .hn--une .hn-une{display:grid;grid-template-columns:minmax(0,1.75fr) minmax(0,1fr);gap:14px;}
        .hn--une .hn-une.hn-une--seul{grid-template-columns:minmax(0,1fr);}
        .hn--une .hero{aspect-ratio:16 / 9;min-height:0;}
        .hn--une .hn-une--seul .hero{aspect-ratio:21 / 9;}
        .hn--une .hn-cote{display:flex;flex-direction:column;gap:14px;min-height:0;}
        .hn--une .hn-cote .card-sm{flex:1 1 0;min-height:0;}
        .hn--une .hero-body{padding:30px 34px;}
        .hn--une .hero-accent{top:30px;bottom:30px;}
        .hn--une .hero-cta{bottom:30px;right:34px;}
        .hn--une .hero-title{font-size:clamp(22px,1.9vw,30px);margin-bottom:10px;}
        .hn--une .hero-excerpt{font-size:13.5px;line-height:1.55;-webkit-line-clamp:2;}
        .hn--une .grid-rangee{grid-template-columns:repeat(3,minmax(0,1fr));}
        .hn--une .grid-rangee .card-sm{min-height:clamp(200px,28vh,240px);}
        .hn--une .hn-more{margin-top:56px;}

        @media(max-width:1024px) and (min-width:601px){
          .hero-body{padding:28px 30px;}
          .hero-cta{bottom:28px;right:30px;}
          .hero-accent{top:28px;bottom:28px;}
          .hero-title{font-size:clamp(22px,3vw,36px);}
          .grid{grid-template-columns:1fr 1fr;}
          .card-main{min-height:300px;}
          .card-sm{min-height:175px;}
        }

        @media(max-width:600px){
          .hero{min-height:320px;border-radius:14px;}
          .hero-body{padding:20px 20px 22px;}
          .hero-cta{display:none;}
          .hero-accent{top:20px;bottom:22px;}
          .hero-title{font-size:22px;}
          .hero-excerpt{-webkit-line-clamp:2;font-size:13px;}
          .sep{margin:14px 0 12px;}
          .grid{display:flex;flex-direction:row;overflow-x:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;scrollbar-width:none;gap:10px;padding-bottom:8px;}
          .grid::-webkit-scrollbar{display:none;}
          .card-main,.card-stack{scroll-snap-align:start;flex-shrink:0;border-radius:12px;}
          .card-main{width:78vw;min-height:220px;}
          .card-stack{width:78vw;display:flex;flex-direction:column;gap:10px;height:340px;}
          .card-sm{flex:1;height:0;min-height:unset;}
          .nav{justify-content:center;}
          .hn-more{margin-top:64px;}
          


          .hn-morebtn{max-width:100%;}
        }
         
        @media (prefers-reduced-motion: reduce) {
          home-news *, home-news *::before, home-news *::after { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
        }
      </style>`;
    }

    _render() {
      if (!this._posts.length) { this.innerHTML=''; return; }
       
       
       
       
       
      let plusRecent = null, tMax = -Infinity;
      for (const p of this._posts) {
        if (!this._isNew(p.publishedDate)) continue;
        const t = new Date(p.publishedDate).getTime();
        if (t > tMax) { tMax = t; plusRecent = p; }
      }
      this._cleRecente = plusRecent ? this._cle(plusRecent) : null;
      const lang=this._lang, hero=this._posts[0], rest=this._reste(), une=this._une(), cote=une?this._posts.slice(1,1+this._UNE_COTE):[];
      const totalPages=Math.ceil(rest.length/this._PAGE_SIZE);
      const items=rest.slice(this._page*this._PAGE_SIZE,(this._page+1)*this._PAGE_SIZE);
       
       
       
      const hKey=this._catKey(hero._categoryLabel||''), hImg=this._wixUrl(hero.coverImage, 1600, 900), hColor=CAT_COLORS[hKey]||'#0e9aaa';
      const isFirst=!this._heroRendered; this._heroRendered=true;

      this.innerHTML = this._css(isFirst) + `
      <div class="hn-wrap${une?' hn--une':''}">
        <div class="hn-une${cote.length?'':' hn-une--seul'}">
          ${this._renderHero(hero,lang,hKey,hImg,hColor,isFirst)}
          ${cote.length?`<div class="hn-cote">${cote.map(p=>this._carteSm(p,lang)).join('')}</div>`:''}
        </div>
        ${items.length?`<div class="sep" style="--sc:${hColor}"><div class="sep-dot"></div><div class="sep-line"></div></div>
        ${this._renderGrid(items,lang)}`:''}
        ${totalPages>1?`
        <div class="nav">
          <div class="nav-dots">
            ${Array.from({length:totalPages},(_,i)=>`<button class="dot${i===this._page?' on':''}" data-p="${i}" aria-label="Page ${i+1}"></button>`).join('')}
          </div>
          <div class="nav-progress">
            <div class="nav-progress-bar" style="width:${((this._page+1)/totalPages*100).toFixed(1)}%"></div>
          </div>
          <button class="nav-btn" id="hn-prev" aria-label="${lang==='en'?'Previous article':'Article précédent'}" ${this._page===0?'disabled':''}>
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button class="nav-btn" id="hn-next" aria-label="${lang==='en'?'Next article':'Article suivant'}" ${this._page>=totalPages-1?'disabled':''}>
            <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg>
          </button>
        </div>`:''}
        <div class="hn-more"><a class="hn-morebtn" href="${this._hub()}">${lang==='en'?'All the news':'Toutes les actualités'}<span class="hn-btnic">${ARROW_ICON}</span></a></div>
      </div>`;

      this._bindEvents(totalPages);
      this._initDrag();
    }

    _updateGrid() {
      const lang=this._lang, rest=this._reste();
      const totalPages=Math.ceil(rest.length/this._PAGE_SIZE);
      const items=rest.slice(this._page*this._PAGE_SIZE,(this._page+1)*this._PAGE_SIZE);

      const oldGrid=this.querySelector('#hn-grid');
      if (oldGrid) {
        const tmp=document.createElement('div');
        tmp.innerHTML=this._renderGrid(items,lang);
        const newGrid=tmp.querySelector('#hn-grid');
        if (newGrid) {
          newGrid.style.cssText='opacity:0;transform:translateY(10px)';
          oldGrid.replaceWith(newGrid);
          requestAnimationFrame(()=>{
            newGrid.style.transition='opacity 0.35s ease,transform 0.35s ease';
            newGrid.style.opacity='1'; newGrid.style.transform='translateY(0)';
          });
          newGrid.querySelectorAll('.card-main,.card-sm').forEach(c=> this._bindCardContainer(c, c.dataset.url));
          this._bindCardLinks(newGrid);
        }
      }

      this.querySelectorAll('.dot').forEach(d=>d.classList.toggle('on',parseInt(d.dataset.p)===this._page));
      const prev=this.querySelector('#hn-prev'), next=this.querySelector('#hn-next');
      const bar=this.querySelector('.nav-progress-bar');
      if (bar) bar.style.width=`${((this._page+1)/totalPages*100).toFixed(1)}%`;
      if (prev) prev.disabled=this._page===0;
      if (next) next.disabled=this._page>=totalPages-1;

      this.querySelectorAll('.dot').forEach(d=>{
        const nd=d.cloneNode(true); d.replaceWith(nd);
        nd.addEventListener('click',e=>{e.stopPropagation();this._page=parseInt(nd.dataset.p);this._updateGrid();});
      });
      this._initDrag();
    }

     
     
    _bindCardContainer(el, url) {
      el.addEventListener('click', () => {
        if (Date.now() < (this._suppressClickUntil || 0)) return;
        this._go(url);
      });
    }
     
     
    _bindCardLinks(root) {
      root.querySelectorAll('.hn-title-link, .badge, .hn-morebtn').forEach(a => {
        a.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); this._go(a.getAttribute('href') || a.dataset.href); });
      });
    }

    _bindEvents(totalPages) {
      const he=this.querySelector('#hn-hero');
      if (he) this._bindCardContainer(he, this._posts[0].postPageUrl);
      this.querySelectorAll('.card-main,.card-sm').forEach(c=> this._bindCardContainer(c, c.dataset.url));
      this._bindCardLinks(this);
      this.querySelectorAll('.dot').forEach(d=>d.addEventListener('click',e=>{e.stopPropagation();this._page=parseInt(d.dataset.p);this._updateGrid();}));
      const prev=this.querySelector('#hn-prev'), next=this.querySelector('#hn-next');
      if (prev) prev.addEventListener('click',e=>{e.stopPropagation();this._page=Math.max(0,this._page-1);this._updateGrid();});
      if (next) next.addEventListener('click',e=>{e.stopPropagation();this._page=Math.min(totalPages-1,this._page+1);this._updateGrid();});
    }

    _initDrag() {
      const grid = this.querySelector('#hn-grid');
      if (!grid) return;

      const rest = this._reste();
      const totalPages = Math.ceil(rest.length / this._PAGE_SIZE);

       
       
       
      if (this._dragAbort) this._dragAbort.abort();
      this._dragAbort = new AbortController();
      const signal = this._dragAbort.signal;

      let startX = 0, isDragging = false, moved = 0;
      const onDown = e => {
        if (e.button !== 0) return;
        startX = e.clientX; isDragging = true; moved = 0;
        grid.classList.add('is-dragging'); e.preventDefault();
      };
      const onMove = e => { if (!isDragging) return; moved = e.clientX - startX; };
      const onUp = () => {
        if (!isDragging) return;
        isDragging = false; grid.classList.remove('is-dragging');
         
         
        if (Math.abs(moved) > 6) this._suppressClickUntil = Date.now() + 150;
        if (moved < -60 && this._page < totalPages - 1) { this._page++; this._updateGrid(); }
        else if (moved > 60 && this._page > 0) { this._page--; this._updateGrid(); }
      };
      grid.addEventListener('mousedown', onDown, { signal });
      document.addEventListener('mousemove', onMove, { signal });
      document.addEventListener('mouseup', onUp, { signal });

      const THRESHOLD  = 60;
      const RESISTANCE = 0.4;

       
       
       
       
       

      let ind = this._ind;
      if (!ind || !ind.isConnected) {
        ind = document.createElement('div');
        ind.id = 'hn-pull-ind-' + this._uid;
        ind.className = 'hn-ind';
        ind.innerHTML = `
          <div style="position:absolute;inset:0;border-radius:50%;background:rgba(6,14,36,0.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);"></div>
          <div style="position:absolute;inset:0;border-radius:50%;border:2.5px solid rgba(245,190,65,0.7);"></div>
          <div class="hn-ind-prog" style="position:absolute;inset:0;border-radius:50%;background:conic-gradient(rgba(93,191,192,0.9) var(--p,0%),transparent var(--p,0%));"></div>
          <svg style="position:relative;z-index:2;width:13px;height:13px;stroke:rgba(255,255,255,0.92);stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round;" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>`;
        const _gsId = 'hn-ind-gs-v3';
        if (document.getElementById(_gsId)) document.getElementById(_gsId).remove();
        const gs = document.createElement('style');
        gs.id = _gsId;
         
         
         
        gs.textContent = `
          .hn-ind{position:fixed;width:34px;height:34px;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:9999;opacity:0;transition:opacity 0.18s ease;}
          .hn-ind-prog{position:absolute;inset:0;border-radius:50%;background:conic-gradient(rgba(93,191,192,0.9) var(--p,0%),transparent var(--p,0%));}
        `;
        try { document.head.appendChild(gs); } catch(e) {}
        try { document.body.appendChild(ind); } catch(e) {}
        this._ind = ind;
      }

      const positionInd = dir => {
        const rect = grid.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2 - 16;
        ind.style.top = centerY + 'px';
        if (dir === 1) { ind.style.left = (rect.right - 48) + 'px'; }
        else { ind.style.left = (rect.left + 16) + 'px'; }
      };

      const showInd = (dir, ratio) => {
        positionInd(dir);
        const pct = Math.min(100, ratio * 100).toFixed(1);
        ind.style.opacity = String(Math.min(1, ratio * 1.6));
        const prog = ind.querySelector('.hn-ind-prog');
        if (prog) prog.style.background = 'conic-gradient(rgba(245,190,65,0.95) ' + pct + '%, transparent ' + pct + '%)';
        const arrow = ind.querySelector('svg');
        if (arrow) arrow.style.transform = dir === -1 ? 'rotate(180deg)' : 'none';
      };

      const hideInd = () => {
        ind.style.opacity = '0';
        ind.classList.remove('ready', 'is-prev');
      };

      let tStartX = 0, tStartY = 0, tPulling = false, tDir = 0, tDist = 0;

      grid.addEventListener('touchstart', e => {
        tStartX = e.touches[0].clientX;
        tStartY = e.touches[0].clientY;
        tPulling = false; tDir = 0; tDist = 0;
      }, { passive: true });

      grid.addEventListener('touchmove', e => {
        const dx = e.touches[0].clientX - tStartX;
        const dy = e.touches[0].clientY - tStartY;
        if (!tPulling && Math.abs(dy) > Math.abs(dx) * 1.5) return;
         
        if (Math.abs(dx) > 10) this._suppressClickUntil = Date.now() + 150;
         
         
        const sl = grid.scrollLeft, cw = grid.clientWidth, sw = grid.scrollWidth;
        if (!tPulling) {
          const snapEnd   = (sl + cw >= sw - 4) && sl >= sw - cw - 2;
          const snapStart = sl <= 2;
          if (dx < -10 && snapEnd   && this._page < totalPages - 1) { tPulling = true; tDir = 1; }
          else if (dx > 10 && snapStart && this._page > 0)           { tPulling = true; tDir = -1; }
          else return;
        }
        const scrollEdge = tDir === 1 ? sw - cw - sl : sl;
        tDist = Math.max(0, (Math.abs(dx) - scrollEdge)) * RESISTANCE;
        showInd(tDir, tDist / THRESHOLD);
        if (tDist > 0) { try { e.preventDefault(); } catch(err) {} }
      }, { passive: false });

      grid.addEventListener('touchend', () => {
        if (!tPulling) { hideInd(); return; }
        hideInd();
        if (tDist >= THRESHOLD) {
          if (tDir === 1  && this._page < totalPages - 1) { this._page++; this._updateGrid(); }
          if (tDir === -1 && this._page > 0)              { this._page--; this._updateGrid(); }
        }
        tPulling = false; tDir = 0; tDist = 0;
      }, { passive: true });
    }

  }

  customElements.define('home-news', HomeNews);
}
})();
;(function(){
if (!customElements.get('skippers-showcase')) {

const MYSTERE_IMG = 'https://static.wixstatic.com/media/7bb303_cd1d1b1816354038b8c6ab40848c2094~mv2.avif';
const SHOW_FAVORIS = false;

const CLASSES_CONFIG = {
  'Ultim':        { couleur: '#429991', icon: 'https://static.wixstatic.com/shapes/7bb303_0ed87d76a89f4e6ebd6008778014958e.svg', label: 'ULTIM' },
  'Ocean Fifty':  { couleur: '#72b9f1', icon: 'https://static.wixstatic.com/shapes/7bb303_0b5383f285c8470089ae854bc67b13b5.svg', label: 'OCEAN FIFTY' },
  'Class40':      { couleur: '#7e93ef', icon: 'https://static.wixstatic.com/shapes/7bb303_b13535fe4621478fb5fb52e98c751b11.svg', label: 'CLASS40' },
  'IMOCA':        { couleur: '#76bcbe', icon: 'https://static.wixstatic.com/shapes/7bb303_4420799ee09c4437a8c8d7aaf5cfbc4c.svg', label: 'IMOCA' },
  'Vintage Mono': { couleur: '#f9f06e', icon: 'https://static.wixstatic.com/shapes/7bb303_9b4ee8478c6b4453b668b04eb278406c.svg', label: 'VINTAGE MONO' },
  'Vintage Multi':{ couleur: '#f19f39', icon: 'https://static.wixstatic.com/shapes/7bb303_cc12f16ccf964c61b89d11ebfaf17b7f.svg', label: 'VINTAGE MULTI' },
};

const CARD_ROTATIONS = [-0.5, 0.4, -0.3, 0.5, -0.4, 0.3, -0.5, 0.4];

 
 
const SC_DICT = {
  fr: { see_profile: 'Voir le profil', profile_soon: 'Fiche bientôt disponible' },
  en: { see_profile: 'View profile',   profile_soon: 'Profile coming soon'      },
};

function escapeHTML(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

const _rgbCache = new Map();
const _wixUrlCache = new Map();

function hexToRGB(c) {
  if (_rgbCache.has(c)) return _rgbCache.get(c);
  const m = (c || '').match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  const v = m ? `${parseInt(m[1],16)},${parseInt(m[2],16)},${parseInt(m[3],16)}` : '93,191,192';
  _rgbCache.set(c, v); return v;
}

function wixToUrl(url) {
  if (!url) return '';
  if (_wixUrlCache.has(url)) return _wixUrlCache.get(url);
  let r = url;
  if (!url.startsWith('http')) {
    const m = url.match(/wix:image:\/\/v1\/([^/#]+)/);
    if (m) r = 'https://static.wixstatic.com/media/' + m[1];
    else { const s = url.match(/wix:vector:\/\/v1\/([^/#]+)/); if (s) r = 'https://static.wixstatic.com/shapes/' + s[1]; }
  }
  _wixUrlCache.set(url, r); return r;
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

class SkippersShowcase extends HTMLElement {
  constructor() {
    super();
    this._skippers = [];
    this._limit = 4;
    this._columnsDesktop = 4;
    this._columnsMobile = 2;
    this._forceSingleRow = false;
    this._observer = null;
  }

  static get observedAttributes() {
    return ['skippers', 'limit', 'columns', 'columns-desktop', 'columns-mobile', 'force-single-row', 'lang'];
  }

   
  _t(key) {
    const lang = this.getAttribute('lang') === 'en' ? 'en' : 'fr';
    return (SC_DICT[lang] || SC_DICT.fr)[key];
  }

  connectedCallback() {
    this._parse();
    this._readAttributes();
    this._render();
  }

  disconnectedCallback() {
    if (this._observer) { this._observer.disconnect(); this._observer = null; }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === 'skippers') this._parse();
    this._readAttributes();
    if (this.isConnected) this._render();
  }

  _parse() {
    try { const r = JSON.parse(this.getAttribute('skippers') || '[]'); this._skippers = Array.isArray(r) ? r : []; }
    catch(e) { this._skippers = []; }
  }

  _readAttributes() {
    const legacyColumns = parseInt(this.getAttribute('columns') || '0', 10);
    this._limit = parseInt(this.getAttribute('limit') || '4', 10);
    this._columnsDesktop = parseInt(this.getAttribute('columns-desktop') || (legacyColumns > 0 ? String(legacyColumns) : '4'), 10);
    this._columnsMobile = parseInt(this.getAttribute('columns-mobile') || (legacyColumns > 0 ? String(legacyColumns) : '2'), 10);
    this._forceSingleRow = this.getAttribute('force-single-row') === 'true';
  }

  _render() {
    if (this._observer) { this._observer.disconnect(); this._observer = null; }

     
    if (!this._uid) this._uid = 'sc-' + Math.random().toString(36).slice(2,8);
    const uid = this._uid;

    const items = this._skippers.slice(0, this._limit);
    const desktopCols = Math.max(1, this._columnsDesktop || 4);
    const mobileCols = Math.max(1, this._columnsMobile || 2);
    const gridClass = this._forceSingleRow ? `${uid}-grid ${uid}-grid--single-row` : `${uid}-grid`;

    this.innerHTML = `<style>
       
      skippers-showcase, skippers-showcase *, skippers-showcase *::before, skippers-showcase *::after { box-sizing:border-box; margin:0; padding:0; }

      .${uid}-grid { display:grid; grid-template-columns:repeat(${desktopCols},minmax(0,1fr)); gap:14px; width:100%; }
      @media (max-width:860px) { .${uid}-grid { grid-template-columns:repeat(${mobileCols},minmax(0,1fr)); gap:10px; } }
      .${uid}-grid--single-row { grid-template-columns:repeat(${desktopCols},minmax(0,1fr)) !important; }
      @media (max-width:860px) { .${uid}-grid--single-row { grid-template-columns:repeat(${desktopCols},minmax(0,1fr)) !important; } }

      .sc-wrap { position:relative; padding-top:18px; cursor:default; isolation:isolate; perspective:1000px; min-width:0; }
      .sc-wrap--clickable { cursor:pointer; }
      .sc-wrap:focus-visible { outline:2px solid #5DBFC0; outline-offset:2px; border-radius:14px; }

      .sc-flipper { position:relative; width:100%; aspect-ratio:4/5; transform-style:preserve-3d; transform:rotateY(180deg); border-radius:28px 3px 16px 3px; transition:transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
      .sc-flipper.revealed { transform:rotateY(0deg) rotate(var(--rot,0deg)); }

      .sc-wrap--clickable:hover .sc-flipper.revealed,
      .sc-wrap--revealed:hover .sc-flipper.revealed { transform:rotateY(0deg) rotate(0deg) translateY(-6px) scale(1.02); transition:transform 0.35s cubic-bezier(0.34,1.2,0.64,1); }
      .sc-wrap--clickable:hover .sc-flipper.revealed { filter:brightness(1.08); }
      .sc-wrap--revealed:hover .sc-flipper.revealed { filter:brightness(1.06); }
      @media (hover:none) {
        .sc-wrap--clickable:hover .sc-flipper.revealed,
        .sc-wrap--revealed:hover .sc-flipper.revealed { transform:rotateY(0deg) rotate(var(--rot,0deg)); filter:none; }
      }

      .sc-face { position:absolute; inset:0; border-radius:28px 3px 16px 3px; backface-visibility:hidden; -webkit-backface-visibility:hidden; overflow:hidden; }

      .sc-front { background:#0f2238; border:1.5px solid transparent; transition:box-shadow 0.3s, border-color 0.3s; contain:layout paint; }
      .sc-wrap--clickable:hover .sc-flipper.revealed .sc-front,
      .sc-wrap--revealed:hover .sc-flipper.revealed .sc-front { border-color:var(--cc); box-shadow:0 0 0 1px var(--cc), 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(var(--cc-rgb),0.12); }
      .sc-front::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:var(--cc); opacity:0.4; transition:opacity 0.3s, height 0.3s; }
      .sc-front.mystery::after { display:none; }
      .sc-wrap--clickable:hover .sc-flipper.revealed .sc-front::after,
      .sc-wrap--revealed:hover .sc-flipper.revealed .sc-front::after { opacity:1; height:4px; box-shadow:0 0 8px var(--cc); }

      .sc-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:top center; transition:transform 0.4s cubic-bezier(0.34,1.1,0.64,1); }
      .sc-img.mystery-img { object-position:center center; }
      .sc-wrap--clickable:hover .sc-flipper.revealed .sc-img,
      .sc-wrap--revealed:hover .sc-flipper.revealed .sc-img { transform:scale(1.07); }

      @keyframes mystery-pulse { 0%,100%{opacity:0.35;} 50%{opacity:0.6;} }
      .sc-front.mystery { filter:saturate(0.72) brightness(0.85); }
      .sc-front.mystery .sc-img { object-position:center center; transform:scale(1.08); }
      .sc-front.mystery::before { content:''; position:absolute; inset:0; z-index:1; background:linear-gradient(135deg, rgba(var(--cc-rgb),0.08) 0%, transparent 60%); animation:mystery-pulse 4s ease-in-out infinite; }

      .sc-overlay { position:absolute; bottom:0; left:0; right:0; z-index:3; padding:44px 14px 18px; background:linear-gradient(to top, rgba(6,14,26,1) 0%, rgba(6,14,26,0.92) 40%, rgba(6,14,26,0.55) 70%, transparent 100%); }
      .sc-flag-prenom { display:flex; align-items:center; gap:7px; margin-bottom:3px; }
      .sc-flag { width:18px; height:18px; border-radius:50%; object-fit:cover; flex-shrink:0; }
      .sc-prenom { font-family:'Montserrat',sans-serif; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:rgba(255,255,255,0.7); white-space:nowrap; overflow:hidden; }
      .sc-nom { font-family:'Varien',sans-serif; font-style:italic; font-size:clamp(25px,2.4vw,36px); color:#fff; text-transform:uppercase; line-height:0.9; margin-bottom:5px; white-space:nowrap; overflow:hidden; text-overflow:clip; letter-spacing:-0.04em; }
      .sc-nom[data-len="9"],.sc-nom[data-len="10"] { font-size:clamp(23px,2.1vw,32px); }
      .sc-nom[data-len="11"],.sc-nom[data-len="12"] { font-size:clamp(21px,2.1vw,30px); }
      .sc-nom[data-len="13"],.sc-nom[data-len="14"] { font-size:clamp(19px,1.8vw,26px); }
      .sc-nom[data-len="15"],.sc-nom[data-len="16"] { font-size:clamp(16px,1.5vw,22px); }
      .sc-nom[data-len="17"],.sc-nom[data-len="18"],.sc-nom[data-len="19"],.sc-nom[data-len="20"] { font-size:clamp(16px,1.1vw,15px); white-space:normal; word-break:break-word; line-height:1.1; }
      .sc-nom[data-len="21"],.sc-nom[data-len="22"],.sc-nom[data-len="23"],.sc-nom[data-len="24"],.sc-nom[data-len="25"],.sc-nom[data-len="26"],.sc-nom[data-len="27"],.sc-nom[data-len="28"],.sc-nom[data-len="29"],.sc-nom[data-len="30"] { font-size:clamp(15px,1vw,13px); white-space:normal; word-break:break-word; line-height:1.1; }
      .sc-bateau { font-family:'Montserrat',sans-serif; font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; color:var(--cc); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
      .sc-cta { display:inline-flex; align-items:center; gap:5px; margin-top:6px; font-family:'Montserrat',sans-serif; font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; color:var(--cc); opacity:0; transform:translateY(4px); transition:opacity 0.25s, transform 0.25s; }
      .sc-cta svg { width:10px; height:10px; stroke:currentColor; fill:none; stroke-width:2.5; stroke-linecap:round; stroke-linejoin:round; }
      .sc-wrap--clickable:hover .sc-flipper.revealed .sc-cta { opacity:1; transform:translateY(0); }

      .sc-soon { position:absolute; inset:-2px; z-index:5; background:rgba(6,14,26,0.82); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; padding:16px; opacity:0; pointer-events:none; transition:opacity 0.3s ease; border-radius:28px 3px 16px 3px; }
      .sc-soon.show { opacity:1; }
      .sc-soon-icon { font-size:22px; }
      .sc-soon-txt { font-family:'Montserrat',sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:rgba(255,255,255,0.8); text-align:center; line-height:1.4; }

      .sc-back { transform:rotateY(180deg); background:linear-gradient(135deg, rgba(var(--cc-rgb),0.15) 0%, #0a0f1e 100%); border:1px solid rgba(var(--cc-rgb),0.2); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding:20px; }
      .sc-back-prenom { font-family:'Montserrat',sans-serif; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:rgba(255,255,255,0.45); text-align:center; }
      .sc-back-nom { font-family:'Varien',sans-serif; font-style:italic; font-size:clamp(18px,2.2vw,30px); color:rgba(255,255,255,0.7); text-transform:uppercase; line-height:0.9; text-align:center; letter-spacing:-0.02em; }

      .sc-class { position:absolute; top:-30px; right:-8px; z-index:20; pointer-events:none; backface-visibility:visible; -webkit-backface-visibility:visible; }
      .sc-class img { height:clamp(80px,8vw,115px); width:auto; display:block; }

      .sc-fav-btn { display:${SHOW_FAVORIS ? 'flex' : 'none'} !important; }

       
      @media (prefers-reduced-motion: reduce) {
        skippers-showcase *, skippers-showcase *::before, skippers-showcase *::after { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; }
      }
    </style>
    <div class="${gridClass}" id="sc-grid">
      ${items.map((s, i) => this._renderCard(s, i)).join('')}
    </div>`;

    const grid = this.querySelector('#sc-grid');
    if (!grid) return;
    grid.addEventListener('click', (e) => {
      const linkEl = e.target.closest('[data-link]');
      if (linkEl) { this.dispatchEvent(new CustomEvent('sc-navigate', { detail:{ url: linkEl.dataset.link }, bubbles:true, composed:true })); return; }
      const soonEl = e.target.closest('[data-soon]');
      if (soonEl) { const ov = soonEl.querySelector('.sc-soon'); if (ov) { ov.classList.add('show'); setTimeout(() => ov.classList.remove('show'), 2200); } }
    });
     
     
    grid.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
      const linkEl = e.target.closest('[data-link]');
      const soonEl = e.target.closest('[data-soon]');
      if (!linkEl && !soonEl) return;
      e.preventDefault();
      if (linkEl) { this.dispatchEvent(new CustomEvent('sc-navigate', { detail:{ url: linkEl.dataset.link }, bubbles:true, composed:true })); return; }
      const ov = soonEl.querySelector('.sc-soon'); if (ov) { ov.classList.add('show'); setTimeout(() => ov.classList.remove('show'), 2200); }
    });

    this._initVisibilityObserver();
  }

  _renderCard(s, i) {
    const estMystere = !s.skipperDevoile;
    const ficheActive = s.ficheActive === true;
    const link = (!estMystere && ficheActive) ? isSafeUrl(s['link-skippers-prenomNom'] || '') : '';
    const isSoon = !estMystere && !ficheActive;
    const photo = estMystere ? MYSTERE_IMG : isSafeUrl(wixToUrl(s.photoVignette || ''));
    const classeNom = s.classes?.nom || '';
    const cfg = CLASSES_CONFIG[classeNom] || {};
    const cc = isSafeColor(s.classes?.couleur, cfg.couleur || '#5dbfc0');
    const ccRGB = hexToRGB(cc);
    const drapeau = isSafeUrl(wixToUrl(s.drapeau || ''));
    const rot = CARD_ROTATIONS[i % CARD_ROTATIONS.length];
    const wrapClass = link ? 'sc-wrap--clickable' : (isSoon ? 'sc-wrap--revealed' : '');
     
    const scLabel = `${escapeHTML(s.prenom || '')} ${escapeHTML(s.nom || '')}`.trim();
    const scA11y = (link || isSoon) ? ` role="button" tabindex="0" aria-label="${scLabel}${isSoon ? ' — ' + this._t('profile_soon') : ''}"` : '';

    return `<div class="sc-wrap${wrapClass ? ' '+wrapClass : ''}" ${link ? `data-link="${link}"` : ''} ${isSoon ? 'data-soon="1"' : ''}${scA11y} style="--rot:${rot}deg;--cc:${cc};--cc-rgb:${ccRGB}">
      <div class="sc-flipper" style="--rot:${rot}deg">
        <div class="sc-face sc-front${estMystere ? ' mystery' : ''}" style="--cc:${cc};--cc-rgb:${ccRGB}">
          <img class="sc-img${estMystere ? ' mystery-img' : ''}" src="${photo}" alt="" loading="lazy" />
          ${!estMystere ? `<div class="sc-overlay">
            <div class="sc-flag-prenom">
              ${drapeau ? `<img class="sc-flag" src="${drapeau}" alt="" />` : ''}
              <div class="sc-prenom">${escapeHTML(s.prenom)}</div>
            </div>
            <div class="sc-nom" data-len="${(s.nom||'').length}">${escapeHTML(s.nom)}</div>
            ${s.bateau ? `<div class="sc-bateau">${escapeHTML(s.bateau)}</div>` : ''}
            ${link ? `<div class="sc-cta">${this._t('see_profile')} <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg></div>` : ''}
          </div>` : ''}
          ${isSoon ? `<div class="sc-soon"><div class="sc-soon-icon">⚓</div><div class="sc-soon-txt">${this._t('profile_soon')}</div></div>` : ''}
        </div>
        <div class="sc-face sc-back" style="--cc-rgb:${ccRGB}">
          <div class="sc-back-prenom">${escapeHTML(s.prenom)}</div>
          <div class="sc-back-nom">${escapeHTML(s.nom)}</div>
        </div>
        ${cfg.icon ? `<div class="sc-class"><img src="${isSafeUrl(cfg.icon)}" alt="${escapeHTML(classeNom)}" /></div>` : ''}
      </div>
    </div>`;
  }

  _initVisibilityObserver() {
    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        this.querySelectorAll('.sc-flipper').forEach((flipper, i) => {
          setTimeout(() => flipper.classList.add('revealed'), i * 150);
        });
        if (this._observer) { this._observer.disconnect(); this._observer = null; }
      });
    }, { threshold: 0.15 });
    this._observer.observe(this);
  }
}

customElements.define('skippers-showcase', SkippersShowcase);
}
})();
;(function(){
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

   
  



  function imagePromo(v) {
    if (!v || typeof v !== 'object') return null;
    const s = String(v.src || '').trim();
    const m = s.match(/^wix:image:\/\/v1\/([^/#?]+)/) || s.match(/^https:\/\/static\.wixstatic\.com\/media\/([^/#?]+)/);
    if (!m) return null;
    const l = Math.max(0, Math.round(Number(v.l) || 0)), h = Math.max(0, Math.round(Number(v.h) || 0));
    return { id: m[1], l: l && h ? l : 0, h: l && h ? h : 0 };
  }
  function urlPromo(img, largeur) {
    const w = img.l ? Math.min(largeur, img.l) : largeur;
    const h = img.l ? Math.round(w * img.h / img.l) : largeur;
    return 'https://static.wixstatic.com/media/' + img.id + '/v1/' + (img.l ? 'fill' : 'fit') + '/w_' + w + ',h_' + h + ',q_85,enc_auto/' + img.id;
  }
  function jeuPromo(img, largeurs) {
    const vues = new Set();
    return largeurs.map(l => img.l ? Math.min(l, img.l) : l).filter(l => !vues.has(l) && vues.add(l)).map(l => urlPromo(img, l) + ' ' + l + 'w').join(', ');
  }
  function formatPromo(img, defaut) { return img.l ? (img.l / img.h).toFixed(4) : String(defaut); }
   
  function lienPromo(u) {
    const s = String(u || '').trim();
    return /^https:\/\/[^\s"'<>]+$/i.test(s) || /^\/(?!\/)[^\s"'<>]*$/.test(s) ? s : '';
  }
  function lirePromo(brut) {
    if (!brut) return null;
    let p = null;
    try { p = JSON.parse(brut); } catch (e) { return null; }
    if (!p || typeof p !== 'object') return null;
    const ordinateur = imagePromo(p.ordinateur) || imagePromo(p.mobile);
    if (!ordinateur) return null;
    return { ordinateur, mobile: imagePromo(p.mobile) || ordinateur, lien: lienPromo(p.lien), nouvelOnglet: p.nouvelOnglet === true, alt: String(p.alt || '').replace(/\s+/g, ' ').trim().slice(0, 200) };
  }
   

  const FLECHE = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CALENDRIER = '<svg class="rep-cal" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><rect x="6" y="12" width="52" height="46" rx="8" fill="#fff"/><rect x="10" y="16" width="44" height="38" rx="5" fill="#EB7424"/><rect x="10" y="16" width="44" height="10" fill="#F7EC4B"/><g fill="#fff" opacity=".9"><rect x="15" y="31" width="8" height="7" rx="1.5"/><rect x="28" y="31" width="8" height="7" rx="1.5"/><rect x="41" y="31" width="8" height="7" rx="1.5"/><rect x="15" y="42" width="8" height="7" rx="1.5"/><rect x="28" y="42" width="8" height="7" rx="1.5"/></g><rect x="40" y="41" width="10" height="9" rx="2" fill="#13204A"/><rect x="18" y="6" width="6" height="14" rx="3" fill="#fff"/><rect x="40" y="6" width="6" height="14" rx="3" fill="#fff"/></svg>';

  

  const CSS =
    'rdr-espace-promo{display:block;width:100%;container:rep / inline-size;background:transparent;}' +
    'rdr-espace-promo[hidden],rdr-espace-promo[masque="oui"]{display:none;}' +
     
    


    '@media (max-width:1599px),(max-height:900px){rdr-espace-promo:not([variante="bandeau"]){max-width:1200px;margin-inline:auto;}}' +
     
     
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

    


     
     
    '.rep-root .rep-jeu{position:absolute;z-index:3;display:grid;grid-template-columns:auto 1fr;justify-items:start;align-items:center;gap:4px 12px;padding:14px 18px 14px 14px;border:4px solid #fff;border-radius:22px 6px 22px 6px;background:#EB7424;box-shadow:0 18px 30px -14px rgba(80,24,0,.8);transform:rotate(-6deg);}' +
    '.rep-root .rep-jeu-chiffre{grid-row:span 2;font:italic 400 76px/.8 Varien,Impact,sans-serif;background:linear-gradient(180deg,#fff 40%,#F7EC4B);-webkit-background-clip:text;background-clip:text;color:transparent;}' +
    '.rep-root .rep-jeu-mots{font:italic 400 34px/.86 Varien,Impact,sans-serif;text-transform:uppercase;}' +
    '.rep-root .rep-jeu-mots span{display:block;}' +
    '.rep-root .rep-jeu-mots span+span{color:#F7EC4B;}' +
    '.rep-root .rep-jeu-note{grid-column:1 / -1;max-width:300px;margin:6px 0 0;padding-right:30px;font:800 11px/1.25 Montserrat,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;}' +
    '.rep-root .rep-cal{position:absolute;right:-20px;bottom:-22px;width:54px;height:54px;transform:rotate(10deg);filter:drop-shadow(0 6px 10px rgba(80,24,0,.5));}' +

     
    '.rep-root.rep--affiche{padding:32px 22px 0;}' +
    '.rep--affiche .rep-titre{font-size:min(clamp(40px,15cqi,64px),calc((100cqi - 44px) / var(--rep-mot,6)));}' +
    '.rep--affiche .rep-corps{font-size:14.5px;}' +
    '.rep--affiche .rep-actions{margin-top:22px;}' +
    '.rep--affiche a.rep-cta{max-width:100%;padding:0 18px;font-size:min(18px,5cqi);min-height:50px;}' +
    '.rep--affiche .rep-scene{position:relative;height:clamp(240px,72cqi,340px);margin:30px -22px 0 0;}' +
    '.rep--affiche .rep-visuel{inset:0 0 0 0;width:100%;height:100%;object-fit:cover;object-position:0 0;border-radius:0;' +
       
      '-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 16%),linear-gradient(180deg,transparent 0,#000 14%);mask-image:linear-gradient(90deg,transparent 0,#000 16%),linear-gradient(180deg,transparent 0,#000 14%);-webkit-mask-composite:source-in;mask-composite:intersect;}' +
    '.rep--affiche .rep-jeu{left:0;bottom:26px;transform:rotate(-6deg) scale(.72);transform-origin:0 100%;}' +
    '.rep--affiche.rep--sans-visuel .rep-scene{height:170px;}' +
    '@container rep (min-width:600px){' +
      '.rep-root.rep--affiche{padding:48px 44px 0;}' +
      '.rep--affiche .rep-titre{font-size:min(clamp(52px,11cqi,84px),calc((100cqi - 88px) / var(--rep-ligne,8)));}' +
      '.rep--affiche .rep-titre span{display:inline;}' +
      '.rep--affiche .rep-titre span:last-child{display:block;}' +
      '.rep--affiche .rep-corps{font-size:16px;max-width:600px;}' +
      '.rep--affiche a.rep-cta{padding:0 24px;font-size:20px;min-height:52px;}' +
      '.rep--affiche .rep-scene{height:clamp(300px,48cqi,380px);margin:34px -44px 0 18%;}' +
      '.rep--affiche .rep-jeu{left:-16%;bottom:40px;transform:rotate(-6deg) scale(.86);}' +
    '}' +
    '@container rep (min-width:940px){' +
      '.rep-root.rep--affiche{min-height:clamp(480px,48cqi,560px);padding:64px 0 64px 64px;}' +
      '.rep--affiche .rep-texte{max-width:50%;}' +
      '.rep--affiche .rep-titre{font-size:min(clamp(56px,7.6cqi,92px),calc(50cqi / var(--rep-ligne,8)));}' +
      '.rep--affiche .rep-scene{position:absolute;inset:0;height:auto;margin:0;pointer-events:none;}' +
      '.rep--affiche .rep-visuel{inset:-4px -70px auto auto;width:55%;height:calc(100% + 4px);object-fit:cover;object-position:0 0;filter:drop-shadow(-20px 30px 40px rgba(60,14,0,.45));' +
        '-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 12%);mask-image:linear-gradient(90deg,transparent 0,#000 12%);-webkit-mask-composite:source-over;mask-composite:add;}' +
      '.rep--affiche .rep-jeu{left:58%;bottom:30px;transform:rotate(-6deg);}' +
      '.rep--affiche.rep--sans-visuel .rep-scene{height:auto;}' +
      '.rep--affiche.rep--sans-visuel .rep-jeu{left:auto;right:8%;bottom:50%;transform:translateY(50%) rotate(-6deg) scale(1.3);}' +
    '}' +
     
    '.rep--bandeau a.rep-cta{max-width:100%;padding:0 18px;font-size:min(18px,5cqi);min-height:50px;}' +

     
    





    '@media (max-width:1599px),(max-height:900px){@container rep (min-width:940px){' +
      '.rep-root.rep--affiche{min-height:min(clamp(420px,38cqi,500px),58vh);padding:clamp(40px,6.5vh,60px) 0 clamp(40px,6.5vh,60px) clamp(48px,5cqi,64px);}' +
      '.rep--affiche .rep-texte{max-width:52%;}' +
      '.rep--affiche .rep-titre{font-size:min(clamp(52px,6.4cqi,84px),calc(48cqi / var(--rep-ligne,8)),9.2vh);}' +
      '.rep--affiche .rep-corps{margin-top:18px;max-width:600px;font-size:15px;line-height:1.5;}' +
      '.rep--affiche .rep-actions{margin-top:24px;}' +
    '}}' +
     

     
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
     
    


    '.rep-root.rep--promo{overflow:visible;border-radius:0;background:none;--rep-hmax:min(760px,78vh);--rep-hmax-m:80vh;}' +
    '@media (max-width:1599px),(max-height:900px){.rep-root.rep--promo{--rep-hmax:min(560px,60vh);}}' +
    '.rep-root.rep--promo::before{display:none;}' +
    '.rep--promo .rep-promo{display:block;position:relative;overflow:hidden;margin:0 auto;border-radius:28px;background:#13204A;' +
      'aspect-ratio:var(--rep-format-o,1.7778);width:min(100%,calc(var(--rep-hmax) * var(--rep-format-o,1.7778)));}' +
    '.rep--promo .rep-promo picture,.rep--promo .rep-promo img{display:block;width:100%;height:100%;}' +
    '.rep--promo .rep-promo img{object-fit:cover;}' +
    '.rep--promo a.rep-promo{transition:transform .25s ease,box-shadow .25s ease;}' +
    '.rep--promo a.rep-promo:hover{transform:translateY(-3px);box-shadow:0 18px 40px -18px rgba(19,32,74,.6);}' +
    '.rep-root.rep--promo a.rep-promo:focus-visible{outline:3px solid #EB7424;outline-offset:4px;}' +
    '@media (max-width:767px){.rep--promo .rep-promo{border-radius:20px;aspect-ratio:var(--rep-format-m,.8);width:min(100%,calc(var(--rep-hmax-m) * var(--rep-format-m,.8)));}}' +
     
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

     
    


    _rendrePromo(p, lang) {
      const o = p.ordinateur, m = p.mobile;
      const alt = p.alt || (lang === 'en' ? 'Route du Rhum promotion' : 'Promotion Route du Rhum');
      const image = '<picture>' +
        '<source media="(max-width:767px)" srcset="' + esc(jeuPromo(m, [480, 750, 1080])) + '" sizes="100vw">' +
        '<img src="' + esc(urlPromo(o, 1400)) + '" srcset="' + esc(jeuPromo(o, [800, 1200, 1600, 2000])) + '" sizes="(min-width:1600px) 1400px, (min-width:1240px) 1200px, 100vw" alt="' + esc(alt) + '" loading="lazy" decoding="async">' +
        '</picture>';
      const cadre = p.lien
        ? '<a class="rep-promo" href="' + esc(p.lien) + '" data-rep-action="promo"' + (p.nouvelOnglet ? ' target="_blank" rel="noopener"' : '') + '>' + image + '</a>'
        : '<div class="rep-promo">' + image + '</div>';
      this.innerHTML = '<style>' + CSS + '</style>' +
        '<section class="rep-root rep--promo" lang="' + lang + '" aria-label="Promotion" style="--rep-format-o:' + formatPromo(o, 1.7778) + ';--rep-format-m:' + formatPromo(m, 0.8) + '">' + cadre + '</section>';
    }
     

    _rendre() {
      const lang = this._lang();
      const T = TEXTES[lang];
      const A = ADRESSES[lang];
      const bandeau = this.getAttribute('variante') === 'bandeau';
       
      const promo = bandeau ? null : lirePromo(this.getAttribute('promo'));
      if (promo) { this._rendrePromo(promo, lang); return; }
       
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
})();
