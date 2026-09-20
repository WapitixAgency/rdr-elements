/* rdr-elements carte | source route-du-rhum 1347664 | village-map.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["carte"]="1347664";performance.mark("rdr-elements:carte")}catch(e){}
;(function(){
(function () {
  if (window.illustrationsVillage) return;

  const C = {
    encre:   '#16355D',    
    blanc:   '#FFFFFF',
    eau:     '#5DBFC0',    
    ciel:    '#56BCF6',    
    violet:  '#7894F7',
    violet2: '#4F5BA5',
    jaune:   '#FCF150',    
    orange:  '#F5BE41',
    vert3:   '#2A646D',
    pont:    '#F3EEE4',
    toile:   '#EDF2F8',
    dur:     '#D5DEE9',
    bois:    '#C9A063'
  };
  













  const MAT = {
    toile: '#EDF2F8',
    bati:  '#C3CFDD',
    bois:  '#E4D3B8'
  };
  











  const R = 4;

   
  const dessin = (l, h, trace) => {
    const cv = document.createElement('canvas');
    cv.width = l * R; cv.height = h * R;
    const x = cv.getContext('2d');
    x.scale(R, R); x.lineJoin = 'round'; x.lineCap = 'round';
    trace(x, l, h);
    return { width: cv.width, height: cv.height,
             data: new Uint8Array(x.getImageData(0, 0, cv.width, cv.height).data.buffer) };
  };
  const cerner = (x, chemin, remplissage, ep) => {
    x.save(); chemin();
    x.strokeStyle = 'rgba(255,255,255,.92)';
    x.lineWidth = (ep || 1.6) + 1.8; x.stroke();
    if (remplissage) { x.fillStyle = remplissage; x.fill(); }
    

    x.strokeStyle = 'rgba(22,53,93,.72)'; x.lineWidth = ep || 1.6; x.stroke();
    x.restore();
  };
  const ombre = (x, chemin) => {
    x.save(); x.translate(1.6, 2.2);
    chemin(); x.fillStyle = 'rgba(22,53,93,.11)'; x.fill(); x.restore();
  };
  const degrade = (x, x0, y0, x1, y1, a, b) => {
    const g = x.createLinearGradient(x0, y0, x1, y1);
    g.addColorStop(0, a); g.addColorStop(1, b); return g;
  };
  const sombre = (hex, k) => {
    const n = parseInt(hex.slice(1), 16), f = (v) => Math.max(0, Math.round(v * (1 - k)));
    return 'rgb(' + f(n >> 16) + ',' + f((n >> 8) & 255) + ',' + f(n & 255) + ')';
  };
  

  const teinte = (x, h, coul) => degrade(x, 0, 0, 0, h, C.blanc, coul);

   
  const greement = (coul, mats) => (l, h) => (x) => {
    const cx = l / 2;
    const coque = () => {
      x.beginPath();
      x.moveTo(cx, h * .015);
      x.bezierCurveTo(l * .93, h * .24, l * .95, h * .70, l * .84, h * .93);
      x.quadraticCurveTo(cx, h * 1.005, l * .16, h * .93);
      x.bezierCurveTo(l * .05, h * .70, l * .07, h * .24, cx, h * .015);
      x.closePath();
    };
    ombre(x, coque);
    cerner(x, coque, degrade(x, 0, 0, l, 0, coul, sombre(coul, .18)), 1.8);
    x.beginPath();
    x.moveTo(cx, h * .075);
    x.bezierCurveTo(l * .79, h * .28, l * .81, h * .68, l * .73, h * .87);
    x.quadraticCurveTo(cx, h * .93, l * .27, h * .87);
    x.bezierCurveTo(l * .19, h * .68, l * .21, h * .28, cx, h * .075);
    x.closePath();
    x.fillStyle = degrade(x, 0, 0, l, 0, C.blanc, C.pont); x.fill();
    x.strokeStyle = 'rgba(22,53,93,.30)'; x.lineWidth = .8; x.stroke();
    mats.forEach((m) => {
      const y = h * m.y, demi = l * m.v;
      x.beginPath(); x.moveTo(cx - demi, y); x.lineTo(cx + demi, y);
      x.strokeStyle = 'rgba(255,255,255,.9)'; x.lineWidth = 3.6; x.stroke();
      x.strokeStyle = C.encre; x.lineWidth = 1.5; x.stroke();
      x.beginPath(); x.arc(cx, y, 2.7, 0, 7); x.fillStyle = C.encre; x.fill();
      x.beginPath(); x.arc(cx, y, 1.1, 0, 7); x.fillStyle = C.blanc; x.fill();
    });
  };

   
  const chapiteau = (coul) => (l, h) => (x) => {
    const m = 2.5, L = l - m * 2, H = h - m * 2, cy = m + H / 2;
    const forme = () => { x.beginPath(); x.roundRect(m, m, L, H, 3); };
    ombre(x, forme);
    cerner(x, forme, teinte(x, h, coul), 1.7);
    x.save(); forme(); x.clip();
    x.fillStyle = degrade(x, 0, m, 0, cy, 'rgba(255,255,255,.5)', 'rgba(255,255,255,0)');
    x.fillRect(m, m, L, H / 2);
    x.fillStyle = degrade(x, 0, cy, 0, m + H, 'rgba(22,53,93,0)', 'rgba(22,53,93,.18)');
    x.fillRect(m, cy, L, H / 2);
    x.strokeStyle = 'rgba(22,53,93,.24)'; x.lineWidth = .9;
    const n = Math.max(3, Math.round(L / 11));
    for (let k = 1; k < n; k++) {
      const px = m + L * k / n;
      x.beginPath(); x.moveTo(px, m); x.lineTo(px, m + H); x.stroke();
    }
    x.strokeStyle = C.encre; x.lineWidth = 1.5;
    x.beginPath(); x.moveTo(m + 1, cy); x.lineTo(m + L - 1, cy); x.stroke();
    x.strokeStyle = 'rgba(255,255,255,.75)'; x.lineWidth = .8;
    x.beginPath(); x.moveTo(m + 1, cy - 1.4); x.lineTo(m + L - 1, cy - 1.4); x.stroke();
    x.restore();
    cerner(x, () => { x.beginPath(); x.roundRect(m - 1.5, cy - H * .16, 4, H * .32, 1.5); },
      C.blanc, 1.2);
  };
  const chapiteauEtage = (coul) => (l, h) => (x) => {
    chapiteau(coul)(l, h)(x);
    const haut = () => { x.beginPath(); x.roundRect(l * .22, h * .20, l * .56, h * .60, 2.5); };
    x.save(); x.translate(1.4, 1.8); haut();
    x.fillStyle = 'rgba(22,53,93,.22)'; x.fill(); x.restore();
    cerner(x, haut, teinte(x, h, sombre(coul, .06)), 1.5);
    x.strokeStyle = C.encre; x.lineWidth = 1.2;
    x.beginPath(); x.moveTo(l * .24, h / 2); x.lineTo(l * .76, h / 2); x.stroke();
  };
  const batiment = (coul) => (l, h) => (x) => {
    const m = 2.5, L = l - m * 2 - 1.5, H = h - m * 2 - 2;
    const forme = () => { x.beginPath(); x.roundRect(m, m, L, H, 2); };
    ombre(x, forme);
    cerner(x, forme, degrade(x, m, m, m + L, m + H, C.blanc, coul), 1.7);
    x.strokeStyle = 'rgba(22,53,93,.45)'; x.lineWidth = 1;
    x.beginPath(); x.roundRect(m + 2.6, m + 2.6, L - 5.2, H - 5.2, 1.5); x.stroke();
    x.fillStyle = 'rgba(22,53,93,.13)';
    x.beginPath(); x.roundRect(m + L * .12, m + H * .22, L * .20, H * .22, 1); x.fill();
    x.beginPath(); x.roundRect(m + L * .12, m + H * .56, L * .13, H * .20, 1); x.fill();
    [[.30, .16], [.58, .16]].forEach(([ty, hh]) => {
      x.beginPath(); x.roundRect(m + L * .45, m + H * ty, L * .42, H * hh, 1);
      x.fillStyle = 'rgba(86,188,246,.42)'; x.fill();
      x.strokeStyle = 'rgba(22,53,93,.35)'; x.lineWidth = .8; x.stroke();
    });
  };
  const bungalow = (coul) => (l, h) => (x) => {
    const forme = () => { x.beginPath(); x.roundRect(2.5, 2.5, l - 5.5, h - 6, 2); };
    ombre(x, forme);
    cerner(x, forme, teinte(x, h, coul), 1.6);
    x.save(); forme(); x.clip();
    x.strokeStyle = 'rgba(22,53,93,.20)'; x.lineWidth = .9;
    for (let k = 1; k < 5; k++) {
      const y = 2.5 + (h - 6) * k / 5;
      x.beginPath(); x.moveTo(2.5, y); x.lineTo(l - 3, y); x.stroke();
    }
    x.restore();
    cerner(x, () => { x.beginPath(); x.roundRect(l - 5.5, h * .36, 4, h * .28, 1.2); }, C.blanc, 1.2);
  };
  const cottage = (coul) => (l, h) => (x) => {
    const bati = () => { x.beginPath(); x.roundRect(2.5, 2.5, l * .60, h - 6, 2.5); };
    const terr = () => { x.beginPath(); x.roundRect(l * .62, h * .14, l * .34, h * .70, 2); };
    ombre(x, bati);
    cerner(x, terr, 'rgba(201,160,99,.45)', 1.2);
    x.save(); terr(); x.clip();
    x.strokeStyle = 'rgba(22,53,93,.28)'; x.lineWidth = .8;
    for (let k = 1; k < 6; k++) {
      const px = l * .62 + (l * .34) * k / 6;
      x.beginPath(); x.moveTo(px, h * .14); x.lineTo(px, h * .84); x.stroke();
    }
    x.restore();
    

    x.beginPath(); x.arc(l * .79, h * .49, Math.min(l, h) * .13, 0, 7);
    x.fillStyle = 'rgba(255,255,255,.9)'; x.fill();
    x.strokeStyle = C.encre; x.lineWidth = 1; x.stroke();
    cerner(x, bati, teinte(x, h, coul), 1.6);
    x.strokeStyle = 'rgba(22,53,93,.30)'; x.lineWidth = 1;
    x.beginPath(); x.moveTo(l * .31, 4); x.lineTo(l * .31, h - 7); x.stroke();
  };
  


  const chalet = () => (l, h) => (x) => {
    const toit = () => { x.beginPath(); x.roundRect(2.5, 2.5, l - 5, h * .60, 1.5); };
    ombre(x, toit);
    cerner(x, toit, C.bois, 1.6);
    x.save(); toit(); x.clip();
    x.fillStyle = degrade(x, 0, 2.5, 0, h * .33, 'rgba(255,255,255,.62)', 'rgba(255,255,255,0)');
    x.fillRect(2.5, 2.5, l - 5, h * .30);
    x.fillStyle = degrade(x, 0, h * .33, 0, h * .62, 'rgba(22,53,93,0)', 'rgba(22,53,93,.28)');
    x.fillRect(2.5, h * .33, l - 5, h * .30);
    x.strokeStyle = 'rgba(22,53,93,.35)'; x.lineWidth = .8;
    for (let k = 1; k < 5; k++) {                  
      const px = 2.5 + (l - 5) * k / 5;
      x.beginPath(); x.moveTo(px, 3); x.lineTo(px, h * .62); x.stroke();
    }
    x.restore();
    x.strokeStyle = C.encre; x.lineWidth = 1.4;
    x.beginPath(); x.moveTo(3.5, h * .33); x.lineTo(l - 3.5, h * .33); x.stroke();
    cerner(x, () => { x.beginPath(); x.roundRect(l * .08, h * .62, l * .84, h * .20, 1.4); },
      C.blanc, 1.3);
  };
  const stand = (coul) => (l, h) => (x) => {
    const forme = () => { x.beginPath(); x.roundRect(2, 2, l - 4, h - 4, 2.5); };
    ombre(x, forme);
    cerner(x, forme, teinte(x, h, coul), 1.5);
    x.fillStyle = 'rgba(22,53,93,.16)';            
    x.beginPath(); x.roundRect(3.5, h - 7.5, l - 7, 4, 1.2); x.fill();
  };

  




  const parking = () => (l, h) => (x) => {
    x.save();
    x.beginPath(); x.roundRect(1.5, 1.5, l - 3, h - 3, 2);
    x.fillStyle = 'rgba(255,255,255,.55)'; x.fill();
    x.setLineDash([3, 2.4]);
    x.strokeStyle = 'rgba(22,53,93,.34)'; x.lineWidth = 1; x.stroke();
    x.setLineDash([]);
    x.beginPath(); x.roundRect(1.5, 1.5, l - 3, h - 3, 2); x.clip();
    x.strokeStyle = 'rgba(22,53,93,.24)'; x.lineWidth = .9;
    const n = Math.max(4, Math.round((l - 3) / 7));
    for (let k = 1; k < n; k++) {
      const px = 1.5 + (l - 3) * k / n;
      x.beginPath(); x.moveTo(px, 2.5); x.lineTo(px, h * .42); x.stroke();
      x.beginPath(); x.moveTo(px, h - 2.5); x.lineTo(px, h * .58); x.stroke();
    }
    x.restore();
  };

   
  



  const entree = (grande) => (l, h) => (x) => {
    const py = grande ? l * .155 : l * .13;
    x.fillStyle = 'rgba(252,241,80,.34)';
    x.beginPath(); x.roundRect(l * .22, 2.5, l * .56, h - 5, 2.5); x.fill();
    x.setLineDash([2.6, 2.2]);
    x.strokeStyle = 'rgba(22,53,93,.35)'; x.lineWidth = .9; x.stroke();
    x.setLineDash([]);
     
    cerner(x, () => { x.beginPath(); x.roundRect(l * .20, h * .38, l * .60, h * .24, 1.6); },
      degrade(x, 0, h * .38, 0, h * .62, C.blanc, C.jaune), 1.4);
    if (grande) {
      x.fillStyle = C.encre;                       
      for (let k = 0; k < 5; k++) {
        x.beginPath(); x.roundRect(l * .27 + k * l * .095, h * .455, l * .055, h * .09, .8); x.fill();
      }
    }
     
    [l * .5 - l * .32, l * .5 + l * .32].forEach(cx2 => {
      cerner(x, () => { x.beginPath(); x.roundRect(cx2 - py / 2, 2.5, py, h - 5, 2); },
        degrade(x, 0, 0, 0, h, C.jaune, sombre(C.jaune, .24)), 1.6);
      x.strokeStyle = 'rgba(22,53,93,.45)'; x.lineWidth = .9;
      x.beginPath();
      x.moveTo(cx2 - py / 2 + 1, 4); x.lineTo(cx2 + py / 2 - 1, h - 6);
      x.moveTo(cx2 + py / 2 - 1, 4); x.lineTo(cx2 - py / 2 + 1, h - 6);
      x.stroke();
    });
     
    if (grande) {
      for (let k = 0; k < 4; k++) {
        const cx2 = l * .28 + k * l * .148;
        x.beginPath();
        x.moveTo(cx2, 1.5); x.lineTo(cx2 + 4.5, 4.5); x.lineTo(cx2, 7.5); x.closePath();
        x.fillStyle = k % 2 ? C.ciel : C.violet; x.fill();
        x.strokeStyle = C.encre; x.lineWidth = .9; x.stroke();
      }
    }
  };

  const scene = () => (l, h) => (x) => {
    const m = 3, L = l - m * 2;
    const couv = () => {
      x.beginPath();
      x.moveTo(m, h * .30); x.quadraticCurveTo(l / 2, h * .04, l - m, h * .30);
      x.lineTo(l - m, h * .74); x.lineTo(m, h * .74); x.closePath();
    };
    ombre(x, couv);
    cerner(x, couv, degrade(x, 0, h * .04, 0, h * .74, C.violet, C.violet2), 1.7);
    x.save(); couv(); x.clip();
    x.strokeStyle = 'rgba(255,255,255,.30)'; x.lineWidth = 1;
    for (let k = 1; k < 6; k++) {
      const px = m + L * k / 6;
      x.beginPath(); x.moveTo(px, h * .06); x.lineTo(px, h * .74); x.stroke();
    }
    x.restore();
    cerner(x, () => { x.beginPath(); x.roundRect(m + L * .10, h * .52, L * .80, h * .30, 2); },
      sombre(C.violet2, .35), 1.5);
    [m + L * .04, l - m - L * .04].forEach(px => {
      cerner(x, () => { x.beginPath(); x.roundRect(px - 3.2, h * .70, 6.4, h * .22, 1.5); },
        C.encre, 1.2);
    });
  };

  const grandeRoue = () => (l, h) => (x) => {
    const cx = l / 2, cy = h / 2, r = Math.min(l, h) / 2 - 4;
    cerner(x, () => { x.beginPath(); x.arc(cx, cy, r, 0, 7); }, 'rgba(255,255,255,.9)', 1.8);
    x.strokeStyle = 'rgba(22,53,93,.45)'; x.lineWidth = 1;
    for (let k = 0; k < 8; k++) {
      const a = k * Math.PI / 4;
      x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); x.stroke();
    }
    for (let k = 0; k < 8; k++) {
      const a = k * Math.PI / 4;
      x.beginPath(); x.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 2.4, 0, 7);
      x.fillStyle = k % 2 ? C.jaune : C.ciel; x.fill();
      x.strokeStyle = C.encre; x.lineWidth = 1; x.stroke();
    }
    x.beginPath(); x.arc(cx, cy, 3, 0, 7); x.fillStyle = C.encre; x.fill();
  };

  


  const foodTruck = () => (l, h) => (x) => {
    const yH = h * .14, yB = h * .64, Hc = yB - yH;
    x.fillStyle = C.encre;                         
    [l * .34, l * .74].forEach(px => {
      x.beginPath(); x.roundRect(px - 4.5, yH - 2.4, 9, 3, 1.3); x.fill();
      x.beginPath(); x.roundRect(px - 4.5, yB - .8, 9, 3, 1.3); x.fill();
    });
     
    const capot = () => {
      x.beginPath();
      x.moveTo(l * .04, yH + Hc * .34);
      x.quadraticCurveTo(l * .02, yH + Hc * .5, l * .04, yH + Hc * .66);
      x.lineTo(l * .19, yH + Hc * .80); x.lineTo(l * .19, yH + Hc * .20);
      x.closePath();
    };
    ombre(x, capot);
    cerner(x, capot, degrade(x, 0, yH, 0, yB, C.blanc, C.dur), 1.5);
     
    const cell = () => { x.beginPath(); x.roundRect(l * .18, yH, l * .74, Hc, 2.5); };
    ombre(x, cell);
    cerner(x, cell, degrade(x, 0, yH, 0, yB, C.orange, sombre(C.orange, .18)), 1.7);
     
    cerner(x, () => { x.beginPath(); x.roundRect(l * .26, yB - 1, l * .58, h * .16, 2); },
      'rgba(255,255,255,.95)', 1.4);
    x.fillStyle = C.jaune;
    x.beginPath(); x.roundRect(l * .28, yB + h * .012, l * .54, h * .055, 1.4); x.fill();
    x.strokeStyle = 'rgba(22,53,93,.45)'; x.lineWidth = .9; x.stroke();
    x.fillStyle = 'rgba(22,53,93,.22)';            
    x.beginPath(); x.roundRect(l * .30, yB - Hc * .38, l * .48, Hc * .32, 1.4); x.fill();
     
    [l * .40, l * .66].forEach(px => {
      x.beginPath(); x.arc(px, h * .88, 3.2, 0, 7);
      x.fillStyle = 'rgba(255,255,255,.92)'; x.fill();
      x.strokeStyle = C.encre; x.lineWidth = 1; x.stroke();
    });
  };

  

  const tyrolienne = () => (l, h) => (x) => {
    x.beginPath(); x.moveTo(l * .34, h * .40); x.lineTo(l * .90, h * .84);
    x.strokeStyle = 'rgba(255,255,255,.9)'; x.lineWidth = 3.4; x.stroke();
    x.strokeStyle = C.encre; x.lineWidth = 1.4; x.stroke();
    x.beginPath(); x.arc(l * .68, h * .66, 2.6, 0, 7);
    x.fillStyle = C.jaune; x.fill();
    x.strokeStyle = C.encre; x.lineWidth = 1.1; x.stroke();
    const tour = () => { x.beginPath(); x.roundRect(l * .08, h * .14, l * .34, h * .42, 2); };
    ombre(x, tour);
    cerner(x, tour, degrade(x, 0, h * .14, 0, h * .56, C.blanc, C.jaune), 1.6);
    x.strokeStyle = 'rgba(22,53,93,.55)'; x.lineWidth = 1;
    x.beginPath();
    x.moveTo(l * .10, h * .16); x.lineTo(l * .40, h * .54);
    x.moveTo(l * .40, h * .16); x.lineTo(l * .10, h * .54);
    x.stroke();
  };

  const secours = () => (l, h) => (x) => {
    const forme = () => { x.beginPath(); x.roundRect(2, 2, l - 4, h - 4, 3); };
    ombre(x, forme); cerner(x, forme, C.blanc, 1.7);
    x.fillStyle = C.vert3;
    const e = Math.min(l, h) * .17, cx = l / 2, cy = h / 2, b = Math.min(l, h) * .29;
    x.beginPath(); x.roundRect(cx - e / 2, cy - b, e, b * 2, 1.2); x.fill();
    x.beginPath(); x.roundRect(cx - b, cy - e / 2, b * 2, e, 1.2); x.fill();
  };

  

  const pointEau = () => (l, h) => (x) => {
    const cx = l / 2, cy = h / 2, r = Math.min(l, h) / 2 - 3;
    ombre(x, () => { x.beginPath(); x.arc(cx, cy, r, 0, 7); });
    cerner(x, () => { x.beginPath(); x.arc(cx, cy, r, 0, 7); },
      degrade(x, 0, cy - r, 0, cy + r, C.blanc, C.ciel), 1.7);
    x.beginPath(); x.arc(cx, cy, r * .52, 0, 7);
    x.fillStyle = 'rgba(255,255,255,.75)'; x.fill();
    x.strokeStyle = 'rgba(22,53,93,.40)'; x.lineWidth = 1; x.stroke();
    x.beginPath(); x.arc(cx, cy, r * .18, 0, 7);
    x.fillStyle = C.encre; x.fill();
  };

  


  const espaceAssis = () => (l, h) => (x) => {
    x.save();
    x.beginPath(); x.roundRect(1.5, 1.5, l - 3, h - 3, 3);
    x.fillStyle = 'rgba(93,191,192,.16)'; x.fill();
    x.setLineDash([3, 2.4]);
    x.strokeStyle = 'rgba(22,53,93,.32)'; x.lineWidth = 1; x.stroke();
    x.setLineDash([]); x.restore();
    const pos = [[.28, .32], [.66, .30], [.42, .70], [.78, .68]];
    pos.forEach(([px, py]) => {
      const cx = l * px, cy = h * py, r = Math.min(l, h) * .15;
      x.beginPath(); x.arc(cx, cy, r, 0, 7);
      x.fillStyle = 'rgba(255,255,255,.95)'; x.fill();
      x.strokeStyle = C.encre; x.lineWidth = 1.1; x.stroke();
      x.beginPath();
      x.moveTo(cx - r * .7, cy - r * .7); x.lineTo(cx + r * .7, cy + r * .7);
      x.moveTo(cx + r * .7, cy - r * .7); x.lineTo(cx - r * .7, cy + r * .7);
      x.strokeStyle = 'rgba(22,53,93,.45)'; x.lineWidth = .9; x.stroke();
    });
  };

   
  const CATALOGUE = {};
  const ajouter = (nom, l, h, f) => { CATALOGUE[nom] = { l, h, f }; };
  

  

  ['toile', 'bati', 'bois'].forEach(mat => {
    ajouter('ill-stand-' + mat, 28, 22, stand(MAT[mat]));
    ajouter('ill-chapiteau-' + mat, 76, 46, chapiteau(MAT[mat]));
    ajouter('ill-bungalow-' + mat, 40, 26, bungalow(MAT[mat]));
  });

  

















  const FAM = {
    neutre:  MAT.toile,
    boutique: '#F19F39',    
    resto:    '#F5BE41',    
    anim:     '#7894F7',    
    service:  '#479ED7',    
    eau:      '#56BCF6',    
    secours:  '#2A646D',    
    entree:   '#FCF150'     
  };
  Object.keys(FAM).forEach(f => {
    ajouter('ill-stand-' + f, 28, 22, stand(FAM[f]));
    ajouter('ill-chapiteau-' + f, 76, 46, chapiteau(FAM[f]));
    ajouter('ill-bungalow-' + f, 40, 26, bungalow(FAM[f]));
    ajouter('ill-cottage-' + f, 46, 28, cottage(FAM[f]));
  });
  ajouter('ill-cottage', 46, 28, cottage(MAT.toile));
  ajouter('ill-chapiteau-etage', 76, 46, chapiteauEtage(MAT.toile));
  ajouter('ill-batiment', 80, 54, batiment(MAT.bati));
  ajouter('ill-chalet', 38, 28, chalet());
  ajouter('ill-parking', 60, 30, parking());
  ajouter('ill-entree', 56, 34, entree(true));
  ajouter('ill-arche', 42, 28, entree(false));
  ajouter('ill-scene', 66, 50, scene());
  ajouter('ill-grande-roue', 56, 56, grandeRoue());
  ajouter('ill-food-truck', 56, 38, foodTruck());
  ajouter('ill-tyrolienne', 50, 44, tyrolienne());
  ajouter('ill-secours', 28, 28, secours());
  ajouter('ill-point-eau', 26, 26, pointEau());
  ajouter('ill-espace-assis', 52, 36, espaceAssis());
  



  ajouter('ill-greement-1', 30, 96, greement(C.eau,    [{ y: .28, v: .30 }, { y: .52, v: .34 }, { y: .76, v: .26 }]));
  ajouter('ill-greement-2', 30, 96, greement(C.jaune,  [{ y: .32, v: .32 }, { y: .60, v: .28 }]));
  ajouter('ill-greement-3', 28, 84, greement(C.violet, [{ y: .30, v: .30 }, { y: .56, v: .34 }, { y: .80, v: .24 }]));
  ajouter('ill-greement-4', 26, 78, greement(C.ciel,   [{ y: .34, v: .32 }, { y: .64, v: .26 }]));

  























  const PHOTOS = {};
  const BASE = (function () {
    const s = document.currentScript && document.currentScript.src;
    return s ? s.replace(/[^/]*$/, '') : '';
  })();
   
  const ajouterPhoto = (nom, fichier, l, h) => {
    CATALOGUE[nom] = { l, h, photo: true, fichier, sansRotation: true };
    PHOTOS[nom] = { etat: 'attente', im: null };
  };
  










  const MEDIA = 'https://static.wixstatic.com/media/';
  





  const TAILLE = '/v1/fit/w_300,h_300,q_82,enc_auto/';
  const MEDIATHEQUE = {
    'ill-comptoir-client.png': MEDIA + '7bb303_84ba630a19814e759ed761f94633587a~mv2.png' + TAILLE + 'comptoir.png',
    'ill-scene-client.png':    MEDIA + '7bb303_60237c13e53244a98c986ecc44b2c854~mv2.png' + TAILLE + 'scene.png',
    'ill-roue-client.png':     MEDIA + '7bb303_b4cd4634a5c1400fb723290770bd764f~mv2.png' + TAILLE + 'roue.png'
  };
  ajouterPhoto('ill-comptoir-photo', 'ill-comptoir-client.png', 75, 71.5);
  ajouterPhoto('ill-scene-photo',    'ill-scene-client.png',    75, 69);
  ajouterPhoto('ill-roue-photo',     'ill-roue-client.png',     68.5, 75);

  const decoder = (nom) => new Promise((fini) => {
    const d = CATALOGUE[nom], e = PHOTOS[nom];
    const im = new Image();
    











    im.crossOrigin = 'anonymous';
    im.onerror = () => { e.etat = 'echec';
      console.warn('[illustrations] photo introuvable : ' + d.fichier); fini(false); };
    im.onload = () => {
      const cv = document.createElement('canvas');
      cv.width = im.naturalWidth; cv.height = im.naturalHeight;
      const x = cv.getContext('2d'); x.drawImage(im, 0, 0);
      e.im = { width: cv.width, height: cv.height,
        data: new Uint8Array(x.getImageData(0, 0, cv.width, cv.height).data.buffer) };
       
      const dl = Math.round(cv.width / R * 10) / 10, dh = Math.round(cv.height / R * 10) / 10;
      if (Math.abs(dl - d.l) > 0.3 || Math.abs(dh - d.h) > 0.3) {
        console.warn('[illustrations] ' + nom + ' : cotes declarees ' + d.l + '×' + d.h +
          ', mesurees ' + dl + '×' + dh + '. On garde les mesurees.');
        d.l = dl; d.h = dh; d._enc = null;
      }
      e.etat = 'pret'; fini(true);
    };
    









    const table = (typeof window !== 'undefined' && window.RDR_ILLUS_URLS) || null;
    im.src = (table && table[d.fichier]) || MEDIATHEQUE[d.fichier] ||
             (BASE + 'img-client/' + d.fichier);
  });
  










  const lancer = (utilises) => Promise.all(
    Object.keys(PHOTOS)
      .filter(nom => !utilises || utilises.has(nom))
      .map(nom => PHOTOS[nom].promesse || (PHOTOS[nom].promesse = decoder(nom))));

  const fabriquer = (nom) => {
    const d = CATALOGUE[nom];
    if (!d) return null;
    if (d.photo) return PHOTOS[nom].im;       
    return dessin(d.l, d.h, (x, l, h) => d.f(l, h)(x));
  };
  window.illustrationsVillage = {
    liste: Object.keys(CATALOGUE),
    matieres: Object.keys(MAT),
    













    dims(nom) {
      const d = CATALOGUE[nom]; if (!d) return null;
      if (d._enc) return d._enc;
      




      if (d.photo) return { l: d.l, h: d.h, encreL: d.l, encreH: d.h,
        decX: 0, decY: 0, sansRotation: true, photo: true };
      const im = fabriquer(nom);
      let x0 = im.width, y0 = im.height, x1 = -1, y1 = -1;
      for (let y = 0; y < im.height; y++) for (let x = 0; x < im.width; x++) {
        if (im.data[(y * im.width + x) * 4 + 3] > 24) {
          if (x < x0) x0 = x; if (x > x1) x1 = x;
          if (y < y0) y0 = y; if (y > y1) y1 = y;
        }
      }
      

      const enc = (x1 < 0)
        ? { l: d.l, h: d.h, encreL: d.l, encreH: d.h, decX: 0, decY: 0 }
        : { l: d.l, h: d.h,
            encreL: (x1 - x0 + 1) / R, encreH: (y1 - y0 + 1) / R,
            


            decX: ((x0 + x1 + 1) / 2 - im.width / 2) / R,
            decY: ((y0 + y1 + 1) / 2 - im.height / 2) / R };
      d._enc = enc;
      return enc;
    },
    fabriquer,
    



    pretes(noms) { return lancer(noms ? new Set([].concat(noms)) : null); },
    


    poser(map, quandPret, utilises) {
      let n = 0;
      lancer(utilises);
      const ajouter1 = (nom) => {
        try {
          if (map.hasImage && map.hasImage(nom)) return;
          const im = fabriquer(nom);
          if (!im) return;                     
          map.addImage(nom, im, { pixelRatio: R });
          n++;
        } catch (e) { console.warn('[illustrations] ' + nom + ' : ' + e.message); }
      };
      Object.keys(CATALOGUE).forEach(ajouter1);
      lancer(utilises).then(() => {
        let tard = 0;
        Object.keys(PHOTOS).forEach(nom => {
          const avant = map.hasImage && map.hasImage(nom);
          ajouter1(nom);
          if (!avant && map.hasImage && map.hasImage(nom)) tard++;
        });
        if (tard && typeof quandPret === 'function') quandPret(tard);
      });
      return n;
    }
  };
})();
;

 
/* global maplibregl */
































if (!customElements.get('village-map')) {

  













  const C = {
    ink:      '#0A1A35',   
    ink2:     '#45536E',   
    ink3:     '#8593A9',   
    










    inkT3:    '#5F6D86',   
    bg:       '#F2F6F9',   
    surface:  '#FFFFFF',   
    line:     '#E1E6EE',   
    lineFort: '#C6CFDC',   
    teal:     '#5DBFC0',   
    tealDeep: '#00676E',   
    tealInk:  '#04342C',   
    ambre:    '#FCF150',   
    direct:   '#E24040',   
    



    directFonce: '#C62828',
    

























    pmr:      '#0057B8',    
    pmrClair: '#8FC2F2',    
    tymal:    '#FFAC92',   
    







    






    mer:      '#A0E0E7',    
    merBord:  '#6CC9D2',    
    large:    '#4A97A0',    
    sol:      '#FFFFFF',    
    quai:     '#F6F7F6',    
    bati:     '#F3F4F2',
    batiBord: '#DEE1DC',
    vegetal:  '#E3F1E6',    
    voie:     '#EFEFEC',    
    voieBord: '#E2E3DF'
  };

  




















  const CACHE_NOM = 'rdr-carte-village-v1';
  const CACHE_MAX = 900;                     
  const PROTO = 'rdrcache';

  const cacheDispo = typeof caches !== 'undefined' && typeof window !== 'undefined' && window.isSecureContext;
  let _cache = null, _n = 0;
  const ouvrirCache = async () => {
    if (_cache) return _cache;
    _cache = await caches.open(CACHE_NOM);
    _n = (await _cache.keys()).length;
    return _cache;
  };
  const rangerBorne = async (c, req, rep) => {
    try {
      await c.put(req, rep);
      if (++_n > CACHE_MAX) {
         
         
         
        const vieilles = (await c.keys()).slice(0, Math.floor(CACHE_MAX / 4));
        await Promise.all(vieilles.map(k => c.delete(k)));
        _n = (await c.keys()).length;
      }
    } catch (e) {   }
  };

  






  window.__vmProtocole = function enregistrerProtocole() {
    if (typeof maplibregl === 'undefined' || !maplibregl.addProtocol) return;
    if (maplibregl.getProtocol && maplibregl.getProtocol(PROTO)) return;
    maplibregl.addProtocol(PROTO, async (params, abort) => {
      const url = params.url.replace(new RegExp('^' + PROTO + '://'), '');
      const signal = abort && abort.signal;
      if (cacheDispo) {
        try {
          const c = await ouvrirCache();
          const vu = await c.match(url);
          if (vu) return { data: await vu.arrayBuffer() };
          const rep = await fetch(url, { signal });
          if (!rep.ok) throw new Error('HTTP ' + rep.status);
          rangerBorne(c, url, rep.clone());      
          return { data: await rep.arrayBuffer() };
        } catch (e) {
          if (e && e.name === 'AbortError') throw e;
           
        }
      }
      const rep = await fetch(url, { signal });
      if (!rep.ok) throw new Error('HTTP ' + rep.status);
      return { data: await rep.arrayBuffer() };
    });
  };

  







  
















  const MAPLIBRE_JS = [
    'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js',
    'https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.js',
    'https://cdnjs.cloudflare.com/ajax/libs/maplibre-gl/4.7.1/maplibre-gl.js'
  ];
  const MAPLIBRE_CSS = [
    'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css',
    'https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.css',
    'https://cdnjs.cloudflare.com/ajax/libs/maplibre-gl/4.7.1/maplibre-gl.css'
  ];

  window.__vmMapLibre = window.__vmMapLibre || function chargerMapLibre() {
    if (window.__vmMapLibrePromesse) return window.__vmMapLibrePromesse;
    window.__vmMapLibrePromesse = new Promise((resolve, reject) => {
      


      if (!document.getElementById('vm-maplibre-css')) {
        const l = document.createElement('link');
        l.id = 'vm-maplibre-css'; l.rel = 'stylesheet';
        let ic = 0;
        l.addEventListener('error', () => { if (++ic < MAPLIBRE_CSS.length) l.href = MAPLIBRE_CSS[ic]; });
        l.href = MAPLIBRE_CSS[0];
        document.head.appendChild(l);
      }
      if (window.maplibregl) return resolve(window.maplibregl);
      


      let i = 0;
      const essayer = () => {
        const vieux = document.getElementById('vm-maplibre-js');
        if (vieux) vieux.remove();
        const s = document.createElement('script');
        s.id = 'vm-maplibre-js'; s.src = MAPLIBRE_JS[i];
         
         
        s.addEventListener('load', () => resolve(window.maplibregl), { once: true });
        s.addEventListener('error', () => {
          if (++i < MAPLIBRE_JS.length) { essayer(); return; }
          window.__vmMapLibrePromesse = null;    
          reject(new Error('MapLibre injoignable sur les ' + MAPLIBRE_JS.length + ' origines'));
        }, { once: true });
        document.head.appendChild(s);
      };
      essayer();
    }).then(m => { window.__vmProtocole(); return m; });
    return window.__vmMapLibrePromesse;
  };

  











  



  const DELAI_REQUETE = 6000;
  const fetchBorne = async (url, ms = DELAI_REQUETE) => {
    const stop = new AbortController();
    const t = setTimeout(() => stop.abort(), ms);
    try { return await fetch(url, { signal: stop.signal }); }
    finally { clearTimeout(t); }
  };

  const MEM_CLE = 'rdr-carte-village-contenu';
  const AGE_ANNONCE_H = 12;       
  const AGE_ALERTE_H = 12;        

  const MEM_MAX_O = 2 * 1024 * 1024;    
  const memoriser = (p) => {
    try {
      const txt = JSON.stringify({ le: new Date().toISOString(), p });
      



      if (txt.length > MEM_MAX_O) return false;
      localStorage.setItem(MEM_CLE, txt);
      return true;
    } catch (e) { return false; }    
  };
  const lireMemoire = () => {
    try {
      const m = JSON.parse(localStorage.getItem(MEM_CLE) || 'null');
      return m && m.p && m.le ? m : null;
    } catch (e) { return null; }
  };
  const ageEnHeures = (iso) => (Date.now() - new Date(iso).getTime()) / 3600000;
  const ageEnMots = (iso, lang) => {
    const h = ageEnHeures(iso);
    if (h < 1 / 30) return lang === 'en' ? 'just now' : "à l'instant";
    if (h < 1) return (lang === 'en' ? '' : 'il y a ') + Math.round(h * 60) + (lang === 'en' ? ' min ago' : ' min');
    if (h < 24) return (lang === 'en' ? '' : 'il y a ') + Math.round(h) + (lang === 'en' ? ' h ago' : ' h');
    const j = Math.round(h / 24);
    return (lang === 'en' ? '' : 'il y a ') + j + (lang === 'en' ? (j > 1 ? ' days ago' : ' day ago') : ' j');
  };

  













  const escAttr = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

   
   
  



  const sansAccent = (s) => String(s == null ? '' : s).normalize('NFD')
    .replace(/[̀-ͯ]/g, '').trim().toLowerCase();
  




  const distMots = (a, b, max) => {
    if (a === b) return 0;
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prec = new Array(b.length + 1), cour = new Array(b.length + 1);
    for (let j = 0; j <= b.length; j++) prec[j] = j;
    for (let i = 1; i <= a.length; i++) {
      cour[0] = i;
      let mieux = i;
      for (let j = 1; j <= b.length; j++) {
        cour[j] = Math.min(prec[j] + 1, cour[j - 1] + 1,
                           prec[j - 1] + (a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1));
        if (cour[j] < mieux) mieux = cour[j];
      }
      if (mieux > max) return max + 1;
      const t = prec; prec = cour; cour = t;
    }
    return prec[b.length];
  };
   
   
  








  const tolerance = (n) => (n <= 3 ? 0 : n <= 7 ? 1 : 2);
  const motsDe = (s) => sansAccent(s).split(/[^a-z0-9]+/).filter(m => m.length > 1);
  const urlSure = (u, repli = '') => {
    if (u == null) return repli;
    let v = String(u).trim();
    if (!v) return repli;
    let m = v.match(/^wix:image:\/\/v1\/([^/#?]+)/i);
    if (m) v = 'https://static.wixstatic.com/media/' + m[1];
    else if ((m = v.match(/^wix:vector:\/\/v1\/([^/#?]+)/i))) v = 'https://static.wixstatic.com/shapes/' + m[1];
    const schemaOk = /^https?:/i.test(v);
    const relatif = /^(\/|#|\?|\.\/|\.\.\/)/.test(v) || !/^[a-z][a-z0-9+.\-]*:/i.test(v);
    if (!schemaOk && !relatif) return repli;
    return v.replace(/"/g, '%22').replace(/'/g, '%27');
  };
  



  




  const vignette = (u, px, haut, al) => {
    const v = urlSure(u);
    if (!v) return '';
    const m = v.match(/^https:\/\/static\.wixstatic\.com\/media\/([^/]+)$/);
    if (!m) return v;
    const d = px * 2;    
    const h = (haut || px) * 2;
    return 'https://static.wixstatic.com/media/' + m[1] +
           '/v1/fill/w_' + d + ',h_' + h + ',al_' + (al === 't' ? 't' : 'c') + ',q_80,enc_auto/' + m[1];
  };
  const portrait = (u, px) => vignette(u, px, 0, 't');

  






  const PAYS = {
    fr: ['France', 'France'], be: ['Belgique', 'Belgium'], it: ['Italie', 'Italy'], es: ['Espagne', 'Spain'],
    ie: ['Irlande', 'Ireland'], cz: ['Tchéquie', 'Czechia'], de: ['Allemagne', 'Germany'], ca: ['Canada', 'Canada'],
    jp: ['Japon', 'Japan'], au: ['Australie', 'Australia'], gb: ['Royaume-Uni', 'United Kingdom'],
    us: ['États-Unis', 'United States'], ch: ['Suisse', 'Switzerland'], mc: ['Monaco', 'Monaco'],
    nl: ['Pays-Bas', 'Netherlands'], pl: ['Pologne', 'Poland'], pt: ['Portugal', 'Portugal'], cn: ['Chine', 'China'],
    nz: ['Nouvelle-Zélande', 'New Zealand'], fi: ['Finlande', 'Finland'], at: ['Autriche', 'Austria'],
    tr: ['Turquie', 'Türkiye'], dk: ['Danemark', 'Denmark'], se: ['Suède', 'Sweden'], no: ['Norvège', 'Norway'],
    hu: ['Hongrie', 'Hungary'], gr: ['Grèce', 'Greece'], br: ['Brésil', 'Brazil'], ar: ['Argentine', 'Argentina'],
    cl: ['Chili', 'Chile'], za: ['Afrique du Sud', 'South Africa'], ru: ['Russie', 'Russia'], ua: ['Ukraine', 'Ukraine'],
    lu: ['Luxembourg', 'Luxembourg'], ma: ['Maroc', 'Morocco'], sn: ['Sénégal', 'Senegal'], mu: ['Maurice', 'Mauritius']
  };
   
  const PAYS_CLE = [
    ['sud-afric', 'za'], ['south afric', 'za'], ['neo-zeland', 'nz'], ['zeland', 'nz'], ['etats-unis', 'us'],
    ['franc', 'fr'], ['belg', 'be'], ['ital', 'it'], ['espagn', 'es'], ['spani', 'es'], ['irland', 'ie'], ['irish', 'ie'],
    ['tchequ', 'cz'], ['czech', 'cz'], ['allemand', 'de'], ['german', 'de'], ['canad', 'ca'], ['japon', 'jp'], ['japan', 'jp'],
    ['austral', 'au'], ['britann', 'gb'], ['british', 'gb'], ['anglais', 'gb'], ['americ', 'us'], ['suiss', 'ch'], ['swiss', 'ch'],
    ['monegasq', 'mc'], ['monaco', 'mc'], ['neerland', 'nl'], ['hollan', 'nl'], ['dutch', 'nl'], ['polon', 'pl'], ['polish', 'pl'],
    ['portug', 'pt'], ['chin', 'cn'], ['finland', 'fi'], ['finn', 'fi'], ['autrich', 'at'], ['austria', 'at'], ['turq', 'tr'], ['turk', 'tr'],
    ['danois', 'dk'], ['danish', 'dk'], ['danemark', 'dk'], ['sued', 'se'], ['swed', 'se'], ['norveg', 'no'], ['norweg', 'no'],
    ['hongr', 'hu'], ['hungar', 'hu'], ['grec', 'gr'], ['greek', 'gr'], ['bresil', 'br'], ['brazil', 'br'], ['argentin', 'ar'],
    ['chili', 'cl'], ['chile', 'cl'], ['russ', 'ru'], ['ukrain', 'ua'], ['luxemb', 'lu'], ['maroc', 'ma'], ['morocc', 'ma'],
    ['senegal', 'sn'], ['mauric', 'mu']
  ];
  const paysDe = (nat, lang) => {
    const brut = String(nat || '').trim();
    if (!brut) return '';
    const s = brut.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const trouver = (t) => { const k = PAYS_CLE.find(([r]) => t.indexOf(r) >= 0); return k ? k[1] : null; };
    

    const parts = s.split(/[/,&+]|\s+et\s+|-(?=[a-z])/).map(x => x.trim()).filter(Boolean);
    let cles = parts.length > 1 ? parts.map(trouver).filter(Boolean) : [];
    if (!cles.length) { const k = trouver(s); if (k) cles = [k]; }
    cles = cles.filter((k, i) => cles.indexOf(k) === i);
    if (!cles.length) return brut.charAt(0).toUpperCase() + brut.slice(1).toLowerCase();
    return cles.map(k => PAYS[k][lang === 'en' ? 1 : 0]).join(' / ');
  };

  


  const couleurSure = (c, repli = C.ink) => {
    if (c == null) return repli;
    const hex = String(c).trim().replace(/^#/, '');
    return /^[0-9a-fA-F]{3,8}$/.test(hex) ? '#' + hex : repli;
  };

  





  const parisJourHeure = (d) => {
    const q = d || new Date();
    try {
      const p = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris',
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(q);
      const g = (t) => (p.find(x => x.type === t) || {}).value;
      const h = +g('hour') % 24;    
      return { jour: g('year') + '-' + g('month') + '-' + g('day'), minutes: h * 60 + +g('minute') };
    } catch (e) {
       
      const z = new Date(q.getTime() - q.getTimezoneOffset() * 60000);
      return { jour: z.toISOString().slice(0, 10), minutes: q.getHours() * 60 + q.getMinutes() };
    }
  };

  


  




  const enveloppe = (classe) => {
    const d = document.createElement('div');
    d.className = classe;
    d.setAttribute('aria-hidden', 'true');
    d.appendChild(document.createElement('i'));
    return d;
  };

  const melanger = (a, b, k) => {
    const v = (h) => { h = String(h).replace('#', '');
      if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
      return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)]; };
    const x = v(a), y = v(b);
    return '#' + [0,1,2].map(i => Math.round(x[i] + (y[i]-x[i])*k).toString(16).padStart(2,'0')).join('');
  };

  const T = {
    fr: { tout:'Tout afficher', famillesN:'{n} familles', grRacc:'Raccourcis', grLieux:'Lieux', resultatsN:'{a} résultats sur {n}', reset:'Réinitialiser', prog:'Programme', progComplet:'Voir le programme complet',
          progTitre:'Programme du jour', progReduire:'Replier le programme', nbEnCours:'en cours',
          jour:'Jour', fermer:'Fermer', secteur:'Secteur du village', melocaliser:'Me localiser', recherche:'Rechercher un lieu…', rechercheCourt:'Rechercher', rechercheLong:'Rechercher un lieu, une animation, une classe',
          aucun:'Aucun résultat', ouvert:'Ouvert', ferme:'Fermé', accredite:'Accès accrédité',
          gratuit:'Gratuit', reservation:'Sur réservation', yaller:'M\'y emmener', plan:'Télécharger le plan',
          maj:'Position mise à jour', prochain:'Prochaine apparition', precision:'Précision',
          vuePlan:'Afficher le plan illustré', heure:'Heure de la journée', maintenant:'Maintenant',
          enCours:'En ce moment', aVenir:'À venir', termine:'Terminé', rienA:'Rien de prévu à cette heure',
          jourPrec:'Jour précédent', jourSuiv:'Jour suivant', niveaux:'Niveau de la carte',
          reinit:'Réinitialiser', retourProg:'Retour au programme', retourVers:'Retour à', suite:'À suivre ici', urgent:'Information importante',
          villageDepart:'Village de départ', lieux:'lieux', bateaux:'bateaux',
          recents:'Recherches récentes', raccourcis:'Le plus demandé', rienTrouve2:'Aucun résultat',
          mois1:'janvier', mois2:'février', mois3:'mars', mois4:'avril', mois5:'mai', mois6:'juin',
          mois7:'juillet', mois8:'août', mois9:'septembre', mois10:'octobre', mois11:'novembre', mois12:'décembre',
          parHeure:'Heure', parLieu:'Lieu', parType:'Type', recentrer:'Recentrer sur moi',
          absent:'TyMal n\'est pas sur le village en ce moment', fermerMsg:'Fermer ce message',
          stAnnule:'Annulé', stComplet:'Complet', stDeplace:'Déplacé', stFerme:'Fermé',
          nonAccessible:'Zone non accessible au public', cuisine:'Sur place',
          progJour:'Programme du jour', progJourCourt:'Aujourd’hui', progJourAide:'Ne montrer que les lieux qui accueillent une animation ce jour-là',
          progJourVide:'Aucune animation ce jour-là',
          horsLigne:'Préparer hors connexion', horsLigneFait:'Village disponible hors connexion',
          horsLigneEnCours:'Préparation…', reseauLent:'Réseau lent : affichage allégé',
          tuilesKO:'Le fond de carte n\'arrive pas. Le programme et la recherche restent utilisables.',
          horsCo:'Hors connexion', aJour:'À jour',
          progRanger:'Ranger le programme', progOuvrir:'Ouvrir le programme',
          resultatsListe:'Résultats de la recherche',
          filtrer:'Filtrer', filtresTitre:'Que cherchez-vous ?',
          






          libPos:'Ma position', libAutour:'Autour de moi', libHorsCo:'Hors connexion',
          libVues:'Vues', libFiltres:'Filtres', libPlus:'Plus',
          vuesTitre:'Vous explorez', fermerFeuille:'Fermer', flotteTitre:'Les bateaux',
          proxTitre:'Au plus proche : {f}',
          ouvrirFiche:'Voir la fiche',
          batiTitre:'Dans ce bâtiment', batiAbrite:'{n} lieux ici',
          proxEq_sortie:'La sortie la plus proche',
          proxEq_entree:'L\'entrée la plus proche',
          proxEq_secours:'La sortie de secours la plus proche',
          proxEq_eau:'Le point d\'eau le plus proche',
          proxEq_wc:'Les toilettes les plus proches',
          proxEq_dea:'Le défibrillateur le plus proche',
          proxEq_soins:'Le poste de soins le plus proche',
          proxEq_bebe:'La table à langer la plus proche',
          proxCat_entrees:'L\'entrée la plus proche',
          proxCat_toilettes:'Les toilettes les plus proches',
          proxCat_secours:'Le poste de secours le plus proche',
          proxCat_restauration:'Le point de restauration le plus proche',
          proxCat_services:'Le service le plus proche',
          accesDeux:'Entrée et sortie', accesEntree:'Entrée seulement',
          accesSortie:'Sortie seulement', accesSecours:'Sortie de secours',
          filtrerTitre:'Filtrer',
          voirCarte:'Voir la carte', voirN:'Voir la carte · {n} lieux',
          voirUn:'Voir la carte · 1 lieu', voirZero:'Aucun lieu avec ces filtres',
          voirAilleurs:'{n} dans « {v} » →',
          nivN:'{n} lieux', nivUn:'1 lieu', nivVide:'Rien avec ces filtres',
          sansCarteT:'Le plan ne s\'affiche pas',
          sansCarteM:'Le programme, la recherche et la liste des lieux restent utilisables juste en dessous. Seul le fond de carte n\'a pas pu être chargé.',
          sansCarteB:'Recharger la page',
          horsCoTitre:'Vous consultez une version enregistrée',
          horsCoTexte:'Le réseau est saturé ou votre connexion n\'a pas permis de récupérer les dernières informations. La carte s\'affiche à partir des données enregistrées lors de votre dernière visite.',
          ouvert:'Ouvert', ferme:'Fermé', fermeDans:'Ferme dans {n} min', fermeJusqu:'Fermé, ouvre à {h}',
          routeBarree:'Route barrée', pietonsOk:'Passage piéton maintenu', pietonsNon:'Aucun passage, y compris à pied',
          barreeParMoments:'Barrée par moments', barreePlusTard:'Plus tard', barreePlages:'Fermée',
          barreMaintenant:'Barrée en ce moment', barreEncore:'Rouvre dans {n} min',
          barreDes:'Passante, barrée à partir de {h}', barrePassante:'Passante en ce moment',
          seraBarree:'Sera barrée {p}', duAu:'du {d} au {f}', aPartirDu:'à partir du {d}', jusquAu:"jusqu'au {f}",
          barreeAVenir:'Fermeture à venir',
          emplacement:'Emplacement', standLibre:'Emplacement disponible',
          urgenceTitre:'Consigne de sécurité', urgenceOu:'Où suis-je ?', urgenceHorsLigne:'Garder la carte hors ligne',
          urgenceSorties:'Sorties et secours les plus proches',
          tymalIci:'Vue ici', tymalMaintenant:"à l'instant", tymalDepuis:'il y a {n} min', tymalDepuisH:'il y a {n} h',
          tymalIncertain:"La position n'a pas été confirmée depuis plus d'une heure : elle a sans doute bougé.",
          tymalQuoi:"La mascotte de la Route du Rhum se promène dans le village. Sa position est relevée par l'organisation.",

          horsCoVigilance:'Les horaires, les annulations et les annonces ont pu changer depuis. Vérifiez sur place avant de vous déplacer.',
          horsCoDate:'Dernière mise à jour', horsCoReessayer:'Réessayer maintenant',
          annonceRetiree:'Une annonce a été masquée : elle datait de plus de {h} h et n\'était plus fiable.',
          chargement:'Chargement de la carte', chargeLent:'Le réseau est chargé, merci de patienter.',
          chargeTresLent:'Beaucoup de monde sur le pont. La carte arrive.',
          chargeSecours:'Afficher la dernière version enregistrée',
          contextePerdu:'L\'affichage a été interrompu par le téléphone. Reconstruction en cours…',
          regimes:'Régimes alimentaires', classes:'Filtrer par classe', resultatsPour:'Résultats pour',
          partager:'Partager ce lieu', lienCopie:'Lien copié',
          bateau:'Bateau', skipperDe:'Skipper', voileNum:'Numéro de voile', place:'place',
          posteLibre:'Poste libre', bateauAConfirmer:'Bateau à confirmer', partagerBateau:'Partager ce bateau', etAmarre:'À quai', etAttendu:'Attendu',
          etParti:'Parti', etAbsent:'Absent', flotte:'Flotte',
          




          fiche:'Fiche du lieu',
          listeLieux:'Liste des lieux affichés', lieuxAffiches:'{n} lieux affichés',
          unLieuAffiche:'1 lieu affiché', aucunLieuAffiche:'Aucun lieu affiché',
          vueAnnoncee:'Vue : {v}',
          pmrFiltre:'Accessible', pmrCourt:'Accessible PMR', pmrAide:'Ne montrer que les lieux accessibles aux personnes à mobilité réduite',
          pmrVide:'Aucun lieu accessible signalé à cette échelle',
          autour:'Autour de moi', autourAide:'Les services les plus proches de ma position',
          autourVide:'Aucun service à proximité dans les familles affichées.',
          autourLocaliser:'Autorisez la localisation pour voir ce qui est autour de vous.',
          autourTitre:'Autour de moi', volDOiseau:'à vol d\'oiseau',
          itineraire:'Itinéraire', effacerTrace:'Effacer le tracé',
          capN:'nord', capNE:'nord-est', capE:'est', capSE:'sud-est',
          capS:'sud', capSO:'sud-ouest', capO:'ouest', capNO:'nord-ouest',
          pmr:'Accessible aux personnes à mobilité réduite', adresse:'Adresse',
          dates:'Ouvert du', enSavoir:'En savoir plus', sousCat:'Type', photos:'Photos',
          infos:'Bon à savoir', classes:'Classes de bateaux', categorie:'Catégorie',
          voirTout:'Afficher cette catégorie', geoArret:'Suivi arrêté' },
    en: { tout:'Show all', famillesN:'{n} categories', grRacc:'Shortcuts', grLieux:'Places', resultatsN:'{a} of {n} results', reset:'Reset', prog:'Programme', progComplet:'See full programme',
          progTitre:"Today's programme", progReduire:'Collapse programme', nbEnCours:'live',
          jour:'Day', fermer:'Close', secteur:'Village area', melocaliser:'Locate me', recherche:'Search a place…', rechercheCourt:'Search', rechercheLong:'Search a place, an event, a boat class',
          aucun:'No result', ouvert:'Open', ferme:'Closed', accredite:'Accredited access',
          gratuit:'Free', reservation:'Booking required', yaller:'Take me there', plan:'Download map',
          maj:'Position updated', prochain:'Next appearance', precision:'Accuracy',
          vuePlan:'Show the illustrated map', heure:'Time of day', maintenant:'Now',
          enCours:'On now', aVenir:'Coming up', termine:'Finished', rienA:'Nothing on at this time',
          jourPrec:'Previous day', jourSuiv:'Next day', niveaux:'Map level',
          reinit:'Reset', retourProg:'Back to programme', retourVers:'Back to', suite:'Up next here', urgent:'Important notice',
          villageDepart:'Start village', lieux:'places', bateaux:'boats',
          recents:'Recent searches', raccourcis:'Most asked', rienTrouve2:'No result',
          mois1:'January', mois2:'February', mois3:'March', mois4:'April', mois5:'May', mois6:'June',
          mois7:'July', mois8:'August', mois9:'September', mois10:'October', mois11:'November', mois12:'December',
          parHeure:'Time', parLieu:'Place', parType:'Type', recentrer:'Recentre on me',
          absent:'TyMal is not on the village right now', fermerMsg:'Dismiss',
          stAnnule:'Cancelled', stComplet:'Full', stDeplace:'Moved', stFerme:'Closed',
          nonAccessible:'Area closed to the public', cuisine:'On site',
          progJour:'Today\'s programme', progJourCourt:'Today', progJourAide:'Show only the places hosting an event that day',
          progJourVide:'No event that day',
          horsLigne:'Save for offline', horsLigneFait:'Village available offline',
          horsLigneEnCours:'Saving…', reseauLent:'Slow network: lighter display',
          tuilesKO:'The basemap is not loading. Programme and search still work.',
          horsCo:'Offline', aJour:'Up to date',
          progRanger:'Hide the programme', progOuvrir:'Show the programme',
          resultatsListe:'Search results',
          filtrer:'Filter', filtresTitre:'What are you looking for?',
          libPos:'My position', libAutour:'Around me', libHorsCo:'Offline',
          libVues:'Views', libFiltres:'Filters', libPlus:'More',
          vuesTitre:'You are exploring', fermerFeuille:'Close', flotteTitre:'The boats',
          proxTitre:'Nearest: {f}',
          ouvrirFiche:'See details',
          batiTitre:'In this building', batiAbrite:'{n} places here',
          proxEq_sortie:'Nearest exit', proxEq_entree:'Nearest entrance',
          proxEq_secours:'Nearest emergency exit', proxEq_eau:'Nearest water point',
          proxEq_wc:'Nearest toilets', proxEq_dea:'Nearest defibrillator',
          proxEq_soins:'Nearest first aid post', proxEq_bebe:'Nearest baby change',
          proxCat_entrees:'Nearest entrance', proxCat_toilettes:'Nearest toilets',
          proxCat_secours:'Nearest first aid', proxCat_restauration:'Nearest place to eat',
          proxCat_services:'Nearest service',
          accesDeux:'In and out', accesEntree:'Entrance only',
          accesSortie:'Exit only', accesSecours:'Emergency exit',
          filtrerTitre:'Filter',
          voirCarte:'View the map', voirN:'View the map · {n} places',
          voirUn:'View the map · 1 place', voirZero:'No place matches these filters',
          voirAilleurs:'{n} in "{v}" →',
          nivN:'{n} places', nivUn:'1 place', nivVide:'Nothing with these filters',
          sansCarteT:'The map cannot be displayed',
          sansCarteM:'The programme, the search and the list of places are still available just below. Only the map background failed to load.',
          sansCarteB:'Reload the page',
          horsCoTitre:'You are viewing a saved version',
          horsCoTexte:'The network is congested or your connection did not allow the latest information to be retrieved. The map is showing data saved on your last visit.',
          ouvert:'Open', ferme:'Closed', fermeDans:'Closes in {n} min', fermeJusqu:'Closed, opens at {h}',
          routeBarree:'Road closed', pietonsOk:'Pedestrian access maintained', pietonsNon:'No access, including on foot',
          barreeParMoments:'Closed at times', barreePlusTard:'Later', barreePlages:'Closed',
          barreMaintenant:'Closed right now', barreEncore:'Reopens in {n} min',
          barreDes:'Open now, closed from {h}', barrePassante:'Open right now',
          seraBarree:'Will be closed {p}', duAu:'from {d} to {f}', aPartirDu:'from {d}', jusquAu:'until {f}',
          barreeAVenir:'Upcoming closure',
          emplacement:'Stand', standLibre:'Space available',
          urgenceTitre:'Safety notice', urgenceOu:'Where am I?', urgenceHorsLigne:'Keep the map offline',
          urgenceSorties:'Nearest exits and first aid',
          tymalIci:'Seen here', tymalMaintenant:'just now', tymalDepuis:'{n} min ago', tymalDepuisH:'{n} h ago',
          tymalIncertain:'This position has not been confirmed for over an hour: it has most likely moved.',
          tymalQuoi:'The Route du Rhum mascot roams the village. Its position is reported by the organisers.',

          horsCoVigilance:'Times, cancellations and notices may have changed since. Please check on site before travelling.',
          horsCoDate:'Last updated', horsCoReessayer:'Try again now',
          annonceRetiree:'A notice was hidden: it was over {h} h old and no longer reliable.',
          chargement:'Loading the map', chargeLent:'The network is busy, please wait.',
          chargeTresLent:'Lots of people on deck. The map is coming.',
          regimes:'Dietary options', classes:'Filter by class', resultatsPour:'Results for',
          partager:'Share this place', lienCopie:'Link copied',
          bateau:'Boat', skipperDe:'Skipper', voileNum:'Sail number', place:'berth',
          posteLibre:'Free berth', bateauAConfirmer:'Boat to be confirmed', partagerBateau:'Share this boat', etAmarre:'Moored', etAttendu:'Expected',
          etParti:'Departed', etAbsent:'Absent', flotte:'Fleet',
          fiche:'Place details',
          listeLieux:'List of places shown', lieuxAffiches:'{n} places shown',
          unLieuAffiche:'1 place shown', aucunLieuAffiche:'No place shown',
          vueAnnoncee:'View: {v}',
          pmrFiltre:'Accessible', pmrCourt:'Wheelchair access', pmrAide:'Only show wheelchair accessible places',
          pmrVide:'No accessible place listed at this scale',
          autour:'Near me', autourAide:'The closest services to my position',
          autourVide:'No service nearby in the families shown.',
          autourLocaliser:'Allow location to see what is around you.',
          autourTitre:'Near me', volDOiseau:'as the crow flies',
          itineraire:'Directions', effacerTrace:'Clear the line',
          capN:'north', capNE:'north-east', capE:'east', capSE:'south-east',
          capS:'south', capSO:'south-west', capO:'west', capNO:'north-west',
          pmr:'Wheelchair accessible', adresse:'Address',
          dates:'Open from', enSavoir:'Learn more', sousCat:'Type', photos:'Photos',
          infos:'Good to know', classes:'Boat classes', categorie:'Category',
          voirTout:'Show this category', geoArret:'Tracking stopped',
          chargeSecours:'Show the last saved version',
          contextePerdu:'The phone interrupted the display. Rebuilding…' }
  };

   
   
   
  




















  



  const POLICE_GRASSE = ['Noto Sans Bold'];
  const POLICE_NORMALE = ['Noto Sans Regular'];
  


  const PLANCHER_AMER = 64;
  




  




  const prefixeCommun = (noms) => {
    const l = (noms || []).filter(Boolean).map(n => String(n).trim().split(/\s+/));
    if (l.length < 2) return '';
    const out = [];
    for (let i = 0; i < l[0].length; i++) {
      const m = l[0][i];
      if (!l.every(x => x[i] === m)) break;
      out.push(m);
    }
    return out.length >= 2 ? out.join(' ') : '';
  };
  const EST_AMER = ['to-boolean', ['get', 'amer']];
  const PAS_AMER = ['!', EST_AMER];
  const BASE_FILTRE = {
    'poi-tap': PAS_AMER, 'poi-pt': PAS_AMER, 'poi-lib': PAS_AMER, 'poi-amer': EST_AMER
  };

  






  



  



  const LOGO_COURSE = "data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%22100%22%20width%3D%22100%22%3E%3Cg%3E%3Cpath%20fill%3D%22url(%23ee63fb4c-1830-4ba8-864e-80778395f02c_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M100%200H0v100h100z%22%2F%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M34.485%2030.557a18.7%2018.7%200%200%200-2.304-2.665l-.227-.222a11%2011%200%200%200-2.279-1.655c-1.257-.788-2.99-1.092-4.886-1.278%202.48%201.335%206.624%204.124%206.856%204.64.103%201.932-1.165%204.004-2.96%206.535-2.185%203.093-13.21%2013.974-15.252%2019.84-2.417%206.964.294%2010.702%202.377%2014.088a13.5%2013.5%200%200%200%203.092%203.418%2014%2014%200%200%200%201.944%201.288c1.546.835%202.17%201.35%203.845%201.34h.124a38%2038%200%200%201-6.593-4.035c-.114-1.269%201.345-2.712%202.062-4.124%202.268-4.48%2011.118-11.856%2014.799-18.346%201.546-2.696%203.062-4.876%203.185-9.226.108-4.547-3.18-8.902-3.783-9.598%22%2F%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M17.325%2049.2a44%2044%200%200%200-2.119%203.047h17.892a30%2030%200%200%200%201.948-3%20.2.2%200%200%201%200-.046zm14.232-20.19c.108%201.959-1.16%204.072-2.954%206.655-.139.19-.309.417-.515.67h9.608a19.2%2019.2%200%200%200-3.289-6.186%2018%2018%200%200%200-2.314-2.685l-.232-.227a10.8%2010.8%200%200%200-2.299-1.65c-1.263-.788-3-1.087-4.907-1.257%202.5%201.33%206.665%204.108%206.902%204.68m-4.856%2030.825H12.459c-.096.977-.077%201.96.056%202.933h11.573c.835-.943%201.7-1.923%202.613-2.933m-3.078-18.299h14.475c.062-.515.103-1.077.118-1.675q.014-.591-.04-1.18H26.107c-.742.86-1.588%201.824-2.485%202.855Zm-9.752%2013.077q-.296.627-.516%201.284a20%2020%200%200%200-.463%201.572h15.927c.83-.943%201.655-1.897%202.439-2.856H13.87Zm6.361%2013.367a17.6%2017.6%200%200%201%201.887-2.846h-9.026a26%2026%200%200%200%202.665%205.026%2013.6%2013.6%200%200%200%203.093%203.448%2014%2014%200%200%200%201.953%201.294%2010%2010%200%200%200%204.902%201.31.5.5%200%200%200%20.124%200%2037.2%2037.2%200%200%201-6.66-4.042%208.2%208.2%200%200%201%201.062-4.19m1.356-24.078c-.81.959-1.63%201.943-2.423%202.933h17.222c.505-.935.916-1.917%201.227-2.933z%22%2F%3E%3Cpath%20fill%3D%22url(%23b76e3fef-ee30-4f04-9bb7-be606762fe7c_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M12.165%2059.35c1.449%201.062%205.098%202.702%206.598%202.8a11.4%2011.4%200%200%201-5.423-1.593%204.2%204.2%200%200%201-1.175-1.206Z%22%2F%3E%3Cpath%20fill%3D%22url(%23fddb3550-482d-4de2-a1e4-ff7251f44c79_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M24.335%206.959a4.46%204.46%200%200%201%201.5%201.546c-.773-.825-4.464-2.7-6.933-3.093%202.113.263%204.041.645%205.433%201.547%22%2F%3E%3Cpath%20fill%3D%22url(%23c3cafdf6-f6b0-4c52-a86c-b43232003b96_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M18.902%2062.155h-.14c-1.5-.098-5.154-1.737-6.597-2.8a3.9%203.9%200%200%201-.578-1.824%2042.3%2042.3%200%200%200%207.315%204.624%22%2F%3E%3Cpath%20fill%3D%22url(%2328b2b744-eab8-4b02-b1fd-bc1d839f2242_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M26.392%2010.093q.066.316.077.639c-.252-.603-4.82-3.768-7.556-5.304%202.469.397%206.16%202.273%206.933%203.093.27.488.456%201.02.546%201.572%22%2F%3E%3Cpath%20fill%3D%22url(%23ef65524b-f297-4c02-acd0-001252a980c0_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M25.835%208.526a4.46%204.46%200%200%200-1.5-1.547%2012%2012%200%200%201%202.505%201.882l.253.258a6.77%206.77%200%200%201%201.984%204.309c.114%202.366-.593%204.49-2.309%207.14-3.866%205.979-15.876%2017.329-18.495%2022.68-2.706%205.551-2.69%207.938-.464%2011.958-2.247-3.794-5.19-8.005-2.33-15.66%202.418-6.453%2015-18.278%2017.526-21.649%202.062-2.763%203.536-5.03%203.464-7.175a4%204%200%200%200-.067-.64%204.9%204.9%200%200%200-.567-1.556%22%2F%3E%3Cpath%20fill%3D%22url(%237273e887-29b7-440b-b1cb-161465f93b4f_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M29.603%2012.098c.66.81%204.237%205.711%203.99%2010.727-.232%204.82-2%207.216-3.773%2010.15-4.263%207.102-14.33%2015.076-16.975%2019.989-.84%201.546-1.355%203.154-1.257%204.562.039.646.237%201.273.577%201.824.306.477.704.887%201.17%201.207a16%2016%200%200%201-2.144-1.475c-2.578-2.458-3.16-5.067-1.547-8.953%202.753-6.516%2014.531-16.995%2017.856-22.114%201.031-1.582%203.902-5.226%204.124-9.675.103-2.386-.882-4.546-2.02-6.242Z%22%2F%3E%3Cpath%20fill%3D%22url(%230932f294-0251-451e-9a6a-6cd24f2ff8dd_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M29.603%2012.098c1.14%201.696%202.124%203.856%202.01%206.242-.211%204.449-3.092%208.098-4.123%209.676-3.34%205.154-15.12%2015.598-17.856%2022.098-1.64%203.886-1.031%206.494%201.546%208.953a15.1%2015.1%200%200%201-3.37-3.86c-2.228-4.021-2.243-6.408.463-11.96%202.619-5.37%2014.629-16.721%2018.495-22.68%201.716-2.65%202.423-4.773%202.31-7.14a6.77%206.77%200%200%200-1.985-4.308c.93.91%201.77%201.908%202.51%202.979%22%2F%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M26.747%2059.789H12.505c-.1.976-.084%201.96.046%202.933h11.583c.82-.944%201.701-1.923%202.613-2.933%22%2F%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M54.407%2050.2h-.979v3.037h-2.19v-9.124h3.468c2.294%200%203.634%201.201%203.634%203.093a2.58%202.58%200%200%201-1.716%202.577l2.062%203.444h-2.578l-1.7-3.026Zm.444-1.747c.809%200%201.247-.402%201.247-1.17a1.114%201.114%200%200%200-1.263-1.216h-1.407v2.386zm9.02-4.546a4.743%204.743%200%201%201-4.81%204.743%204.59%204.59%200%200%201%204.81-4.743m0%207.413a2.68%202.68%200%201%200-2.608-2.67%202.51%202.51%200%200%200%202.608%202.67m13.789-2.176c0%202.753-1.588%204.248-3.974%204.248s-3.975-1.495-3.975-4.248v-5.056h2.217v4.99c0%201.546.598%202.242%201.783%202.242s1.79-.676%201.79-2.243v-4.99h2.159zm5.933-3.02v7.113h-2.191v-7.113h-2.789v-2.062h7.768v2.062zm3.82-2.036h6.65v2.062h-4.46v1.546h3.284v1.825h-3.284v1.654h4.52v2.062h-6.7l-.01-9.15ZM39.83%2055.943c2.727%200%204.809%201.85%204.809%204.603s-2.098%204.547-4.768%204.547h-3.923v-9.124zm-.114%207.088c1.356%200%202.722-.69%202.722-2.49%200-1.799-1.366-2.577-2.722-2.577H38.14v5.067zM53.623%2061c0%202.753-1.592%204.248-3.974%204.248-2.381%200-3.98-1.495-3.98-4.248v-5.057h2.217v4.995c0%201.547.603%202.237%201.79%202.237%201.185%200%201.783-.675%201.783-2.237v-4.995h2.164zm7.599%201.057h-.975v3.036h-2.19v-9.124h3.464c2.293%200%203.634%201.201%203.634%203.093a2.58%202.58%200%200%201-1.722%202.577l2.088%203.443h-2.578zm.443-1.748c.81%200%201.252-.402%201.252-1.17a1.118%201.118%200%200%200-1.262-1.216h-1.408v2.386zm10.392%201.175h-3.505v3.609H66.36v-9.124h2.19v3.443h3.506V55.97h2.19v9.124h-2.19v-3.609ZM83.474%2061c0%202.753-1.587%204.248-3.974%204.248-2.386%200-3.974-1.495-3.974-4.248v-5.057h2.216v4.995c0%201.547.598%202.237%201.784%202.237s1.783-.675%201.783-2.237v-4.995h2.165zm8.278%201.84v-3.247s-.453.835-.897%201.618l-.886%201.603h-1.227l-.887-1.577c-.453-.81-.886-1.629-.897-1.644h-.04v5.5h-2.191v-9.124h2.32l2.293%204.077h.041l2.304-4.077h2.232v9.124h-2.19z%22%2F%3E%3Cpath%20fill%3D%22%23FBDD00%22%20d%3D%22M31.005%2070.19c2.109%200%203.727%201.439%203.727%203.568s-1.624%203.5-3.716%203.5h-3V70.19h2.99Zm-.087%205.496c1.03%200%202.108-.516%202.108-1.928%200-1.413-1.062-1.964-2.108-1.964h-1.222v3.917zm4.52-5.496h5.155v1.604h-3.454v1.211h2.541v1.366h-2.546v1.294h3.5v1.546h-5.196v-7.02Zm7.372%204.867c.138.515.633.85%201.401.85.645%200%201.031-.221%201.031-.68%200-.675-.845-.634-1.711-.846-.959-.231-2.15-.675-2.15-2.17s1.088-2.16%202.67-2.16c1.444%200%202.475.588%202.866%201.846l-1.613.438a1.186%201.186%200%200%200-1.283-.799c-.645%200-.918.253-.918.624%200%20.598.68.685%201.665.892s2.19.644%202.19%202.164-1.03%202.18-2.741%202.18c-1.233%200-2.624-.37-3.032-1.906zm8.427-3.263v5.464h-1.696v-5.464h-2.16v-1.577h6.016v1.577zm2.897-1.604h1.716v7.068h-1.696l-.02-7.067Zm4.392%202.851h-.031v4.217h-1.696V70.19h1.716l3.005%204.123h.031v-4.139h1.696v7.083H61.52zm7.5%203.047-.428%201.17h-1.783l2.721-7.067h1.928l2.737%207.067h-1.814l-.428-1.17zm1.876-2.949c-.222-.582-.386-1.03-.397-1.03h-.026s-.175.443-.397%201.03l-.515%201.413h1.83zm6.351-1.345v5.464h-1.696v-5.464h-2.16v-1.577h6.015v1.577zm2.897-1.604h1.695v7.068H77.15zm6.123-.138a3.676%203.676%200%201%201-3.721%203.675%203.563%203.563%200%200%201%203.721-3.675m0%205.742a2.062%202.062%200%201%200-2.015-2.062%201.944%201.944%200%200%200%202.015%202.062m6.139-2.753h-.03v4.217h-1.676V70.19h1.717l3.005%204.123h.02v-4.139h1.696v7.083h-1.727zM32.86%2087.567v-.515a3.26%203.26%200%200%201-1.989.634%203.577%203.577%200%200%201-3.608-3.68%203.53%203.53%200%200%201%203.665-3.666%203.43%203.43%200%200%201%203.289%202.062l-1.676.454a1.88%201.88%200%200%200-1.696-.902c-1.139%200-1.876.85-1.876%202.062a1.943%201.943%200%200%200%202.062%202.061%202.24%202.24%200%200%200%201.799-.726v-.335h-1.804v-1.547h3.35v4.098zm8.48-3.149c0%202.128-1.226%203.288-3.092%203.288s-3.093-1.16-3.093-3.288V80.5h1.716v3.866c0%201.211.464%201.737%201.382%201.737s1.381-.515%201.381-1.737V80.5h1.675zm2.232%201.979-.422%201.17h-1.784l2.722-7.067h1.928l2.737%207.067h-1.82l-.422-1.17zm1.882-2.949c-.227-.582-.387-1.03-.397-1.03h-.031s-.17.443-.392%201.03l-.515%201.413h1.83zm6.86-2.948c2.108%200%203.727%201.438%203.727%203.567s-1.624%203.5-3.716%203.5h-3.016V80.5zm-.072%205.495c1.031%200%202.108-.516%202.108-1.928s-1.077-1.964-2.108-1.964h-1.237v3.918zm4.506-5.495h5.154v1.603h-3.474v1.211h2.577v1.366h-2.577v1.294h3.5v1.547h-5.18zm6.046%200h1.696v5.495h3.17v1.546h-4.866zm8.69-.14a3.675%203.675%200%201%201-3.721%203.676%203.556%203.556%200%200%201%203.721-3.675Zm0%205.743a2.062%202.062%200%201%200-2.02-2.062%201.94%201.94%200%200%200%202.02%202.062m10.619-1.685c0%202.128-1.232%203.288-3.093%203.288s-3.093-1.16-3.093-3.288V80.5h1.717v3.866c0%201.211.464%201.737%201.381%201.737.918%200%201.382-.515%201.382-1.737V80.5h1.675zM85.67%2080.5c1.732%200%202.784.923%202.784%202.433s-1.031%202.433-2.784%202.433h-.953v2.201h-1.691V80.5zm.047%203.392c.716%200%201.03-.371%201.03-.928s-.324-.918-1.03-.918h-1v1.846zm3.376-3.392h5.154v1.603h-3.453v1.211h2.546v1.366h-2.546v1.294h3.505v1.547h-5.206z%22%2F%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M5.99%2093.552c.041.32.33.577.845.577.412%200%20.675-.16.675-.516%200-.463-.474-.515-1.082-.623-.438-.098-.959-.273-.959-.954s.516-1.005%201.294-1.005%201.222.289%201.376.85l-.572.15c-.082-.304-.32-.49-.768-.49s-.665.16-.665.464.345.433.897.516c.443.087%201.14.257%201.14%201.03%200%20.774-.558%201.032-1.336%201.032-.572%200-1.289-.17-1.438-.933zm4.232.2-.304.815h-.66l1.35-3.459h.789l1.35%203.459h-.67l-.304-.814h-1.551Zm1.098-1.221c-.222-.598-.31-.871-.315-.882l-.335.918-.232.624h1.145zm2.747-1.423h.65v3.459h-.65zm4.67%203.459-1.763-2.464v2.464h-.634v-3.459h.665l1.763%202.418v-2.418h.65v3.459zm3.923-2.856v2.856h-.65V91.71h-1.175v-.603h2.995v.603h-1.17Zm2.453%201.377v-.573H27.5v.573zm7.057-.16v-.86l-.892%201.674h-.427l-.902-1.711v2.546h-.645V91.12h.773l.64%201.16c.221.401.345.67.35.67%200%200%20.14-.269.366-.676l.624-1.154h.727v3.458h-.614zm2.933.824-.299.815h-.665l1.356-3.459h.768l1.355%203.459h-.66l-.303-.814h-1.552Zm1.103-1.221c-.222-.598-.31-.871-.314-.882l-.335.918-.227.624h1.144zm2.748-1.423h.65v2.85h1.705v.604h-2.355zm5.196-.067a1.8%201.8%200%201%201-1.83%201.8%201.77%201.77%200%200%201%201.83-1.8m0%203a1.206%201.206%200%201%200-1.176-1.2%201.144%201.144%200%200%200%201.176%201.2m10.67.526v-.433a1.54%201.54%200%200%201-1.196.516%201.804%201.804%200%201%201%20.036-3.609%201.71%201.71%200%200%201%201.65%201.031l-.594.165a1.16%201.16%200%200%200-1.03-.593%201.13%201.13%200%200%200-1.196%201.212%201.17%201.17%200%200%200%201.273%201.211%201.46%201.46%200%200%200%201.077-.443v-.356h-1.052v-.577h1.583v1.892zm5.113-1.552c0%201.109-.582%201.624-1.546%201.624s-1.547-.515-1.547-1.624v-1.907h.665v1.97c0%20.654.284.963.877.963.592%200%20.876-.31.876-.964v-1.969h.644zm2.031.737-.304.815h-.655l1.35-3.459h.79l1.35%203.459h-.67l-.304-.814h-1.557Zm1.098-1.221c-.222-.598-.31-.871-.314-.882l-.33.918-.232.624h1.144zm4.015-1.423c1.114%200%201.923.655%201.923%201.742%200%201.088-.81%201.717-1.902%201.717h-1.289v-3.459zm0%202.856c.748%200%201.253-.346%201.253-1.114s-.516-1.139-1.273-1.139h-.614v2.248zm3.335-2.856h2.526v.603h-1.876v.794h1.417v.572h-1.417v.882h1.912v.603h-2.577zm4.047%200h.65v2.85h1.706v.604h-2.356zm5.195-.067a1.8%201.8%200%201%201-1.83%201.8%201.77%201.77%200%200%201%201.83-1.8m0%203a1.206%201.206%200%201%200-1.175-1.2%201.146%201.146%200%200%200%201.175%201.2m6.259-1.026c0%201.109-.583%201.624-1.547%201.624s-1.546-.515-1.546-1.624v-1.907h.66v1.97c0%20.654.288.963.881.963s.876-.31.876-.964v-1.969h.645l.03%201.907Zm2.803-1.907c.882%200%201.392.449%201.392%201.134%200%20.686-.515%201.129-1.392%201.129h-.577v1.196h-.65v-3.459zm0%201.722c.475%200%20.707-.227.707-.572%200-.346-.227-.578-.707-.578h-.597v1.15zm2.732-1.722h2.547v.603h-1.882v.794h1.418v.572h-1.418v.882h1.882v.603h-2.578zM48.17%2094.686l-.567-.052%202.031-3.294.546.041z%22%2F%3E%3Cdefs%20fill%3D%22none%22%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%2210.062%22%20x2%3D%22107.041%22%20y1%3D%2289.943%22%20x1%3D%22-7.046%22%20id%3D%22ee63fb4c-1830-4ba8-864e-80778395f02c_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%23006E78%22%20offset%3D%22.36%22%2F%3E%3Cstop%20stop-color%3D%22%23006669%22%20offset%3D%22.88%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%2260.748%22%20x2%3D%2218.763%22%20y1%3D%2260.748%22%20x1%3D%2212.165%22%20id%3D%22b76e3fef-ee30-4f04-9bb7-be606762fe7c_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%23632114%22%2F%3E%3Cstop%20stop-color%3D%22%23A93E1B%22%20offset%3D%22.57%22%2F%3E%3Cstop%20stop-color%3D%22%23B5421D%22%20offset%3D%22.6%22%2F%3E%3Cstop%20stop-color%3D%22%23DA4E24%22%20offset%3D%22.7%22%2F%3E%3Cstop%20stop-color%3D%22%23E85227%22%20offset%3D%22.76%22%2F%3E%3Cstop%20stop-color%3D%22%23F7B03E%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%226.072%22%20x2%3D%2218.995%22%20y1%3D%227.67%22%20x1%3D%2225.685%22%20id%3D%22fddb3550-482d-4de2-a1e4-ff7251f44c79_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%23053E1B%22%2F%3E%3Cstop%20stop-color%3D%22%233BA52B%22%20offset%3D%22.39%22%2F%3E%3Cstop%20stop-color%3D%22%2340A62A%22%20offset%3D%22.44%22%2F%3E%3Cstop%20stop-color%3D%22%234EA929%22%20offset%3D%22.61%22%2F%3E%3Cstop%20stop-color%3D%22%2352AB39%22%20offset%3D%22.73%22%2F%3E%3Cstop%20stop-color%3D%22%233BA530%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%233EA633%22%20offset%3D%22.87%22%2F%3E%3Cstop%20stop-color%3D%22%2348A93F%22%20offset%3D%22.92%22%2F%3E%3Cstop%20stop-color%3D%22%23078B46%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%2259.84%22%20x2%3D%2218.902%22%20y1%3D%2259.84%22%20x1%3D%2211.587%22%20id%3D%22c3cafdf6-f6b0-4c52-a86c-b43232003b96_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%230A1D31%22%2F%3E%3Cstop%20stop-color%3D%22%231C2972%22%20offset%3D%22.33%22%2F%3E%3Cstop%20stop-color%3D%22%231D2D76%22%20offset%3D%22.42%22%2F%3E%3Cstop%20stop-color%3D%22%231F3A82%22%20offset%3D%22.51%22%2F%3E%3Cstop%20stop-color%3D%22%23234F95%22%20offset%3D%22.6%22%2F%3E%3Cstop%20stop-color%3D%22%232766AB%22%20offset%3D%22.68%22%2F%3E%3Cstop%20stop-color%3D%22%23BECEE0%22%20offset%3D%22.84%22%2F%3E%3Cstop%20stop-color%3D%22%23B6C6D9%22%20offset%3D%22.85%22%2F%3E%3Cstop%20stop-color%3D%22%23A1AFC4%22%20offset%3D%22.88%22%2F%3E%3Cstop%20stop-color%3D%22%237E8AA3%22%20offset%3D%22.92%22%2F%3E%3Cstop%20stop-color%3D%22%234F5775%22%20offset%3D%22.96%22%2F%3E%3Cstop%20stop-color%3D%22%231A1E42%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%226.093%22%20x2%3D%2218.206%22%20y1%3D%229.629%22%20x1%3D%2226.866%22%20id%3D%2228b2b744-eab8-4b02-b1fd-bc1d839f2242_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%230A1D31%22%2F%3E%3Cstop%20stop-color%3D%22%234EA8D9%22%20offset%3D%22.33%22%2F%3E%3Cstop%20stop-color%3D%22%234AA7D9%22%20offset%3D%22.44%22%2F%3E%3Cstop%20stop-color%3D%22%233DA5D8%22%20offset%3D%22.56%22%2F%3E%3Cstop%20stop-color%3D%22%232AA2D7%22%20offset%3D%22.68%22%2F%3E%3Cstop%20stop-color%3D%22%23C2E2D8%22%20offset%3D%22.84%22%2F%3E%3Cstop%20stop-color%3D%22%23BBDAD5%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%23A6C3CB%22%20offset%3D%22.89%22%2F%3E%3Cstop%20stop-color%3D%22%23859EBC%22%20offset%3D%22.94%22%2F%3E%3Cstop%20stop-color%3D%22%23576BA8%22%20offset%3D%22.99%22%2F%3E%3Cstop%20stop-color%3D%22%234B5DA2%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%2217.727%22%20x2%3D%2235.149%22%20y1%3D%2242.794%22%20x1%3D%22-.66%22%20id%3D%22ef65524b-f297-4c02-acd0-001252a980c0_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%2398191B%22%2F%3E%3Cstop%20stop-color%3D%22%23B84A1D%22%20offset%3D%22.07%22%2F%3E%3Cstop%20stop-color%3D%22%23D3751F%22%20offset%3D%22.13%22%2F%3E%3Cstop%20stop-color%3D%22%23E79321%22%20offset%3D%22.19%22%2F%3E%3Cstop%20stop-color%3D%22%23F3A522%22%20offset%3D%22.24%22%2F%3E%3Cstop%20stop-color%3D%22%23F7AC22%22%20offset%3D%22.27%22%2F%3E%3Cstop%20stop-color%3D%22%23FBD725%22%20offset%3D%22.55%22%2F%3E%3Cstop%20stop-color%3D%22%23FBE25C%22%20offset%3D%22.62%22%2F%3E%3Cstop%20stop-color%3D%22%23FBEB88%22%20offset%3D%22.69%22%2F%3E%3Cstop%20stop-color%3D%22%23FBF1A7%22%20offset%3D%22.75%22%2F%3E%3Cstop%20stop-color%3D%22%23FBF5BA%22%20offset%3D%22.8%22%2F%3E%3Cstop%20stop-color%3D%22%23FBF6C1%22%20offset%3D%22.84%22%2F%3E%3Cstop%20stop-color%3D%22%23FBEF9C%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%23FBD723%22%20offset%3D%22.92%22%2F%3E%3Cstop%20stop-color%3D%22%23F8BD22%22%20offset%3D%22.95%22%2F%3E%3Cstop%20stop-color%3D%22%23F6AA22%22%20offset%3D%22.98%22%2F%3E%3Cstop%20stop-color%3D%22%23F5A322%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%224801.36%22%20x2%3D%223376.32%22%20y1%3D%226202.7%22%20x1%3D%22829.373%22%20id%3D%227273e887-29b7-440b-b1cb-161465f93b4f_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%230A1D31%22%2F%3E%3Cstop%20stop-color%3D%22%234EA8D9%22%20offset%3D%22.33%22%2F%3E%3Cstop%20stop-color%3D%22%234AA7D9%22%20offset%3D%22.44%22%2F%3E%3Cstop%20stop-color%3D%22%233DA5D8%22%20offset%3D%22.56%22%2F%3E%3Cstop%20stop-color%3D%22%232AA2D7%22%20offset%3D%22.68%22%2F%3E%3Cstop%20stop-color%3D%22%23C2E2D8%22%20offset%3D%22.84%22%2F%3E%3Cstop%20stop-color%3D%22%23BBDAD5%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%23A6C3CB%22%20offset%3D%22.89%22%2F%3E%3Cstop%20stop-color%3D%22%23859EBC%22%20offset%3D%22.94%22%2F%3E%3Cstop%20stop-color%3D%22%23576BA8%22%20offset%3D%22.99%22%2F%3E%3Cstop%20stop-color%3D%22%234B5DA2%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%224867.67%22%20x2%3D%223040.98%22%20y1%3D%225811.13%22%20x1%3D%22669.781%22%20id%3D%220932f294-0251-451e-9a6a-6cd24f2ff8dd_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%23053E1B%22%2F%3E%3Cstop%20stop-color%3D%22%233BA52B%22%20offset%3D%22.39%22%2F%3E%3Cstop%20stop-color%3D%22%2340A62A%22%20offset%3D%22.44%22%2F%3E%3Cstop%20stop-color%3D%22%234EA929%22%20offset%3D%22.61%22%2F%3E%3Cstop%20stop-color%3D%22%2352AB39%22%20offset%3D%22.73%22%2F%3E%3Cstop%20stop-color%3D%22%233BA530%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%233EA633%22%20offset%3D%22.87%22%2F%3E%3Cstop%20stop-color%3D%22%2348A93F%22%20offset%3D%22.92%22%2F%3E%3Cstop%20stop-color%3D%22%23078B46%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  const TYMAL_SVG = 'https://static.wixstatic.com/shapes/7bb303_83ec85561f9a491a821ec98cefcf2dac.svg';

   
  const CLASSES_FILTRE = ['ultim', 'ocean-fifty', 'imoca', 'class40', 'v-mono', 'v-multi'];
  const DRAPEAU = {
    ultim:         'https://static.wixstatic.com/shapes/7bb303_0ed87d76a89f4e6ebd6008778014958e.svg',
    'ocean-fifty': 'https://static.wixstatic.com/shapes/7bb303_0b5383f285c8470089ae854bc67b13b5.svg',
    class40:       'https://static.wixstatic.com/shapes/7bb303_b13535fe4621478fb5fb52e98c751b11.svg',
    imoca:         'https://static.wixstatic.com/shapes/7bb303_4420799ee09c4437a8c8d7aaf5cfbc4c.svg',
    'v-mono':      'https://static.wixstatic.com/shapes/7bb303_9b4ee8478c6b4453b668b04eb278406c.svg',
    'v-multi':     'https://static.wixstatic.com/shapes/7bb303_cc12f16ccf964c61b89d11ebfaf17b7f.svg'
  };

  






  const PICTO = {
    boat:'<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>',    
    door:'<path d="M11 20H2"/><path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"/><path d="M11 4H8a2 2 0 0 0-2 2v14"/><path d="M14 12h.01"/><path d="M22 20h-3"/>',    
    star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',    
    food:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',    
    wc:'<path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/><path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/>',    
    cross:'<path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"/>',    
    shop:'<path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/>',    
    bus:'<path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>',    
    parking:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>',    
    off:'<path d="M12 13v8"/><path d="M12 3v3"/><path d="M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z"/>',    
    boussole:'<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>',    
    info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',    
    pmr:'<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>',    
    fontaine:'<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',    
    bebe:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',    
    lavabo:'<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',    
    douche:'<path d="m4 4 2.5 2.5"/><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/><path d="M15 5 5 15"/><path d="M14 17v.01"/><path d="M10 16v.01"/><path d="M13 13v.01"/><path d="M16 10v.01"/><path d="M11 20v.01"/><path d="M17 14v.01"/><path d="M20 11v.01"/>',    
    assis:'<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/>',    
    emporter:'<path d="M12 3V2"/><path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"/><path d="M2 14h12a2 2 0 0 1 0 4h-2"/><path d="M4 10h16"/><path d="M5 10a7 7 0 0 1 14 0"/><path d="M5 14v6a1 1 0 0 1-1 1H2"/>',    
    boisson:'<path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"/><path d="M5 8h14"/><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/><path d="m12 8 1-6h2"/>',    
    cb:'<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',    
    recharge:'<path d="m11 7-3 5h4l-3 5"/><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"/><path d="M22 14v-4"/><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/>',    
    tri:'<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/>',    
    sortie:'<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',    
    controle:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',    
    secours:'<path d="M12 11v4"/><path d="M14 13h-4"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M18 6v14"/><path d="M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/>',    
    dea:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',    
    perdu:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',    
    trouve:'<path d="M12 22V12"/><path d="M20.27 18.27 22 20"/><path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/><circle cx="18.5" cy="16.5" r="2.5"/>',    
    velo:'<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',    
    tymal:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>'     
  };
  



  const IC = {
    fermer:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',    
    ranger:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/>',    
    loupe:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',    
    cible:'<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/>',    
    chemin:'<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',    
    oeil:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',    
    chevronG:'<path d="m15 18-6-6 6-6"/>',    
    chevronD:'<path d="m9 18 6-6-6-6"/>',    
    partage:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',    
    fleche:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',    
    telecharger:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',    
    horsCo:'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',    
    alerte:'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',    
    plus3:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',    
    reglages:'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',    
    calque:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',    
    horloge:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',    
    lieu:'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',     
    skipper:'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',    
    regle:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',    
    ancre:'<path d="M12 6v16"/><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"/><path d="M9 11h6"/><circle cx="12" cy="4" r="2"/>'    
  };
  















  const CUISINES = {
    'carne':       { libelle: 'Viande',      libelleEn: 'Meat',
      





      picto: '<path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/><circle cx="12.5" cy="8.5" r="2.5"/>' },
    'vege':        { libelle: 'Végétarien',  libelleEn: 'Vegetarian',
      picto: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>' },
    'poisson':     { libelle: 'Poisson',     libelleEn: 'Fish',
      picto: '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/>' },
    'gluten-free': { libelle: 'Sans gluten', libelleEn: 'Gluten free',
      picto: '<path d="m2 22 10-10"/><path d="m16 8-1.17 1.17"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"/><path d="M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"/><path d="M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"/><line x1="2" x2="22" y1="2" y2="22"/>' }
  };
  













  const LEXIQUE = {
    toilettes:    ['wc', 'toilette', 'toilettes', 'pipi', 'uriner', 'sanitaire', 'sanitaires', 'lavabo',
                   'urinoir', 'commodites', 'petit coin', 'bebe', 'langer', 'change', 'couche',
                   'eau', 'fontaine', 'boire eau', 'gourde', 'remplir', 'point d eau'],
    restauration: ['manger', 'restaurant', 'restau', 'resto', 'food', 'bouffe', 'faim', 'dejeuner',
                   'diner', 'snack', 'sandwich', 'crepe', 'galette', 'frite', 'pizza', 'burger',
                   'boire', 'bar', 'buvette', 'boisson', 'biere', 'cafe', 'vin', 'rhum', 'cocktail',
                   'terrasse', 'food truck', 'camion', 'gouter', 'glace'],
    secours:      ['secours', 'urgence', 'urgences', 'blesse', 'malade', 'mal', 'infirmerie',
                   'infirmier', 'medecin', 'docteur', 'pharmacie', 'medicament', 'croix rouge',
                   'pompier', 'defibrillateur', 'dea', 'premiers secours', 'police', 'gendarmerie',
                   'securite', 'pc securite', 'perdu', 'enfant perdu', 'objets trouves', 'objet trouve'],
    entrees:      ['entree', 'entrer', 'sortie', 'sortir', 'acces', 'porte', 'billet', 'billetterie',
                   'controle', 'guichet', 'ou entrer', 'ou sortir', 'evacuation'],
    parkings:     ['parking', 'parkings', 'garer', 'se garer', 'voiture', 'auto', 'stationnement',
                   'stationner', 'place de parking', 'pmr', 'handicape', 'depose minute'],
    mobilite:     ['navette', 'bus', 'car', 'gare', 'train', 'sncf', 'taxi', 'velo', 'transport',
                   'venir', 'comment venir', 'arret', 'station', 'bateau bus', 'ferry'],
    boutiques:    ['boutique', 'shop', 'magasin', 'souvenir', 'acheter', 'achat', 'cadeau', 'tee shirt',
                   't-shirt', 'casquette', 'goodies', 'officiel', 'exposant', 'stand', 'partenaire',
                   'librairie', 'livre', 'ciré', 'ciree', 'vetement'],
    animations:   ['animation', 'spectacle', 'concert', 'scene', 'show', 'activite', 'enfant',
                   'enfants', 'jeu', 'jeux', 'atelier', 'visite', 'baptême', 'bapteme', 'dedicace',
                   'exposition', 'expo', 'village enfants'],
    services:     ['information', 'info', 'infos', 'accueil', 'renseignement', 'point info',
                   'wifi', 'recharge', 'recharger', 'prise', 'batterie', 'telephone', 'poubelle',
                   'tri', 'dechet', 'recyclage', 'repos', 'assis', 'banc', 'fumeur', 'fumer',
                   'cigarette', 'banque', 'distributeur', 'dab', 'retrait', 'argent', 'consigne'],
    bateaux:      ['bateau', 'bateaux', 'voilier', 'ponton', 'quai', 'skipper', 'classe', 'flotte',
                   'imoca', 'ultim', 'class40', 'ocean fifty', 'rhum mono', 'multi', 'trimaran',
                   'monocoque', 'coque', 'voile', 'numero de voile'],
    off:          ['off', 'off du rhum', 'ailleurs', 'autour', 'dinard', 'cancale', 'alentour'],
    tymal:        ['tymal', 'timal', 'mascotte', 'peluche', 'personnage', 'ou est tymal']
  };
  



































  const EQUIPEMENTS = {
    toilettes: [
      { cle: 'wc',      libelle: 'Toilettes',            libelleEn: 'Toilets',            picto: 'wc',       id: 1 },
      { cle: 'pmr',     libelle: 'Accessible PMR',       libelleEn: 'Wheelchair access',  picto: 'pmr' },
      { cle: 'bebe',    libelle: 'Table à langer',       libelleEn: 'Baby change',        picto: 'bebe',     id: 1 },
      { cle: 'eau',     libelle: 'Eau potable',          libelleEn: 'Drinking water',     picto: 'fontaine', id: 1 },
      { cle: 'douche',  libelle: 'Douches',              libelleEn: 'Showers',            picto: 'douche',   id: 1 },
      { cle: 'lavabo',  libelle: 'Lavabos',              libelleEn: 'Washbasins',         picto: 'lavabo' }
    ],
     
     
    restauration: [
      { cle: 'assis',    libelle: 'Places assises',      libelleEn: 'Seating',            picto: 'assis' },
      { cle: 'emporter', libelle: 'À emporter',          libelleEn: 'Takeaway',           picto: 'emporter' },
      { cle: 'boisson',  libelle: 'Boissons',            libelleEn: 'Drinks',             picto: 'boisson' },
      { cle: 'cb',       libelle: 'Carte bancaire',      libelleEn: 'Card accepted',      picto: 'cb' },
      { cle: 'pmr',      libelle: 'Accessible PMR',      libelleEn: 'Wheelchair access',  picto: 'pmr' }
    ],
    services: [
      { cle: 'info',     libelle: 'Point information',   libelleEn: 'Information',        picto: 'info',     id: 1 },
      { cle: 'tri',      libelle: 'Tri des déchets',     libelleEn: 'Waste sorting',      picto: 'tri',      id: 1 },
      { cle: 'assis',    libelle: 'Espace de repos',     libelleEn: 'Rest area',          picto: 'assis',    id: 1 },
      { cle: 'recharge', libelle: 'Recharge téléphone',  libelleEn: 'Phone charging',     picto: 'recharge' },
      { cle: 'cb',       libelle: 'Distributeur',        libelleEn: 'Cash machine',       picto: 'cb' },
      { cle: 'pmr',      libelle: 'Accessible PMR',      libelleEn: 'Wheelchair access',  picto: 'pmr' }
    ],
    entrees: [
      { cle: 'entree',   libelle: 'Entrée',              libelleEn: 'Entrance',           picto: 'door',     id: 1 },
      { cle: 'sortie',   libelle: 'Sortie',              libelleEn: 'Exit',               picto: 'sortie',   id: 1 },
      { cle: 'secours',  libelle: 'Sortie de secours',   libelleEn: 'Emergency exit',     picto: 'sortie',   id: 1 },
      { cle: 'pmr',      libelle: 'Accessible PMR',      libelleEn: 'Wheelchair access',  picto: 'pmr' },
      { cle: 'controle', libelle: 'Contrôle des sacs',   libelleEn: 'Bag check',          picto: 'controle' }
    ],
    


    secours: [
      { cle: 'soins',    libelle: 'Poste de soins',      libelleEn: 'First aid',          picto: 'secours',  id: 1 },
      { cle: 'police',   libelle: 'Forces de l\'ordre',  libelleEn: 'Police',             picto: 'secours',  id: 1 },
      { cle: 'dea',      libelle: 'Défibrillateur',      libelleEn: 'Defibrillator',      picto: 'dea',      id: 1 },
      { cle: 'perdu',    libelle: 'Enfants perdus',      libelleEn: 'Lost children',      picto: 'perdu',    id: 1 },
      { cle: 'trouve',   libelle: 'Objets trouvés',      libelleEn: 'Lost property',      picto: 'trouve',   id: 1 }
    ],
     
     
    parkings: [
      { cle: 'pmr',      libelle: 'Places PMR',          libelleEn: 'Accessible bays',    picto: 'pmr' },
      { cle: 'velo',     libelle: 'Stationnement vélo',  libelleEn: 'Bike parking',       picto: 'velo' },
      { cle: 'recharge', libelle: 'Borne électrique',    libelleEn: 'EV charging',        picto: 'recharge' },
      { cle: 'depose',   libelle: 'Dépose-minute',       libelleEn: 'Drop-off',           picto: 'bus' }
    ]
  };
  



  const EQUIP_TOUS = (() => {
    const m = new Map();
    Object.keys(EQUIPEMENTS).forEach(k => EQUIPEMENTS[k].forEach(e => { if (!m.has(e.cle)) m.set(e.cle, e); }));
    return m;
  })();
  




  






  const EQUIP_COMMUNS = ['bebe', 'eau', 'wc', 'assis', 'pmr'];
  const equipOfferts = (cat) => {
    const l = (EQUIPEMENTS[cat] || []).slice();
    const vus = new Set(l.map(e => e.cle));
    EQUIP_COMMUNS.forEach(c => { if (!vus.has(c) && EQUIP_TOUS.has(c)) { vus.add(c); l.push(EQUIP_TOUS.get(c)); } });
    return l;
  };
  













  const MOTS_EQUIP = {
    eau:      ['eau', 'point d eau', 'points d eau', 'fontaine', 'fontaines', 'robinet', 'gourde',
               'remplir', 'soif', 'eau potable', 'water', 'drinking water'],
    wc:       ['wc', 'toilette', 'toilettes', 'sanitaire', 'sanitaires', 'pipi', 'uriner', 'urinoir',
               'petit coin', 'commodites', 'toilets', 'restroom'],
    pmr:      ['pmr', 'handicape', 'handicap', 'fauteuil', 'fauteuil roulant', 'accessible',
               'accessibilite', 'mobilite reduite', 'wheelchair'],
    bebe:     ['bebe', 'langer', 'table a langer', 'change', 'couche', 'nourrisson', 'baby'],
    lavabo:   ['lavabo', 'lavabos', 'se laver les mains', 'savon', 'washbasin'],
    douche:   ['douche', 'douches', 'shower'],
    assis:    ['assis', 's asseoir', 'banc', 'bancs', 'chaise', 'repos', 'se reposer', 'pause',
               'seating', 'sit'],
    emporter: ['a emporter', 'emporter', 'take away', 'takeaway'],
    boisson:  ['boire', 'boisson', 'boissons', 'bar', 'buvette', 'biere', 'cocktail', 'apero',
               'soif', 'drink', 'drinks'],
    cb:       ['carte bancaire', 'cb', 'carte bleue', 'paiement', 'payer', 'sans contact',
               'distributeur', 'dab', 'retrait', 'argent', 'especes', 'card'],
    info:     ['information', 'informations', 'info', 'infos', 'accueil', 'renseignement',
               'point info', 'help desk'],
    recharge: ['recharge', 'recharger', 'charger', 'prise', 'batterie', 'chargeur', 'usb',
               'borne', 'charging'],
    tri:      ['tri', 'poubelle', 'poubelles', 'dechet', 'dechets', 'recyclage', 'trier'],
    entree:   ['entree', 'entrer', 'ou entrer', 'entrance'],
    sortie:   ['sortie', 'sortir', 'ou sortir', 'exit'],
    secours:  ['sortie de secours', 'issue de secours', 'evacuation', 'emergency exit'],
    controle: ['controle', 'fouille', 'controle des sacs', 'bag check'],
    soins:    ['soins', 'infirmerie', 'infirmier', 'medecin', 'docteur', 'blesse', 'malade',
               'premiers secours', 'croix rouge', 'first aid'],
    dea:      ['defibrillateur', 'dea', 'dae', 'arret cardiaque', 'defibrillator'],
    perdu:    ['enfant perdu', 'enfants perdus', 'perdu', 'egare', 'lost child'],
    trouve:   ['objets trouves', 'objet trouve', 'j ai perdu', 'lost property'],
    police:   ['police', 'gendarmerie', 'forces de l ordre', 'pc securite'],
    velo:     ['velo', 'velos', 'bicyclette', 'arceau', 'bike'],
    depose:   ['depose minute', 'depose', 'deposer', 'drop off']
  };
  const svg = (d, cls) => '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';

  





















  const MESURE_LOT_MAX = 60;           
  const MESURE_DELAI = 5 * 60 * 1000;  

  const creerMesure = (hote) => {
    




    const refus = () => {
      try {
        if (hote.getAttribute('mesure') === '0') return true;
        if (navigator.globalPrivacyControl === true) return true;
        const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
        return dnt === '1' || dnt === 'yes';
      } catch (e) { return true; }    
    };

    const faits = new Map();
    let minuteur = 0, parti = false, contexte = null;

     
     
    const decrireAppareil = () => {
      try {
        const fin = matchMedia('(pointer:fine)').matches;
        const l = innerWidth;
        return l < 600 ? 'mobile' : (l < 1024 ? (fin ? 'bureau' : 'tablette') : 'bureau');
      } catch (e) { return 'inconnu'; }
    };

    const preparerContexte = () => {
      const d = new Date();
      return { appareil: decrireAppareil(), lang: hote._lang || 'fr',
               heure: d.getHours(), jourSemaine: d.getDay(),
                
                
               date: d.toISOString().slice(0, 10) };
    };

    const envoyer = (raison) => {
      if (!faits.size || refus()) { faits.clear(); return; }
      const lot = { v: 1, source: 'carte-village', raison,
                    contexte: contexte || (contexte = preparerContexte()),
                    faits: [...faits.entries()].map(([c, n]) => {
                      const i = c.indexOf('|');
                      return { type: c.slice(0, i), cle: c.slice(i + 1), n };
                    }) };
      faits.clear();
      clearTimeout(minuteur); minuteur = 0;
       
      hote._emit('vm-stats', lot);
      const url = ((hote._p && hote._p.config && hote._p.config.mesure) || {}).url;
      if (!url) return;
      const corps = JSON.stringify(lot);
      try {
        



        if (navigator.sendBeacon && navigator.sendBeacon(url, new Blob([corps], { type: 'text/plain;charset=UTF-8' }))) return;
        fetch(url, { method: 'POST', body: corps, keepalive: true, headers: { 'Content-Type': 'text/plain' } }).catch(() => {});
      } catch (e) {   }
    };

    const noter = (type, cle) => {
      if (parti || refus()) return;
      if (!contexte) contexte = preparerContexte();
      const c = type + '|' + String(cle == null ? '' : cle).slice(0, 48);
      faits.set(c, (faits.get(c) || 0) + 1);
      if (faits.size >= MESURE_LOT_MAX) { envoyer('lot-plein'); return; }
       
      if (!minuteur) minuteur = setTimeout(() => envoyer('delai'), MESURE_DELAI);
    };

    


    const auDepart = () => envoyer('depart');
    const auMasquage = () => { if (document.visibilityState === 'hidden') envoyer('masquage'); };
    addEventListener('pagehide', auDepart);
    document.addEventListener('visibilitychange', auMasquage);

    return {
      noter,
       
       
      terme: (q) => String(q || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 32),
      arreter: () => {
        parti = true;
        envoyer('demontage');
        removeEventListener('pagehide', auDepart);
        document.removeEventListener('visibilitychange', auMasquage);
        clearTimeout(minuteur);
      }
    };
  };


  class VillageMap extends HTMLElement {
    constructor() {
      super();
      this._p = null;             
      this._lang = 'fr';
      this._map = null;
      this._actives = null;       
      this._jour = null;          
      this._poiOuvert = null;
      this._geoMarqueur = null;
      this._prete = false;
    }

     
     
    







    static get observedAttributes() { return ['payload', 'lang', 'mesure', 'memoire']; }
    attributeChangedCallback(n, _, v) {
      if (n === 'payload') {
         
         
        try { this._p = this._assainir(JSON.parse(v || 'null')); } catch { this._p = null; }
         
         
        if (this._p) { memoriser(this._p); this._fraicheur = { source: 'direct', le: new Date().toISOString() }; }
        this._monter();
      }
      if (n === 'lang') { this._lang = v === 'en' ? 'en' : 'fr'; this._monter(); }
      

      if (n === 'memoire' && v !== null && !this._p) {
        this._arreterChargement();
        if (!this.utiliserMemoire()) this._monter();
      }
    }
    connectedCallback() {
      if (!this._mesure) this._mesure = creerMesure(this);
      






      if (typeof window.__vmMapLibre === 'function') {
        window.__vmMapLibre().catch(() => {
          this._moteurPerdu = true;
          if (this.isConnected) this._monter();
        });
      }
      this._monter();
    }
    disconnectedCallback() {
      clearInterval(this._batt);
      clearInterval(this._battTymal);
      if (this._roLarge) { this._roLarge.disconnect(); this._roLarge = null; }
      



      if (this._surRailFiltres) {
        const f = this.querySelector('.vm__filtres');
        if (f) f.removeEventListener('scroll', this._surRailFiltres);
        this._surRailFiltres = null;
      }
      this._viderHalos();
       
      this._reposer = null;
      if (this._map) { this._map.remove(); this._map = null; }
      if (this._onKey) { document.removeEventListener('keydown', this._onKey); this._onKey = null; }
      



      if (this._onVisible) { document.removeEventListener('visibilitychange', this._onVisible); this._onVisible = null; }
      this.arreterLocalisation();
      if (this._mesure) { this._mesure.arreter(); this._mesure = null; }
      if (this._roCoins) { this._roCoins.disconnect(); this._roCoins = null; }
      if (this._moCoins) { this._moCoins.disconnect(); this._moCoins = null; }
      if (this._onVisibleCoins) { document.removeEventListener('visibilitychange', this._onVisibleCoins); this._onVisibleCoins = null; }
       
      [this._tCharge, this._tMode, this._tTuiles, this._tRechMesure, this._tCoins1, this._tCoins2, this._tCoins3, this._tCoinsMut].forEach(t => clearTimeout(t));
      if (this._progAttente) { cancelAnimationFrame(this._progAttente); this._progAttente = 0; }
      this._tCharge = this._tMode = this._tTuiles = this._tRechMesure = null;
      this._prete = false;
    }

    _t(k) { return (T[this._lang] || T.fr)[k]; }
    _esc(s) { return escAttr(s); }
    













    _repli(html, parent) {
      return ' onerror="var n=this' + (parent ? '.parentNode' : '') + ';n.outerHTML=this.dataset.r"' +
             ' data-r="' + this._esc(html || '') + '"';
    }
     
     
    _cat(cle) { return (this._p.categories || []).find(c => c.cle === cle) || { couleur: C.ink, picto:'star', libelle: cle }; }
     
     
    _libCat(c) { return (this._lang === 'en' && c.libelleEn ? c.libelleEn : c.libelle) || c.cle || ''; }

    






    







    _coins(c) {
      if (!c || !Array.isArray(c.centre) || !Number.isFinite(+c.largeurM)) return null;
      const [lng, lat] = c.centre;
      const rad = (c.rotationDeg || 0) * Math.PI / 180;
      const mLng = 111320 * Math.cos(lat * Math.PI / 180), mLat = 110540;
      




      const a = c.largeurM / 2, b = (c.largeurM / (c.ratio || 0.684)) / 2;    
       
      return [[-a, b], [a, b], [a, -b], [-a, -b]].map(([x, y]) => {
        const xr = x * Math.cos(rad) - y * Math.sin(rad);
        const yr = x * Math.sin(rad) + y * Math.cos(rad);
        return [lng + xr / mLng, lat + yr / mLat];
      });
    }
     
    recalerPlan(patch) {
      const cfg = (this._p && this._p.config) || {};
      cfg.planCalage = Object.assign({}, cfg.planCalage, patch);
      const s = this._map && this._map.getSource('plan');
      const coins = this._coins(cfg.planCalage);
      if (s && coins) s.setCoordinates(coins);
      return cfg.planCalage;
    }

    






    _remettreAZero() {
      










      ['_marqPontons', '_cartesLogo', '_cartesStand'].forEach(k => {
        (this[k] || []).forEach(m => { try { m.remove(); } catch (e) {} });
        this[k] = [];
      });
       
      ['_marqDepart', '_tymalM', '_avant', '_echo'].forEach(k => {
        if (this[k]) { try { this[k].remove(); } catch (e) {} this[k] = null; }
      });
      this._apercuSuit = false; this._apercuAncre = null;
      this._geoMarqueur = null; this._logosOn = undefined;
      this._choixVue = false; this._flotteVive = false;
      this._carteSurvolee = null; this._planSignale = false;
      this._tymalM = null;
    }
    





    _lancerCarte() {
      let p;
      try { p = this._initCarte(); } catch (e) { this._echecCarte(e); return; }
      if (p && typeof p.catch === 'function') p.catch(e => this._echecCarte(e));
    }
    _echecCarte(e) {
      this._incident('construction de la carte', e);
      this._arreterChargement();
      this._alertePlan(this._t('tuilesKO'));
    }
    _monter() {
      if (!this._p || !this.isConnected) return;
       
       
       
      this._jeton = (this._jeton || 0) + 1;
      this._viderHalos();
      if (this._map) { this._map.remove(); this._map = null; this._prete = false; }
      

















      this._reposer = null;
       
      this._surRailFiltres = null;
      















      









      this._sansMoteur = this._moteurPerdu === true;
      this.innerHTML = this._css() + this._coque();
      this._brancherUI();
       
       
       
       
       
       
      this._peupler();
      this._demarrerChargement();
      this._majFraicheur();
      



      if (this._sansMoteur) { this._modeSansCarte(); return; }
      const be = this.querySelector('#vmEtat');
      if (be) be.addEventListener('click', () => {
        const v = this.querySelector('#vmEtatV');
        if (v && v.hidden) { this._ouvrirEtat(); be.setAttribute('aria-expanded', 'true'); }
        else { this._fermerEtat(); be.setAttribute('aria-expanded', 'false'); }
      });
      


      




      


      const champR = this.querySelector('#vmRech');
      if (champR && this.clientWidth < 480) champR.placeholder = this._t('rechercheCourt');

      


      const cf0 = (this._p.config || {}).coinsFlottants;
      this._coinsFiges = cf0 === false || cf0 === 0 || (cf0 && typeof cf0 === 'object' && cf0.auto === false);
      this._suivreCoins();

      const co = navigator.connection;
      const nav0 = (performance.getEntriesByType('navigation') || [])[0];
      const lentMesure = !!(nav0 && nav0.responseEnd > 3000);
      if ((co && (co.saveData || /^(slow-)?2g$/.test(co.effectiveType || ''))) || lentMesure) {
        this._reseauLent = true;
        this._p.config.planActif = false;
      }
      this._majUrgent();
      this._majUrgence();
      this._remettreAZero();
      this._lancerCarte();
    }

    _coque() {
      const p = this._p, cats = (p.categories || []).slice().sort((a, b) => (a.ordre || 0) - (b.ordre || 0));
      







      return '<div class="vm' + (this._encadreDemande() ? ' est-encadre' : '') + '">' +
        '<div class="vm__carte" id="vmCarte"></div>' +
        








        '<nav class="vm__a11y" id="vmA11y" aria-label="' + this._esc(this._t('listeLieux')) + '"></nav>' +
         
         
        '<p class="vm__annonce" id="vmAnnonce" role="status" aria-live="polite"></p>' +

         
         
         
        '<div class="vm__fetat" id="vmFiltreEtat" hidden></div>' +
        '<div class="vm__filtres" id="vmFiltres" data-titre="' + this._esc(this._t('filtresTitre')) + '">' +
          





          '<button class="vm__etat" id="vmEtat" hidden></button>' +
          






          




          



          '<p class="vm__fsect">' + this._esc(this._t('filtrerTitre')) + '</p>' +
          '<button class="vm__pj" id="vmProgJour" aria-pressed="false" title="' + this._esc(this._t('progJourAide')) + '">' +
            svg(IC.horloge, 'vm__pjico') +
            '<span class="vm__pjl">' + this._esc(this._t('progJour')) + '</span>' +
            '<span class="vm__pjc">' + this._esc(this._t('progJourCourt') || this._t('progJour')) + '</span>' +
            '<b id="vmProgJourN"></b></button>' +
          


          '<button class="vm__pj vm__pmr" id="vmPmr" aria-pressed="false" title="' + this._esc(this._t('pmrAide')) + '">' +
            svg(PICTO.pmr, 'vm__pjico') + '<span>' + this._esc(this._t('pmrFiltre')) + '</span>' +
            '<b id="vmPmrN"></b></button>' +
          '<div class="vm__ftete">' +
            '<button class="vm__f vm__f--tout is-on" data-cat="__tout" aria-pressed="true">' + this._esc(this._t('tout')) + '</button>' +
            '<button class="vm__raz" id="vmRaz" title="' + this._esc(this._t('reinit')) + '">' + this._esc(this._t('reinit')) + '</button>' +
          '</div>' +
          



          



          








          












          '<div class="vm__ffam">' +
          cats.map(c => (c.cle === 'restauration' || (c.cle === 'bateaux' && CLASSES_FILTRE.length) ? '<span class="vm__frang">' : '') +
            '<button class="vm__f is-on" aria-pressed="true" data-cat="' + this._esc(c.cle) + '" style="--c:' + couleurSure(c.couleur) + '">' +
            svg(PICTO[c.picto] || PICTO.star, 'vm__fic') + '<span>' + this._esc(this._libCat(c)) + '</span>' +
            '</button>' +
            (c.cle === 'restauration'
              ? '<button type="button" class="vm__fplus" aria-expanded="false" aria-controls="vmCuis" aria-label="' +
                this._esc(this._t('regimes')) + '" title="' + this._esc(this._t('regimes')) + '">+</button></span>' : '') +
            



            (c.cle === 'bateaux' && CLASSES_FILTRE.length
              ? '<button type="button" class="vm__fplus" aria-expanded="false" aria-controls="vmClasses" aria-label="' +
                this._esc(this._t('classes')) + '" title="' + this._esc(this._t('classes')) + '">+</button></span>' : '') +
            (c.cle === 'bateaux' && CLASSES_FILTRE.length
              ? '<div class="vm__cuisines vm__classes" id="vmClasses" hidden>' + CLASSES_FILTRE.map(k =>
                  '<button data-classe="' + k + '" aria-pressed="false" title="' + this._esc(this._libClasse(k)) + '" style="--c:' + couleurSure(this._couleurClasse(k), C.teal) + '">' +
                  '<img src="' + this._esc(DRAPEAU[k]) + '" alt="" loading="lazy"><span>' + this._esc(this._libClasse(k)) + '</span></button>').join('') + '</div>'
              : '') +
            (c.cle === 'restauration'
              ? '<div class="vm__cuisines" id="vmCuis" hidden>' + Object.entries(CUISINES).map(([k, v]) =>
                  '<button data-cuis="' + k + '" aria-pressed="false" title="' + this._esc(this._lang === 'en' ? v.libelleEn : v.libelle) + '">' +
                  svg(v.picto, 'vm__cico') + '<span>' + this._esc(this._lang === 'en' ? v.libelleEn : v.libelle) + '</span></button>').join('') + '</div>'
              : '')).join('') + '</div>' +
          (urlSure(p.config.pdfUrl) ? '<a class="vm__pdf" href="' + this._esc(urlSure(p.config.pdfUrl)) + '" target="_blank" rel="noopener noreferrer">' + this._esc(this._t('plan')) + '</a>' : '') +
          





          '<button class="vm__fok" id="vmFiltresOk" type="button"></button>' +
        '</div>' +

         
        '<div class="vm__outils">' +
          






          '<button class="vm__rechbt" id="vmRechBt" type="button" aria-label="' +
            this._esc(this._t('rechercheLong')) + '">' + svg(IC.loupe) + '</button>' +
          '<div class="vm__rech" id="vmRechZone">' +
            '<button class="vm__rechx" id="vmRechX" type="button" aria-label="' +
              this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button>' +
            svg(IC.loupe, 'vm__rico') +
             
             
            '<input type="search" id="vmRech" placeholder="' + this._esc(this._t('recherche')) +
              '" aria-label="' + this._esc(this._t('rechercheLong')) + '" autocomplete="off"' +
              

              ' role="combobox" aria-expanded="false" aria-controls="vmRes" aria-autocomplete="list">' +
            






        




        '<div class="vm__res" id="vmRes" role="listbox" aria-label="' +
          this._esc(this._t('resultatsListe')) + '" hidden></div>' +
          '</div>' +
          '<button class="vm__geo" id="vmGeo" data-lib="' + this._esc(this._t('libPos')) + '" aria-label="' + this._esc(this._t('melocaliser')) + '" title="' + this._esc(this._t('melocaliser')) + '">' + svg(IC.cible, 'vm__gico') + '</button>' +
          



          '<button class="vm__geo vm__au" id="vmAutour" data-lib="' + this._esc(this._t('libAutour')) + '" title="' + this._esc(this._t('autour')) + '" aria-label="' + this._esc(this._t('autour')) + '">' +
            svg(PICTO.boussole, 'vm__gico') + '</button>' +
          '<button class="vm__geo vm__hl" id="vmHL" data-lib="' + this._esc(this._t('libHorsCo')) + '" title="' + this._esc(this._t('horsLigne')) + '" aria-label="' + this._esc(this._t('horsLigne')) + '">' +
            svg(IC.telecharger, 'vm__gico') + '<i id="vmHLn"></i></button>' +
          






          






          ((p.config.planUrl) ? '<button class="vm__geo vm__vue" id="vmVue" aria-pressed="false" title="' + this._esc(this._t('vuePlan')) + '" aria-label="' + this._esc(this._t('vuePlan')) + '">' + svg(IC.calque, 'vm__gico') + '</button>' : '') +
          



          









          '<button class="vm__geo vm__acc vm__accV" id="vmAccVues" data-lib="' + this._esc(this._t('libVues')) + '" type="button" aria-expanded="false"' +
            ' aria-controls="vmNiveaux" title="' + this._esc(this._t('niveaux')) + '"' +
            ' aria-label="' + this._esc(this._t('niveaux')) + '">' + svg(IC.calque, 'vm__gico') + '</button>' +
          





          '<button class="vm__geo vm__acc vm__accP" id="vmAccPlus" type="button" aria-expanded="false"' +
            ' aria-controls="vmPlusF" data-lib="' + this._esc(this._t('libPlus')) + '"' +
            ' aria-label="' + this._esc(this._t('libPlus')) + '">' + svg(IC.plus3, 'vm__gico') + '</button>' +
          '<button class="vm__geo vm__acc vm__accF" id="vmAccFiltres" data-lib="' + this._esc(this._t('libFiltres')) + '" type="button" aria-expanded="false"' +
            ' aria-controls="vmFiltres" title="' + this._esc(this._t('filtrer')) + '"' +
            ' aria-label="' + this._esc(this._t('filtrer')) + '">' + svg(IC.reglages, 'vm__gico') +
            '<i class="vm__accn" id="vmAccFiltresN" hidden></i></button>' +
          ((p.config.vues || []).length > 1 ? '<div class="vm__niveaux" id="vmNiveaux" role="group" data-titre="' + this._esc(this._t('vuesTitre')) + '" aria-label="' + this._esc(this._t('niveaux')) + '">' +
            




            p.config.vues.map(v => {
              const en = this._lang === 'en';
              const lg = en && v.libelleEn ? v.libelleEn : v.libelle;
              const ct = (en ? (v.libelleCourtEn || v.libelleCourt) : v.libelleCourt) || lg;
              



              const ico = ({ village: IC.lieu, acces: PICTO.bus, off: PICTO.off })[v.cle] || IC.calque;
              return '<button class="vm__niv" data-vue="' + this._esc(v.cle) + '">' +
                '<span class="vm__nivi" aria-hidden="true">' + svg(ico) + '</span>' +
                '<span class="vm__nivt">' +
                  '<span class="vm__nivL">' + this._esc(lg) + '</span>' +
                  '<span class="vm__nivC">' + this._esc(ct) + '</span>' +
                  


                  '<i class="vm__nivn"></i>' +
                '</span></button>';
            }).join('') +
          '</div>' : '') +
        '</div>' +

         
        








        '<button class="vm__prgrange" id="vmProgRange" type="button" hidden' +
          ' aria-label="' + this._esc(this._t('progOuvrir')) + '"' +
          ' title="' + this._esc(this._t('progOuvrir')) + '">' +
          svg(IC.horloge, 'vm__prgrico') +
          '<span class="vm__prgrnb" id="vmProgRangeNb" hidden></span></button>' +
        '<aside class="vm__prog" id="vmProg">' +
          



          '<button class="vm__prgbasc" id="vmProgBasc" type="button" aria-expanded="false">' +
            '<span class="vm__prggrip" aria-hidden="true"></span>' +
            '<em id="vmProgBascT">' + this._esc(this._t('progTitre')) + '</em>' +
            '<span class="vm__prgnb" id="vmProgNb" hidden></span>' +
            '<span class="vm__prgcar" aria-hidden="true"></span>' +
          '</button>' +
          







          '<div class="vm__proghead">' +
            '<div class="vm__jgrp">' +
              '<button class="vm__jnav" data-j="-1" aria-label="' + this._esc(this._t('jourPrec')) + '">' + svg(IC.chevronG) + '</button>' +
              '<span id="vmJour"></span>' +
              '<button class="vm__jnav" data-j="1" aria-label="' + this._esc(this._t('jourSuiv')) + '">' + svg(IC.chevronD) + '</button>' +
            '</div>' +
             
             
            '<button class="vm__prgx" id="vmProgX" type="button" aria-label="' +
              this._esc(this._t('progRanger')) + '" title="' + this._esc(this._t('progRanger')) + '">' +
              svg(IC.ranger, 'vm__prgxico') + '</button>' +
          '</div>' +
          '<div class="vm__tri" role="group">' +
            





            ['heure', 'lieu', 'type'].map((c, n) => '<button data-tri="' + c + '" aria-pressed="' + (n === 0 ? 'true' : 'false') + '"' + (n === 0 ? ' class="on"' : '') + '>' +
              this._esc(this._t('par' + c.charAt(0).toUpperCase() + c.slice(1))) + '</button>').join('') +
          '</div>' +
          



          '<div class="vm__heure">' +
            '<input type="range" id="vmHeure" min="480" max="1439" step="15" aria-label="' + this._esc(this._t('heure')) + '">' +
            '<div class="vm__heureb"><span id="vmHeureV"></span>' +
              '<button class="vm__hnow" id="vmNow">' + this._esc(this._t('maintenant')) + '</button></div>' +
          '</div>' +
          '<div class="vm__proglist" id="vmProgList"></div>' +
          









          







          (this._lienProgramme()
            ? '<a class="vm__cta vm__cta--moyen vm__progall" href="' + this._esc(this._lienProgramme()) + '" role="button">' +
                this._esc(this._t('progComplet')) +
                '<span class="vm__ctaic">' + svg(IC.fleche) + '</span></a>'
            : '') +
        '</aside>' +

         
        '<div class="vm__charge" id="vmCharge">' +
          


          '<div class="vm__squel" aria-hidden="true">' +
            '<div class="vm__sq vm__sq--outils"></div>' +
            '<div class="vm__sq vm__sq--volet"></div>' +
            '<div class="vm__sqcol">' +
              '<div class="vm__sq vm__sq--chip"></div><div class="vm__sq vm__sq--chip"></div>' +
              '<div class="vm__sq vm__sq--chip"></div><div class="vm__sq vm__sq--chip"></div>' +
            '</div>' +
          '</div>' +
          '<div class="vm__spin" aria-hidden="true"></div>' +
          '<p class="vm__chargeT" id="vmChargeT"></p>' +
          '<p class="vm__chargeS" id="vmChargeS"></p>' +
          '<button class="vm__cta vm__cta--moyen vm__chargeB" id="vmChargeB" hidden></button>' +
        '</div>' +
        '<div class="vm__etatv" id="vmEtatV" hidden></div>' +
        

        '<div class="vm__autourv" id="vmAutourV" role="region" aria-label="' +
          this._esc(this._t('autourTitre')) + '" hidden></div>' +
        '<div class="vm__urgent" id="vmUrgent" hidden></div>' +
        '<div class="vm__urgence" id="vmUrgence" role="alert" hidden></div>' +
        '<div class="vm__mode" id="vmMode" hidden></div>' +
        '<div class="vm__bandeau" id="vmBandeau" hidden></div>' +
        '<div class="vm__typan" id="vmTymalP" hidden></div>' +
        


        '<div class="vm__feuilv" id="vmFeuilV" aria-hidden="true"></div>' +
        




        '<p class="vm__vueTag" id="vmVueTag" role="status" aria-live="polite" hidden></p>' +
        '<div class="vm__plusF" id="vmPlusF" role="group" data-titre="' + this._esc(this._t('libPlus')) + '"' +
          ' aria-label="' + this._esc(this._t('libPlus')) + '">' +
          '<button type="button" data-plus="autour">' + svg(PICTO.boussole, 'vm__plico') +
            '<span><b>' + this._esc(this._t('libAutour')) + '</b><i>' + this._esc(this._t('autourAide') || this._t('autour')) + '</i></span></button>' +
          '<button type="button" data-plus="horsligne">' + svg(IC.telecharger, 'vm__plico') +
            '<span><b>' + this._esc(this._t('libHorsCo')) + '</b><i>' + this._esc(this._t('horsLigne')) + '</i></span></button>' +
          










          ((p.config.planUrl) ? '<button type="button" data-plus="plan">' + svg(IC.calque, 'vm__plico') +
            '<span><b>' + this._esc(this._t('vuePlan')) + '</b></span></button>' : '') +
        '</div>' +
        '<div class="vm__voile" id="vmVoile" hidden role="dialog" aria-modal="true" aria-label="' +
          this._esc(this._t('fiche') || 'Fiche') + '" tabindex="-1">' +
          '<div class="vm__fiche" id="vmFiche"></div></div>' +
      '</div>';
    }

     
    async _initCarte() {
      const c = this._p.config;
       
       
       
       
      const jeton = this._jeton;
      let style = c.tuiles, apresCoup = false;
      try {
        










        if (c.style && typeof c.style === 'object') {
          style = await this._charterStyle(JSON.parse(JSON.stringify(c.style)));
        } else {
          












          const CLE_STYLE = 'rdr-carte-style';
          let brut = null;
          try {
            const rep = await fetchBorne(c.tuiles);
            if (!rep.ok) throw new Error('HTTP ' + rep.status);
            brut = await rep.json();
            try { localStorage.setItem(CLE_STYLE, JSON.stringify({ url: c.tuiles, style: brut, le: Date.now() })); } catch (x) {}
          } catch (e) {
            let m = null;
            try { m = JSON.parse(localStorage.getItem(CLE_STYLE) || 'null'); } catch (x) {}
            if (m && m.style && m.url === c.tuiles) {
              brut = m.style;
              this._fraicheur = { source: 'style mémorisé', le: new Date(m.le || Date.now()).toISOString() };
            } else throw e;
          }
           
           
          style = await this._charterStyle(brut);
        }
      } catch (e) {
         
         
         
        style = c.tuiles; apresCoup = true;
      }
      if (jeton !== this._jeton || !this.isConnected) return;    

       
       
       
      await window.__vmMapLibre();
      if (jeton !== this._jeton || !this.isConnected) return;    

      this._map = new maplibregl.Map({
        container: this.querySelector('#vmCarte'),
        style,
        center: c.centre, zoom: c.zoomDepart,
        minZoom: c.zoomMin, maxZoom: c.zoomMax,
        maxBounds: c.limites,
        





        attributionControl: { compact: true,
           
           
          customAttribution: 'Carte développée par <a href="https://wapitix.fr" target="_blank" rel="noopener">Wapitix</a>' }
      });
      this._map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');

      









      const toile = this._map.getCanvas();
      toile.addEventListener('webglcontextlost', (e) => {
        e.preventDefault();
        this._contextePerdu = true;
        this._prete = false;
        this._alertePlan(this._t('contextePerdu'));
      }, false);
      toile.addEventListener('webglcontextrestored', () => { this._contextePerdu = false; this._remonterRendu(); }, false);
       
       
      if (!this._onVisible) {
        this._onVisible = () => {
          if (document.visibilityState !== 'visible' || !this._map) return;
          const t = this._map.getCanvas();
          const gl = t.getContext('webgl2') || t.getContext('webgl');
          if (this._contextePerdu || (gl && gl.isContextLost())) this._remonterRendu();
        };
        document.addEventListener('visibilitychange', this._onVisible);
      }

      















      if (!this._map.__couchesVerifiees) {
        this._map.__couchesVerifiees = true;
        const brut = this._map.addLayer.bind(this._map);
        this._map.addLayer = (def, avant) => {
          const r = brut(def, avant);
          if (def && def.id && !this._map.getLayer(def.id)) {
            this._incident('couche ' + def.id, new Error('rejetée par MapLibre sans erreur : vérifier layout contre paint, et les expressions'));
          }
          return r;
        };
      }
      this._map.on('load', async () => {
        this._prete = true;
        this._replierAttribution();
        






        const etape = async (nom, fn) => {
          try { await fn(); }
          catch (e) { this._incident(nom, e); }
        };
        



        if (this._heure == null) { const q = parisJourHeure(); this._heure = q.minutes; this._jour = this._jour || q.jour; }
        this._battreHeure();
        

        clearInterval(this._battTymal);
        this._battTymal = setInterval(() => {
          if (!this.isConnected) { clearInterval(this._battTymal); return; }
          const s2 = this._tymalSignale();
          if (!s2) return;
          const a = this._p.tymal || {};
          const change = (!!a.actif !== !s2.pause) || (!s2.pause && (a.lng !== s2.lng || a.maj !== s2.maj));
          if (!change) return;
          if (this._tymalM) { this._tymalM.remove(); this._tymalM = null; }
          this._tymalAbsent = false;
          this._ajouterTymal();
          const p2 = this.querySelector('#vmTymalP');
          if (p2 && !p2.hidden) { if (this._p.tymal && this._p.tymal.actif) this._ficheTymal(this._p.tymal); else p2.hidden = true; }
        }, 30000);
        this._suivreLargeur();
        if (apresCoup) await etape('recoloration du fond', () => this._charterFondVif());
        await etape('plan illustré', () => this._ajouterPlan());
        await etape('nuit', () => this._ajouterNuit());
         
        await etape('bâti du village', () => this._ajouterEdifices());
        await etape('zones', () => this._ajouterZones());
        

        await etape('images de zone', () => this._ajouterImagesZones());
        await etape('secteurs', () => this._ajouterSecteurs());
        await etape('groupes', () => this._ajouterGroupes());
        await etape('zones de classe', () => this._ajouterZonesClasse());
        await etape('pontons', () => this._ajouterPontons());
        

        await etape('passerelles', () => this._ajouterPasserelles());
        await etape('points d\'intérêt', () => this._ajouterPoi());
        await etape('amas de pointeurs', () => this._ajouterAmas());
        await etape('flotte', () => this._ajouterFlotte());
        await etape('marqueurs de ponton', () => this._ajouterMarqueursPonton());
        await etape('cartes partenaires', () => this._ajouterCartesLogo());
        await etape('enseignes de stand', () => this._ajouterCartesStand());
        await etape('TyMal', () => this._ajouterTymal());
        await etape('vue du plan', () => this._appliquerVuePlan());
        this._arreterChargement();    
        await etape('mode d\'affichage', () => this._appliquerMode(this._modeCourant(), true));
        await etape('cadrage de départ', () => this._cadrerDepart());
        

        const vmZ = this.querySelector('.vm');
        const majLoin = () => { if (vmZ) vmZ.classList.toggle('est-loin', this._map.getZoom() < 16.2); };
        this._map.on('zoomend', majLoin); majLoin();
         
         
        if (this._mesure) this._mesure.noter('carte', 'ouverte');
        


        await etape('ouverture par l\'adresse', () => this._ouvrirDepuisLURL());
        


        let tuilesVues = 0;
        this._map.on('sourcedata', (e) => { if (e.isSourceLoaded) tuilesVues++; });
         
         
        clearTimeout(this._tTuiles);
        this._tTuiles = setTimeout(() => {
          if (!this._map || !this.isConnected) return;
          if (!tuilesVues && !this._map.areTilesLoaded()) this._alertePlan(this._t('tuilesKO'));
        }, 9000);
         
         
        



        this._map.on('zoom', (e) => {
          
















          




          const et = this._etageCourant();
          if (et !== this._etage) { this._etage = et; if (this._reposer) this._reposer(); }
          


          this._majReperes();
          if (this._choixVue) {
            if (!e || !e.originalEvent) return;
            this._choixVue = null;
          }
          const v = this._modeCourant();
          if (v && v.cle !== this._mode) { this._appliquerMode(v); return; }
          





        });
        this._map.on('zoomend', () => this._appliquerFiltres());
      });
    }

    








     
     
     
     
    _reglesFond(id, t) {
      if (t === 'background') return [['background-color', C.sol]];
       
       
      







      if (/water_shadow/.test(id) && t === 'fill') return [['fill-color', C.merBord], ['fill-opacity', .55]];
      













      

      if (/^water|waterway|hydro/.test(id) && t === 'fill')
        return [['fill-color', ['match', ['get', 'class'], 'ocean', C.large, C.mer]], ['fill-opacity', 1]];
      if (/water|waterway|hydro/.test(id) && t === 'line') return [['line-color', C.merBord], ['line-opacity', .8]];
       
       
      if (/building|bati/.test(id) && t === 'fill')
        return [['fill-color', C.bati], ['fill-outline-color', C.batiBord], ['fill-opacity', 1]];
      






      if (/building|bati/.test(id) && t === 'fill-extrusion')
        return [['fill-extrusion-color', C.bati], ['fill-extrusion-height', 0], ['fill-extrusion-opacity', 1]];
      



      if (/park|wood|grass|forest|vegetation|ocs_nature/.test(id) && t === 'fill')
        return [['fill-color', C.vegetal], ['fill-opacity', 1]];
      if (/landcover|landuse|pier|sand|ocs_sol|zone_activite/.test(id) && t === 'fill') return [['fill-color', C.quai]];
       
       
      if (t === 'line' && /road|street|bridge|tunnel|rail|path|pedestrian|routier|ferre/.test(id))
        return [['line-color', /casing|outline|case/.test(id) ? C.voieBord : C.voie]];
      if (t === 'symbol') return [['text-color', C.ink2], ['text-halo-color', C.surface], ['text-halo-width', 1.6]];
      return [];
    }
    async _charterStyle(st) {
      
























      const parasites = /^poi_r\d|^poi$|^poi_label|^poi_transit/i;
      st.layers = (st.layers || []).filter(l => !parasites.test(l.id));
      (st.layers || []).forEach(l => {
        const r = this._reglesFond(l.id, l.type);
        






        l.paint = l.paint || {};
        










        const motifSurface = l.paint['fill-pattern'] !== undefined;
        const motifTrait = l.paint['line-pattern'] !== undefined;
        delete l.paint['fill-pattern'];
        delete l.paint['line-pattern'];
        if (!r.length) {
          if (motifSurface && l.paint['fill-color'] === undefined) l.paint['fill-color'] = C.quai;
          if (motifTrait && l.paint['line-color'] === undefined) l.paint['line-color'] = C.voieBord;
          return;
        }
        







        r.forEach(([p, v]) => { l.paint[p] = v; });
        if (motifSurface && l.paint['fill-color'] === undefined) l.paint['fill-color'] = C.quai;
        if (motifTrait && l.paint['line-color'] === undefined) l.paint['line-color'] = C.voieBord;
      });
      



      for (const s of Object.values(st.sources || {})) {
        if (s.tiles) { s.tiles = s.tiles.map(u => PROTO + '://' + u); continue; }
        if (s.type !== 'vector' || !s.url) continue;
        try {
          const tj = await (await fetchBorne(s.url)).json();
          if (!tj.tiles || !tj.tiles.length) continue;
          s.tiles = tj.tiles.map(u => PROTO + '://' + u);
          if (tj.minzoom != null) s.minzoom = tj.minzoom;
          if (tj.maxzoom != null) s.maxzoom = tj.maxzoom;
          











          





          if (tj.attribution) {
            const brut = String(tj.attribution);
            const court = brut.replace(/<a[^>]*openfreemap\.org[^>]*>[\s\S]*?<\/a>\s*/i, '').trim();
            s.attribution = /openstreetmap/i.test(court) ? court : brut;
          }
          if (tj.bounds) s.bounds = tj.bounds;
          delete s.url;
        } catch (e) {   }
      }
      if (st.glyphs && st.glyphs.indexOf(PROTO) !== 0) st.glyphs = PROTO + '://' + st.glyphs;
      return st;
    }
    


    _remonterRendu() {
      if (this._remontageEnCours) return;
      this._remontageEnCours = true;
      const vue = this._map ? { c: this._map.getCenter(), z: this._map.getZoom() } : null;
      try { if (this._map) this._map.remove(); } catch (e) {   }
      this._map = null; this._prete = false; this._contextePerdu = false;
      if (vue) { this._p.config.centre = [vue.c.lng, vue.c.lat]; this._p.config.zoomDepart = vue.z; }
      this._remettreAZero();
      Promise.resolve(this._initCarte()).catch(e => this._echecCarte(e))
        .finally(() => { this._remontageEnCours = false; });
    }

    _charterFondVif() {
      const st = this._map.getStyle();
      ((st && st.layers) || []).forEach(l => this._reglesFond(l.id, l.type).forEach(([p, v]) => {
        try { this._map.setPaintProperty(l.id, p, v); } catch (e) {   }
      }));
    }

    





    _ajouterPontons() {
      const pontons = (this._p.pontons || []).filter(p => {
        const ok = this._ligneValide(p.trace, 2);
        if (!ok) this._ecarte('pontons', p.id || p.nom);
        return ok;
      });
      this._direLesEcarts();
      if (!pontons.length) return;

       
       
      const classes = [...new Set(pontons.map(p => p.classe || 'defaut'))];
      classes.forEach(cl => {
        const nom = 'coque-' + cl;
        if (!this._map.hasImage(nom)) this._map.addImage(nom, this._coque2D(this._couleurClasse(cl)), { pixelRatio: 2 });
      });

      this._map.addSource('pontons', { type: 'geojson', data: this._geojsonPontons() });

       
       
       
      const SEUIL = 14.8;
      this._map.addLayer({ id: 'ponton-quai', type: 'line', source: 'pontons', minzoom: SEUIL,
        filter: ['!=', ['get', 'discret'], 1],
        layout: { 'line-cap': 'round' },
        paint: { 'line-color': C.surface,
                 'line-width': ['interpolate', ['linear'], ['zoom'], 15, 5, 18, 13],
                 'line-opacity': ['interpolate', ['linear'], ['zoom'], SEUIL, 0, 15.4, 1] } });
      this._map.addLayer({ id: 'ponton-l', type: 'line', source: 'pontons', minzoom: SEUIL,
        filter: ['!=', ['get', 'discret'], 1],
        layout: { 'line-cap': 'round' },
        paint: { 'line-color': ['get', 'couleur'],
                 'line-width': ['interpolate', ['linear'], ['zoom'], 15, 2, 18, 4.5],
                 'line-opacity': ['interpolate', ['linear'], ['zoom'], SEUIL, 0, 15.4, 1] } });
      this._map.addLayer({ id: 'ponton-b', type: 'symbol', source: 'pontons', minzoom: SEUIL,
        filter: ['!=', ['get', 'discret'], 1],
        layout: {
          'symbol-placement': 'line',
          'symbol-spacing': ['interpolate', ['linear'], ['zoom'], 15, 14, 18, 34],
          'icon-image': ['get', 'icone'],
          'icon-size': ['interpolate', ['linear'], ['zoom'], 15, .18, 18, .5],
          'icon-rotate': 90,                     
          'icon-rotation-alignment': 'map',
          'icon-allow-overlap': false,
          'icon-padding': 1
        },
        paint: { 'icon-opacity': ['interpolate', ['linear'], ['zoom'], SEUIL, 0, 15.4, 1] } });
       
       
      


      


    }

    










    _rectRail(trace, dB, dT, ext) {
      const a = trace[0], b = trace[trace.length - 1];
      const cap = ((Math.atan2((b[0] - a[0]) * Math.cos(a[1] * Math.PI / 180), b[1] - a[1]) * 180 / Math.PI) + 360) % 360;
      const L = this._metres(a, b);
      const kx = 111320 * Math.cos(a[1] * Math.PI / 180) || 1, ky = 110540;
      const r = cap * Math.PI / 180, ux = Math.sin(r), uy = Math.cos(r);    
      const vx = Math.sin(r + Math.PI / 2), vy = Math.cos(r + Math.PI / 2);   
      const pt = (u, v) => [a[0] + (u * ux + v * vx) / kx, a[1] + (u * uy + v * vy) / ky];
      const rc = Math.min(6, dB / 2, dT / 2);
      const arc = (cu, cv, a0, a1) => { const out = []; for (let k = 0; k <= 5; k++) { const t = a0 + (a1 - a0) * k / 5; out.push(pt(cu + rc * Math.cos(t), cv + rc * Math.sin(t))); } return out; };
      const u0 = -ext, u1 = L + ext, v0 = -dB, v1 = dT;
      return [].concat(
        arc(u0 + rc, v0 + rc, Math.PI, 1.5 * Math.PI),
        arc(u1 - rc, v0 + rc, 1.5 * Math.PI, 2 * Math.PI),
        arc(u1 - rc, v1 - rc, 0, .5 * Math.PI),
        arc(u0 + rc, v1 - rc, .5 * Math.PI, Math.PI),
        [pt(u0, v0 + rc)]);
    }
    _metres(a, b) {
      return Math.hypot((b[0] - a[0]) * 111320 * Math.cos(a[1] * Math.PI / 180), (b[1] - a[1]) * 110540);
    }
    




    _bandeRail(trace, dB, dT, ext) {
      const a0 = trace[0];
      const kx = 111320 * Math.cos(a0[1] * Math.PI / 180) || 1, ky = 110540;
      const P = trace.map(c => [(c[0] - a0[0]) * kx, (c[1] - a0[1]) * ky]);    
      const versLngLat = (q) => [a0[0] + q[0] / kx, a0[1] + q[1] / ky];
      const dir = (i) => { const d = [P[i + 1][0] - P[i][0], P[i + 1][1] - P[i][1]]; const l = Math.hypot(d[0], d[1]) || 1; return [d[0] / l, d[1] / l]; };
      const n = P.length;
       
      const d0 = dir(0), dN = dir(n - 2);
      P[0] = [P[0][0] - d0[0] * ext, P[0][1] - d0[1] * ext];
      P[n - 1] = [P[n - 1][0] + dN[0] * ext, P[n - 1][1] + dN[1] * ext];
      const droite = [], gauche = [];    
      for (let i = 0; i < n; i++) {
        const dA = i > 0 ? dir(i - 1) : dir(0), dB2 = i < n - 1 ? dir(i) : dir(n - 2);
        let bx = dA[0] + dB2[0], by = dA[1] + dB2[1];
        const lb = Math.hypot(bx, by) || 1; bx /= lb; by /= lb;
        const cosDemi = Math.max(.5, bx * dB2[0] + by * dB2[1]);    
        const nx = by / cosDemi, ny = -bx / cosDemi;                
        droite.push([P[i][0] + nx * dT, P[i][1] + ny * dT]);
        gauche.push([P[i][0] - nx * dB, P[i][1] - ny * dB]);
      }
      const arc = (c, r, a1, a2) => { const out = []; for (let k = 0; k <= 6; k++) { const t = a1 + (a2 - a1) * k / 6; out.push([c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)]); } return out; };
      





      const ang = (v) => Math.atan2(v[1], v[0]);
      const nF = [dN[1], -dN[0]], nD = [d0[1], -d0[0]];    
      const rT = Math.min(4, dT), rB = Math.min(4, dB);
      const PF = P[n - 1], PD = P[0];
      const cFD = [PF[0] + nF[0] * (dT - rT) - dN[0] * rT, PF[1] + nF[1] * (dT - rT) - dN[1] * rT];
      const cFG = [PF[0] - nF[0] * (dB - rB) - dN[0] * rB, PF[1] - nF[1] * (dB - rB) - dN[1] * rB];
      const cDG = [PD[0] - nD[0] * (dB - rB) + d0[0] * rB, PD[1] - nD[1] * (dB - rB) + d0[1] * rB];
      const cDD = [PD[0] + nD[0] * (dT - rT) + d0[0] * rT, PD[1] + nD[1] * (dT - rT) + d0[1] * rT];
      const ring = [].concat(
        droite.slice(1, n - 1),
        arc(cFD, rT, ang(nF), ang(nF) + Math.PI / 2),
        arc(cFG, rB, ang(nF) + Math.PI / 2, ang(nF) + Math.PI),
        gauche.slice(1, n - 1).reverse(),
        arc(cDG, rB, ang(nD) + Math.PI, ang(nD) + 1.5 * Math.PI),
        arc(cDD, rT, ang(nD) + 1.5 * Math.PI, ang(nD) + 2 * Math.PI));
      ring.push(ring[0]);
      return ring.map(versLngLat);
    }
    






    _unionConvexes(A, B) {
      const seg = (p, q, r, s) => {
        const d = (q[0] - p[0]) * (s[1] - r[1]) - (q[1] - p[1]) * (s[0] - r[0]);
        if (Math.abs(d) < 1e-18) return null;
        const t = ((r[0] - p[0]) * (s[1] - r[1]) - (r[1] - p[1]) * (s[0] - r[0])) / d;
        const u = ((r[0] - p[0]) * (q[1] - p[1]) - (r[1] - p[1]) * (q[0] - p[0])) / d;
        if (t < 0 || t > 1 || u < 0 || u > 1) return null;
        return [p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])];
      };
      const X = [];
      for (let i = 0; i < A.length - 1; i++) for (let j = 0; j < B.length - 1; j++) {
        const x = seg(A[i], A[i + 1], B[j], B[j + 1]);
        if (x) X.push(x);
      }
      if (X.length < 2) return null;
      const c = X.reduce((s, x) => [s[0] + x[0] / X.length, s[1] + x[1] / X.length], [0, 0]);
      const kx = Math.cos(c[1] * Math.PI / 180) || 1;
      const pts = A.slice(0, -1).filter(p => !this._dansPolygone(p, B))
        .concat(B.slice(0, -1).filter(p => !this._dansPolygone(p, A)), X)
        .map(p => ({ p, a: Math.atan2(p[1] - c[1], (p[0] - c[0]) * kx) }))
        .sort((u, v) => u.a - v.a)
        .map(o => o.p);
      if (pts.length < 4) return null;
      pts.push(pts[0]);
      return pts;
    }
     
    _milieuEtCap(trace) {
      let total = 0;
      for (let i = 1; i < trace.length; i++) total += this._metres(trace[i - 1], trace[i]);
      let reste = total / 2;
      for (let i = 1; i < trace.length; i++) {
        const d = this._metres(trace[i - 1], trace[i]);
        if (reste <= d || i === trace.length - 1) {
          const k = d ? reste / d : 0;
          const a = trace[i - 1], b = trace[i];
          const cap = ((Math.atan2((b[0] - a[0]) * Math.cos(a[1] * Math.PI / 180), b[1] - a[1]) * 180 / Math.PI) + 360) % 360;
          return { p: [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k], cap };
        }
        reste -= d;
      }
      return { p: trace[0], cap: 0 };
    }
    _geojsonZonesClasse() {
      const pontons = (this._p.pontons || []).filter(p => this._ligneValide(p.trace, 2));
      const bateaux = this._p.bateaux || [];
      const vus = new Set();
      const features = [];
      const capDe = (t) => ((Math.atan2((t[1][0] - t[0][0]) * Math.cos(t[0][1] * Math.PI / 180), t[1][1] - t[0][1]) * 180 / Math.PI) + 360) % 360;
      


      const bords = (p) => {
        const g = this._gabarit(p.classe);
        const d = { babord: 0, tribord: 0 };
        bateaux.filter(b => b.pontonId === p.id).forEach(b => {
           
          const demi = b.capLibre ? this._dimsCoque(b).B / 2 : g[0] / 2;
          const e = (+b.ecart || Math.round(g[0] / 2 + 2)) + demi + (b.capLibre ? 1.5 : 3);
          const c = b.cote === 'babord' ? 'babord' : 'tribord';
          if (e > d[c]) d[c] = e;
        });
        


        const aCouple = bateaux.some(b => b.pontonId === p.id && b.capLibre);
        const vide = aCouple ? .6 : 2;
        let dB = Math.max(vide, d.babord), dT = Math.max(vide, d.tribord);
        


        const cap0 = ((Math.atan2((p.trace[1][0] - p.trace[0][0]) * Math.cos(p.trace[0][1] * Math.PI / 180), p.trace[1][1] - p.trace[0][1]) * 180 / Math.PI) + 360) % 360;
        const a0 = p.trace[0], kx = 111320 * Math.cos(a0[1] * Math.PI / 180) || 1, ky = 110540;
        const r0 = cap0 * Math.PI / 180, vx = Math.sin(r0 + Math.PI / 2), vy = Math.cos(r0 + Math.PI / 2);
        pontons.forEach(n => {
          if (n === p || !this._ligneValide(n.trace, 2)) return;
          const capN = ((Math.atan2((n.trace[1][0] - n.trace[0][0]) * Math.cos(n.trace[0][1] * Math.PI / 180), n.trace[1][1] - n.trace[0][1]) * 180 / Math.PI) + 360) % 360;
          if (Math.abs(((cap0 - capN) + 540) % 360 - 180) > 12) return;
          const c = this._milieuPonton(n);
          const v = ((c[0] - a0[0]) * kx) * vx + ((c[1] - a0[1]) * ky) * vy;
          


          const ux = Math.sin(r0), uy = Math.cos(r0);
          const u = ((c[0] - a0[0]) * kx) * ux + ((c[1] - a0[1]) * ky) * uy;
          const L0 = this._metres(p.trace[0], p.trace[p.trace.length - 1]), Ln = this._metres(n.trace[0], n.trace[n.trace.length - 1]);
          if (Math.abs(v) > 80 || Math.abs(v) < 4 || Math.abs(u - L0 / 2) > (L0 + Ln) / 2) return;
          if (v > 0) dT = Math.min(dT, Math.max(vide, v / 2 - 1)); else dB = Math.min(dB, Math.max(vide, -v / 2 - 1));
        });
        return { dB, dT, ext: aCouple ? 3 : g[1] / 2 + 4 };
      };
      this._ancresBadge = {};
      pontons.filter(p => !p.parent).forEach(p => {
        const famille = [p].concat(pontons.filter(x => x.parent === p.id));
        famille.forEach(x => { if (p.zone === false) vus.add(x.id); });
        if (p.zone === false) {
          

          const bp = bords(p), cote = bp.dT >= bp.dB ? 1 : -1;
          const c = this._milieuPonton(p), capP = capDe(p.trace);
          const kx = 111320 * Math.cos(c[1] * Math.PI / 180) || 1, ky = 110540, r = (capP + 90) * Math.PI / 180;
          const d = cote > 0 ? bp.dT : bp.dB;
          this._ancresBadge[p.id] = { lngLat: [c[0] + cote * (d + 16) * Math.sin(r) / kx, c[1] + cote * (d + 16) * Math.cos(r) / ky], tige: null };
          return;
        }
         
        const cap = (t) => ((Math.atan2((t[1][0] - t[0][0]) * Math.cos(t[0][1] * Math.PI / 180), t[1][1] - t[0][1]) * 180 / Math.PI) + 360) % 360;
        const groupes = [];
        famille.forEach(m => {
          if (vus.has(m.id)) return;
          const g = { membres: [m], bords: [bords(m)] };
          




          let ajout = true;
          while (ajout) {
            ajout = false;
            famille.forEach(n => {
              if (vus.has(n.id) || g.membres.indexOf(n) >= 0) return;
              const bn = bords(n);
              const voisin = g.membres.some((m2, k) => {
                const bm = g.bords[k];
                const dcap = Math.abs(((cap(m2.trace) - cap(n.trace)) + 540) % 360 - 180);
                const d = this._metres(this._milieuPonton(m2), this._milieuPonton(n));
                return dcap < 12 && d < bm.dB + bm.dT + bn.dB + bn.dT + 8;
              });
              if (voisin) { g.membres.push(n); g.bords.push(bn); ajout = true; }
            });
          }
          g.membres.forEach(x => vus.add(x.id));
          groupes.push(g);
        });
        groupes.forEach(g => {
          const m0 = g.membres[0];
          const a = m0.trace[0], b = m0.trace[m0.trace.length - 1];
          const kx = 111320 * Math.cos(a[1] * Math.PI / 180) || 1, ky = 110540;
          const r = cap(m0.trace) * Math.PI / 180, ux = Math.sin(r), uy = Math.cos(r), vx = Math.sin(r + Math.PI / 2), vy = Math.cos(r + Math.PI / 2);
           
          let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
          g.membres.forEach((m, k) => {
            const bm = g.bords[k];
            [m.trace[0], m.trace[m.trace.length - 1]].forEach(c => {
              const dx = (c[0] - a[0]) * kx, dy = (c[1] - a[1]) * ky;
              const u = dx * ux + dy * uy, v = dx * vx + dy * vy;
              u0 = Math.min(u0, u - bm.ext); u1 = Math.max(u1, u + bm.ext);
              v0 = Math.min(v0, v - bm.dB); v1 = Math.max(v1, v + bm.dT);
            });
          });
          


          const pt = (u, v) => [a[0] + (u * ux + v * vx) / kx, a[1] + (u * uy + v * vy) / ky];
          const suitLeQuai = g.membres.length === 1 && m0.trace.length > 2;
          const ring = suitLeQuai
            ? this._bandeRail(m0.trace, g.bords[0].dB, g.bords[0].dT, g.bords[0].ext)
            : this._rectRail([pt(u0, 0), pt(u1, 0)], -v0, v1, 0);
          





          if (g.membres.indexOf(p) >= 0) {
            const large = (v1 - v0) >= 45;
            const um = (u0 + u1) / 2;
            if (large) this._ancresBadge[p.id] = { lngLat: pt(um, (v0 + v1) / 2), tige: null };
            else if (suitLeQuai) {
              

              const mc = this._milieuEtCap(m0.trace);
              const versEau = g.bords[0].dT >= g.bords[0].dB ? 1 : -1;
              const d = (versEau > 0 ? g.bords[0].dT : g.bords[0].dB) + 14;
              const r2 = (mc.cap + 90) * Math.PI / 180, kx2 = 111320 * Math.cos(mc.p[1] * Math.PI / 180) || 1;
              this._ancresBadge[p.id] = { lngLat: [mc.p[0] + versEau * d * Math.sin(r2) / kx2, mc.p[1] + versEau * d * Math.cos(r2) / ky], tige: null };
            } else {
              const versEau = v1 >= -v0 ? 1 : -1;
              const v = versEau > 0 ? v1 + 14 : v0 - 14;
              this._ancresBadge[p.id] = { lngLat: pt(um, v), tige: null };
            }
          }
          features.push({ type: 'Feature', id: features.length + 1,
            




            properties: { id: 'zc-' + m0.id, ponton: p.id, membre: m0.id, nom: p.nom || '', classe: p.classe || 'defaut',
                          couleur: this._couleurClasse(p.classe), bande: suitLeQuai ? 1 : 0 },
            geometry: { type: 'Polygon', coordinates: [ring] } });
        });
      });
      

      let fondu = true;
      while (fondu) {
        fondu = false;
        for (let i = 0; i < features.length && !fondu; i++) for (let j = i + 1; j < features.length && !fondu; j++) {
          const a = features[i], b = features[j];
          if (a.properties.classe !== b.properties.classe || a.properties.bande || b.properties.bande || a.properties.fondu || b.properties.fondu) continue;
          const u = this._unionConvexes(a.geometry.coordinates[0], b.geometry.coordinates[0]);
          if (!u) continue;
          a.geometry.coordinates = [u]; a.properties.fondu = 1;
          features.splice(j, 1); fondu = true;
        }
      }
      features.forEach((f, k) => { f.id = k + 1; });
      return { type: 'FeatureCollection', features };
    }
    _ajouterZonesClasse() {
      if (!(this._p.pontons || []).length) return;
      this._map.addSource('zones-classe', { type: 'geojson', data: this._geojsonZonesClasse() });
      



      this._map.addLayer({ id: 'zone-classe-f', type: 'fill', source: 'zones-classe', minzoom: 13.5,
        


        paint: { 'fill-color': ['get', 'couleur'],
                 'fill-opacity': ['interpolate', ['linear'], ['zoom'],
                   14, ['case', ['boolean', ['feature-state', 'survol'], false], .9, .72],
                   16, ['case', ['boolean', ['feature-state', 'survol'], false], .85, .6],
                   18.5, ['case', ['boolean', ['feature-state', 'survol'], false], .7, .4]] } });
      this._map.addLayer({ id: 'zone-classe-l', type: 'line', source: 'zones-classe', minzoom: 13.5,
        paint: { 'line-color': ['get', 'couleur'],
                 'line-width': ['case', ['boolean', ['feature-state', 'survol'], false], 3, 1.5],
                 'line-opacity': ['interpolate', ['linear'], ['zoom'], 14, .9, 18.5, .5] } });
      



      this._survolZone = null;
      const relever = (id, on) => { if (id == null) return; try { this._map.setFeatureState({ source: 'zones-classe', id }, { survol: on }); } catch (e) {   } };
      this._map.on('mousemove', 'zone-classe-f', (e) => {
        if (this._atelier || this._replie) return;
        const f = e.features && e.features[0];
        if (!f) return;
        if (this._survolZone !== f.id) {
          relever(this._survolZone, false); this._survolZone = f.id; relever(f.id, true);
           
          this._releverFanion(f.properties.ponton);
        }
        this._map.getCanvas().style.cursor = 'pointer';
      });
      this._map.on('mouseleave', 'zone-classe-f', () => { relever(this._survolZone, false); this._survolZone = null; this._releverFanion(null); this._map.getCanvas().style.cursor = ''; });
      this._map.on('click', 'zone-classe-f', (e) => {
        if (this._atelier) return;
        const f = e.features && e.features[0];
        if (!f) return;
        





        



        const pres = this._map.getZoom() >= (this._seuilCoque || 16.6);
        const dessus = (pres ? ['flotte-f', 'flotte-b'] : []).concat(['poi-tap', 'poi-pt']).filter(l => this._map.getLayer(l));
        const T = 6, boite = [[e.point.x - T, e.point.y - T], [e.point.x + T, e.point.y + T]];
        const sous = dessus.length ? this._map.queryRenderedFeatures(boite, { layers: dessus }) : [];
        if (sous.length) {
          const fb = sous.find(x => x.layer && (x.layer.id === 'flotte-f' || x.layer.id === 'flotte-b'));
          if (fb && this._clicCoque) this._clicCoque({ features: [fb], point: e.point, originalEvent: e.originalEvent });
          return;
        }
        this._allerPonton(f.properties.membre || f.properties.ponton);
         
        if (this._replie) return;
        const pz = (this._p.pontons || []).find(x => x.id === f.properties.ponton);
        if (pz) this._ficheClasse(pz);
      });
    }

    



    _ficheClasse(p) {
      if (!p || this._atelier) return;
      


       
      const famille = (t) => { const m = String(t || '').trim().match(/((?:[A-ZÀ-Ý][A-ZÀ-Ý'-]+\s*)+)$/); return (m ? m[1] : String(t || '')) + ' ' + String(t || ''); };
      const bateaux = (this._p.bateaux || []).filter(b => b.classe === p.classe && (b.skipper || b.nom))
        .sort((x, y) => famille(x.skipper || x.nom).localeCompare(famille(y.skipper || y.nom), 'fr'));
      const couleur = couleurSure(this._couleurClasse(p.classe), C.teal);
      const drapeau = DRAPEAU[p.classe] ? urlSure(DRAPEAU[p.classe]) : '';
      const en = this._lang === 'en';
      const nommes = bateaux;
      this._poiOuvert = null; this._batiOuvert = null;
      this.querySelector('#vmFiche').innerHTML =
        '<button class="vm__fx" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button>' +
        '<div class="vm__fclasse" style="--c:' + couleur + '">' +
          (drapeau ? '<img class="vm__fclassf" src="' + this._esc(drapeau) + '" alt="">' : svg(PICTO.boat, 'vm__fclassi')) +
          '<span class="vm__fclasst"><b>' + this._esc(this._libClasse(p.classe)) + '</b>' +
            '<em>' + nommes.length + ' ' + this._esc(en ? (nommes.length > 1 ? 'boats' : 'boat') : (nommes.length > 1 ? 'bateaux' : 'bateau')) +
            (p.nom && p.nom.toUpperCase() !== this._libClasse(p.classe).toUpperCase() ? ' · ' + this._esc(p.nom) : '') + '</em></span>' +
        '</div>' +
        '<div class="vm__fbody">' +
          (nommes.length ? '<ul class="vm__opts vm__fflotte">' + nommes.map(b => {
            const v = urlSure(b.portrait) || urlSure(b.photo);
            return '<li><button class="vm__opt vm__fbat" data-id="' + this._esc(b.id) + '">' +
              (v ? '<img class="vm__fbatv" src="' + this._esc(v === urlSure(b.portrait) ? portrait(v, 44) : vignette(v, 44)) + '" alt="" loading="lazy"' + this._repli('') + '>'
                 : '<span class="vm__opti est-fam" style="--c:' + couleur + '">' + svg(PICTO.boat, '') + '</span>') +
              '<span class="vm__optt"><b>' + this._esc(b.skipper || b.nom) + '</b>' +
                '<em>' + this._esc([b.skipper ? b.nom : '', b.voile].filter(Boolean).join(' · ')) + '</em></span>' +
              svg(IC.chevronD, 'vm__optc') + '</button></li>';
          }).join('') + '</ul>' : '<p>' + this._esc(en ? 'No boat moored here yet.' : 'Aucun bateau amarré ici pour l\'instant.') + '</p>') +
        '</div>';
      this._ouvrirPanneau();
      this.querySelector('.vm__fx').addEventListener('click', () => this._fermerFiche());
      this.querySelectorAll('.vm__fbat').forEach(bt => bt.addEventListener('click', () => this._allerBateau(bt.dataset.id)));
      if (this._mesure) this._mesure.noter('classe', p.id);
    }

    



    _ficheSecteur(z) {
      if (!z || this._atelier) return;
      const dedans = (this._p.poi || []).filter(o => { const c = this._centre(o); return this._estPoint(c) && this._dansPolygone(c, z.polygone); });
      const parCat = new Map();
      dedans.forEach(o => parCat.set(o.cat, (parCat.get(o.cat) || 0) + 1));
      const rangs = [...parCat.entries()].sort((x, y) => y[1] - x[1]);
      const resume = rangs.map(([cle, n]) => this._libCat(this._cat(cle)) + (n > 1 ? ' ×' + n : '')).join(' · ');
      const couleur = couleurSure(z.couleur, C.teal);
      this._poiOuvert = null; this._batiOuvert = null;
      this.querySelector('#vmFiche').innerHTML =
        '<button class="vm__fx" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button>' +
        (urlSure(z.photo) ? '<div class="vm__fhero"><img class="vm__fimg" src="' + this._esc(vignette(urlSure(z.photo), 480, 230)) + '" alt="" loading="eager"' + this._repli('') + '></div>' : '') +
        '<div class="vm__fbody">' +
          '<span class="vm__fcat" style="--c:' + couleur + '">' + svg(PICTO.star, 'vm__fic') + this._esc(this._t('secteur')) + '</span>' +
          '<h3>' + this._esc(z.nom || '') + '</h3>' +
          (resume ? '<p class="vm__fsub">' + this._esc(dedans.length + ' ' + (this._lang === 'en' ? 'places' : 'lieux') + ' · ' + resume) + '</p>' : '') +
          (z.desc ? '<p>' + this._esc(z.desc) + '</p>' : '') +
          (dedans.length ? '<ul class="vm__opts">' + dedans.map(o => {
            const c = this._cat(o.cat);
            return '<li><button class="vm__opt vm__batil" data-id="' + this._esc(o.id) + '">' +
              '<span class="vm__opti est-fam" style="--c:' + couleurSure(c.couleur) + '">' + svg(PICTO[c.picto] || PICTO.star, '') + '</span>' +
              '<span class="vm__optt"><b>' + this._esc(o.nom || o.id) + '</b><em>' + this._esc(o.sousCat || this._libCat(c)) + '</em></span>' +
              svg(IC.chevronD, 'vm__optc') + '</button></li>';
          }).join('') + '</ul>' : '') +
        '</div>';
      this._ouvrirPanneau();
      this.querySelector('.vm__fx').addEventListener('click', () => this._fermerFiche());
      this.querySelectorAll('.vm__batil').forEach(bt => bt.addEventListener('click', () => { this._apercuTouche = bt.dataset.id; this._apercuT0 = 0; this._ouvrirPoi(bt.dataset.id); }));
      if (this._mesure) this._mesure.noter('secteur-fiche', z.id);
    }

    




    _geojsonPontons() {
      return { type: 'FeatureCollection', features: (this._p.pontons || [])
        .filter(p => this._ligneValide(p.trace, 2))
        .map(p => ({ type: 'Feature',
          properties: { id: p.id, nom: p.nom, branche: p.parent ? 1 : 0, classe: p.classe || 'defaut',
                         
                         
                        discret: p.zone === false ? 1 : 0,
                        couleur: this._couleurClasse(p.classe), icone: 'coque-' + (p.classe || 'defaut') },
          geometry: { type: 'LineString', coordinates: p.trace } })) };
    }
    












    _dansPolygone(p, poly) {
      let dedans = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
        if (((yi > p[1]) !== (yj > p[1])) &&
            (p[0] < (xj - xi) * (p[1] - yi) / ((yj - yi) || 1e-12) + xi)) dedans = !dedans;
      }
      return dedans;
    }
    _secteurs() {
      return (this._p.zones || []).filter(z => z.role === 'secteur' && this._ligneValide(z.polygone, 3));
    }
    _geojsonSecteurs() {
      const lieux = (this._p.poi || []).map(o => this._centre(o)).filter(c => this._estPoint(c));
      return { type: 'FeatureCollection', features: this._secteurs().map(z => {
        const n = lieux.filter(c => this._dansPolygone(c, z.polygone)).length;
        const lng = z.polygone.map(c => c[0]), lat = z.polygone.map(c => c[1]);
        return { type: 'Feature',
          properties: { id: z.id, nom: z.nom || '', n,
                        lib: (z.nom || '') + (n ? '  ' + n : ''),
                        couleur: couleurSure(z.couleur, C.teal),
                        o: (z.polygone.reduce((a, c) => a + c[0], 0) / z.polygone.length) },
          geometry: { type: 'Polygon', coordinates: [z.polygone.concat([z.polygone[0]])] },
          bbox: [Math.min(...lng), Math.min(...lat), Math.max(...lng), Math.max(...lat)] };
      }) };
    }
    _ajouterSecteurs() {
      const secteurs = this._secteurs();
      const S = 15.9, S0 = 15.3;       
      this._map.addSource('secteurs', { type: 'geojson', data: this._geojsonSecteurs() });
      this._map.addLayer({ id: 'secteur-f', type: 'fill', source: 'secteurs', maxzoom: S,
        paint: { 'fill-color': ['get', 'couleur'],
                 'fill-opacity': ['interpolate', ['linear'], ['zoom'], S0, .34, S, .06] } });
      this._map.addLayer({ id: 'secteur-l', type: 'line', source: 'secteurs', maxzoom: S,
        paint: { 'line-color': ['get', 'couleur'], 'line-width': 2, 'line-dasharray': [3, 2],
                 'line-opacity': ['interpolate', ['linear'], ['zoom'], S0, .9, S, .15] } });
      


      this._map.addLayer({ id: 'secteur-n', type: 'symbol', source: 'secteurs', maxzoom: S,
        layout: { 'text-field': ['get', 'nom'], 'text-font': POLICE_GRASSE,
                  'text-size': ['interpolate', ['linear'], ['zoom'], 12, 11, 15.5, 15],
                  'text-letter-spacing': .08, 'text-max-width': 9, 'text-transform': 'uppercase',
                  'text-offset': [0, -.6] },
        paint: { 'text-color': C.ink, 'text-halo-color': C.surface, 'text-halo-width': 2,
                 'text-opacity': ['interpolate', ['linear'], ['zoom'], S0, 1, S, 0] } });
      this._map.addLayer({ id: 'secteur-c', type: 'symbol', source: 'secteurs', maxzoom: S,
        layout: { 'text-field': ['concat', ['to-string', ['get', 'n']], ' '],
                  'text-font': POLICE_GRASSE, 'text-size': 11, 'text-offset': [0, 1.1] },
        paint: { 'text-color': C.surface, 'text-halo-color': C.ink, 'text-halo-width': 7,
                 'text-opacity': ['interpolate', ['linear'], ['zoom'], S0, 1, S, 0] } });
       
       
      this._map.on('click', 'secteur-f', (e) => {
        const f = e.features && e.features[0];
        if (!f || this._atelier) return;
        const z = this._secteurs().find(x => x.id === f.properties.id);
        if (!z) return;
        const lng = z.polygone.map(c => c[0]), lat = z.polygone.map(c => c[1]);
        this._map.setMaxBounds(null);
        this._map.fitBounds([[Math.min(...lng), Math.min(...lat)], [Math.max(...lng), Math.max(...lat)]],
          { padding: this._paddingVolets(), duration: 800, maxZoom: 17 });
        this._ficheSecteur(z);
        if (this._mesure) this._mesure.noter('secteur', z.id);
      });
      this._map.on('mouseenter', 'secteur-f', () => {
        if (!this._atelier) this._map.getCanvas().style.cursor = 'pointer';
      });
      this._map.on('mouseleave', 'secteur-f', () => this._map.getCanvas().style.cursor = '');
    }

    _geojsonZones() {
      return { type: 'FeatureCollection', features: (this._p.zones || [])
         
         
        .filter(z => z.role !== 'secteur' && this._ligneValide(z.polygone, 3))
        .map(z => ({ type: 'Feature',
          properties: { id: z.id, nom: z.nom, cat: z.cat, couleur: couleurSure(z.couleur, C.teal),
                        interdit: z.acces === 'interdit' ? 1 : 0, motif: z.motif || '',
                         
                        etiquette: z.etiquette === true ? 1 : 0,
                        




                        ...(typeof z.opacite === 'number' ? { opacite: z.opacite } : {}),
                        










                        ...this._volumeDeZone(z) },
          geometry: { type: 'Polygon', coordinates: [z.polygone.concat([z.polygone[0]])] } })) };
    }
    


    _volumeDeZone(z) {
      if (!z.volume) return {};
      const planche = (typeof window !== 'undefined') && window.illustrationsVillage;
      const d = (planche && planche.dims) ? planche.dims(z.volume) : null;
      const axe = this._axeZone(z.polygone);
      if (!d || !(axe.volL > 0)) return {};
      const debout = d.encreH > d.encreL;
      const long = debout ? d.encreH : d.encreL;
      return { volume: z.volume, volL: axe.volL, ouvreA: +z.etageContenu || 0,
               ech: axe.volL / long,
               volCap: ((axe.volCap + (debout ? 0 : -90) + 360) % 360) };
    }
     
    _axeZone(poly) {
      let L = 0, cap = 0;
      for (let i = 0; i < poly.length; i++) {
        const a = poly[i], b = poly[(i + 1) % poly.length];
        const dx = (b[0] - a[0]) * 111320 * Math.cos(a[1] * Math.PI / 180);
        const dy = (b[1] - a[1]) * 110540;
        const d = Math.hypot(dx, dy);
        if (d > L) { L = d; cap = (Math.atan2(dx, dy) * 180 / Math.PI + 360) % 360; }
      }
      return { volL: +L.toFixed(2), volCap: +cap.toFixed(1) };
    }
    










    _pointSurTrace(pts, d) {
      const m = (a, b) => {
        const dx = (b[0] - a[0]) * 111320 * Math.cos(a[1] * Math.PI / 180);
        return Math.hypot(dx, (b[1] - a[1]) * 110540);
      };
      let reste = Math.max(0, d);
      for (let i = 1; i < pts.length; i++) {
        const l = m(pts[i - 1], pts[i]);
        if (reste <= l || i === pts.length - 1) {
          const t = l ? Math.min(1, reste / l) : 0, a = pts[i - 1], b = pts[i];
          return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
        }
        reste -= l;
      }
      return pts[pts.length - 1];
    }
    _geojsonPasserelles() {
      const TEINTE = { entree: C.teal, sortie: '#7894F7', mixte: '#56BCF6',
                       accredit: '#F5BE41', secours: C.ink };
      const LIB = { entree: 'Entrée', sortie: 'Sortie', mixte: 'Entrée et sortie',
                    accredit: 'Accréditations', secours: 'Secours' };
      const f = [];
      for (const p of (this._p.pontons || [])) {
        if (!this._ligneValide(p.trace, 2)) continue;
        for (const g of (p.passerelles || [])) {
          const d = +g.d;
          if (!Number.isFinite(d)) continue;
          const c = this._pointSurTrace(p.trace, d);
          if (!this._estPoint(c)) continue;
          const t = TEINTE[g.type] ? g.type : 'entree';
          f.push({ type: 'Feature',
            properties: { id: p.id + '-g' + Math.round(d), ponton: p.id,
              nom: g.nom || LIB[t], regime: LIB[t], couleur: TEINTE[t],
               
               
               
              public: (t === 'entree' || t === 'sortie' || t === 'mixte') ? 1 : 0 },
            geometry: { type: 'Point', coordinates: c } });
        }
      }
      return { type: 'FeatureCollection', features: f };
    }
    _ajouterPasserelles() {
      this._map.addSource('passerelles', { type: 'geojson', data: this._geojsonPasserelles() });
      const SEUIL = 15.2;
      this._map.addLayer({ id: 'pass-c', type: 'circle', source: 'passerelles', minzoom: SEUIL,
        paint: { 'circle-color': ['get', 'couleur'],
          'circle-radius': ['interpolate', ['linear'], ['zoom'], SEUIL, 3, 17, 6.5, 19, 9],
          'circle-stroke-width': 2, 'circle-stroke-color': C.surface,
          'circle-opacity': ['interpolate', ['linear'], ['zoom'], SEUIL, 0, 15.9, 1] } });
      this._map.addLayer({ id: 'pass-n', type: 'symbol', source: 'passerelles', minzoom: 16.6,
        layout: { 'text-field': ['get', 'nom'], 'text-font': POLICE_GRASSE, 'text-size': 10,
          'text-offset': [0, 1.2], 'text-anchor': 'top', 'text-optional': true,
          'text-max-width': 8 },
        paint: { 'text-color': C.ink, 'text-halo-color': C.surface, 'text-halo-width': 2,
          'text-opacity': ['interpolate', ['linear'], ['zoom'], 16.6, 0, 17.2, 1] } });
    }

    _flotteValide() {
      return (this._p.bateaux || []).filter(b => this._estPoint([b.lng, b.lat]));
    }
    _geojsonFlotte() {
      return { type: 'FeatureCollection', features: this._flotteValide().map(b => ({ type: 'Feature',
        properties: { id: b.id, cap: +b.cap || 0, couleur: this._couleurClasse(b.classe), classe: b.classe || 'defaut',
                      




                      vide: (b.nom || b.skipper || b.refId) ? 0 : 1,
                      taille: this._dimsCoque(b).L / 20,
                      lib: b.sansEtiquette ? '' : (b.nom || b.skipper || ''), court: b.sansEtiquette ? '' : (b.voile || b.nom || b.skipper || '') },
        geometry: { type: 'Point', coordinates: [+b.lng, +b.lat] } })) };
    }
    _geojsonFlotteGeo() {
      return { type: 'FeatureCollection', features: this._flotteValide().map(b => ({ type: 'Feature',
        properties: { id: b.id, couleur: this._couleurClasse(b.classe), classe: b.classe || 'defaut', vide: (b.nom || b.skipper || b.refId) ? 0 : 1 },
        geometry: this._coqueGeo(b) })) };
    }

    






    majDonnees(p, quoi) {
      











      if (p) this._p = this._assainir(Object.assign({}, this._p || {}, p));
      

      this._poserPlanche();
      const tout = !quoi || !quoi.length;
      const table = {
        poi: () => this._geojsonPoi(), surf: () => this._geojsonSurfaces(),
        edifices: () => this._geojsonEdifices(),
        trace: () => this._geojsonTraces(), zones: () => this._geojsonZones(),
        pontons: () => this._geojsonPontons(), 'zones-classe': () => this._geojsonZonesClasse(), passerelles: () => this._geojsonPasserelles(),
        secteurs: () => this._geojsonSecteurs(),
        groupes: () => this._geojsonGroupes(), barrages: () => this._geojsonBarrages(), 'barrages-bouts': () => this._geojsonBoutsBarrage(),
        stands: () => this._geojsonStands(),
        flotte: () => this._geojsonFlotte(), 'flotte-geo': () => this._geojsonFlotteGeo()
      };
      Object.keys(table).forEach(nom => {
        if (!tout && quoi.indexOf(nom) < 0) return;
        const src = this._map && this._map.getSource(nom);
        if (!src) return;
        try { src.setData(table[nom]()); } catch (e) { this._incident('maj ' + nom, e); }
      });
      if (tout) {
        


        










        try { this._appliquerFiltres(); } catch (e) { this._incident('filtres', e); }
        try { this._majImagesZones(); } catch (e) { this._incident('images de zone', e); }
        this._flotteVive = !!(this._p.bateaux || []).length;
         
         
         
        if (this._marqPontons) { this._marqPontons.forEach(m => m.remove()); this._marqPontons = []; }
        try { this._ajouterMarqueursPonton(); } catch (e) { this._incident('marqueurs de ponton', e); }
        




        const t = this._p.tymal;
        if (this._tymalM && t && this._estPoint([t.lng, t.lat])) {
          try { this._tymalM.setLngLat([t.lng, t.lat]); } catch (e) { this._incident('position TyMAL', e); }
        }
      }
      













      this._rafraichirInterface();
      return true;
    }

    


    _rafraichirInterface() {
      try { this._majUrgent(); } catch (e) { this._incident('annonce', e); }
      try { this._rendreProg(); } catch (e) { this._incident('programme', e); }
      this._rafraichirFiche();
    }

    



    modeAtelier(actif) {
      this._atelier = actif === undefined ? true : !!actif;
      if (this._atelier) { this._actives = null; this._detail = true; this._choixVue = true; }
      this._appliquerFiltres();
      return this._atelier;
    }

    









    







    _lieuDe(id) {
      if (!id) return null;
      const o = (this._p.poi || []).find(x => x.id === id);
      if (o) return o;
      const p = (this._p.pontons || []).find(x => x.id === id);
      if (!p || !this._ligneValide(p.trace, 2)) return null;
      const c = this._milieuPonton(p);
      return { id: p.id, nom: p.nom || '', cat: 'bateaux', ponton: true,
               lng: c ? c[0] : undefined, lat: c ? c[1] : undefined };
    }
    _milieuPonton(p) {
      const t = p.trace || [];
      if (t.length < 2) return null;
      let total = 0;
      for (let i = 1; i < t.length; i++) total += this._distanceM(t[i - 1], t[i]);
      let reste = total / 2;
      for (let i = 1; i < t.length; i++) {
        const d = this._distanceM(t[i - 1], t[i]);
        if (reste <= d || i === t.length - 1) {
          const k = d ? reste / d : 0;
          return [t[i - 1][0] + (t[i][0] - t[i - 1][0]) * k,
                  t[i - 1][1] + (t[i][1] - t[i - 1][1]) * k];
        }
        reste -= d;
      }
      return t[0];
    }
    _ajouterMarqueursPonton() {
      





      




      const pontons = (this._p.pontons || [])
        .filter(p => this._ligneValide(p.trace, 2) && !p.parent && p.zone !== false);
      if (!pontons.length) return;
      this._marqPontons = this._marqPontons || [];
      pontons.forEach(p => {
        const ancre = (this._ancresBadge || {})[p.id];
        const c = ancre ? ancre.lngLat : this._milieuPonton(p);
        if (!this._estPoint(c)) return;
        const famille = [p.id].concat((this._p.pontons || [])
          .filter(x => x.parent === p.id).map(x => x.id));
        const n = (this._p.bateaux || []).filter(b => famille.indexOf(b.pontonId) >= 0).length;
        const pris = (this._p.bateaux || []).filter(b => famille.indexOf(b.pontonId) >= 0 && b.nom).length;
        const el = document.createElement('button');
        el.className = 'vm__pont';
        el.type = 'button';
        el.style.setProperty('--c', couleurSure(this._couleurClasse(p.classe), C.teal));
        



        






        const drapeau = DRAPEAU[p.classe];
        el.classList.toggle('est-drapeau', !!drapeau);
        el.dataset.ponton = p.id; el.dataset.classe = p.classe || '';
        

        el.innerHTML =
          '<span class="vm__pontd">' +
            (drapeau ? '<img src="' + this._esc(drapeau) + '" alt="" loading="lazy">'
                     : svg(PICTO.boat, 'vm__ponti')) +
            (n ? '<span class="vm__pontn">' + pris + '</span>' : '') +
          '</span>' +
           
          (drapeau ? '' : '<span class="vm__pontl">' + this._esc(p.nom || '') + '</span>');
        

        el.appendChild(Object.assign(document.createElement('span'), {
          className: 'vm__slo', textContent: (p.nom || '') + (n ? ', ' + pris + ' bateaux sur ' + n + ' places' : '') }));
        


        el.addEventListener('click', () => { this._allerPonton(p.id); this._ficheClasse(p); });
        

        const decal = Array.isArray(p.badge) && p.badge.length === 2 && p.badge.every(Number.isFinite) ? p.badge : [0, 0];
        this._marqPontons.push(new maplibregl.Marker({ element: el, anchor: 'top', offset: [decal[0], decal[1] - (drapeau ? 30 : 25)] })
          .setLngLat(c).addTo(this._map));
      });
    }
    


    _selectionnerBateau(id) {
      if (!this._map) return;
      this._batSel = id || null;
      const f = ['==', ['get', 'id'], id || ''];
      ['flotte-sel-g', 'flotte-sel-h', 'flotte-sel', 'flotte-sel-b'].forEach(l => { try { if (this._map.getLayer(l)) this._map.setFilter(l, f); } catch (e) {   } });
      if (this._pulseSel) { cancelAnimationFrame(this._pulseSel); this._pulseSel = null; }
      if (!id || !this._map.getLayer('flotte-sel')) return;
      let reduit = false;
      try { reduit = matchMedia('(prefers-reduced-motion:reduce)').matches; } catch (e) { reduit = false; }
      if (reduit) return;
      const t0 = performance.now(), duree = 380;
      const pas = (t) => {
        const k = Math.min(1, (t - t0) / duree), e = 1 - Math.pow(1 - k, 3);
        try {
          this._map.setPaintProperty('flotte-sel', 'line-width', 9 - 5.8 * e);
          this._map.setPaintProperty('flotte-sel-g', 'line-width', 30 - 14 * e);
          this._map.setPaintProperty('flotte-sel-h', 'line-width', 16 - 8 * e);
          this._map.setPaintProperty('flotte-sel-b', 'circle-stroke-width', 7 - 4 * e);
        } catch (err) { return; }
        if (k < 1) this._pulseSel = requestAnimationFrame(pas); else this._pulseSel = null;
      };
      this._pulseSel = requestAnimationFrame(pas);
    }
    _releverFanion(id) {
      (this._marqPontons || []).forEach(mk => { const el = mk.getElement(); el.classList.toggle('est-releve', !!id && el.dataset.ponton === id); });
    }
    _allerPonton(id) {
      const p = (this._p.pontons || []).find(x => x.id === id);
      if (!p || !this._ligneValide(p.trace, 2)) return;
      

      let pts = p.trace;
      try {
        const zs = this._geojsonZonesClasse().features;
        const zc = zs.find(f => f.properties.membre === id) || zs.find(f => f.properties.ponton === id);
        if (zc) pts = zc.geometry.coordinates[0];
      } catch (e) {   }
      const lng = pts.map(c => c[0]), lat = pts.map(c => c[1]);
      this._map.setMaxBounds(null);
      this._map.fitBounds([[Math.min(...lng), Math.min(...lat)], [Math.max(...lng), Math.max(...lat)]],
        { padding: this._paddingVolets(), duration: 700, maxZoom: 17.6 });
      if (this._mesure) this._mesure.noter('ponton', id);
    }

    








    












    _boiteApercu() {
      let n = this.querySelector('#vmSurvol');
      if (!n) {
        n = document.createElement('div');
        n.id = 'vmSurvol';
        n.className = 'vm__survol';
        





        n.hidden = true;
        this.querySelector('.vm').appendChild(n);
      }
      return n;
    }
    




    _poserApercu(n, ancre) {
      if (!ancre || !this._map) return;
      this._apercuAncre = ancre;
      const p = this._map.project(ancre);
      const r = this.querySelector('.vm').getBoundingClientRect();
      const cr = this._map.getCanvasContainer().getBoundingClientRect();
      const L = this._map.getCanvas().clientWidth;
      









      const demi = Math.min(n.offsetWidth / 2 || 150, L / 2);
      const x = Math.min(L - demi - 4, Math.max(demi + 4, p.x));
      n.style.left = (cr.left - r.left + x) + 'px';
      n.style.top = (cr.top - r.top + p.y) + 'px';
      n.hidden = false;
      if (!this._apercuSuit) {
        this._apercuSuit = true;
        this._map.on('move', () => {
          const b = this.querySelector('#vmSurvol');
          if (b && !b.hidden && this._apercuAncre) this._poserApercu(b, this._apercuAncre);
        });
      }
    }
    _fermerApercu() {
      const n = this.querySelector('#vmSurvol');
      if (n) n.hidden = true;
      this._apercuAncre = null;
      this._apercuTouche = null;
    }
     
    _court(t, n) {
      const s2 = String(t || '').trim();
      return s2.length > n ? s2.slice(0, n - 1).replace(/[\s,;:.]+$/, '') + '…' : s2;
    }
    _visuelApercu(o) {
      const cat = this._cat(o.cat);
      const c = couleurSure(cat.couleur, C.teal);
       
       
      const pic = '<span class="vm__svimg vm__svpic" style="background:' + c + '">' + svg(PICTO[cat.picto] || PICTO.star, '') + '</span>';
      const logo = urlSure(o.logo)
        ? '<span class="vm__svimg vm__svlogo"><img src="' + this._esc(urlSure(o.logo)) + '" alt="" loading="lazy"' + this._repli(pic, true) + '></span>'
        : pic;
      if (urlSure(o.photo)) return '<img class="vm__svimg" src="' + this._esc(vignette(urlSure(o.photo), 128)) + '" alt="" loading="lazy"' + this._repli(logo) + '>';
      return logo;
    }

    _apercuLieu(o, point) {
      if (!o || this._atelier) return;
      const cat = this._cat(o.cat);
      const c = couleurSure(cat.couleur, C.teal);
      const anims = (this._p.animations || []).filter(a => a.poiId === o.id && a.date === this._jour).length;
      const n = this._boiteApercu();
      n.innerHTML =
        '<span class="vm__svbarre" style="background:' + c + '"></span>' +
        this._visuelApercu(o) +
        '<span class="vm__svt">' +
          '<b>' + this._esc(o.nom || '') + '</b>' +
          '<em style="color:' + c + '">' + this._esc(o.sousCat || this._libCat(cat)) + '</em>' +
          (o.desc ? '<i>' + this._esc(this._court(o.desc, 74)) + '</i>' : '') +
          this._pastilleHoraire(o) +
           
          (anims ? '<u>' + svg(PICTO.star, '') + anims + ' ' + this._esc(this._t('prog')) + '</u>' : '') +
        '</span>' +
        '<span class="vm__svfl">' + svg(IC.fleche) + '</span>';
      this._poserApercu(n, this._centre(o));
    }

    _apercuBateau(b, point) {
      if (!b || this._atelier) return;
      const cl = couleurSure(this._couleurClasse(b.classe), C.teal);
      const ini = (b.skipper || b.nom || '?').split(/\s+/).filter(Boolean).slice(0, 2)
        .map(x => x[0]).join('').toUpperCase();
      const n = this._boiteApercu();
      n.innerHTML =
        '<span class="vm__svbarre" style="background:' + cl + '"></span>' +
        (function (ini2) {
           
           
           
           
          const img = urlSure(b.photo) || urlSure(b.portrait);
          return img
            ? '<img class="vm__svimg" src="' + this._esc(img === urlSure(b.photo) ? vignette(img, 128) : portrait(img, 128)) + '" alt="" loading="lazy"' + this._repli(ini2) + '>'
            : ini2;
        }).call(this, '<span class="vm__svimg vm__svini" style="background:' + cl + '">' + this._esc(ini) + '</span>') +
        '<span class="vm__svt">' +
          '<b>' + this._esc(b.skipper || b.nom || this._t('posteLibre')) + '</b>' +
          '<em style="color:' + cl + '">' + this._esc(this._libClasse(b.classe)) + '</em>' +
          '<i>' + this._esc(b.nom || '') + (b.voile ? ' · ' + this._esc(b.voile) : '') + '</i>' +
        '</span>' +
        

        (DRAPEAU[b.classe] ? '<img class="vm__svcl" src="' + this._esc(DRAPEAU[b.classe]) + '" alt="">' : '') +
        '<span class="vm__svfl">' + svg(IC.fleche) + '</span>';
      this._poserApercu(n, [+b.lng, +b.lat]);
    }
     
    _carteBateau(b, point) { return this._apercuBateau(b, point); }

    _fermerCarteBateau() { this._fermerApercu(); }

    








    _ajouterFlotte() {
      const flotte = (this._p.bateaux || []).filter(b => this._estPoint([b.lng, b.lat]));
      if (!flotte.length) return;
      this._flotteVive = true;
      const SEUIL_COQUE = 16.6;    
      this._seuilCoque = SEUIL_COQUE;
      if (!this._map.hasImage('coque-sdf')) this._map.addImage('coque-sdf', this._coque2D('#fff', true), { pixelRatio: 2, sdf: true });
      this._map.addSource('flotte', { type: 'geojson', data: this._geojsonFlotte() });
      



      this._map.addSource('flotte-geo', { type: 'geojson', data: this._geojsonFlotteGeo() });
      






















      this._map.addLayer({ id: 'flotte-h', type: 'line', source: 'flotte-geo', minzoom: SEUIL_COQUE,
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': C.surface,
                 'line-width': ['interpolate', ['linear'], ['zoom'], 16.5, 2.6, 19, 5.5],
                 'line-opacity': ['case', ['==', ['get', 'vide'], 1], .5, .95] } });
      this._map.addLayer({ id: 'flotte-f', type: 'fill', source: 'flotte-geo', minzoom: SEUIL_COQUE,
        paint: { 'fill-color': ['get', 'couleur'],
                  
                  
                 'fill-opacity': ['case', ['==', ['get', 'vide'], 1], .22, 1] } });
      this._map.addLayer({ id: 'flotte-c', type: 'line', source: 'flotte-geo', minzoom: SEUIL_COQUE,
        paint: { 'line-color': C.ink,
                 'line-width': ['interpolate', ['linear'], ['zoom'], 16.5, .8, 19, 2],
                 'line-opacity': ['case', ['==', ['get', 'vide'], 1], .45, .9] } });
      






       
      this._map.addLayer({ id: 'flotte-sel-g', type: 'line', source: 'flotte-geo', minzoom: SEUIL_COQUE,
        filter: ['==', ['get', 'id'], ''],
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': C.teal, 'line-width': 16, 'line-opacity': .38, 'line-blur': 6 } });
      this._map.addLayer({ id: 'flotte-sel-h', type: 'line', source: 'flotte-geo', minzoom: SEUIL_COQUE,
        filter: ['==', ['get', 'id'], ''],
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': C.surface, 'line-width': 8, 'line-opacity': .95 } });
      this._map.addLayer({ id: 'flotte-sel', type: 'line', source: 'flotte-geo', minzoom: SEUIL_COQUE,
        filter: ['==', ['get', 'id'], ''],
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': C.tealDeep, 'line-width': 3.2, 'line-opacity': 1 } });
      this._map.addLayer({ id: 'flotte-sel-b', type: 'circle', source: 'flotte', maxzoom: SEUIL_COQUE, minzoom: 15,
        filter: ['==', ['get', 'id'], ''],
        paint: { 'circle-radius': ['interpolate', ['linear'], ['zoom'], 15, 12, 16.6, 20], 'circle-color': 'rgba(0,0,0,0)',
                 'circle-stroke-width': 3, 'circle-stroke-color': C.tealDeep, 'circle-stroke-opacity': .95 } });
      



      if (this._map.getLayer('poi-tap')) ['flotte-h', 'flotte-f', 'flotte-c'].forEach(l => { try { this._map.moveLayer(l, 'poi-tap'); } catch (e) {   } });
      




      




      this._map.addLayer({ id: 'flotte-b', type: 'symbol', source: 'flotte', minzoom: 16,
        layout: { 'icon-image': 'coque-sdf', 'icon-rotate': ['get', 'cap'],
                  'icon-rotation-alignment': 'map', 'icon-allow-overlap': true,
                  




                  'icon-ignore-placement': true,
                  









                  'icon-size': ['interpolate', ['linear'], ['zoom'],
                    15, ['*', ['get', 'taille'], .22],
                    16.6, ['*', ['get', 'taille'], .42]],
                  


                  



                  'text-field': ['step', ['zoom'], '',
                    16.6, ['case', ['==', ['get', 'vide'], 1], '', ['match', ['get', 'classe'], ['ultim', 'ocean-fifty', 'imoca'], ['get', 'court'], '']],
                    17.4, ['case', ['==', ['get', 'vide'], 1], '', ['get', 'court']],
                    17.9, ['case', ['==', ['get', 'vide'], 1], '', ['match', ['get', 'classe'], ['ultim', 'ocean-fifty', 'imoca'], ['get', 'lib'], ['get', 'court']]],
                    18.6, ['case', ['==', ['get', 'vide'], 1], '', ['get', 'lib']]],
                  'text-font': POLICE_GRASSE, 'text-size': 10.5,
                  



                  'text-offset': ['step', ['zoom'], ['literal', [0, 1.5]], SEUIL_COQUE, ['literal', [0, 0]]],
                  'text-padding': 3, 'text-max-width': 9,
                   
                  'text-optional': true },
        paint: { 'icon-color': ['get', 'couleur'],
                 



                 'icon-halo-color': C.ink, 'icon-halo-width': 1.6,
                 



                 'icon-opacity': ['step', ['zoom'],
                   ['case', ['==', ['get', 'vide'], 1], .38, 1], SEUIL_COQUE, 0],
                 'text-color': C.ink, 'text-halo-color': C.surface, 'text-halo-width': 1.8 } });
      const ouvrir = (e) => {
        if (this._appuiLong) return;           
        const f = e.features && e.features[0];
        if (!f) return;
        


        if (this._map.getZoom() < SEUIL_COQUE && this._map.getLayer('zone-classe-f') &&
            this._map.queryRenderedFeatures(e.point, { layers: ['zone-classe-f'] }).length) return;
        

        const ev = e.originalEvent;
        if (ev && this._clicCoqueT === ev.timeStamp) return;
        if (ev) this._clicCoqueT = ev.timeStamp;
        const b = (this._p.bateaux || []).find(x => x.id === f.properties.id);
        if (!b) return;
        



        const rejoueB = this._apercuTouche === b.id &&
          (Date.now() - (this._apercuT0 || 0)) < 260;
        if (this._tactile() && !this._atelier && (this._apercuTouche !== b.id || rejoueB)) {
          this._apercuTouche = b.id;
          this._apercuT0 = Date.now();
          this._apercuVise = { k: 'bateau', id: b.id };
          this._carteBateau(b, e.point);
          return;
        }
        this._apercuTouche = null;
        this._ficheBateau(b);
      };
       
       
       
      this._clicCoque = ouvrir;
      ['flotte-b', 'flotte-f'].forEach(l => {
        this._map.on('click', l, ouvrir);
        this._map.on('mouseenter', l, () => this._map.getCanvas().style.cursor = 'pointer');
        this._map.on('mouseleave', l, () => { this._map.getCanvas().style.cursor = ''; this._fermerCarteBateau(); });
        



        this._map.on('mousemove', l, (e) => {
          if (this._atelier) return;
          const f = e.features && e.features[0];
          if (!f) return;
          const b = (this._p.bateaux || []).find(x => x.id === f.properties.id);
          if (b) this._carteBateau(b, e.point);
        });
      });
       
      ['ponton-b'].forEach(l => this._map.getLayer(l) && this._map.setLayoutProperty(l, 'visibility', 'none'));
    }
    _ficheBateau(b) {
      if (!b || this._atelier) return;    
      





      if (b.poiId && (this._p.poi || []).some(o => o.id === b.poiId)) {
        this._apercuTouche = b.poiId; this._apercuT0 = 0;
        this._ouvrirPoi(b.poiId);
        return;
      }
      const pont = (this._p.pontons || []).find(p => p.id === b.pontonId);
      const etat = { amarre: 'etAmarre', attendu: 'etAttendu', parti: 'etParti', absent: 'etAbsent' }[b.statut];
      


      const alerte = b.statut && b.statut !== 'amarre';
      






      const en = this._lang === 'en';
      const couleur = couleurSure(this._couleurClasse(b.classe), C.teal);
      


      const hero = urlSure(b.photo);
      const drapeauClasse = DRAPEAU[b.classe] ? urlSure(DRAPEAU[b.classe]) : '';
      const pastille = (lib, val) => (val ? '<li><b>' + this._esc(lib) + '</b>' + this._esc(String(val)) + '</li>' : '');
      const dims = (b.longueur && this._dimsCoque(b).plausible) ? (b.longueur + ' m' + (b.largeur ? ' × ' + b.largeur + ' m' : '')) : '';
      const specs =
        pastille(en ? 'Sail no.' : 'Voile', b.voile) +
        pastille(en ? 'Size' : 'Dimensions', dims) +
        pastille(en ? 'Designer' : 'Architecte', b.architecte) +
        pastille(en ? 'Yard' : 'Chantier', b.chantier) +
        pastille(en ? 'Built' : 'Année', b.annee) +
        pastille(en ? 'Route du Rhum' : 'Participations', b.participation && (b.participation + (/\d/.test(b.participation) ? (en ? ' entries' : ' Route du Rhum') : '')));
      this.querySelector('#vmFiche').innerHTML =
        '<button class="vm__fx" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button>' +
        


        (hero ? '<div class="vm__fhero"><img class="vm__fimg" src="' + this._esc(vignette(hero, 480, 230)) + '" alt="" loading="eager" decoding="async"' + this._repli('') + '></div>'
              : '<div class="vm__fhero vm__fhero--classe" style="--c:' + couleur + '">' +
                  (drapeauClasse ? '<img class="vm__fherof" src="' + this._esc(drapeauClasse) + '" alt="">' : '') + '</div>') +
        '<div class="vm__fbody vm__fbody--chevauche">' +
          '<div class="vm__fskip vm__fskip--grand">' +
            '<span class="vm__fportw">' +
              (urlSure(b.portrait) ? '<img class="vm__fport" src="' + this._esc(portrait(urlSure(b.portrait), 112)) + '" alt=""' + this._repli('') + '>' : '<span class="vm__fport vm__fport--vide">' + svg(IC.skipper, '') + '</span>') +
              (drapeauClasse ? '<img class="vm__fpin" src="' + this._esc(drapeauClasse) + '" alt="' + this._esc(this._libClasse(b.classe)) + '">' : '') +
            '</span>' +
            '<span class="vm__fskipt">' +
              (b.skipper ? '<b>' + this._esc(b.skipper) + '</b>' : '') +
              (b.nationalite || urlSure(b.drapeau) ? '<em>' + (urlSure(b.drapeau) ? '<img src="' + this._esc(urlSure(b.drapeau)) + '" alt="">' : '') + this._esc(paysDe(b.nationalite, this._lang)) + '</em>' : '') +
            '</span>' +
          '</div>' +
          '<span class="vm__fcat" style="--c:' + couleur + '">' +
            svg(PICTO.boat, 'vm__fic') + this._esc(this._libClasse(b.classe)) + '</span>' +
           
          '<h3>' + this._esc(b.nom || this._t(b.skipper ? 'bateauAConfirmer' : 'posteLibre')) + '</h3>' +
          (specs ? '<ul class="vm__fspecs">' + specs + '</ul>' : '') +
          (b.citation ? '<blockquote class="vm__fcit" style="--c:' + couleur + '">' + this._esc(b.citation.replace(/^["«\s]+|["»\s]+$/g, '')) + '</blockquote>' : '') +
          (b.bio ? '<p>' + this._esc(b.bio) + '</p>' : '') +
          (b.desc ? '<p>' + this._esc(b.desc) + '</p>' : '') +
          (pont ? '<p class="vm__fh">' + svg(IC.ancre, 'vm__fico') + this._esc(pont.nom) +
            (b.place ? ' · ' + this._esc(this._t('place')) + ' ' + this._esc(String(b.place)) : '') + '</p>' : '') +
          (etat ? (alerte
            ? '<p class="vm__falerte">' + this._esc(this._t(etat)) + '</p>'
            : '<p class="vm__fh">' + svg(IC.horloge, 'vm__fico') + this._esc(this._t(etat)) + '</p>') : '') +
        '</div>' +
        





        '<ul class="vm__opts">' +
           
          (urlSure(b.lien)
            ? '<li><a class="vm__opt vm__fskipl" href="' + this._esc(urlSure(b.lien)) + '" target="_blank" rel="noopener noreferrer">' +
                '<span class="vm__opti est-fort">' + svg(IC.skipper, '') + '</span>' +
                '<span class="vm__optt"><b>' + this._esc(en ? 'Skipper page' : 'Voir la fiche skipper') + '</b>' +
                '<em>' + this._esc(b.skipper || '') + '</em></span>' +
                svg(IC.chevronD, 'vm__optc') + '</a></li>'
            : '') +
          (this._estPoint([b.lng, b.lat])
            ? '<li><a class="vm__opt vm__fgo" href="https://www.google.com/maps/dir/?api=1&destination=' +
                encodeURIComponent(b.lat + ',' + b.lng) + '" target="_blank" rel="noopener noreferrer">' +
                '<span class="vm__opti' + (urlSure(b.lien) ? '' : ' est-fort') + '">' + svg(IC.chemin, '') + '</span>' +
                '<span class="vm__optt"><b>' + this._esc(this._t('yaller')) + '</b>' +
                '<em>' + this._esc(this._t('volDOiseau') || 'Itinéraire') + '</em></span>' +
                svg(IC.chevronD, 'vm__optc') + '</a></li>'
            : '') +
          '<li><button class="vm__opt vm__fpart" data-part-cle="bateau" data-part-id="' + this._esc(b.id) + '">' +
            '<span class="vm__opti">' + svg(IC.partage, '') + '</span>' +
            '<span class="vm__optt"><b>' + this._esc(this._t('partagerBateau')) + '</b></span>' +
            svg(IC.chevronD, 'vm__optc') + '</button></li>' +
          this._boutonRetour('') +
        '</ul>';
      this._ouvrirPanneau();
      this._selectionnerBateau(b.id);
      this.querySelector('.vm__fx').addEventListener('click', () => this._fermerFiche());
      const bp = this.querySelector('.vm__fpart');
      if (bp) bp.addEventListener('click', () => this._partager(b.nom || this._t('bateau'), 'bateau', b.id));
      if (this._mesure) this._mesure.noter('bateau', b.id);
    }
    _libClasse(cl) {
      const M = { ultim:'Ultim', 'ocean-fifty':'Ocean Fifty', class40:'Class40',
                  imoca:'IMOCA', 'v-mono':'Vintage Mono', 'v-multi':'Vintage Multi',
                  hospitalite: this._lang === 'en' ? 'Hospitality ship' : 'Navire hospitalité' };
      return M[cl] || this._t('flotte');
    }

    









    _encreSur(hex) {
       
       
      const v = /^#?([0-9a-f]{6})$/i.exec(hex || '');
      if (!v) return '#fff';
      const n = parseInt(v[1], 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
      return (0.2126 * r + 0.7152 * g + 0.0722 * b) > 150 ? C.ink : '#fff';
    }
    

    _croixBarrage() {
      const S = 44, cv = document.createElement('canvas'); cv.width = cv.height = S;
      const x = cv.getContext('2d');
      x.beginPath(); x.arc(S / 2, S / 2, S / 2 - 3, 0, Math.PI * 2);
      x.fillStyle = C.surface; x.fill();
      x.lineWidth = 3; x.strokeStyle = C.ink; x.stroke();
      x.lineWidth = 5; x.lineCap = 'round'; x.strokeStyle = C.ink;
      const m2 = S * .32; x.beginPath();
      x.moveTo(m2, m2); x.lineTo(S - m2, S - m2);
      x.moveTo(S - m2, m2); x.lineTo(m2, S - m2); x.stroke();
      return { width: S, height: S, data: new Uint8Array(x.getImageData(0, 0, S, S).data.buffer) };
    }
    _pastille(c) {
      const S = 56, teinte = couleurSure(c.couleur), d = PICTO[c.picto] || PICTO.star, encre = this._encreSur(teinte);
      const src = '<svg xmlns="http://www.w3.org/2000/svg" width="' + S + '" height="' + S + '" viewBox="0 0 24 24" ' +
        'fill="none" stroke="' + encre + '" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
      return new Promise((ok, ko) => {
        const img = new Image();
        img.onload = () => {
          const cv = document.createElement('canvas'); cv.width = cv.height = S;
          const x = cv.getContext('2d');
          x.beginPath(); x.arc(S / 2, S / 2, S / 2 - 4, 0, Math.PI * 2);
          x.fillStyle = teinte; x.fill();
          x.lineWidth = 4; x.strokeStyle = '#fff'; x.stroke();
          x.lineWidth = 1.6; x.beginPath(); x.arc(S / 2, S / 2, S / 2 - 1.6, 0, Math.PI * 2);
          x.strokeStyle = C.ink; x.stroke();
          const t = S * 0.5; x.drawImage(img, (S - t) / 2, (S - t) / 2, t, t);
          ok({ width: S, height: S, data: new Uint8Array(x.getImageData(0, 0, S, S).data.buffer) });
        };
        img.onerror = ko;
        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(src)));
      });
    }
    







    _trame(couleur) {
      const S = 16, cv = document.createElement('canvas');
      cv.width = cv.height = S;
      const x = cv.getContext('2d');
      x.strokeStyle = couleur; x.lineWidth = 2.6; x.lineCap = 'square';
       
       
      [[-S, 0], [0, 0], [S, 0]].forEach(([d]) => {
        x.beginPath(); x.moveTo(d, S); x.lineTo(d + S, 0); x.stroke();
      });
      return { width: S, height: S, data: new Uint8Array(x.getImageData(0, 0, S, S).data.buffer) };
    }
    async _preparerPastilles() {
      if (!this._map.hasImage('barre-x')) {
        try { this._map.addImage('barre-x', this._croixBarrage(), { pixelRatio: 2 }); } catch (e) {   }
      }
      if (!this._map.hasImage('trame-interdit')) {
        try { this._map.addImage('trame-interdit', this._trame('rgba(10,26,53,.55)'), { pixelRatio: 2 }); } catch (e) {   }
      }
      for (const c of (this._p.categories || [])) {
        const nom = 'pic-' + c.cle;
        if (this._map.hasImage(nom)) continue;
         
         
        try { this._map.addImage(nom, await this._pastille(c), { pixelRatio: 2 }); } catch (e) {   }
      }
      

      






      const propres = new Map();
      (this._p.poi || []).forEach(o => {
        const p = this._pictoDe(o);
        if (!p || p === this._cat(o.cat).picto || !PICTO[p]) return;
        const nom = 'picx-' + p;
        if (!propres.has(nom)) propres.set(nom, { couleur: this._cat(o.cat).couleur, picto: p });
      });
      for (const [nom, c] of propres) {
        if (this._map.hasImage(nom)) continue;
        try { this._map.addImage(nom, await this._pastille(c), { pixelRatio: 2 }); } catch (e) {   }
      }
    }

    







    _tuilesDuVillage(zMin, zMax) {
       
       
      const v = (this._p.config.vues || []).find(x => x.cle === 'acces')
             || (this._p.config.vues || []).find(x => x.cle === 'village');
      const b = (v && v.bornes) || this._p.config.limites;
      








      const sources = Object.values(this._map.getStyle().sources || {}).filter(s => s.tiles && s.tiles.length);
      const src = sources.find(s => s.type === 'vector') || sources[0];
      if (!src) return [];
      



      const zSrc = src.maxzoom != null ? src.maxzoom : 14;
      zMax = Math.min(zMax, zSrc);
      zMin = Math.max(zMin, src.minzoom != null ? src.minzoom : 0);
      const gabarit = src.tiles[0];
      const xDe = (lng, z) => Math.floor((lng + 180) / 360 * Math.pow(2, z));
      const yDe = (lat, z) => { const r = lat * Math.PI / 180;
        return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * Math.pow(2, z)); };
      const out = [];
      for (let z = zMin; z <= zMax; z++) {
        const x1 = xDe(b[0][0], z), x2 = xDe(b[1][0], z);
        const y1 = yDe(b[1][1], z), y2 = yDe(b[0][1], z);    
        for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++)
          for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++)
            out.push(gabarit.replace('{z}', z).replace('{x}', x).replace('{y}', y));
      }
      return out;
    }
    async _preparerHorsLigne(surAvance) {
      if (!cacheDispo) return { ok: false, raison: 'cache indisponible' };
       
       
      const urls = [...new Set(this._tuilesDuVillage(11, 18))].map(u => u.replace(PROTO + '://', ''));
      




      if (!urls.length) { this._horsLigneEnCours = false;
        return { ok: false, raison: 'aucune tuile à préparer', total: 0 }; }
      const c = await ouvrirCache();
      let faits = 0, octets = 0, echecs = 0;
      this._horsLigneEnCours = true;
       
       
      const lot = 6;
      for (let i = 0; i < urls.length && this._horsLigneEnCours; i += lot) {
        await Promise.all(urls.slice(i, i + lot).map(async (u) => {
          try {
            if (await c.match(u)) { faits++; return; }
            const r = await fetch(u);
            if (!r.ok) { echecs++; return; }
            const buf = await r.clone().arrayBuffer();
            octets += buf.byteLength;
            await rangerBorne(c, u, r);
            faits++;
          } catch (e) { echecs++; }
        }));
        if (surAvance) surAvance(Math.round(faits / urls.length * 100), faits, urls.length);
      }
      this._horsLigneEnCours = false;
      return { ok: true, total: urls.length, faits, echecs, ko: Math.round(octets / 1024) };
    }

    




    _gabarit(cl) {
      const G = { ultim:[32, 23, 1], 'ocean-fifty':[15.2, 15, 1], imoca:[18.3, 5.9, 0],
                  class40:[12.2, 4.5, 0], 'v-mono':[12, 4, 0], 'v-multi':[12, 8, 1], hospitalite:[40, 8, 0] };
      return G[cl] || [14, 5, 0];
    }

    









    _profilCoque(L, B) {
      const P = [[0, .50], [.20, .32], [.32, .10], [.34, -.14], [.28, -.42], [.24, -.50],
                 [-.24, -.50], [-.28, -.42], [-.34, -.14], [-.32, .10], [-.20, .32]];
      return P.map(p => [p[0] * B, p[1] * L]);
    }
     
     
    _versGeo(centre, cap, pts) {
      const t = cap * Math.PI / 180, s = Math.sin(t), c = Math.cos(t);
      const mLng = 111320 * Math.cos(centre[1] * Math.PI / 180) || 1;
      return pts.map(p => [
        centre[0] + (p[1] * s + p[0] * c) / mLng,
        centre[1] + (p[1] * c - p[0] * s) / 110540
      ]);
    }
    








    






    _dimsCoque(b) {
      const g = this._gabarit(b.classe), multi = !!g[2];
      let L = +b.longueur || 0, B = +b.largeur || 0;
      if (!multi && L && B && B > L) { const t = L; L = B; B = t; }
      const okL = L >= g[0] * .6 && L <= g[0] * 1.6;
      const okB = okL && (multi ? (B >= L * .4 && B <= L * 1.1) : (B >= L * .18 && B <= L * .5));
      const propre = b.classe === 'hospitalite' && okL && okB;
      return { L: propre ? L : g[0], B: propre ? B : g[1], plausible: okL && okB };
    }
    _coqueGeo(b) {
      const g = this._gabarit(b.classe);
      const d = this._dimsCoque(b);
      const L = d.L, B = d.B, multi = g[2];
      const centre = [+b.lng, +b.lat], cap = +b.cap || 0;
      const ferme = (pts) => { const a = this._versGeo(centre, cap, pts); a.push(a[0]); return a; };
      if (!multi) return { type: 'Polygon', coordinates: [ferme(this._profilCoque(L, B))] };
       
       
      const central = this._profilCoque(L, B * .26);
      const flot = this._profilCoque(L * .94, B * .15);
      const dec = (pts, dx) => pts.map(p => [p[0] + dx, p[1]]);
      const poutre = [[-B * .5, B * .04], [B * .5, B * .04], [B * .5, -B * .04], [-B * .5, -B * .04]];
      return { type: 'MultiPolygon', coordinates: [
        [ferme(central)], [ferme(dec(flot, -B * .43))], [ferme(dec(flot, B * .43))], [ferme(poutre)]
      ] };
    }
    _couleurClasse(cl) {
       
       
      const M = { ultim:'#659FBF', 'ocean-fifty':'#71B9F0', class40:'#7E92EF',
                  imoca:'#76BCBE', 'v-mono':'#F9F06D', 'v-multi':'#F19F39',
                  hospitalite: '#8B5E3C',    
                  defaut: C.teal };
      return M[cl] || C.teal;
    }

    






    _coque2D(couleur, sdf) {
      const S = 64, cv = document.createElement('canvas');
      cv.width = cv.height = S;
      const x = cv.getContext('2d');
      x.beginPath();
      x.moveTo(S * .5, S * .05);
      x.bezierCurveTo(S * .82, S * .32, S * .80, S * .68, S * .70, S * .93);
      x.lineTo(S * .30, S * .93);
      x.bezierCurveTo(S * .20, S * .68, S * .18, S * .32, S * .5, S * .05);
      x.closePath();
      x.fillStyle = sdf ? '#fff' : couleur; x.fill();
      if (!sdf) { x.strokeStyle = C.surface; x.lineWidth = S * .07; x.stroke(); }
      return { width: S, height: S, data: new Uint8Array(x.getImageData(0, 0, S, S).data.buffer) };
    }

    









    


    _seuil(v) { return Number.isFinite(+v.zoomMin) ? +v.zoomMin : 0; }
    _vues() { return (this._p.config.vues || []).slice().sort((a, b) => this._seuil(b) - this._seuil(a)); }
    _modeCourant() {
      const z = this._map ? this._map.getZoom() : (this._p.config.zoomDepart || 15);
      const v = this._vues().find(x => z >= this._seuil(x));
      return v || this._vues()[this._vues().length - 1] || null;
    }

    












    
















    



















    _bornesEtage(v) {
      const vues = (this._p.config.vues || []).slice().sort((a, b) => a.zoomMin - b.zoomMin);
      const i = vues.findIndex(x => x.cle === v.cle);
      const bas = v.zoomMin != null ? v.zoomMin : (this._p.config.zoomMin || 10.5);
      const haut = i >= 0 && i < vues.length - 1 ? vues[i + 1].zoomMin : (this._p.config.zoomMax || 19.5);
      return [Math.max(bas, this._p.config.zoomMin || 10.5), haut];
    }
    _etageCourant() {
      const v = (this._p.config.vues || []).find(x => x.cle === this._mode);
      if (!v) return 1;
      const n = Math.max(1, +v.etages || 1);
      if (n === 1) return 1;
      const [bas, haut] = this._bornesEtage(v);
      const z = Math.min(haut, Math.max(bas, this._map ? this._map.getZoom() : bas));
      

      const part = (z - bas) / Math.max(0.001, haut - bas);
      return Math.min(n, Math.max(1, n - Math.floor(part * n)));
    }
    


    _etageDe(o) {
      



      if (o && o.barrage) {
        const v = (this._p.config.vues || []).find(x => x.cle === this._mode);
        return Math.max(1, +(v && v.etages) || 1);
      }
      if (o && o.etage != null && o.etage !== '') return Math.max(1, +o.etage);
      const g = this._groupeDe(o);
      if (g && g.etageContenu != null && g.etageContenu !== '') return Math.max(1, +g.etageContenu);
      


      const b = this._batiDe(o);
      if (b && b.etageContenu != null && b.etageContenu !== '') return Math.max(1, +b.etageContenu);
      const c = this._cat(o && o.cat);
      return Math.max(1, +(c && c.etage) || 3);
    }
    




    _groupeDe(o) {
      if (!o) return null;
      if (o.groupe) return (this._p.zones || []).find(z => z.id === o.groupe) || null;
      if (o._g !== undefined) return o._g;
      const c = this._centre(o);
      let gagnant = null, aire = Infinity;
      if (this._estPoint(c)) (this._p.zones || []).forEach(z => {
        if (!this._ligneValide(z.polygone, 3) || z.id === o.id) return;
        if (!this._dansPolygone(c, z.polygone)) return;
        const a = this._airePolygone(z.polygone);
        if (a < aire || (a === aire && gagnant && String(z.id) < String(gagnant.id))) { aire = a; gagnant = z; }
      });
      try { Object.defineProperty(o, '_g', { value: gagnant, enumerable: false, configurable: true }); } catch (e) {}
      return gagnant;
    }
    













    _batiDe(o) {
      if (!o) return null;
      if (o._b !== undefined) return o._b;
      const c = this._centre(o);
      let gagnant = null, aire = Infinity;
      if (this._estPoint(c)) (this._p.edifices || []).forEach(b => {
        if (!this._ligneValide(b.polygone, 3)) return;
        if (!this._dansPolygone(c, b.polygone)) return;
        const a = this._airePolygone(b.polygone);
        if (a < aire || (a === aire && gagnant && String(b.id) < String(gagnant.id))) { aire = a; gagnant = b; }
      });
      try { Object.defineProperty(o, '_b', { value: gagnant, enumerable: false, configurable: true }); } catch (e) {}
      return gagnant;
    }
    




    _contenuDe(idEdifice) {
      const poi = this._p.poi || [];
      if (!this._idxContenu || this._idxContenu.src !== poi) {
        const m = new Map();
        poi.forEach(o => {
          const b = this._batiDe(o);
          if (!b) return;
          if (!m.has(b.id)) m.set(b.id, []);
          m.get(b.id).push(o);
        });
        this._idxContenu = { src: poi, m };
      }
      return this._idxContenu.m.get(idEdifice) || [];
    }
    


    _nomBati(b) {
      if (!b) return '';
      if (b.nom) return b.nom;
      const d = this._contenuDe(b.id);
      return (d.length === 1 && d[0].nom) ? d[0].nom : '';
    }
    







    _batiParId(id) {
      const src = this._p.edifices || [];
      if (!this._idxBati || this._idxBati.src !== src) {
        const m = new Map(); src.forEach(b => m.set(b.id, b));
        this._idxBati = { src, m };
      }
      return this._idxBati.m.get(id) || null;
    }
    










    _plusPetitBati(features) {
      let gagnant = null, aire = Infinity;
      for (const f of (features || [])) {
        const id = f.properties && f.properties.id;
        const b = this._batiParId(id);
        if (!b || !this._ligneValide(b.polygone, 3)) continue;
        const a = this._airePolygone(b.polygone);
        if (a < aire || (a === aire && gagnant && String(id) < String(gagnant.properties.id))) {
          aire = a; gagnant = f;
        }
      }
      return gagnant || (features && features[0]) || null;
    }
    












    


    _groupeReplie(id) {
      const f = (this._geojsonGroupes().features || []).find(x => x.properties.id === id);
      return f ? { ouvre: +f.properties.ouvre, n: +f.properties.n, centre: f.geometry.coordinates } : null;
    }
    _geojsonGroupes() {
      const e = this._etageCourant();
      const par = new Map();
      (this._p.poi || []).forEach(o => {
        if (this._fam && this._fam.indexOf(o.cat) < 0) return;
        if (this._actives && !this._actives.has(o.cat)) return;
        if (this._etageDe(o) >= e) return;                  
        const g = this._groupeDe(o);
        if (!g) return;                                     
        if (!par.has(g.id)) par.set(g.id, { z: g, n: 0, cats: {}, ouvre: 0 });
        const s = par.get(g.id);
        s.n++; s.cats[o.cat] = (s.cats[o.cat] || 0) + 1;
        s.ouvre = Math.max(s.ouvre, this._etageDe(o));
      });
      return { type: 'FeatureCollection', features: this._fusionnerGroupes([...par.values()], e).map(s => {
        const dom = Object.keys(s.cats).sort((a, b) => s.cats[b] - s.cats[a])[0];
        const cat = this._cat(dom);
        return { type: 'Feature',
          properties: { id: s.z.id, nom: s.nom !== undefined ? s.nom : (s.z.nom || ''),
                        n: s.n, ouvre: s.ouvre,
                        lib: String(s.n), couleur: couleurSure(cat.couleur, C.teal) },
          geometry: { type: 'Point', coordinates: s.c || this._centre(s.z) } };
      }).filter(f => this._estPoint(f.geometry.coordinates)) };
    }
    




















    _fusionnerGroupes(liste, etage) {
      if (liste.length < 2) return liste;
      






      const SEUIL = 90;
      const z = this._zoomDeLEtage(etage);
      const mpp = (78271.51696 * Math.cos(48.65 * Math.PI / 180)) / Math.pow(2, z);
      const seuilM = SEUIL * mpp;
      const R = 111320, RX = R * Math.cos(48.647 * Math.PI / 180);
      const pts = liste.map(s => ({ s, c: this._centre(s.z) })).filter(p => this._estPoint(p.c));
      const pris = new Array(pts.length).fill(false);
      const sortie = [];
      for (let i = 0; i < pts.length; i++) {
        if (pris[i]) continue;
        const membres = [pts[i]]; pris[i] = true;
        for (let j = i + 1; j < pts.length; j++) {
          if (pris[j]) continue;
          const dx = (pts[j].c[0] - pts[i].c[0]) * RX, dy = (pts[j].c[1] - pts[i].c[1]) * R;
          if (Math.hypot(dx, dy) > seuilM) continue;
          pris[j] = true; membres.push(pts[j]);
        }
        if (membres.length === 1) { sortie.push(pts[i].s); continue; }
        

        const chef = membres.slice().sort((a, b) => b.s.n - a.s.n)[0];
        const cats = {};
        membres.forEach(m => Object.keys(m.s.cats).forEach(k => { cats[k] = (cats[k] || 0) + m.s.cats[k]; }));
        sortie.push({
          z: chef.s.z, n: membres.reduce((t, m) => t + m.s.n, 0), cats,
          ouvre: Math.max(...membres.map(m => m.s.ouvre)),
          nom: prefixeCommun(membres.map(m => m.s.z.nom || '')) || (chef.s.z.nom || ''),
          

          c: [membres.reduce((t, m) => t + m.c[0], 0) / membres.length,
              membres.reduce((t, m) => t + m.c[1], 0) / membres.length]
        });
      }
      return sortie;
    }
    _ajouterGroupes() {
      this._map.addSource('groupes', { type: 'geojson', data: this._geojsonGroupes() });
      this._map.addLayer({ id: 'groupe-c', type: 'circle', source: 'groupes',
        paint: { 'circle-radius': ['interpolate', ['linear'], ['zoom'], 13, 15, 18, 20],
                 'circle-color': ['get', 'couleur'], 'circle-stroke-width': 2.5,
                 'circle-stroke-color': '#fff', 'circle-opacity': .95 } });
      this._map.addLayer({ id: 'groupe-n', type: 'symbol', source: 'groupes',
        layout: { 'text-field': ['get', 'lib'], 'text-font': POLICE_GRASSE, 'text-size': 13,
                  'text-allow-overlap': true, 'text-ignore-placement': true },
        paint: { 'text-color': C.ink, 'text-halo-color': '#fff', 'text-halo-width': 1.2 } });
      













      this._map.addLayer({ id: 'groupe-l', type: 'symbol', source: 'groupes',
        layout: { 'text-field': ['get', 'nom'], 'text-font': POLICE_GRASSE, 'text-size': 10.5,
                  'text-offset': [0, 1.9], 'text-max-width': 10, 'text-optional': false,
                  'symbol-sort-key': -40,
                  










                  'text-allow-overlap': true, 'text-ignore-placement': true,
                  'text-transform': 'uppercase', 'text-letter-spacing': .05 },
        paint: { 'text-color': C.ink, 'text-halo-color': '#fff', 'text-halo-width': 2 } });
      

      this._map.on('click', 'groupe-c', (ev) => {
        const f = ev.features && ev.features[0];
        if (!f || this._atelier) return;
        this._descendreAEtage(+f.properties.ouvre, f.geometry.coordinates);
        if (this._mesure) this._mesure.noter('groupe', f.properties.id);
      });
      this._map.on('mouseenter', 'groupe-c', () => {
        if (!this._atelier) this._map.getCanvas().style.cursor = 'pointer';
      });
      this._map.on('mouseleave', 'groupe-c', () => this._map.getCanvas().style.cursor = '');
    }
    


    _descendreAEtage(cible, centre) {
      const v = (this._p.config.vues || []).find(x => x.cle === this._mode);
      if (!v || !this._map) return;
      const n = Math.max(1, +v.etages || 1);
      const [bas, haut] = this._bornesEtage(v);
      const z = bas + ((n - cible) + 0.5) * (haut - bas) / n;
      this._map.easeTo({ center: this._estPoint(centre) ? centre : this._map.getCenter(),
                         zoom: Math.min(haut - 0.05, z), duration: 700 });
    }
    













    _plages(o, jour) {
      const ouv = o && o.ouverture;
      if (ouv && typeof ouv === 'object') {
        const ex = ouv.exceptions && jour && Object.prototype.hasOwnProperty.call(ouv.exceptions, jour);
        const l = ex ? ouv.exceptions[jour] : ouv.defaut;
        return Array.isArray(l) ? l : [];
      }
      

      const t = String((o && o.horaires) || '').trim();
      if (!t) return null;                                   
      if (/24\s*h/i.test(t)) return [['00:00', '24:00']];
      const m = t.match(/(\d{1,2}[:h]\d{2})\s*[-–—à]\s*(\d{1,2}[:h]\d{2})/);
      return m ? [[m[1].replace('h', ':'), m[2].replace('h', ':')]] : null;
    }
    _enMinutes(s) { const m = /^(\d{1,2}):(\d{2})/.exec(String(s || '')); return m ? +m[1] * 60 + +m[2] : null; }
    

    _etatOuverture(o, jour, minutes) {
      const p = this._plages(o, jour);
      if (!p) return null;                                   
      if (!p.length) return { etat: 'ferme', reste: null };
      const now = minutes == null ? this._heure : minutes;
      if (now == null) return null;
      let reste = null;
      for (const [a, b] of p) {
        const d1 = this._enMinutes(a), d2 = this._enMinutes(b);
        if (d1 == null || d2 == null) continue;
        const passeMinuit = d2 <= d1;
        const dedans = passeMinuit ? (now >= d1 || now < d2) : (now >= d1 && now < d2);
        if (dedans) {
          const fin = passeMinuit && now >= d1 ? d2 + 1440 : d2;
          const r = fin - now;
          if (reste == null || r < reste) reste = r;
        }
      }
      if (reste == null) {
        



        let suivante = null;
        for (const [a] of p) {
          const d = this._enMinutes(a);
          if (d != null && d > now && (suivante == null || d < suivante)) suivante = d;
        }
        return { etat: 'ferme', reste: null, prochaine: suivante };
      }
      return { etat: reste <= 60 ? 'bientot' : 'ouvert', reste: reste };
    }
    




    























    _periodeBarrage(o) {
      if (!o || !o.barrage) return null;
      const p = o.periode || {};
      const d = String(p.debut || '').slice(0, 10), f = String(p.fin || '').slice(0, 10);
      if (!d && !f) return null;                        
      const auj = parisJourHeure().jour;
      if (d && auj < d) return 'avant';
      if (f && auj > f) return 'apres';
      return 'pendant';
    }
     
     
    _libPeriode(o) {
      const p = (o && o.periode) || {};
      const d = String(p.debut || '').slice(0, 10), f = String(p.fin || '').slice(0, 10);
      if (d && f) return this._t('duAu').replace('{d}', this._dateJourMois(d)).replace('{f}', this._dateJourMois(f));
      if (d) return this._t('aPartirDu').replace('{d}', this._dateJourMois(d));
      if (f) return this._t('jusquAu').replace('{f}', this._dateJourMois(f));
      return '';
    }
    






    _dateJourMois(iso) {
      const d = new Date(iso + 'T12:00:00');
      if (isNaN(d)) return iso;
      return d.toLocaleDateString(this._lang === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'long' });
    }
    















    _barrageActif(o) {
      if (!o || !o.barrage) return null;
      


      const per = this._periodeBarrage(o);
      if (per === 'avant') return { actif: false, aVenir: true, permanent: false };
      if (per === 'apres') return { actif: false, passee: true, permanent: false };
      const e = this._etatOuverture(o, this._jour, this._heure);
       
       
      if (!e) return { actif: true, permanent: true };
      return { actif: e.etat !== 'ferme', permanent: false, etat: e.etat, reste: e.reste, prochaine: e.prochaine };
    }
     
     
    _libBarrage(o) {
      const b = this._barrageActif(o);
       
       
      if (b && b.aVenir) return this._t('seraBarree').replace('{p}', this._libPeriode(o));
      if (!b || b.permanent) return this._libPeriode(o);
      const hh = (m) => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
      if (b.etat === 'bientot') return this._t('barreEncore').replace('{n}', b.reste);
      if (b.actif) return this._t('barreMaintenant');
      return b.prochaine != null
        ? this._t('barreDes').replace('{h}', hh(b.prochaine)) : this._t('barrePassante');
    }
    _ligneBarrage(o) {
      if (!o || !o.barrage) return '';
      const ok = o.pietons !== false;
      const b = this._barrageActif(o), quand = this._libBarrage(o);
      


      const titre = (b && b.aVenir) ? this._t('barreeAVenir')
        : (b && !b.actif) ? this._t('barreeParMoments') : this._t('routeBarree');
      return '<p class="vm__fbar' + (ok ? '' : ' is-dur') + (b && !b.actif ? ' est-inactif' : '') + '">' +
        svg(IC.alerte || IC.horloge, 'vm__fico') +
        '<b>' + this._esc(titre) + '</b>' +
        (quand ? '<span>' + this._esc(quand) + '</span>' : '') +
        '<span>' + this._esc(this._t(ok ? 'pietonsOk' : 'pietonsNon')) + '</span></p>' +
        this._ligneHoraire(o, true);
    }
    



    



    _ligneHoraire(o, estBarrage) {
      





      if (o && o.barrage && !estBarrage) return '';
      const e = this._etatOuverture(o, this._jour, this._heure);
      const plages = this._plages(o, this._jour);
      const txt = o.horaires || (plages && plages.length
        ? plages.map(x => x[0] + ' – ' + x[1]).join(' · ') : '');
      if (!txt && !e) return '';
      const lib = estBarrage ? '' : this._libOuverture(o);
      const e2 = estBarrage ? null : e;
      if (estBarrage && !txt) return '';
      return '<p class="vm__fh">' + svg(IC.horloge, 'vm__fico') +
        (estBarrage ? '<b>' + this._esc(this._t('barreePlages')) + '</b>' : '') +
        (lib ? '<b class="vm__fhe is-' + e2.etat + '">' + this._esc(lib) + '</b>' : '') +
        (txt ? '<span>' + this._esc(txt) + '</span>' : '') + '</p>';
    }
     
     
    _pastilleHoraire(o) {
      const lib = this._libOuverture(o);
      if (lib) {
        const e = this._etatOuverture(o, this._jour, this._heure);
        return '<u class="vm__svh is-' + e.etat + '">' + svg(IC.horloge, '') + this._esc(lib) + '</u>';
      }
      return o.horaires ? '<u>' + svg(IC.horloge, '') + this._esc(o.horaires) + '</u>' : '';
    }
     
     
     
    _libOuverture(o) {
      const e = this._etatOuverture(o, this._jour, this._heure);
      if (!e) return '';
      const hh = (m) => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
      if (e.etat === 'ouvert') return this._t('ouvert');
      if (e.etat === 'bientot') return this._t('fermeDans').replace('{n}', e.reste);
      return e.prochaine != null
        ? this._t('fermeJusqu').replace('{h}', hh(e.prochaine)) : this._t('ferme');
    }
    












    _ajouterNuit() {
      const c = (this._p.config && this._p.config.nuit) || {};
      if (c.actif === false) return;
      






      























      const ids = this._map.getStyle().layers.map(l => l.id);
      const avant = ids.find(id => /^(tunnel|road|bridge|building|bati)/.test(id))
        || ids.find(id => ['zones-f', 'surf-f', 'trace-l', 'poi-pt'].indexOf(id) >= 0);
      this._map.addLayer({ id: 'voile-nuit', type: 'background',
        paint: { 'background-color': couleurSure(c.voile, '#0A1A35'),
                 'background-opacity': 0,
                 'background-opacity-transition': { duration: 900 } } }, avant);
      


      this._map.getStyle().layers.forEach(l => {
        if (l.id === 'voile-nuit') return;
        if (l.type !== 'fill' && l.type !== 'fill-extrusion') return;
        try { this._map.moveLayer(l.id, 'voile-nuit'); } catch (e) {   }
      });
      this._majNuit();
    }
    _heureDeNuit() {
      const c = (this._p.config && this._p.config.nuit) || {};
      const m = this._enMinutes(c.heure || '21:00');
      return m == null ? 1260 : m;
    }
    _majNuit() {
      if (!this._map || !this._map.getLayer('voile-nuit')) return;
      const c = (this._p.config && this._p.config.nuit) || {};
       
        
      const on = this._nuitForcee != null ? this._nuitForcee
        : (this._heure != null && this._heure >= this._heureDeNuit());
      const max = Math.max(0, Math.min(.85, c.intensite == null ? .5 : +c.intensite));
      try { this._map.setPaintProperty('voile-nuit', 'background-opacity', on ? max : 0); } catch (e) {}
      const vm = this.querySelector('.vm');
      if (vm) vm.classList.toggle('a-nuit', !!on);
    }
    _airePolygone(p) {
      let a = 0;
      for (let i = 0, j = p.length - 1; i < p.length; j = i++) a += (p[j][0] + p[i][0]) * (p[j][1] - p[i][1]);
      return Math.abs(a / 2);
    }
    



    









    _filtreActif() {
      return !!(this._actives || this._pmr || this._progJour ||
                (this._cuis && this._cuis.size));
    }
    

    _cribleJour() {
      return this._progJour
        ? new Set((this._p.animations || []).filter(a => a.date === this._jour).map(a => a.poiId).filter(Boolean))
        : null;
    }
    



    _passeFiltres(o, duJour, cuis) {
      return (!this._pmr || o.pmr === true) &&
        (!duJour || duJour.has(o.id)) &&
        (!cuis || o.cat !== 'restauration' || (o.cuisine || []).some(k => cuis.has(k))) &&
        (!this._actives || this._actives.has(o.cat));
    }
    




    _compteVue(cle) {
      const v = (this._p.config.vues || []).find(x => x.cle === cle);
      if (!v) return 0;
      const fam = v.familles || null;
      const replie = cle !== 'village' && !!this._bornesVillage();
      const cuis = this._cuis && this._cuis.size ? this._cuis : null;
      const duJour = this._cribleJour();
      return (this._p.poi || []).filter(o =>
        (!fam || fam.indexOf(o.cat) >= 0) &&
        this._passeFiltres(o, duJour, cuis) &&
        !(replie && this._dansLeVillage([+o.lng, +o.lat]))).length;
    }
    





    _majVues() {
      const vues = this._p.config.vues || [];
      const par = {};
      vues.forEach(v => { par[v.cle] = this._compteVue(v.cle); });
      this.querySelectorAll('.vm__nivn').forEach(e => {
        const b = e.closest('.vm__niv'); if (!b) return;
        const n = par[b.dataset.vue];
        if (n === undefined) return;
        e.textContent = !n ? this._t('nivVide') : n === 1 ? this._t('nivUn')
          : this._t('nivN').replace('{n}', String(n));
        b.classList.toggle('est-vide', !n);
      });
      const ok = this.querySelector('#vmFiltresOk');
      if (!ok) return;
      const n = par[this._mode] || 0;
      const en = this._lang === 'en';
      const nomDe = (v) => (en && v.libelleEn ? v.libelleEn : v.libelle);
      ok.dataset.vue = '';
      ok.classList.remove('est-vide');
      if (!this._filtreActif()) { ok.textContent = this._t('voirCarte'); return; }
      if (n > 0) {
        ok.textContent = n === 1 ? this._t('voirUn') : this._t('voirN').replace('{n}', String(n));
        return;
      }
      const secours = vues.filter(v => v.cle !== this._mode && par[v.cle] > 0)
        .sort((a, b) => par[b.cle] - par[a.cle])[0];
      ok.classList.add('est-vide');
      if (!secours) { ok.textContent = this._t('voirZero'); return; }
      ok.dataset.vue = secours.cle;
      ok.textContent = this._t('voirAilleurs')
        .replace('{n}', String(par[secours.cle])).replace('{v}', nomDe(secours));
    }
    _garde(o) {
      





      if (this._atelier) return true;
      if (this._fam && this._fam.indexOf(o.cat) < 0) return false;
      












      if (this._actives && !this._actives.has(o.cat)) return false;
      







      if (this._urgenceMise) return true;
      






      if (this._actives && this._actives.has(o.cat)) return true;
      













      if (this._filtreActif()) return true;
      if (this._replie && this._dansLeVillage(o.c)) return false;
       
       
       
      return this._etageDe(o.o || o) >= this._etageCourant();
    }
    _bornesVillage() {
      const v = (this._p.config.vues || []).find(x => x.cle === 'village');
      return v && Array.isArray(v.bornes) && v.bornes.length === 2 ? v.bornes : null;
    }
    














    








    _zoomPourVoir(o, plancher) {
      const z = this._map ? this._map.getZoom() : plancher;
      let etage = plancher;
      try { etage = this._zoomDeLEtage(this._etageDe(o)) + 0.05; } catch (e) { etage = plancher; }
      return Math.max(z, plancher, Number.isFinite(etage) ? etage : plancher);
    }
    _estEtroit() {
      const vm = this.querySelector('.vm');
      return !!(vm && vm.classList.contains('est-etroit'));
    }
    






    _cadrerDepart() {
      if (!this._map || this._atelier || this.closest('village-atelier')) return;
      const v = (this._p.config.vues || []).find(x => x.cle === 'village');
      if (!v || this._mode !== 'village') return;
      



      






      const dedans = (c) => this._estPoint(c) && this._dansLeVillage(c);
      let pts = [];
      (this._p.pontons || []).filter(p => p.zone !== false && this._ligneValide(p.trace, 2)).forEach(p => { pts = pts.concat(p.trace); });
      this._secteurs().forEach(z => { pts = pts.concat(z.polygone); });
      pts = pts.filter(dedans);
      if (pts.length < 3) {
        pts = (this._p.poi || [])
          .filter(o => !v.familles || v.familles.indexOf(o.cat) >= 0)
          .map(o => this._centre(o))
          .concat((this._p.pontons || []).map(p => this._milieuPonton(p)))
          .filter(dedans);
      }
      if (pts.length < 3) return;
      const lg = pts.map(c => c[0]), lt = pts.map(c => c[1]);
      const bornes = [[Math.min(...lg), Math.min(...lt)], [Math.max(...lg), Math.max(...lt)]];
      


      const marges = this._paddingVolets();
      marges.top += 40;
      


      if (!this._estEtroit()) marges.bottom = 40;
      

      marges.left = Math.max(marges.left, this._estEtroit() ? 60 : 44); marges.right = Math.max(marges.right, 44);
      let cam = null;
      try { cam = this._map.cameraForBounds(bornes, { padding: marges, maxZoom: (+this._p.config.zoomDepart || 15.6) + (this._estEtroit() ? 1 : 0) }); }
      catch (e) { cam = null; }
      if (!cam) return;
      this._map.jumpTo({ center: cam.center, zoom: Math.max(cam.zoom, this._seuil(v) + 0.05) });
    }
    _dansLeVillage(c) {
      const b = this._bornesVillage();
      if (!b || !this._estPoint(c)) return false;
      return c[0] >= Math.min(b[0][0], b[1][0]) && c[0] <= Math.max(b[0][0], b[1][0]) &&
             c[1] >= Math.min(b[0][1], b[1][1]) && c[1] <= Math.max(b[0][1], b[1][1]);
    }
    _appliquerMode(v, immediat) {
      if (!v || !this._prete) return;
      const change = this._mode !== v.cle;
      this._mode = v.cle;

      const fam = v.familles || null;                  
       
       
      const replie = v.cle !== 'village' && !!this._bornesVillage();
      this._replie = replie;
      this._fam = fam;
      const garde = (o) => this._garde(o);
      const zoneVisible = this._p.config.limites;
      if (v.bornes && this._map.setMaxBounds) {
         
         
        this._map.setMaxBounds(v.cle === 'village' ? null : zoneVisible);
      }

      


      const ou = (f) => f.geometry && f.geometry.type === 'Point' ? f.geometry.coordinates
        : (f.geometry && f.geometry.coordinates && f.geometry.coordinates.length
            ? (Array.isArray(f.geometry.coordinates[0][0]) ? f.geometry.coordinates[0][0] : f.geometry.coordinates[0])
            : null);
      const parId = new Map();
      (this._p.poi || []).forEach(o => parId.set(o.id, o));
      const filtre = (liste) => ({ type: 'FeatureCollection',
        features: liste.features.filter(f => garde({ cat: f.properties.cat, c: ou(f),
                                                     o: parId.get(f.properties.id) })) });
      



      const pose = (id, data) => { if (!this._map) return;
        const s = this._map.getSource(id); if (s) s.setData(data); };
      








      



      this._detail = v.detailVillage !== false;
      ['zones-f', 'zones-l', 'zones-x', 'zones-xl', 'zones-xn', 'plan',
       'edifices-f', 'edifices-l'].forEach(l =>
        this._map.getLayer(l) && this._map.setLayoutProperty(l, 'visibility',
          





          (l === 'plan' ? this._planVisible : this._detail) ? 'visible' : 'none'));
      





       
       
      if (this._map.getLayer('poi-pt')) this._map.setLayoutProperty('poi-pt', 'icon-size',
        this._detail ? ['interpolate', ['linear'], ['zoom'], 13, .58, 15.5, .82, 17.5, 1.12]
                     : ['interpolate', ['linear'], ['zoom'], 10, .72, 14, .95]);
      this._majDecorVillage();
      











      if (this._map.getLayer('poi-lib')) this._map.setLayerZoomRange('poi-lib',
        (this._detail && !this._urgenceMise) ? 16 : 0, 24);

      this.querySelectorAll('.vm__niv').forEach(b => {
        const on = b.dataset.vue === v.cle;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-current', on ? 'true' : 'false');
      });
      this._majVues();
      



      this.querySelectorAll('.vm__f').forEach(b => {
        const cle = b.dataset.cat;
        b.hidden = cle !== '__tout' && !!fam && fam.indexOf(cle) < 0;
      });
      this._reposer = () => {
        pose('poi', filtre(this._geojsonPoi()));
        



        pose('edifices', this._geojsonEdifices());
        pose('surf', filtre(this._geojsonSurfaces()));
        pose('trace', filtre(this._geojsonTraces()));
        pose('groupes', this._geojsonGroupes());
        pose('barrages', this._geojsonBarrages());
        pose('barrages-bouts', this._geojsonBoutsBarrage());
        pose('stands', filtre(this._geojsonStands()));
        if (this._majCartesStand) this._majCartesStand();
         
        this._majReperes();
      };
      this._reposer();           
      this._majCarteDepart(replie);
      if (change && !immediat) this._annoncerMode(v);
      this._appliquerFiltres();
    }

    







    _infosDepart() {
      const d = (this._p.config && this._p.config.depart) || {};
      const jours = [...new Set((this._p.animations || []).map(a => a.date).filter(Boolean))].sort();
      let dates = d.dates || '';
      if (!dates && jours.length) {
        


        const a = jours[0].split('-'), b = jours[jours.length - 1].split('-');
        const mois = (m) => this._t('mois' + (+m)) || '';
        dates = jours.length === 1 ? +a[2] + ' ' + mois(a[1]) + ' ' + a[0]
              : a[1] === b[1] && a[0] === b[0] ? +a[2] + ' › ' + +b[2] + ' ' + mois(b[1]) + ' ' + b[0]
              : +a[2] + ' ' + mois(a[1]) + ' › ' + +b[2] + ' ' + mois(b[1]) + ' ' + b[0];
      }
      return {
        titre: d.titre || this._t('villageDepart'),
        lieu: d.lieu || 'Saint-Malo',
        dates: dates,
        logo: urlSure(d.logo),
        lng: d.lng, lat: d.lat
      };
    }
    _ajouterCarteDepart() {
      const b = this._bornesVillage();
      if (!b || this._marqDepart) return;
      const i = this._infosDepart();
      const c = this._estPoint([i.lng, i.lat]) ? [+i.lng, +i.lat]
              : [(b[0][0] + b[1][0]) / 2, (b[0][1] + b[1][1]) / 2];
      const n = (this._p.poi || []).length;
      const f = (this._p.bateaux || []).filter(x => x.nom).length;
      





      const el = document.createElement('button');
      el.className = 'vm__depart';
      el.type = 'button';
      el.innerHTML =
        '<span class="vm__depin">' +
        '<span class="vm__depb">' +
          '<span class="vm__deplogo">' +
            '<img src="' + this._esc(i.logo || LOGO_COURSE) + '" alt=""' + this._repli('') + '>' +
          '</span>' +
          '<span class="vm__deptx">' +
            '<i>' + this._esc(i.titre) + '</i>' +
             
             
            '<b>' + this._esc(i.lieu) +
              '<img class="vm__deptym" src="' + this._esc(TYMAL_SVG) + '" alt=""' + this._repli('') + '>' +
            '</b>' +
            (i.dates ? '<em>' + this._esc(i.dates) + '</em>' : '') +
            '<u>' + n + ' ' + this._esc(this._t('lieux')) + (f ? ' · ' + f + ' ' + this._esc(this._t('bateaux')) : '') + '</u>' +
          '</span>' +
          '<span class="vm__depfl">' + svg(IC.fleche) + '</span>' +
        '</span>' +
        '<span class="vm__deppt" aria-hidden="true"></span>' +
        '</span>';
      el.appendChild(Object.assign(document.createElement('span'), {
        className: 'vm__slo', textContent: i.titre + ', ' + i.lieu + (i.dates ? ', ' + i.dates : '') }));
      el.addEventListener('click', () => this._allerVue('village'));
      this._marqDepart = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat(c).addTo(this._map);
      el.style.display = 'none';
      this._majEchelleDepart();
      this._map.on('zoom', () => this._majEchelleDepart());
      







      




      const replacer = () => {
        if (this._marqDepart) this._marqDepart.setLngLat(this._marqDepart.getLngLat());
      };
      this._map.on('moveend', replacer);
      this._map.on('idle', replacer);
    }
    







    _majEchelleDepart() {
      if (!this._marqDepart || !this._map) return;
      const z = this._map.getZoom();
      



      const sol = this._estFeuille() ? .84 : .62;
      const k = Math.max(sol, Math.min(1, sol + (z - 10.5) * ((1 - sol) / 3.5)));
      this._marqDepart.getElement().style.setProperty('--k', k.toFixed(3));
    }
    







    _majDecorVillage() {
      if (!this._map) return;
      const on = !(this._replie && !this._atelier);
      ['amers-i', 'zones-vol', 'secteur-n', 'secteur-c', 'zones-n'].forEach(l =>
        this._map.getLayer(l) && this._map.setLayoutProperty(l, 'visibility', on ? 'visible' : 'none'));
    }
    _majCarteDepart(on) {
      if (!this._marqDepart) { try { this._ajouterCarteDepart(); } catch (e) { this._incident('carte de départ', e); } }
      if (this._marqDepart) this._marqDepart.getElement().style.display = on ? '' : 'none';
      




      




      this._villageReplie = !!on;
      const cacher = (n) => { if (n) n.style.display = on ? 'none' : ''; };
      (this._marqPontons || []).forEach(m => cacher(m.getElement()));
      (this._cartesLogo || []).forEach(m => cacher(m.getElement()));
    }
     
     
    _annoncerMode(v) {
      const b = this.querySelector('#vmMode');
      if (!b) return;
      const nom = this._lang === 'en' && v.libelleEn ? v.libelleEn : v.libelle;
      


      b.innerHTML = svg(IC.oeil, 'vm__modeic') + '<span>' + this._esc(nom) + '</span>';
      this._annoncer(this._t('vueAnnoncee').replace('{v}', nom));
      b.hidden = false;
      clearTimeout(this._tMode);
      this._tMode = setTimeout(() => { b.hidden = true; }, 1900);
    }
    


    _direVue(v) {
      const t = this.querySelector('#vmVueTag');
      if (!t || !v) return;
      const en = this._lang === 'en';
      t.textContent = (en && v.libelleEn ? v.libelleEn : v.libelle) || v.cle;
      t.hidden = false;
       
      requestAnimationFrame(() => t.classList.add('est-vu'));
      clearTimeout(this._tVueTag);
      this._tVueTag = setTimeout(() => {
        t.classList.remove('est-vu');
         
         
        setTimeout(() => { if (!t.classList.contains('est-vu')) t.hidden = true; }, 300);
      }, 1900);
    }
    _allerVue(cle) {
      const v = (this._p.config.vues || []).find(x => x.cle === cle);
      if (!v || !this._map) return;
      this._direVue(v);
      




      this._choixVue = cle;
      if (this._mesure) this._mesure.noter('vue', cle);
      this._appliquerMode(v);              
      



      this._map.setMaxBounds(null);
      if (Array.isArray(v.bornes)) {
        this._map.fitBounds(v.bornes, { padding: this._paddingVolets(), duration: 900 });
        this._map.once('moveend', () => {
          if (this._map && this._mode === v.cle && v.bornes && this._map.setMaxBounds) {
            this._map.setMaxBounds(v.cle === 'village' ? null : this._p.config.limites);
          }
        });
      }
    }
     
     
     
    



    _paddingEncadre() { return { top: 24, right: 24, bottom: 24, left: 24 }; }

    _paddingVolets() {
      const etroit = this.clientWidth < 820;
      const vm = this.querySelector('.vm');
      const deplie = !!(vm && vm.classList.contains('a-prog'));
      const coins = parseFloat(getComputedStyle(vm || this).getPropertyValue('--vm-coins')) || 0;
      return etroit ? { top: 70, right: 20, bottom: (deplie ? Math.round(this.clientHeight * .7) : 74) + coins, left: 20 }
                    

                     
                    : { top: 70, right: (vm && vm.classList.contains('a-fiche')) ? Math.round(Math.min(440, Math.max(360, this.clientWidth * .28))) + 36 : 354, bottom: 40 + coins, left: 300 };    
    }

    








    _ajouterPlan() {
      const c = this._p.config;
       
       
       
      if (!urlSure(c.planUrl)) return;
      









      if (!c.planActif && !this._planDemande) { this._planDiffere = true; return; }
      this._planDiffere = false;
       
       
       
      if (/\.svgz?(\?|#|$)/i.test(c.planUrl)) {
        this._alertePlan('Le plan doit être fourni en PNG ou en WebP. Le format SVG n\'est pas décodable par la carte.');
      }
      


      









      this._map.on('error', e => {
        if (!e) return;
        const msg = (e.error && e.error.message) || e.type || 'erreur MapLibre';
        if (e.sourceId !== 'plan') { this._incident('carte : ' + (e.sourceId || 'style'), new Error(msg)); return; }
        this._alertePlan('Le plan du village n\'a pas pu être chargé.');
        const b = this.querySelector('#vmVue');
        if (b) b.hidden = true;
        this._planVisible = false;
        this._appliquerVuePlan();
      });
      const coins = this._coins(c.planCalage);
       
       
      if (!coins) { this._alertePlan('Le plan illustré n\'a pas de calage exploitable.'); return; }
      this._map.addSource('plan', { type: 'image', url: urlSure(c.planUrl), coordinates: coins });
       
       
       
      this._map.addLayer({ id: 'plan', type: 'raster', source: 'plan',
        paint: { 'raster-opacity': 0, 'raster-fade-duration': 200 } });
      







      if (!this._planDemande) this._planVisible = c.planActif === true;
      this._appliquerVuePlan();
    }

     
     
    basculerPlan(actif) {
      this._planVisible = actif === undefined ? !this._planVisible : !!actif;
      


      if (this._planVisible && this._planDiffere) {
        this._planDemande = true;
        try { this._ajouterPlan(); } catch (e) { this._incident('plan illustré', e); }
      }
      this._appliquerVuePlan();
      return this._planVisible;
    }

    



    masquerFlotte(masquee) {
      this._flotteMasquee = masquee === undefined ? true : !!masquee;
      this._appliquerFiltres();
      return this._flotteMasquee;
    }
    










    opacitePlan(v) {
      if (v == null) this._opacitePlan = null;
      else {
        const x = Math.max(0, Math.min(1, +v));
        this._opacitePlan = x;
         
         
        this._planVisible = x > 0;
      }
      if (this._planVisible && this._planDiffere) {
        this._planDemande = true;
        try { this._ajouterPlan(); } catch (e) { this._incident('plan illustré', e); }
      }
      this._appliquerVuePlan();
      return this._opacitePlan;
    }
    _appliquerVuePlan() {
      if (!this._map || !this._map.getLayer('plan')) return;
      const forcee = typeof this._opacitePlan === 'number';
      this._map.setPaintProperty('plan', 'raster-opacity',
        forcee ? this._opacitePlan
          : (this._planVisible ? ['interpolate', ['linear'], ['zoom'], 13, 0, 14.2, .88, 19, .88] : 0));
       
       
       
      this._appliquerFiltres();
      const b = this.querySelector('#vmVue');
      if (b) { b.classList.toggle('is-on', this._planVisible); b.setAttribute('aria-pressed', String(this._planVisible)); }
      




      try {
        this.dispatchEvent(new CustomEvent('vm:plan', { bubbles: true,
          detail: { visible: this._planVisible, opacite: this._opacitePlan } }));
      } catch (e) {   }
    }

    




























    _geojsonEdifices() {
      const planche = (typeof window !== 'undefined') && window.illustrationsVillage;
      return { type: 'FeatureCollection', features: (this._p.edifices || [])
        .filter(b => this._ligneValide(b.polygone, 3))
        .map(b => {
          




          const p = { id: b.id || '', etage: +b.etage || 5 };
          if (b.contenu) p.contenu = String(b.contenu);
          




          const estAmer = (this._contenuDe(b.id) || []).some(o => o.amer === true);
          if (estAmer) p.amer = true;
          




          const d = (b.icone && planche && planche.dims) ? planche.dims(b.icone) : null;
          







          const enRoute = d && d.photo && this._map && this._map.hasImage
            && !this._map.hasImage(b.icone);
          if (d && !enRoute && +b.L > 0) { p.icone = b.icone;
            











            
















            const debout = d.encreH > d.encreL;
            const long = debout ? d.encreH : d.encreL;
            p.ech = (+b.L) / long;
            




            p.rot = d.sansRotation ? 0
              : ((+b.cap || 0) + (debout ? 0 : -90) + 360) % 360;
            






            p.off = [-(+d.decX || 0), -(+d.decY || 0)];
            










            p.echMin = estAmer ? (PLANCHER_AMER / long) : 0; }
          return { type: 'Feature', properties: p,
            geometry: { type: 'Polygon', coordinates: [b.polygone.concat([b.polygone[0]])] } };
        }) };
    }
    







    _poserPlanche() {
      try {
        if (!window.illustrationsVillage || !this._map) return;
        window.illustrationsVillage.poser(this._map, () => {
          const s = this._map.getSource('edifices');
          if (s) s.setData(this._geojsonEdifices());
        }, new Set((this._p.edifices || []).map(b => b.icone).filter(Boolean)));
      } catch (e) { this._incident('planche', e); }
    }
    _ajouterEdifices() {
      if (this._map.getSource('edifices')) return;
      this._map.addSource('edifices', { type: 'geojson', data: this._geojsonEdifices() });
      


      















      const nu = (v) => ['case', ['any', ['has', 'icone'], ['has', 'contenu']], 0, v];
      this._map.addLayer({ id: 'edifices-f', type: 'fill', source: 'edifices', minzoom: 15,
        paint: { 'fill-color': C.bati, 'fill-opacity': nu(0.9) } });
      this._map.addLayer({ id: 'edifices-l', type: 'line', source: 'edifices', minzoom: 15,
        paint: { 'line-color': C.batiBord, 'line-width': 0.8, 'line-opacity': nu(1) } });

      
















      




      this._poserPlanche();
      











      const MPP0 = 78271.51696 * Math.cos(48.65 * Math.PI / 180);
      const fact = z => Math.pow(2, z) / MPP0;
      






















      this._map.addLayer({ id: 'edifices-i', type: 'symbol', source: 'edifices', minzoom: 15,
        filter: ['all', ['has', 'icone'], PAS_AMER],
        layout: { 'icon-image': ['get', 'icone'],
                  'icon-rotate': ['get', 'rot'],
                  















                  'icon-rotation-alignment': 'map',
                  


                  'icon-allow-overlap': true, 'icon-ignore-placement': true,
                  







                  'icon-size': ['interpolate', ['exponential', 2], ['zoom'],
                                13, ['*', ['get', 'ech'], fact(13)],
                                22, ['*', ['get', 'ech'], fact(22)]] } });

      













      this._map.addLayer({ id: 'amers-i', type: 'symbol', source: 'edifices', minzoom: 13,
        filter: ['all', ['has', 'icone'], EST_AMER],
        layout: { 'icon-image': ['get', 'icone'],
                  'icon-rotate': ['get', 'rot'],
                  'icon-rotation-alignment': 'map',
                  'icon-allow-overlap': true, 'icon-ignore-placement': true,
                  'icon-size': ['interpolate', ['exponential', 2], ['zoom'],
                                13,   ['max', ['*', ['get', 'ech'], fact(13)],   ['get', 'echMin']],
                                16,   ['max', ['*', ['get', 'ech'], fact(16)],   ['get', 'echMin']],
                                17,   ['max', ['*', ['get', 'ech'], fact(17)],   ['get', 'echMin']],
                                17.8, ['max', ['*', ['get', 'ech'], fact(17.8)], ['get', 'echMin']],
                                18.6, ['max', ['*', ['get', 'ech'], fact(18.6)], ['get', 'echMin']],
                                22,   ['*', ['get', 'ech'], fact(22)]] } });

      


























      







      const DESSUS = ['poi-tap', 'poi-pt', 'stand-f', 'amas-c', 'groupe-c'];
      const batimentSous = (pt) => {
        if (!this._map.getLayer('edifices-f') || this._map.getZoom() < 15) return null;
        const gene = this._map.queryRenderedFeatures(pt, {
          layers: DESSUS.filter(l => this._map.getLayer(l)) });
        if (gene && gene.length) return null;
        const sous = this._map.queryRenderedFeatures(pt, { layers: ['edifices-f'] });
        if (!sous || !sous.length) return null;
        








        








        return this._plusPetitBati(sous);
      };
      




















      this._map.on('click', e => {
        





        if (this._atelier) return;
        const f = batimentSous(e.point); if (!f) return;
        const c = f.geometry && f.geometry.coordinates && f.geometry.coordinates[0];
        if (!c || !c.length) return;
        const lng = c.map(q => q[0]), lat = c.map(q => q[1]);
        

        this._map.fitBounds([[Math.min(...lng), Math.min(...lat)],
                             [Math.max(...lng), Math.max(...lat)]],
          { padding: 160, maxZoom: 18.6, duration: 700 });
        const dedans = this._contenuDe(f.properties.id)
          .filter(o => this._garde({ cat: o.cat, c: this._centre(o), o }));
        if (this._mesure) this._mesure.noter('bati', f.properties.id);
        if (dedans.length === 1) { this._fermerContenu(); this._ouvrirPoi(dedans[0].id, true); }
        else if (dedans.length > 1) this._ouvrirContenu(f.properties.id, dedans);
      });
      this._map.on('mousemove', e => {
        if (this._batiSurvol === undefined) this._batiSurvol = '';
        const f = batimentSous(e.point);
        



        const on = !f ? '' : (this._contenuDe(f.properties.id).length ? 'pointer' : 'zoom-in');
        if (on === this._batiSurvol) return;
        this._batiSurvol = on;
        

        const cv = this._map.getCanvas();
        if (on) cv.style.cursor = on;
        else if (cv.style.cursor === 'zoom-in' || cv.style.cursor === 'pointer') cv.style.cursor = '';
      });
    }
    _ajouterZones() {
      const zones = (this._p.zones || []).filter(z => {
        const ok = this._ligneValide(z.polygone, 3);
        if (!ok) this._ecarte('zones', z.id || z.nom);
        return ok;
      });
      this._direLesEcarts();
      









      this._map.addSource('zones', { type: 'geojson', data: this._geojsonZones() });
      this._map.addLayer({ id: 'zones-f', type: 'fill', source: 'zones',
        filter: ['==', ['get', 'interdit'], 0],
        paint: { 'fill-color': ['get', 'couleur'],
           
           
          'fill-opacity': ['case', ['has', 'opacite'], ['get', 'opacite'], 0.30] } });
      this._map.addLayer({ id: 'zones-l', type: 'line', source: 'zones',
        filter: ['==', ['get', 'interdit'], 0],
        paint: { 'line-color': ['get', 'couleur'], 'line-width': 2.2, 'line-dasharray': [3, 2], 'line-opacity': .9 } });
       
       
      this._map.addLayer({ id: 'zones-x', type: 'fill', source: 'zones',
        filter: ['==', ['get', 'interdit'], 1],
        paint: { 'fill-pattern': 'trame-interdit', 'fill-opacity': .42 } });
      this._map.addLayer({ id: 'zones-xl', type: 'line', source: 'zones',
        filter: ['==', ['get', 'interdit'], 1],
        paint: { 'line-color': C.ink, 'line-width': 1.8, 'line-opacity': .7 } });
      


      this._map.addLayer({ id: 'zones-n', type: 'symbol', source: 'zones', minzoom: 15.2,
        filter: ['all', ['==', ['get', 'interdit'], 0], ['==', ['get', 'etiquette'], 1]],
        layout: { 'text-field': ['get', 'nom'], 'text-font': POLICE_GRASSE,
                  'text-size': ['interpolate', ['linear'], ['zoom'], 15.2, 9, 17.5, 12],
                  'text-max-width': 8, 'text-letter-spacing': .04, 'text-transform': 'uppercase', 'text-optional': true },
        paint: { 'text-color': ['get', 'couleur'], 'text-halo-color': C.surface, 'text-halo-width': 1.8 } });
      this._map.addLayer({ id: 'zones-xn', type: 'symbol', source: 'zones', minzoom: 15.4,
        filter: ['==', ['get', 'interdit'], 1],
        layout: { 'text-field': ['get', 'nom'], 'text-font': POLICE_GRASSE, 'text-size': 10.5,
                  'text-max-width': 9, 'text-optional': true },
        paint: { 'text-color': C.ink, 'text-halo-color': C.surface, 'text-halo-width': 2 } });

      











      const MPP0Z = 78271.51696 * Math.cos(48.65 * Math.PI / 180);
      const factZ = z => Math.pow(2, z) / MPP0Z;
      this._map.addLayer({ id: 'zones-vol', type: 'symbol', source: 'zones',
        filter: ['has', 'volume'],
        layout: { 'icon-image': ['get', 'volume'],
                  'icon-rotate': ['get', 'volCap'],
                  'icon-rotation-alignment': 'map',
                  'icon-allow-overlap': true, 'icon-ignore-placement': true,
                  'icon-size': ['interpolate', ['exponential', 2], ['zoom'],
                                13, ['*', ['get', 'ech'], factZ(13)],
                                22, ['*', ['get', 'ech'], factZ(22)]] },
        paint: { 'icon-opacity': 1 } });
      this._majVolumesZones();
    }
    


    _zoomDeLEtage(e) {
      const v = (this._p.config.vues || []).find(x => x.cle === 'village');
      if (!v) return 17.4;
      const n = Math.max(1, +v.etages || 1);
      const [bas, haut] = this._bornesEtage(v);
      return bas + Math.min(1, Math.max(0, (n - e) / n)) * (haut - bas);
    }
    _majVolumesZones() {
      if (!this._map || !this._map.getLayer('zones-vol')) return;
      const zs = (this._p.zones || []).filter(z => z.volume);
      if (!zs.length) return;
      

      const seuils = zs.map(z => this._zoomDeLEtage(+z.etageContenu || 2));
      const zS = Math.min(...seuils);
      try {
        this._map.setPaintProperty('zones-vol', 'icon-opacity',
          ['interpolate', ['linear'], ['zoom'], zS - 0.9, 1, zS + 0.3, 0]);
      } catch (e) { this._incident('volume de zone', e); }
    }

    

















    _ajouterImagesZones() {
      this._imagesZones = new Map();
      this._majImagesZones();
    }
    _signatureImage(z) {
      const im = z.image || {};
      return JSON.stringify([im.url, im.echelle, im.decalage, im.rotationDeg,
        im.opacite, im.zoomEntree, im.zoomSortie, z.polygone]);
    }
    _majImagesZones() {
      if (!this._map || !this._imagesZones) return;
      const voulues = new Map();
      for (const z of (this._p.zones || [])) {
        const im = z.image;
        if (!im || !im.url || !z.id || !this._ligneValide(z.polygone, 3)) continue;
        voulues.set('zimg-' + z.id, z);
      }
      for (const cle of [...this._imagesZones.keys()]) {
        if (voulues.has(cle)) continue;
        try { if (this._map.getLayer(cle)) this._map.removeLayer(cle); } catch (e) {   }
        try { if (this._map.getSource(cle)) this._map.removeSource(cle); } catch (e) {   }
        this._imagesZones.delete(cle);
      }
      for (const [cle, z] of voulues) {
        const sig = this._signatureImage(z);
        const dejaLa = this._imagesZones.get(cle);
        if (dejaLa && dejaLa.sig === sig) { this._opaciteImageZone(cle, z); continue; }
        this._peindreImageZone(cle, z, sig);
      }
    }
    _opaciteImageZone(cle, z) {
      if (!this._map.getLayer(cle)) return;
      const im = z.image || {};
      const op = typeof im.opacite === 'number' ? im.opacite : 1;
      



      const zE = typeof im.zoomEntree === 'number' ? im.zoomEntree : 14.6;
      const zS = Math.max(zE + 0.4, typeof im.zoomSortie === 'number' ? im.zoomSortie : 18.2);
      try {
        this._map.setPaintProperty(cle, 'raster-opacity',
          ['interpolate', ['linear'], ['zoom'],
            Math.max(0, zE - 0.7), 0, zE, op, zS, op, zS + 0.5, 0]);
      } catch (e) { this._incident('opacité image de zone', e); }
    }
    _peindreImageZone(cle, z, sig) {
      const im = z.image;
      const pts = z.polygone;
      let minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;
      for (const p of pts) {
        if (p[0] < minLng) minLng = p[0]; if (p[0] > maxLng) maxLng = p[0];
        if (p[1] < minLat) minLat = p[1]; if (p[1] > maxLat) maxLat = p[1];
      }
      const mLng = 111320 * Math.cos((minLat + maxLat) / 2 * Math.PI / 180);
      const larM = (maxLng - minLng) * mLng, hauM = (maxLat - minLat) * 110540;
      if (!(larM > 0.5 && hauM > 0.5)) return;
      


      const grand = Math.max(larM, hauM);
      const k = Math.min(7, 2048 / grand);
      const W = Math.max(16, Math.round(larM * k)), H = Math.max(16, Math.round(hauM * k));

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        if (!this._map || !this._imagesZones) return;
        const cv = document.createElement('canvas');
        cv.width = W; cv.height = H;
        const ctx = cv.getContext('2d');
        ctx.save();
        ctx.beginPath();
        pts.forEach((p, n) => {
          const x = (p[0] - minLng) / (maxLng - minLng) * W;
          const y = (maxLat - p[1]) / (maxLat - minLat) * H;
          if (n === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.clip();
        



        const base = Math.max(W / img.naturalWidth, H / img.naturalHeight);
        const s = base * (typeof im.echelle === 'number' ? im.echelle : 1);
        const dx = (im.decalage && im.decalage[0]) || 0, dy = (im.decalage && im.decalage[1]) || 0;
        ctx.translate(W / 2 + dx * W, H / 2 + dy * H);
        if (im.rotationDeg) ctx.rotate(im.rotationDeg * Math.PI / 180);
        ctx.drawImage(img, -img.naturalWidth * s / 2, -img.naturalHeight * s / 2,
          img.naturalWidth * s, img.naturalHeight * s);
        ctx.restore();

        const coins = [[minLng, maxLat], [maxLng, maxLat], [maxLng, minLat], [minLng, minLat]];
        try {
          if (this._map.getLayer(cle)) this._map.removeLayer(cle);
          if (this._map.getSource(cle)) this._map.removeSource(cle);
          this._map.addSource(cle, { type: 'canvas', canvas: cv, coordinates: coins, animate: false });
          const avant = this._map.getStyle().layers.map(l => l.id).find(id => /^poi-/.test(id));
          this._map.addLayer({ id: cle, type: 'raster', source: cle,
            paint: { 'raster-opacity': 0, 'raster-fade-duration': 160, 'raster-resampling': 'linear' } }, avant);
          this._imagesZones.set(cle, { sig, cv });
          this._opaciteImageZone(cle, z);
        } catch (e) { this._incident('image de zone ' + z.id, e); }
      };
      img.onerror = () => this._incident('image de zone ' + z.id,
        new Error('image illisible : ' + im.url));
      img.src = im.url;
    }

    






     
     
     
    _estPoint(c) {
      return Array.isArray(c) && c.length >= 2 &&
        Number.isFinite(+c[0]) && Number.isFinite(+c[1]) &&
        Math.abs(+c[0]) <= 180 && Math.abs(+c[1]) <= 90;
    }

    




























    _assainir(p) {
      if (!p || typeof p !== 'object') return p;
      const perdus = [];
       
       
      const consigner = (motif, n) => { for (let i = 0; i < n; i++) this._ecarte(motif, null); };
      

      const deRef = (v) => {
        if (!v || typeof v !== 'object' || Array.isArray(v)) return v;
        if (!('_id' in v)) return v;
        const k = v.cle != null ? v.cle : v.key != null ? v.key
          : v.title != null ? v.title : v.name != null ? v.name
          : v.value != null ? v.value : v._id;
        return typeof k === 'object' ? v._id : k;
      };
      


      const nombre = (v) => {
        if (typeof v === 'number') return Number.isFinite(v) ? v : undefined;
        if (typeof v !== 'string') return undefined;
        const n = +v.trim().replace(',', '.');
        return Number.isFinite(n) ? n : undefined;
      };
       
      const geom = (v) => {
        if (typeof v !== 'string') return v;
        try { const x = JSON.parse(v); return Array.isArray(x) ? x : v; } catch (e) { return v; }
      };
      const CHAMPS_NOMBRE = ['lng', 'lat', 'zoomMin', 'zoomMax', 'taille', 'aire', 'cap'];
      const CHAMPS_GEOM = ['polygone', 'trace', 'brins'];
      


      const INTOUCHABLES = ['ouverture', 'horaires', 'periode', 'dates', 'planCalage', 'equipements', 'infos'];

      const nettoyerLigne = (o, ou) => {
        if (!o || typeof o !== 'object' || Array.isArray(o)) { perdus.push(ou); return null; }
        Object.keys(o).forEach(k => {
          if (INTOUCHABLES.indexOf(k) >= 0) return;
          if (CHAMPS_GEOM.indexOf(k) >= 0) { o[k] = geom(o[k]); return; }
          o[k] = deRef(o[k]);
          if (CHAMPS_NOMBRE.indexOf(k) >= 0) {
            const n = nombre(o[k]);
            if (n !== undefined) o[k] = n;
          }
        });
        return o;
      };

      ['poi', 'bateaux', 'animations', 'zones', 'pontons', 'categories'].forEach(nom => {
        if (!Array.isArray(p[nom])) return;
        const avant = p[nom].length;
        p[nom] = p[nom].map(o => nettoyerLigne(o, nom)).filter(Boolean);
        if (p[nom].length !== avant) consigner(nom + ' (ligne vide ou illisible)', avant - p[nom].length);
      });
      if (p.tymal) nettoyerLigne(p.tymal, 'tymal');

      



      if (Array.isArray(p.animations)) {
        let sansDate = 0;
        p.animations.forEach(a => {
          if (a.date != null && String(a.date).trim() === '') { delete a.date; sansDate++; }
        });
        if (sansDate) consigner('animations sans date', sansDate);
      }

       
       
      if (p.config && typeof p.config === 'object') {
        const REPLI = { zoomDepart: 15.5, zoomMin: 12, zoomMax: 20 };
        Object.keys(REPLI).forEach(k => {
          if (p.config[k] === undefined) return;
          const n = nombre(p.config[k]);
          if (n === undefined || n < 0 || n > 24) {
            consigner('config.' + k + ' illisible, repli sur ' + REPLI[k], 1);
            p.config[k] = REPLI[k];
          } else p.config[k] = n;
        });
        const c = p.config.centre;
        if (Array.isArray(c)) {
          const x = nombre(c[0]), y = nombre(c[1]);
          if (x !== undefined && y !== undefined) p.config.centre = [x, y];
        }
      }
      return p;
    }
    _ligneValide(l, mini) { return Array.isArray(l) && l.length >= mini && l.every(c => this._estPoint(c)); }
    _estSurface(o) { if (o && o.stand) return false; return this._ligneValide(o.polygone, 3); }
     
     
    _estTrace(o) { return !o.barrage && this._ligneValide(o.trace, 2); }
    _estBarrage(o) {
      if (!o.barrage || !this._ligneValide(o.trace, 2)) return false;
       
       
      return this._atelier || this._periodeBarrage(o) !== 'apres';
    }
    _centre(o) {
      





      










      const p = (this._estSurface(o) || (o && o.stand)) ? o.polygone
        : this._ligneValide(o && o.trace, 2) ? o.trace
        : (o && Array.isArray(o.brins) && this._ligneValide(o.brins[0], 2)) ? o.brins[0]
        : null;
      if (!p) return [+o.lng, +o.lat];
      return [p.reduce((a, c) => a + c[0], 0) / p.length, p.reduce((a, c) => a + c[1], 0) / p.length];
    }
    _props(o) {
       
       
      










      








      const bAmer = (o && o.amer === true) ? this._batiDe(o) : null;
      return { id: o.id, nom: o.nom, cat: o.cat, zoomMin: o.zoomMin || 0,
               amer: !!(bAmer && bAmer.icone),
                
                
               etage: this._etageDe(o),
                
                
               




               ouv: (this._etatOuverture(o, this._jour, this._heure) || {}).etat || 'inconnu',
               aLogo: this._aLogo(o), couleur: couleurSure(this._cat(o.cat).couleur),
               











               pic: (() => { const p = this._pictoDe(o);
                 return (p && p !== this._cat(o.cat).picto && PICTO[p]) ? 'picx-' + p : 'pic-' + o.cat; })(),
                
                
                
               barrage: !!o.barrage, pietons: o.pietons !== false,
                
                
               barreActif: !o.barrage || !!(this._barrageActif(o) || {}).actif,
               mention: o.barrage
                 ? ((this._barrageActif(o) || {}).actif ? '' : this._t('barreePlusTard') + ' · ') +
                   this._t('routeBarree') + (o.motif ? ' · ' + o.motif : '')
                 : (o.nom || ''),
                
                
               motif: o.motif || undefined };
    }
     
     
    





    



    _equipements(o) {
      const coches = (Array.isArray(o && o.equipements) ? o.equipements : []).slice();
      






      if (o && o.pmr === true && coches.indexOf('pmr') < 0) coches.push('pmr');
      if (!coches.length) return [];
      const offerts = equipOfferts((o && o.cat) || '');
      const rang = new Map(); offerts.forEach((e, i) => rang.set(e.cle, i));
      






      const dans = [], hors = [], vus = new Set();
      coches.forEach(c => {
        if (vus.has(c)) return; vus.add(c);
        if (rang.has(c)) dans.push(offerts[rang.get(c)]);
        else if (EQUIP_TOUS.has(c)) hors.push(EQUIP_TOUS.get(c));
      });
      dans.sort((a, b) => rang.get(a.cle) - rang.get(b.cle));
      return dans.concat(hors);
    }
    _libEquip(e) { return this._lang === 'en' && e.libelleEn ? e.libelleEn : e.libelle; }
    






    





    _pictoDe(o) {
      if (o && o.picto && PICTO[o.picto]) return o.picto;
      const eq = this._equipements(o).filter(e => e.id);
      if (eq.length && PICTO[eq[0].picto]) return eq[0].picto;
      return this._cat(o && o.cat).picto;
    }
    









    _aLogo(o) { return (o && o.carte === false) ? 0 : 1; }
    _geojsonPoi() {
      



      







      this._ecartes && this._ecartes.delete('lieux');
      return { type: 'FeatureCollection', features: (this._p.poi || [])
        .filter(o => !this._estSurface(o) && !this._estTrace(o))
        .filter(o => { const ok = this._estPoint([o.lng, o.lat]);
          if (!ok && !this._ligneValide(o.polygone, 3) && !this._ligneValide(o.trace, 2)) {
            this._ecarte('lieux', o.id || o.nom);
          }
          return ok; })
        .map(o => ({
          type: 'Feature', properties: this._props(o), geometry: { type: 'Point', coordinates: [+o.lng, +o.lat] }
        })) };
    }
    _geojsonTraces() {
      return { type: 'FeatureCollection', features: (this._p.poi || []).filter(o => this._estTrace(o)).map(o => ({
        type: 'Feature', properties: this._props(o), geometry: { type: 'LineString', coordinates: o.trace }
      })) };
    }
    







    _geojsonBarrages() {
      return { type: 'FeatureCollection', features: (this._p.poi || []).filter(o => this._estBarrage(o)).map(o => ({
        type: 'Feature', properties: this._props(o),
        



        geometry: (o.brins && o.brins.length)
          ? { type: 'MultiLineString', coordinates: [o.trace].concat(o.brins) }
          : { type: 'LineString', coordinates: o.trace }
      })) };
    }
    



    _geojsonBoutsBarrage() {
      const f = [];
      (this._p.poi || []).filter(o => this._estBarrage(o)).forEach(o => {
        const p = this._props(o);
        const lignes = [o.trace].concat(o.brins || []);
        lignes.forEach(l => {
          if (!this._ligneValide(l, 2)) return;
          [l[0], l[l.length - 1]].forEach(c => f.push({ type: 'Feature', properties: p,
            geometry: { type: 'Point', coordinates: c } }));
        });
      });
      return { type: 'FeatureCollection', features: f };
    }
    _estStand(o) { return !!o.stand && this._ligneValide(o.polygone, 3); }
    _geojsonStands() {
      return { type: 'FeatureCollection', features: (this._p.poi || []).filter(o => this._estStand(o)).map(o => ({
        type: 'Feature',
        

        properties: Object.assign({}, this._props(o), {
          lib: o.exposant ? o.exposant : (o.nom || ''),
          emplacement: o.nom || '', taille: o.taille || 'normal', libre: !o.exposant }),
        geometry: { type: 'Polygon', coordinates: [o.polygone.concat([o.polygone[0]])] }
      })) };
    }
    _geojsonSurfaces() {
      return { type: 'FeatureCollection', features: (this._p.poi || []).filter(o => this._estSurface(o)).map(o => ({
        type: 'Feature', properties: this._props(o),
        geometry: { type: 'Polygon', coordinates: [o.polygone.concat([o.polygone[0]])] }
      })) };
    }

    async _ajouterPoi() {
      











      




      this._map.addSource('trace', { type: 'geojson', data: this._geojsonTraces() });
      this._map.addLayer({ id: 'trace-h', type: 'line', source: 'trace',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': C.surface, 'line-width': ['interpolate', ['linear'], ['zoom'], 14, 5, 18, 11] } });
      this._map.addLayer({ id: 'trace-l', type: 'line', source: 'trace',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': ['get', 'couleur'], 'line-width': ['interpolate', ['linear'], ['zoom'], 14, 2.5, 18, 6],
                 'line-dasharray': [1.6, 1.1] } });
      this._map.addLayer({ id: 'trace-n', type: 'symbol', source: 'trace', minzoom: 15.6,
        layout: { 'symbol-placement': 'line-center', 'text-field': ['get', 'nom'], 'text-font': POLICE_GRASSE,
                  'text-size': 10.5, 'text-offset': [0, 1.4], 'text-optional': true },
        paint: { 'text-color': C.ink, 'text-halo-color': C.surface, 'text-halo-width': 1.8 } });

      
















      






      this._map.addSource('barrages', { type: 'geojson', data: this._geojsonBarrages(), generateId: true });
      this._map.addLayer({ id: 'barre-a', type: 'line', source: 'barrages',
        layout: { 'line-cap': 'butt', 'line-join': 'round' },
        



        paint: { 'line-color': C.ink, 'line-opacity': 0,
                 'line-width': ['interpolate', ['linear'], ['zoom'], 14, 18, 18, 26] } });
      this._map.addLayer({ id: 'barre-f', type: 'line', source: 'barrages',
        layout: { 'line-cap': 'butt', 'line-join': 'round' },
        


        paint: { 'line-color': C.ink, 'line-opacity': ['case', ['==', ['get', 'barreActif'], false], .3, 1],
                 'line-width': ['interpolate', ['linear'], ['zoom'], 14, 3, 18, 7] } });
      this._map.addLayer({ id: 'barre-t', type: 'line', source: 'barrages',
        layout: { 'line-cap': 'butt' },
        


        paint: { 'line-color': C.surface, 'line-opacity': ['case', ['==', ['get', 'barreActif'], false], .3, 1],
                 'line-width': ['interpolate', ['linear'], ['zoom'], 14, 1.6, 18, 3.6],
                 'line-dasharray': [1.4, 1.4] } });
      


      this._map.addLayer({ id: 'barre-n', type: 'symbol', source: 'barrages', minzoom: 16,
        filter: ['has', 'motif'],
        layout: { 'symbol-placement': 'line-center', 'text-field': ['get', 'motif'], 'text-font': POLICE_GRASSE,
                  'text-size': 10, 'text-offset': [0, 1.6], 'text-optional': true },
        paint: { 'text-color': C.ink2, 'text-halo-color': C.surface, 'text-halo-width': 2 } });
      


      this._map.addSource('barrages-bouts', { type: 'geojson', data: this._geojsonBoutsBarrage(), generateId: true });
      this._map.addLayer({ id: 'barre-b', type: 'symbol', source: 'barrages-bouts', minzoom: 14.5,
        layout: { 'icon-image': 'barre-x', 'icon-allow-overlap': true, 'icon-ignore-placement': true,
                  'icon-size': ['interpolate', ['linear'], ['zoom'], 14, .5, 18, .8] },
        paint: { 'icon-opacity': ['case', ['==', ['get', 'barreActif'], false], .3, 1] } });

      














      this._map.addSource('stands', { type: 'geojson', data: this._geojsonStands(), generateId: true });
      this._map.addLayer({ id: 'stand-f', type: 'fill', source: 'stands',
        


        






        paint: { 'fill-color': ['case', ['==', ['get', 'libre'], true], C.surface, ['get', 'couleur']],
                 'fill-opacity': ['case', ['boolean', ['feature-state', 'survol'], false], .95,
                                  ['==', ['get', 'libre'], true], .16, .78] } });
      this._map.addLayer({ id: 'stand-c', type: 'line', source: 'stands',
        paint: { 'line-color': C.surface,
                  
                  
                 'line-width': ['interpolate', ['linear'], ['zoom'], 17, .8, 19.5, 1.8],
                  
                  
                 'line-opacity': ['case', ['==', ['get', 'libre'], true], .45, 1] } });
      




      this._map.addLayer({ id: 'stand-code', type: 'symbol', source: 'stands', minzoom: 18.4,
        filter: ['!=', ['get', 'libre'], true],
        layout: { 'text-field': ['get', 'emplacement'], 'text-font': POLICE_GRASSE, 'text-size': 9.5,
                  'text-allow-overlap': false, 'text-optional': true },
        paint: { 'text-color': C.ink, 'text-halo-color': C.surface, 'text-halo-width': 1.2 } });
      






      this._map.addLayer({ id: 'stand-code-l', type: 'symbol', source: 'stands', minzoom: 19.4,
        filter: ['==', ['get', 'libre'], true],
        layout: { 'text-field': ['get', 'emplacement'], 'text-font': POLICE_NORMALE, 'text-size': 8.5,
                  'text-allow-overlap': false, 'text-optional': true },
        paint: { 'text-color': C.ink3, 'text-halo-color': C.surface, 'text-halo-width': 1 } });

      this._map.addSource('surf', { type: 'geojson', data: this._geojsonSurfaces(), generateId: true });
      this._map.addLayer({ id: 'surf-f', type: 'fill', source: 'surf',
        paint: { 'fill-color': ['get', 'couleur'],
                 'fill-opacity': ['case', ['boolean', ['feature-state', 'survol'], false], .52, .26] } });
      



      this._map.addLayer({ id: 'surf-h', type: 'line', source: 'surf',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': C.ink,
                 'line-width': ['case', ['boolean', ['feature-state', 'survol'], false], 2.4, 0],
                 'line-opacity': ['case', ['boolean', ['feature-state', 'survol'], false], .85, 0] } });
      this._map.addLayer({ id: 'surf-l', type: 'line', source: 'surf',
        paint: { 'line-color': ['get', 'couleur'], 'line-width': 2 } });
      this._map.addLayer({ id: 'surf-n', type: 'symbol', source: 'surf', minzoom: 15.4,
        layout: { 'text-field': ['get', 'nom'], 'text-font': POLICE_GRASSE, 'text-size': 11,
                  'text-max-width': 9, 'text-optional': true },
        paint: { 'text-color': C.ink, 'text-halo-color': C.surface, 'text-halo-width': 1.8 } });

      await this._preparerPastilles();
      



      this._map.addSource('poi', { type: 'geojson', data: this._geojsonPoi(), promoteId: 'id' });

       
       
       
       
       
       
      




      





      this._map.addLayer({ id: 'poi-tap', type: 'circle', source: 'poi',
        filter: PAS_AMER,
        paint: { 'circle-radius': 22, 'circle-color': '#000', 'circle-opacity': 0 } });
      







      try { if (this._map.getLayer('amers-i')) this._map.moveLayer('amers-i', 'poi-tap'); }
      catch (e) { this._incident('ordre des amers', e); }
      



      this._map.addLayer({ id: 'poi-bientot', type: 'circle', source: 'poi',
        filter: ['all', PAS_AMER, ['==', ['get', 'ouv'], 'bientot']],
        paint: { 'circle-radius': ['interpolate', ['linear'], ['zoom'], 13, 13, 17.5, 22],
                 'circle-color': 'rgba(0,0,0,0)', 'circle-stroke-width': 2.5,
                 'circle-stroke-color': C.ambre, 'circle-stroke-opacity': .95 } });
      this._map.addLayer({ id: 'poi-pt', type: 'symbol', source: 'poi',
        filter: PAS_AMER,
         
         
        layout: { 'icon-image': ['get', 'pic'],
                   
                   
                   
                  



                  'icon-size': ['interpolate', ['linear'], ['zoom'], 13, .72, 15.5, 1.02, 17.5, 1.24],
                  


















                  'symbol-sort-key': ['-', 10, ['to-number', ['get', 'etage'], 3]],
                  'icon-allow-overlap': true, 'icon-ignore-placement': true },
        






        paint: { 'icon-opacity': ['case', ['==', ['get', 'ouv'], 'ferme'], .42, 1] },
        




        


 });
      
















      this._map.addLayer({ id: 'poi-amer', type: 'symbol', source: 'poi',
        filter: EST_AMER,
        








        layout: { 'text-field': ['upcase', ['get', 'nom']], 'text-size': 12.5,
                  





                  'text-offset': [0, 2.8],
                  'text-anchor': 'top', 'text-font': POLICE_GRASSE,
                  'text-letter-spacing': 0.08, 'text-max-width': 11,
                  'text-optional': false, 'symbol-sort-key': -50,
                  'text-allow-overlap': false },
        paint: { 'text-color': C.ink, 'text-halo-color': '#fff', 'text-halo-width': 2.4,
                 'text-halo-blur': 0.2 } });
      this._map.addLayer({ id: 'poi-lib', type: 'symbol', source: 'poi',
        

        filter: PAS_AMER,
        










        layout: { 'text-field': ['get', 'nom'], 'text-size': 11, 'text-offset': [0, 1.9], 'text-anchor': 'top',
                  'text-font': POLICE_NORMALE, 'text-max-width': 9, 'text-optional': true,
                  'symbol-sort-key': 100 },
        paint: { 'text-opacity': ['case', ['boolean', ['feature-state', 'sousCarte'], false], 0, 1],
                 'text-color': C.ink, 'text-halo-color': '#fff', 'text-halo-width': 1.6 },
        minzoom: 16 });

      








      const ouvrir = e => {
         
        if (this._appuiLong) return;
        const f = e.features && e.features[0];
        if (!f) return;
        const g = this._groupeReplie(f.properties.id);
        if (g) { this._descendreAEtage(g.ouvre, g.centre); return; }
        this._ouvrirPoi(f.properties.id);
      };
      this._map.on('click', 'poi-tap', ouvrir);
      this._map.on('click', 'surf-f', ouvrir);
      this._map.on('click', 'stand-f', ouvrir);
      



      let standSurvole = null;
      this._map.on('mousemove', 'stand-f', (e) => {
        const f = e.features && e.features[0];
        if (!f || this._atelier || this._tactile()) return;
        if (standSurvole === f.properties.id) return;
        standSurvole = f.properties.id;
        this._carteStandSurvol(standSurvole);
      });
      this._map.on('mouseleave', 'stand-f', () => { standSurvole = null; this._carteStandSurvol(null); });
      this._map.on('click', 'trace-l', ouvrir);
       
       
      this._map.on('click', 'barre-a', ouvrir);

      







      this._map.on('click', (e) => {
        if (this._atelier) return;
        const v = this.querySelector('#vmVoile');
        if (!v || v.hidden) return;
        












        const cible = e.originalEvent && e.originalEvent.target;
        if (cible && cible.closest && cible.closest('.maplibregl-marker')) return;
        const cs = ['poi-tap', 'poi-pt', 'surf-f', 'trace-l', 'trace-h', 'barre-a', 'zones-f', 'zones-x',
                    'flotte-b', 'flotte-f', 'flotte-c', 'flotte-h', 'ponton-quai', 'ponton-l', 'secteur-f',
                    


                    'zone-classe-f']
          .filter(l => this._map.getLayer(l));
        if (cs.length && this._map.queryRenderedFeatures(e.point, { layers: cs }).length) return;
        








        if (this._map.getLayer('edifices-f')) {
          const f = this._plusPetitBati(this._map.queryRenderedFeatures(e.point, { layers: ['edifices-f'] }));
          if (f && this._contenuDe(f.properties.id).length) return;
        }
        this._fermerFiche();
      });

       
       
       
      let survole = null;
      this._map.on('mousemove', 'surf-f', e => {
        const f = e.features && e.features[0]; if (!f) return;
        if (survole !== null) this._map.setFeatureState({ source: 'surf', id: survole }, { survol: false });
        survole = f.id;
        this._map.setFeatureState({ source: 'surf', id: survole }, { survol: true });
      });
      this._map.on('mouseleave', 'surf-f', () => {
        if (survole !== null) this._map.setFeatureState({ source: 'surf', id: survole }, { survol: false });
        survole = null;
      });

      ['poi-tap', 'surf-f', 'stand-f', 'trace-l', 'barre-a', 'zones-f'].forEach(l => {
        this._map.on('mouseenter', l, () => this._map.getCanvas().style.cursor = 'pointer');
        this._map.on('mouseleave', l, () => this._map.getCanvas().style.cursor = '');
      });
      








      this._map.on('click', 'zones-f', e => {
        const f = e.features[0];
        if (!f) return;
        const g = this._groupeReplie(f.properties.id);
        if (g) { this._descendreAEtage(g.ouvre, g.centre); return; }
        


        if (this._atelier) return;
        const z = (this._p.zones || []).find(x => x.id === f.properties.id);
        if (z) { this._poiOuvert = z.id; this._batiOuvert = null; try { this._fiche(z); } catch (err) { this._incident('fiche d\'emprise', err); this._bandeau(f.properties.nom, ''); } }
        else this._bandeau(f.properties.nom, '');
      });
      this._map.on('mouseenter', 'zones-f', () => { if (!this._atelier) this._map.getCanvas().style.cursor = 'pointer'; });
      this._map.on('mouseleave', 'zones-f', () => this._map.getCanvas().style.cursor = '');
       
       
      this._map.on('click', 'zones-x', e => { const f = e.features[0];
        if (f) this._bandeau(f.properties.nom, f.properties.motif || this._t('nonAccessible')); });
      ['zones-x'].forEach(l => {
        this._map.on('mouseenter', l, () => this._map.getCanvas().style.cursor = 'help');
        this._map.on('mouseleave', l, () => this._map.getCanvas().style.cursor = '');
      });
    }

    












    _ajouterCartesLogo() {
      const avecLogo = (this._p.poi || []).filter(o => this._aLogo(o) && this._estPoint(this._centre(o)));
      if (!avecLogo.length) return;
      this._cartesLogo = this._cartesLogo || [];
      avecLogo.forEach(o => {
        const c = this._centre(o);
        const cat = this._cat(o.cat);
        const el = document.createElement('button');
        el.className = 'vm__logo';
        el.type = 'button';
        el.style.setProperty('--c', couleurSure(cat.couleur, C.teal));
        


        el.innerHTML = urlSure(o.logo)
          ? '<img src="' + this._esc(urlSure(o.logo)) + '" alt="' + this._esc(o.nom || '') + '" loading="lazy">'
          : '<span class="vm__logom"><i style="background:' + couleurSure(cat.couleur, C.teal) + '">' +
              svg(PICTO[cat.picto] || PICTO.star, '') + '</i><b>' + this._esc(o.nom || '') + '</b></span>';
        el.appendChild(Object.assign(document.createElement('span'), {
          className: 'vm__slo', textContent: o.nom || '' }));    
        el.addEventListener('click', () => this._ouvrirPoi(o.id));
        el.dataset.poi = o.id;
        














        this._cartesLogo.push(new maplibregl.Marker({ element: el, anchor: 'bottom', offset: [0, -6] })
          .setLngLat(c).addTo(this._map));
      });
      



      


      this._map.on('mousemove', 'poi-tap', (e) => {
        const f = e.features && e.features[0];
        if (!f || this._atelier || this._tactile()) return;
        this._survolCarte(f.properties.id);
        const o = (this._p.poi || []).find(x => x.id === f.properties.id);
        if (o) this._apercuLieu(o, e.point);
      });
      this._map.on('mouseleave', 'poi-tap', () => { this._survolCarte(null); this._fermerCarteBateau(); });
      this._majCartesLogo();
      this._map.on('zoom', () => this._majCartesLogo());
      this._brancherAppuiLong();
    }
    













    _brancherAppuiLong() {
      const cv = this._map && this._map.getCanvasContainer();
      if (!cv || this._appuiCable) return;
      this._appuiCable = true;
      const SEUIL = 460, GLISSE = 12;
      let t = null, x0 = 0, y0 = 0;
      const annuler = () => { if (t) { clearTimeout(t); t = null; } };
      cv.addEventListener('touchstart', (e) => {
        annuler();
        









        if (!this._tactile() || this._atelier) return;
        if (!e.touches || e.touches.length !== 1) return;
        x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
        const r = cv.getBoundingClientRect();
        const pt = { x: x0 - r.left, y: y0 - r.top };
        t = setTimeout(() => { t = null; this._apercuAuDoigt(pt); }, SEUIL);
      }, { passive: true });
      cv.addEventListener('touchmove', (e) => {
        if (!t) return;
        const a = e.touches && e.touches[0];
        if (!a || e.touches.length > 1 ||
            Math.abs(a.clientX - x0) > GLISSE || Math.abs(a.clientY - y0) > GLISSE) annuler();
      }, { passive: true });
      cv.addEventListener('touchend', annuler, { passive: true });
      cv.addEventListener('touchcancel', annuler, { passive: true });
      this._map.on('dragstart', () => { annuler(); this._fermerApercu(); });
      


      












      const boite = this._boiteApercu();
      const ouvrirDepuisVignette = (ev) => {
        const a = this._apercuVise ||
          (this._apercuTouche ? { k: this._natureVisee(this._apercuTouche), id: this._apercuTouche } : null);
        if (!a || !a.id) return;
        if (ev && ev.cancelable) ev.preventDefault();
        this._apercuVise = null;
        this._fermerApercu();
        if (a.k === 'bateau') {
          const b = (this._p.bateaux || []).find(x => x.id === a.id);
          if (b) this._ficheBateau(b);
          return;
        }
         
         
        this._apercuTouche = a.id;
        this._apercuT0 = 0;
        this._ouvrirPoi(a.id);
      };
      boite.addEventListener('click', ouvrirDepuisVignette);
      boite.addEventListener('touchend', ouvrirDepuisVignette);
    }
     
     
    _natureVisee(id) {
      return (this._p.bateaux || []).some(b => b.id === id) ? 'bateau' : 'poi';
    }
    




    _apercuAuDoigt(pt) {
      if (!this._map) return;
      const T = 14;
      const zone = [[pt.x - T, pt.y - T], [pt.x + T, pt.y + T]];
      const dispo = (l) => { try { return !!this._map.getLayer(l); } catch (e) { return false; } };
      const trouver = (couches) => {
        const c = couches.filter(dispo);
        if (!c.length) return null;
        try { return this._map.queryRenderedFeatures(zone, { layers: c })[0] || null; }
        catch (e) { return null; }
      };
      let vise = null;
      const fb = trouver(['flotte-f', 'flotte-b']);
      if (fb) {
        const b = (this._p.bateaux || []).find(x => x.id === fb.properties.id);
        if (b) { this._carteBateau(b, pt); this._apercuTouche = b.id; this._apercuT0 = Date.now();
          vise = { k: 'bateau', id: b.id }; }
      }
      if (!vise) {
        const fp = trouver(['poi-tap', 'stand-f', 'surf-f']);
        if (fp) {
          const o = (this._p.poi || []).find(x => x.id === fp.properties.id);
          if (o) {
            this._survolCarte(o.id); this._apercuLieu(o, pt);
            


            this._apercuTouche = o.id;
            this._apercuT0 = Date.now();
            vise = { k: 'poi', id: o.id };
          }
        }
      }
      if (!vise) return;
      this._apercuVise = vise;
      


      this._appuiLong = true;
      clearTimeout(this._tAppuiLong);
      this._tAppuiLong = setTimeout(() => { this._appuiLong = false; }, 700);
       
       
      try { if (navigator.vibrate) navigator.vibrate(12); } catch (e) {}
      if (this._mesure) this._mesure.noter('appui-long', vise.id);
    }
    















    









    _souscarte(id, actif) {
      if (!id || !this._map.getSource('poi')) return;
      try { this._map.setFeatureState({ source: 'poi', id }, { sousCarte: !!actif }); } catch (e) {}
    }
    _survolCarte(id) {
      if (this._carteSurvolee === id) return;
      if (this._carteSurvolee) {
        const p = this.querySelector('.vm__logo[data-poi="' + this._esc(this._carteSurvolee) + '"]');
        if (p) p.classList.remove('a-masque');
        this._souscarte(this._carteSurvolee, !!this._logosOn);
      }
      this._carteSurvolee = id || null;
      if (!id) return;
      


      const n = this.querySelector('.vm__logo[data-poi="' + this._esc(id) + '"]');
      if (n) n.classList.add('a-masque');
      this._souscarte(id, false);
    }
    


    















    _prechargerLogos() {
      if (this._logosPrets) return;
      this._logosPrets = true;
      (this._p.poi || []).forEach(o => {
        const u = urlSure(o.logo);
        if (u) { const im = new Image(); im.decoding = 'async'; im.src = u; }
      });
    }
    























    _ajouterCartesStand() {
      const stands = (this._p.poi || []).filter(o => this._estStand(o) && o.exposant);
      if (!stands.length) return;
      this._cartesStand = this._cartesStand || [];
      stands.forEach(o => {
        const c = this._centre(o);
        if (!this._estPoint(c)) return;
        const cat = this._cat(o.cat);
        const el = document.createElement('button');
        el.className = 'vm__logo vm__logo--stand ' + (o.taille === 'grand' ? 'est-tete' : 'est-module');
        el.type = 'button';
        el.style.setProperty('--c', couleurSure(cat.couleur, C.teal));
        el.innerHTML = urlSure(o.logo)
          ? '<img src="' + this._esc(urlSure(o.logo)) + '" alt="' + this._esc(o.exposant) + '" loading="lazy">'
          : '<span class="vm__logom"><i style="background:' + couleurSure(cat.couleur, C.teal) + '">' +
              svg(PICTO[cat.picto] || PICTO.star, '') + '</i>' +
              









              '<span class="vm__stt"><b>' + this._esc(o.exposant) + '</b>' +
              (o.sousCat ? '<em>' + this._esc(o.sousCat) + '</em>' : '') +
              '</span>' +
              (o.nom ? '<u class="vm__stlot">' + this._esc(o.nom) + '</u>' : '') +
              '</span>';
        el.appendChild(Object.assign(document.createElement('span'), {
          className: 'vm__slo', textContent: o.exposant + ', emplacement ' + (o.nom || '') }));
        el.addEventListener('click', () => this._ouvrirPoi(o.id));
        el.dataset.poi = o.id;
         
         
        this._cartesStand.push(new maplibregl.Marker({ element: el, anchor: 'bottom', offset: [0, -6] })
          .setLngLat(c).addTo(this._map));
      });
      this._majCartesStand();
      this._map.on('zoom', () => this._majCartesStand());
      



    }
    _majCartesStand() {
      const vm = this.querySelector('.vm');
      if (!vm || !this._map) return;
      const z = this._map.getZoom();
      


      const src = this._map.getSource('stands');
      const servis = !!(src && src._data && src._data.features && src._data.features.length);
      








      const zE1 = this._zoomDeLEtage(1);
      vm.classList.toggle('a-standsT', servis && z >= zE1);
      vm.classList.toggle('a-standsM', servis && z >= zE1 + 0.6);
    }
    _majCartesLogo() {
      const z = this._map.getZoom();
      if (z >= 16.5) this._prechargerLogos();       
      

      const on = z >= this._zoomDeLEtage(1) && this._detail !== false;
      if (on === this._logosOn) return;
      this._logosOn = on;
      const vm = this.querySelector('.vm');
      if (vm) vm.classList.toggle('a-logos', on);
      (this._p.poi || []).forEach(o => { if (this._aLogo(o)) this._souscarte(o.id, on); });
      if (!on && this._carteSurvolee) this._souscarte(this._carteSurvolee, true);
    }

    









    TYMAL_EXPIRE_MIN = 60;
    _tymalSignale() {
      let e = null;
      try { e = JSON.parse(localStorage.getItem('rdr-tymal') || 'null'); } catch (x) { return null; }
      if (!e || e.pause) return e && e.pause ? { pause: true } : null;
      const a = this._ageTymal(e.maj);
      if (!a || a.min >= 60) return { pause: true };    
      return { actif: true, lng: +e.lng, lat: +e.lat, maj: e.maj, prochainLieu: e.lieu || '' };
    }
    _ajouterTymal() {
      

      const sig = this._tymalSignale();
      if (sig) this._p.tymal = sig.pause ? { actif: false } : sig;
      const t = this._p.tymal;
       
       
      if (t && t.actif === false) { this._tymalAbsent = true; return; }
      if (!t || !t.actif) return;
      



      if (!this._estPoint([t.lng, t.lat])) { this._tymalAbsent = true; return; }
      






      const el = document.createElement('div');
      el.className = 'vm__logo vm__tymal';
      el.innerHTML = '<img src="' + this._esc(TYMAL_SVG) + '" alt="TyMal" loading="lazy" ' +
        'onerror="this.remove();this.parentNode.classList.add(\'vm__tymal--repli\')">' +
        svg(PICTO.tymal, 'vm__tymalp');
      this._tymalM = new maplibregl.Marker({ element: el, anchor: 'bottom', offset: [0, -6] })
        .setLngLat([+t.lng, +t.lat]).addTo(this._map);
      this._tymalAbsent = false;
      el.addEventListener('click', () => {
        if (this._mesure) this._mesure.noter('tymal', 'consulte');
        this._ficheTymal(t);
      });
    }

     
    























    _amas(ids) {
      const vide = { amas: [], absorbes: new Set() };
      if (this._atelier || !this._map || !ids.length) return vide;
      







      if (this._replie) return vide;
      









      const estAmer = new Set((this._p.poi || []).filter(o => o.amer === true).map(o => o.id));
      if (estAmer.size) ids = ids.filter(id => !estAmer.has(id));
      if (!ids.length) return vide;
      const SEUIL = 30;                        
      const parId = new Map((this._p.poi || []).map(o => [o.id, o]));
      


      






      const versLieu = eid => 'b' + String(eid).slice(1);
      const contenant = new Map();
      (this._p.edifices || []).forEach(b => {
        if (!b.contenu) return;
        contenant.set(versLieu(b.id), versLieu(b.contenu));
      });
      const pts = [];
      for (const id of ids) {
        const o = parId.get(id); if (!o) continue;
        const c = this._centre(o);
        if (!this._estPoint(c)) continue;
        


        if (!this._garde({ cat: o.cat, c, o })) continue;
        const p = this._map.project(c);
        pts.push({ id, o, x: p.x, y: p.y, c });
      }
      const pris = new Array(pts.length).fill(false);
      const amas = [], absorbes = new Set();
      for (let i = 0; i < pts.length; i++) {
        if (pris[i]) continue;
        const membres = [pts[i]];
        for (let j = i + 1; j < pts.length; j++) {
          if (pris[j]) continue;
          if (Math.hypot(pts[j].x - pts[i].x, pts[j].y - pts[i].y) > SEUIL) continue;
          pris[j] = true; membres.push(pts[j]);
        }
        pris[i] = true;
        







        if (membres.length < 3) continue;      
        membres.forEach(m => absorbes.add(m.id));
        

        const halls = new Set(membres.map(m => contenant.get(m.id) || m.id));
        let nom = '';
        if (halls.size === 1) {
          const po = parId.get([...halls][0]);
          if (po) nom = po.nom || '';
        }
        const cats = {};
        membres.forEach(m => { cats[m.o.cat] = (cats[m.o.cat] || 0) + 1; });
        const dom = Object.keys(cats).sort((a, b) => cats[b] - cats[a])[0];
        





        amas.push({
          id: 'amas-' + membres[0].id, n: membres.length, nom: nom || '',
          couleur: couleurSure(this._cat(dom).couleur, C.teal),
          

          c: [membres.reduce((s, m) => s + m.c[0], 0) / membres.length,
              membres.reduce((s, m) => s + m.c[1], 0) / membres.length],
          bornes: [[Math.min(...membres.map(m => m.c[0])), Math.min(...membres.map(m => m.c[1]))],
                   [Math.max(...membres.map(m => m.c[0])), Math.max(...membres.map(m => m.c[1]))]]
        });
      }
      return { amas, absorbes };
    }
    _geojsonAmas(liste) {
      return { type: 'FeatureCollection', features: (liste || []).map(a => ({
        type: 'Feature',
        properties: { id: a.id, nom: a.nom, lib: String(a.n), n: a.n, couleur: a.couleur,
                      bornes: JSON.stringify(a.bornes) },
        geometry: { type: 'Point', coordinates: a.c } })) };
    }
    _ajouterAmas() {
      if (this._map.getSource('amas')) return;
      this._map.addSource('amas', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      


      this._map.addLayer({ id: 'amas-c', type: 'circle', source: 'amas',
        paint: { 'circle-radius': ['interpolate', ['linear'], ['get', 'n'], 2, 15, 12, 23],
                 'circle-color': ['get', 'couleur'], 'circle-stroke-width': 2.5,
                 'circle-stroke-color': '#fff', 'circle-opacity': .96 } });
      this._map.addLayer({ id: 'amas-n', type: 'symbol', source: 'amas',
        layout: { 'text-field': ['get', 'lib'], 'text-font': POLICE_GRASSE, 'text-size': 13,
                  'text-allow-overlap': true, 'text-ignore-placement': true },
        paint: { 'text-color': C.ink, 'text-halo-color': '#fff', 'text-halo-width': 1.2 } });
      this._map.addLayer({ id: 'amas-l', type: 'symbol', source: 'amas',
        layout: { 'text-field': ['get', 'nom'], 'text-font': POLICE_GRASSE, 'text-size': 10.5,
                  'text-offset': [0, 1.9], 'text-max-width': 10, 'text-optional': true,
                  'text-transform': 'uppercase', 'text-letter-spacing': .05 },
        paint: { 'text-color': C.ink, 'text-halo-color': '#fff', 'text-halo-width': 2 } });
      

      this._map.on('click', 'amas-c', ev => {
        const f = ev.features && ev.features[0]; if (!f) return;
        let b = null; try { b = JSON.parse(f.properties.bornes); } catch (e) {}
        if (!b) return;
        this._map.fitBounds(b, { padding: 140, maxZoom: 20, duration: 650 });
        if (this._mesure) this._mesure.noter('amas', f.properties.id);
      });
      this._map.on('mouseenter', 'amas-c', () => { this._map.getCanvas().style.cursor = 'pointer'; });
      this._map.on('mouseleave', 'amas-c', () => { this._map.getCanvas().style.cursor = ''; });
    }

    _appliquerFiltres() {
      if (!this._prete) return;
      const z = this._map.getZoom();
       
       
      const cuis = this._cuis && this._cuis.size ? this._cuis : null;
       
       
       
      const duJour = this._progJour
        ? new Set((this._p.animations || []).filter(a => a.date === this._jour).map(a => a.poiId).filter(Boolean))
        : null;
      let visibles = (this._p.poi || []).filter(o =>
        




        this._passeFiltres(o, duJour, cuis) &&
        




















        









        (this._atelier || this._filtreActif() || o.amer === true ||
         z >= Math.max(o.zoomMin || 0, this._cat(o.cat).zoomMin || 0))
      ).map(o => o.id);
       
       
      


      this._rafraichirFiche();
      





      let sousAmas = [];
      try {
        const r = this._amas(visibles);
        sousAmas = r.amas;
        if (r.absorbes.size) visibles = visibles.filter(id => !r.absorbes.has(id));
      } catch (e) { this._incident('amas', e); }
      const srcAmas = this._map.getSource('amas');
      if (srcAmas) { try { srcAmas.setData(this._geojsonAmas(sousAmas)); }
        catch (e) { this._incident('source amas', e); } }
      const f = ['in', ['get', 'id'], ['literal', visibles]];
      



      ['poi-tap', 'poi-pt', 'poi-lib', 'poi-amer', 'surf-f', 'surf-l', 'surf-n', 'trace-h', 'trace-l', 'trace-n',
       




       







      ]
        











        .forEach(l => {
          if (!this._map.getLayer(l)) return;
          const base = BASE_FILTRE[l];
          this._map.setFilter(l, base ? ['all', base, f] : f);
        });
       
      this.querySelectorAll('.vm__logo--stand').forEach(e => {
        const o = (this._p.poi || []).find(x => x.id === e.dataset.poi);
        e.classList.toggle('a-filtre', !!(o && this._fam && this._fam.indexOf(o.cat) < 0));
      });
       
       
       
       
      const bateauxOn = !this._actives || this._actives.has('bateaux');
      ['zones-f', 'zones-l', 'zones-x', 'zones-xl', 'zones-xn'].forEach(l => this._map.getLayer(l) &&
        this._map.setLayoutProperty(l, 'visibility', (bateauxOn && this._detail !== false) ? 'visible' : 'none'));
       
       
      const pontonsOn = bateauxOn && !this._planVisible && this._detail !== false;
      


      const decor = this._flotteVive ? [] : ['ponton-b'];
      ['ponton-quai', 'ponton-l', 'ponton-n'].concat(decor).forEach(l => this._map.getLayer(l) &&
        this._map.setLayoutProperty(l, 'visibility', pontonsOn ? 'visible' : 'none'));
      






      

      ['secteur-f', 'secteur-l', 'secteur-n', 'secteur-c'].forEach(l => this._map.getLayer(l) &&
        this._map.setLayoutProperty(l, 'visibility', 'visible'));
      this._majDecorVillage();    
       
       
      const sg = this._map.getSource('groupes');
      if (sg) { try { sg.setData(this._geojsonGroupes()); } catch (e) { this._incident('maj groupes', e); } }
      const flotteOn = bateauxOn && this._detail !== false && !this._flotteMasquee;
       
       
      ['flotte-b', 'flotte-f', 'flotte-c', 'flotte-h'].forEach(l => this._map.getLayer(l) &&
        this._map.setLayoutProperty(l, 'visibility', flotteOn ? 'visible' : 'none'));
      const tymalOn = !this._actives || this._actives.has('tymal');
       
       
      const bpmr = this.querySelector('#vmPmr');
      if (bpmr) {
        const n = (this._p.poi || []).filter(o => o.pmr === true).length;
        bpmr.querySelector('#vmPmrN').textContent = n ? String(n) : '0';
        bpmr.hidden = !n;                        
        bpmr.title = n ? this._t('pmrAide') : this._t('pmrVide');
      }
      const bpj = this.querySelector('#vmProgJour');
      if (bpj) {
        const n = new Set((this._p.animations || []).filter(a => a.date === this._jour)
          .map(a => a.poiId).filter(Boolean)).size;
        bpj.querySelector('#vmProgJourN').textContent = n ? String(n) : '0';
        bpj.classList.toggle('vm__pj--vide', this._progJour && !n);
        bpj.title = n ? this._t('progJourAide') : this._t('progJourVide');
      }
      const boiteCuis = this.querySelector('#vmCuis');
      if (boiteCuis) {
        const resto = (!this._actives || this._actives.has('restauration')) &&
          (this._p.poi || []).some(o => o.cat === 'restauration' && visibles.indexOf(o.id) >= 0 ||
            (o.cat === 'restauration' && !cuis));
         
         
        const dispo = resto && this.querySelector('.vm__f[data-cat="restauration"]') &&
          !this.querySelector('.vm__f[data-cat="restauration"]').hidden;
        boiteCuis.hidden = !dispo || !this._regimesOuverts;
        const plus = this.querySelector('.vm__fplus[aria-controls="vmCuis"]');
        if (plus) plus.hidden = !dispo;
      }
      

      const boiteCl = this.querySelector('#vmClasses');
      if (boiteCl) {
        const bb = this.querySelector('.vm__f[data-cat="bateaux"]');
        const dispo = bateauxOn && this._detail !== false && bb && !bb.hidden;
        boiteCl.hidden = !dispo || !this._classesOuvertes;
        const plusCl = this.querySelector('.vm__fplus[aria-controls="vmClasses"]');
        if (plusCl) plusCl.hidden = !dispo;
      }
      


      const cl = this._classe || null;
      ['flotte-b', 'flotte-f', 'flotte-c', 'flotte-h', 'zone-classe-f', 'zone-classe-l'].forEach(l => {
        if (!this._map.getLayer(l)) return;
        try { this._map.setFilter(l, cl ? ['==', ['get', 'classe'], cl] : null); } catch (e) { this._incident('filtre de classe', e); }
      });
      (this._marqPontons || []).forEach(mk => { const el = mk.getElement(); el.classList.toggle('a-classe-off', !!cl && el.dataset.classe !== cl); });
      














      const parIdA11y = new Map();
      (this._p.poi || []).forEach(o => parIdA11y.set(o.id, o));
      const annonces = visibles.filter(id => {
        const o = parIdA11y.get(id);
        if (!o) return false;
        return this._garde({ cat: o.cat, c: [+o.lng, +o.lat], o: o });
      });
      this._majListeA11y(annonces);
      this._annoncer(annonces.length === 0 ? this._t('aucunLieuAffiche')
        : annonces.length === 1 ? this._t('unLieuAffiche')
        : this._t('lieuxAffiches').replace('{n}', String(annonces.length)));
       
       
      const tymalDedans = this._villageReplie &&
        this._dansLeVillage([+(this._p.tymal || {}).lng, +(this._p.tymal || {}).lat]);
      if (this._tymalM) this._tymalM.getElement().style.display = (tymalOn && !tymalDedans) ? '' : 'none';
      const bTymal = this.querySelector('.vm__f[data-cat="tymal"]');
      if (bTymal) bTymal.classList.toggle('vm__f--absent', !!this._tymalAbsent);
      







      






      if (this._reposer) this._reposer();
       
       
      this._majVues();
    }

    




    


    _majFraicheur() {
      const f = this._fraicheur, b = this.querySelector('#vmEtat');
      if (!b) return;
      if (!f || f.source !== 'memoire') { b.hidden = true; this._fermerEtat(); return; }
       
      if (this._mesure && !this._memoireDite) { this._memoireDite = true; this._mesure.noter('hors-ligne', 'contenu-memorise'); }
      const h = ageEnHeures(f.le), vieux = h >= AGE_ALERTE_H;
      b.hidden = false;
      b.classList.toggle('vm__etat--vieux', vieux);
      b.innerHTML = svg(IC.horsCo, 'vm__eico') + '<span>' + this._esc(this._t('horsCo')) +
        ' · ' + this._esc(ageEnMots(f.le, this._lang)) + '</span>';
      b.setAttribute('aria-expanded', 'false');
    }
    _fermerEtat() { const v = this.querySelector('#vmEtatV'); if (v) v.hidden = true; }
    _ouvrirEtat() {
      const f = this._fraicheur, v = this.querySelector('#vmEtatV');
      if (!v || !f) return;
      const d = new Date(f.le);
      v.innerHTML =
        '<div class="vm__etath"><b>' + this._esc(this._t('horsCoTitre')) + '</b>' +
          '<button class="vm__ux" id="vmEtatX" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button></div>' +
        '<p>' + this._esc(this._t('horsCoTexte')) + '</p>' +
        '<p class="vm__vigilance">' + svg(IC.alerte, 'vm__uico') + this._esc(this._t('horsCoVigilance')) + '</p>' +
        '<p class="vm__etatd">' + this._esc(this._t('horsCoDate')) + ' : <b>' +
          this._esc(d.toLocaleString(this._lang === 'en' ? 'en-GB' : 'fr-FR', { dateStyle: 'short', timeStyle: 'short' })) +
          '</b> · ' + this._esc(ageEnMots(f.le, this._lang)) + '</p>' +
        '<button class="vm__cta vm__cta--moyen vm__reessai" id="vmReessai">' + this._esc(this._t('horsCoReessayer')) +
          '<span class="vm__ctaic">' + svg(IC.fleche) + '</span></button>';
      v.hidden = false;
      v.querySelector('#vmEtatX').addEventListener('click', () => this._fermerEtat());
       
       
       
      v.querySelector('#vmReessai').addEventListener('click', () => {
        this._emit('vm-rafraichir', {});
        if (typeof location !== 'undefined') location.reload();
      });
    }

    







    _paliers() {
      return [
        { s: 0,  t: 'chargement',     sous: '' },
        { s: 5,  t: 'chargement',     sous: 'chargeLent' },
        { s: 13, t: 'chargeTresLent', sous: 'chargeLent' }
      ];
    }
    _demarrerChargement() {
      const v = this.querySelector('#vmCharge'); if (!v) return;
      v.hidden = false;
      this._t0charge = Date.now();
      const maj = () => {
        if (!this.isConnected || v.hidden) return;
        const s = (Date.now() - this._t0charge) / 1000;
        const p = this._paliers().filter(x => s >= x.s).pop();
        this.querySelector('#vmChargeT').textContent = this._t(p.t);
        this.querySelector('#vmChargeS').textContent = p.sous ? this._t(p.sous) : '';
         
         
        const b = this.querySelector('#vmChargeB');
        if (s >= 22 && this.aUneMemoire() && (this._fraicheur || {}).source !== 'memoire') {
          b.hidden = false;
          b.innerHTML = this._esc(this._t('chargeSecours')) + '<span class="vm__ctaic">' + svg(IC.fleche) + '</span>';
        }
        this._tCharge = setTimeout(maj, 900);
      };
      maj();
      const b = this.querySelector('#vmChargeB');
      if (b) b.addEventListener('click', () => { this._arreterChargement(); this.utiliserMemoire(); });
    }
    



    _incident(etape, e) {
      this._incidents = this._incidents || new Set();
      if (this._incidents.has(etape)) return;
      this._incidents.add(etape);
      try { console.warn('[village-map] étape « ' + etape +' » interrompue :', e && e.message ? e.message : e); } catch (x) {}
    }
     
     
    _ecarte(quoi, id) {
      this._ecartes = this._ecartes || new Map();
      const l = this._ecartes.get(quoi) || [];
      l.push(id == null ? '(sans identifiant)' : String(id));
      this._ecartes.set(quoi, l);
    }
    _direLesEcarts() {
      if (!this._ecartes || !this._ecartes.size) return;
      this._ecartes.forEach((l, quoi) => {
        




        const ids = l.filter(x => x && x !== '(sans identifiant)');
        try { console.warn('[village-map] ' + l.length + ' écart(s) — ' + quoi +
          (ids.length ? ' : ' + ids.slice(0, 12).join(', ') + (ids.length > 12 ? '…' : '') : '')); } catch (x) {}
      });
      this._ecartes.clear();
    }

    _arreterChargement() {
      clearTimeout(this._tCharge);
      const v = this.querySelector('#vmCharge');
      if (v) { v.classList.add('vm__charge--parti'); setTimeout(() => { v.hidden = true; }, 320); }
    }

    















    _modeSansCarte() {
      this._arreterChargement();
      const z = this.querySelector('#vmCarte');
      if (z) z.innerHTML = '<div class="vm__sanscarte" role="status">' +
        svg(IC.alerte, 'vm__scico') +
        '<b>' + this._esc(this._t('sansCarteT')) + '</b>' +
        '<span>' + this._esc(this._t('sansCarteM')) + '</span>' +
        '<button type="button" class="vm__cta vm__cta--moyen vm__scr">' +
          this._esc(this._t('sansCarteB')) +
          '<span class="vm__ctaic">' + svg(IC.fleche) + '</span></button></div>';
      const r = this.querySelector('.vm__scr');
      if (r) r.addEventListener('click', () => location.reload());
      







      ['#vmGeo', '#vmAutour', '#vmHL', '#vmVue', '.vm__niveaux'].forEach(s => {
        const e = this.querySelector(s);
        if (e) { e.hidden = true; e.style.display = 'none'; }
      });
    }

    
























    _urgenceActive() {
      const u = (this._p.config || {}).urgence;
      return u && u.actif ? u : null;
    }
    _famillesUrgence() {
      const u = this._urgenceActive();
      if (!u) return null;
      const f = Array.isArray(u.familles) && u.familles.length ? u.familles : ['entrees', 'secours'];
       
       
      const connues = (this._p.categories || []).map(c => c.cle);
      const gardees = f.filter(c => connues.indexOf(c) >= 0);
      return gardees.length ? gardees : connues.filter(c => c === 'entrees' || c === 'secours');
    }
    

    _sortiesProches(n) {
      const fam = this._famillesUrgence();
      if (!fam) return [];
      const moi = this._geoMarqueur ? this._geoMarqueur.getLngLat() : null;
      const l = (this._p.poi || [])
        .filter(o => fam.indexOf(o.cat) >= 0 && this._estPoint(this._centre(o)))
        .map(o => {
          const c = this._centre(o);
          return { o: o, c: c, d: moi ? this._metresEntre([moi.lng, moi.lat], c) : null };
        });
      if (moi) l.sort((a, b) => a.d - b.d);
      return l.slice(0, n || 3);
    }
    _metresEntre(a, b) {
      const dx = (b[0] - a[0]) * 111320 * Math.cos(a[1] * Math.PI / 180);
      const dy = (b[1] - a[1]) * 110540;
      return Math.sqrt(dx * dx + dy * dy);
    }
    


    









    _majUrgence() {
      const vm = this.querySelector('.vm');
      const n = this.querySelector('#vmUrgence');
      if (!vm || !n) return;
      const u = this._urgenceActive();
      vm.classList.toggle('a-urgence', !!u);
      if (!u) {
        n.hidden = true;
         
        






        if (this._urgenceMise) {
          this._urgenceMise = false;
          this._fam = this._famAvantUrgence !== undefined ? this._famAvantUrgence : null;
          this._flotteMasquee = !!this._flotteAvantUrgence;
           
           
          this._actives = this._activesAvantUrgence !== undefined ? this._activesAvantUrgence : null;
          this._activesAvantUrgence = undefined;
          this._pmr = !!this._pmrAvantUrgence;
          this._progJour = !!this._progJourAvantUrgence;
          this._cuis = this._cuisAvantUrgence !== undefined ? this._cuisAvantUrgence : null;
          this._pmrAvantUrgence = this._progJourAvantUrgence = this._cuisAvantUrgence = undefined;
          [['#vmProgJour', this._progJour], ['#vmPmr', this._pmr]].forEach(([s, on]) => {
            const b = this.querySelector(s);
            if (b) { b.classList.toggle('is-on', !!on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); } });
          this.querySelectorAll('.vm__f').forEach(x => {
            const c = x.dataset.cat;
            if (c && c !== '__tout') x.classList.toggle('is-on', !this._actives || this._actives.has(c));
          });
           
           
          const tout = this.querySelector('.vm__f--tout');
          if (tout) tout.classList.toggle('is-on',
            !this._actives || this._actives.size === (this._p.categories || []).length);
          this._famAvantUrgence = undefined;
           
           
          vm.style.removeProperty('--vm-urgence-h');
          vm.style.removeProperty('--vm-urgence-l');
          this._appliquerFiltres();
        }
        return;
      }
      const moi = this._geoMarqueur ? this._geoMarqueur.getLngLat() : null;
      const proches = this._sortiesProches(3);
      n.innerHTML =
        '<div class="vm__urgt">' + svg(IC.alerte, 'vm__urgi') +
          '<div><b>' + this._esc(u.titre || this._t('urgenceTitre')) + '</b>' +
          (u.message ? '<span>' + this._esc(u.message) + '</span>' : '') + '</div></div>' +
        (proches.length
          ? '<ul class="vm__urgl">' + proches.map(p =>
              '<li><button data-poi="' + this._esc(p.o.id) + '">' +
                '<i style="background:' + couleurSure(this._cat(p.o.cat).couleur, C.teal) + '">' +
                  svg(PICTO[this._cat(p.o.cat).picto] || PICTO.door, '') + '</i>' +
                '<span><b>' + this._esc(p.o.nom || '') + '</b>' +
                (p.d != null
                  ? '<em>' + Math.round(p.d) + ' m ' + this._esc((this._capVers([moi.lng, moi.lat], p.c) || {}).mot || '') + '</em>'
                  : '<em>' + this._esc(this._libCat(this._cat(p.o.cat))) + '</em>') +
                '</span></button></li>').join('') + '</ul>'
          : '')
        + '<div class="vm__urga">' +
          (moi ? '' : '<button id="vmUrgGeo">' + svg(IC.cible || IC.boussole, '') + this._esc(this._t('urgenceOu')) + '</button>') +
          '<button id="vmUrgHl">' + svg(IC.telecharger || IC.fleche, '') + this._esc(this._t('urgenceHorsLigne')) + '</button>' +
        '</div>';
      n.hidden = false;
      


      requestAnimationFrame(() => {
        vm.style.setProperty('--vm-urgence-h', n.offsetHeight + 'px');
         
        vm.style.setProperty('--vm-urgence-l', n.offsetWidth + 'px');
      });
      n.querySelectorAll('.vm__urgl button').forEach(b =>
        b.addEventListener('click', () => this._ouvrirPoi(b.dataset.poi)));
      const g = n.querySelector('#vmUrgGeo');
      if (g) g.addEventListener('click', () => { this._localiser(); });
      const h = n.querySelector('#vmUrgHl');
      




      if (h) h.addEventListener('click', () => this._preparerHorsLigne());
      



       
       
       
      const premiere = !this._urgenceMise;
      if (premiere) {
        this._famAvantUrgence = this._fam;
        this._flotteAvantUrgence = !!this._flotteMasquee;
        










        









        this._activesAvantUrgence = this._actives;
        this._pmrAvantUrgence = this._pmr;
        this._progJourAvantUrgence = this._progJour;
        this._cuisAvantUrgence = this._cuis;
      }
      this._actives = null;
      this._pmr = false;
      this._progJour = false;
      this._cuis = null; this._activesAvantCuis = undefined;
      this.querySelectorAll('.vm__f').forEach(x => { x.classList.add('is-on'); if (x.dataset.cat) x.setAttribute('aria-pressed','true'); });
       
       
      ['#vmProgJour', '#vmPmr'].forEach(s => { const b = this.querySelector(s);
        if (b) { b.classList.remove('is-on'); b.setAttribute('aria-pressed', 'false'); } });
      this._fam = this._famillesUrgence();
      


      this._flotteMasquee = true;
      this._urgenceMise = true;
      



      this._feuille(null);
      if (this._rechPlein) this._ouvrirRecherche(false);
      




      if (this._map.getLayer('poi-lib')) this._map.setLayerZoomRange('poi-lib', 0, 24);
      this._appliquerFiltres();
      










      


      if (premiere && this._map) {
        requestAnimationFrame(() => requestAnimationFrame(() => this._cadrerUrgence(proches, moi)));
      }
    }
    _cadrerUrgence(proches, moi) {
      const vm = this.querySelector('.vm'), n = this.querySelector('#vmUrgence');
      if (!vm || !n || !this._map || !this._urgenceActive()) return;
      const pts = (proches || []).map(p => p.c);
      if (moi) pts.push([moi.lng, moi.lat]);
      if (!pts.length) return;
      const lg = pts.map(c => c[0]), lt = pts.map(c => c[1]);
      






      const enColonne = vm.classList.contains('est-bas');
      const r = vm.getBoundingClientRect();
      const bloc = (s) => { const e = this.querySelector(s); if (!e) return null;
        const b = e.getBoundingClientRect(); return b.width ? b : null; };
      const outils = bloc('.vm__outils'), pan = n.getBoundingClientRect();
      const att = bloc('.maplibregl-ctrl-attrib');
       
       
      const sousLeBas = att ? Math.round(r.bottom - att.top) + 20 : 70;
      const mar = enColonne
        ? { top: 60, bottom: sousLeBas, right: 34,
            left: Math.max(pan.right, outils ? outils.right : 0) - r.left + 24 }
        : { bottom: sousLeBas, left: 34, right: 34,
            top: Math.max(pan.bottom, outils ? outils.bottom : 0) - r.top + 24 };
      


      const serrer = (a, b, d) => {
        if (a + b <= d - 120) return [a, b];
        const k = Math.max(0, d - 120) / (a + b);
        return [Math.round(a * k), Math.round(b * k)];
      };
      [mar.top, mar.bottom] = serrer(mar.top, mar.bottom, r.height || 0);
      [mar.left, mar.right] = serrer(mar.left, mar.right, r.width || 0);
      this._map.fitBounds([[Math.min(...lg), Math.min(...lt)], [Math.max(...lg), Math.max(...lt)]], {
        padding: mar, maxZoom: 17.6, duration: pts.length > 1 ? 700 : 0
      });
    }
    _majUrgent() {
      const u = (this._p.config || {}).messageUrgent;
      const b = this.querySelector('#vmUrgent');
      if (!b) return;
      let texte = u && (typeof u === 'string' ? u : u.texte);
      



      const f = this._fraicheur;
      if (texte && f && f.source === 'memoire' && ageEnHeures(f.le) >= AGE_ANNONCE_H) {
        texte = this._t('annonceRetiree').replace('{h}', String(AGE_ANNONCE_H));
        this._annonceExpiree = true;
      } else this._annonceExpiree = false;
      if (!texte || this._urgentLu === texte) { b.hidden = true; this._decalerSousUrgent(); return; }
      b.classList.toggle('vm__urgent--perime', !!this._annonceExpiree);
      b.innerHTML = svg(IC.alerte, 'vm__uico') +
        '<span>' + (this._annonceExpiree ? '' : '<b>' + this._esc(this._t('urgent')) + '</b> ') + this._esc(texte) + '</span>' +
        '<button class="vm__ux" aria-label="' + this._esc(this._t('fermerMsg')) + '">' + svg(IC.fermer) + '</button>';
      b.hidden = false;
      this._decalerSousUrgent();
      b.querySelector('.vm__ux').addEventListener('click', () => {
        this._urgentLu = texte; b.hidden = true; this._decalerSousUrgent();
      });
    }

    _decalerSousUrgent() {
      const b = this.querySelector('#vmUrgent'), vm = this.querySelector('.vm');
      if (!vm) return;
      const h = b && !b.hidden ? b.offsetHeight : 0;
      vm.style.setProperty('--vm-urgent-h', h + 'px');
      vm.classList.toggle('a-urgent', h > 0);
    }

    



    _reinitialiser() {
       
       
       
      this._choixVue = null;
      this._actives = null;
      this._cuis = null; this._activesAvantCuis = undefined;
      this._progJour = false;
      const bpj0 = this.querySelector('#vmProgJour');
      if (bpj0) { bpj0.classList.remove('is-on'); bpj0.setAttribute('aria-pressed', 'false'); }
      this._pmr = false;
      const bp0 = this.querySelector('#vmPmr');
      if (bp0) { bp0.classList.remove('is-on'); bp0.setAttribute('aria-pressed', 'false'); }
      this.querySelectorAll('.vm__cuisines button').forEach(x => { x.classList.remove('is-on'); x.setAttribute('aria-pressed', 'false'); });
      this._classe = null;
      this.querySelectorAll('.vm__f').forEach(x => { x.classList.add('is-on'); if (x.dataset.cat) x.setAttribute('aria-pressed','true'); });
      const r = this.querySelector('#vmRech'); if (r) { r.value = ''; this._chercher(''); }
      this._fermerFiche();
      this._fermerAutour();
      this._effacerTrace();
      const bd = this.querySelector('#vmBandeau'); if (bd) { bd.hidden = true; this._bandeauPoi = null; }
      this._tri = 'heure';
      this.querySelectorAll('.vm__tri button').forEach((x, n) => x.classList.toggle('on', n === 0));
      this._peupler();
      const v = (this._p.config.vues || [])[0];
      if (v && this._map) { this._allerVue(v.cle); this._choixVue = null; }
      this._appliquerFiltres();
    }

    _brancherUI() {
      


      const basculerRegimes = (e) => {
        e.stopPropagation(); e.preventDefault();
         
        const plus = e.currentTarget, boite = plus && this.querySelector('#' + plus.getAttribute('aria-controls'));
        if (!boite || !plus) return;
        const ouvert = boite.classList.toggle('is-ouvert');
        plus.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
        plus.textContent = ouvert ? '\u2212' : '+';
        if (boite.id === 'vmClasses') this._classesOuvertes = ouvert; else this._regimesOuverts = ouvert;
        this._appliquerFiltres();
      };
      this.querySelectorAll('.vm__fplus').forEach(p => {
        p.addEventListener('click', basculerRegimes);
        p.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') basculerRegimes(e); });
      });

      

      const marquerPastille = (x, on) => {
        x.classList.toggle('is-on', on);
        if (x.dataset.cat) x.setAttribute('aria-pressed', on ? 'true' : 'false');
      };
      this._marquerPastille = marquerPastille;
      















      this.querySelectorAll('.vm__f').forEach(b => b.addEventListener('click', () => {
        const cle = b.dataset.cat;
        if (cle === '__tout') this._actives = null;
        else if (!this._actives) this._actives = new Set([cle]);       
        else if (this._actives.has(cle)) {
          this._actives.delete(cle);
          if (!this._actives.size) this._actives = null;               
        } else this._actives.add(cle);
        if (this._mesure && cle !== '__tout') this._mesure.noter('filtre', cle);
        this._refletFiltres();
        this._appliquerFiltres();
         
        if (cle === 'tymal' && this._tymalAbsent && this._actives && this._actives.has('tymal')) this._bandeau('TyMal', this._t('absent'));
        



        if (this._actives) this._cadrerSurFiltre();
      }));

      




      const racine = this.querySelector('.vm');
      if (racine) racine.addEventListener('scroll', () => {
        if (racine.scrollTop || racine.scrollLeft) { racine.scrollTop = 0; racine.scrollLeft = 0; }
      }, { passive: true });

      const bb = this.querySelector('#vmProgBasc');
      if (bb) bb.addEventListener('click', () => this._basculerProg());
      this.querySelectorAll('.vm__jnav').forEach(b => b.addEventListener('click', () => this._changerJour(+b.dataset.j)));
       
       
       
      









      const bpa = this.querySelector('.vm__progall');
      if (bpa) bpa.addEventListener('click', () => {
        this._emit('vm-navigate', { url: bpa.getAttribute('href') || '' });
      });

      



      const hs = this.querySelector('#vmHeure');
      if (hs) hs.addEventListener('input', () => {
        this._heure = +hs.value;
        this._heureLibre = true;
        if (this._progAttente) return;
        this._progAttente = requestAnimationFrame(() => { this._progAttente = 0; this._rendreProg(); });
      });
      const bn = this.querySelector('#vmNow');
      if (bn) bn.addEventListener('click', () => this._revenirMaintenant());
      const bv = this.querySelector('#vmVue');
      if (bv) bv.addEventListener('click', () => this.basculerPlan());

      


      const fv = this.querySelector('#vmFeuilV');
      if (fv) fv.addEventListener('click', () => this._feuille(null));
      const ap = this.querySelector('#vmAccPlus');
      if (ap) ap.addEventListener('click', () => this._feuille('plus'));
      



      this.querySelectorAll('.vm__plusF [data-plus]').forEach(b => b.addEventListener('click', () => {
        const cible = { autour: '#vmAutour', horsligne: '#vmHL', plan: '#vmVue' }[b.dataset.plus];
        const vrai = cible && this.querySelector(cible);
        this._feuille(null);
        if (vrai) vrai.click();
      }));
      const av = this.querySelector('#vmAccVues');
      if (av) av.addEventListener('click', () => this._feuille('vues'));
      const af = this.querySelector('#vmAccFiltres');
      if (af) af.addEventListener('click', () => this._feuille('filtres'));
      


      const fok = this.querySelector('#vmFiltresOk');
      if (fok) fok.addEventListener('click', () => {
        const c = fok.dataset.vue;
        if (c) {
          const b = this.querySelector('.vm__niv[data-vue="' + c + '"]');
          if (b) { b.click(); return; }
        }
        this._feuille(null);
      });
      





      this.querySelectorAll('.vm__niv').forEach(b => b.addEventListener('click', () => {
        if (this._feuilleOuverte === 'vues') this._feuille(null);
      }));
      const px = this.querySelector('#vmProgX');
      if (px) px.addEventListener('click', () => {
        this._rangerProgramme(true);
        const p = this.querySelector('#vmProgRange');
        if (p) { try { p.focus({ preventScroll: true }); } catch (e) { p.focus(); } }
      });
      const pr = this.querySelector('#vmProgRange');
      if (pr) pr.addEventListener('click', () => {
        this._rangerProgramme(false);
        const x = this.querySelector('#vmProgX');
        if (x) { try { x.focus({ preventScroll: true }); } catch (e) { x.focus(); } }
      });
      

      this.querySelectorAll('.vm__classes button').forEach(b => b.addEventListener('click', () => {
        const k = b.dataset.classe;
        this._classe = this._classe === k ? null : k;
        this.querySelectorAll('.vm__classes button').forEach(x => {
          const on = x.dataset.classe === this._classe;
          x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        this._appliquerFiltres();
        if (this._classe) {
          const p = (this._p.pontons || []).find(x => !x.parent && x.classe === this._classe && this._ligneValide(x.trace, 2));
          if (p) { if (this._estEtroit()) this._feuille(null); this._allerPonton(p.id); this._ficheClasse(p); }
        }
        if (this._mesure) this._mesure.noter('filtre-classe', this._classe || 'aucune');
      }));
      


      this.querySelectorAll('#vmCuis button').forEach(b => b.addEventListener('click', () => {
        this._cuis = this._cuis || new Set();
        const k = b.dataset.cuis;
        if (this._cuis.has(k)) this._cuis.delete(k); else this._cuis.add(k);
        b.classList.toggle('is-on', this._cuis.has(k));
        b.setAttribute('aria-pressed', this._cuis.has(k) ? 'true' : 'false');
        











        if (this._cuis.size) {
          if (this._activesAvantCuis === undefined) this._activesAvantCuis = this._actives;
          this._actives = new Set(['restauration']);
        } else if (this._activesAvantCuis !== undefined) {
          this._actives = this._activesAvantCuis;
          this._activesAvantCuis = undefined;
        }
        this._refletFiltres();
        this._appliquerFiltres();
      }));

      



      const apercuDispo = (() => { try {
        return matchMedia('(hover:hover) and (pointer:fine)').matches &&
               !matchMedia('(prefers-reduced-motion:reduce)').matches;
      } catch (e) { return false; } })();
      if (apercuDispo) {
        this.querySelectorAll('.vm__f[data-cat]').forEach(b => {
          const cle = b.dataset.cat;
          if (cle === '__tout') return;
          b.addEventListener('mouseenter', () => this._apercuFamille(cle));
          b.addEventListener('mouseleave', () => this._apercuFamille(null));
        });
      }

      const bpmr = this.querySelector('#vmPmr');
      if (bpmr) bpmr.addEventListener('click', () => {
        this._pmr = !this._pmr;
        bpmr.classList.toggle('is-on', this._pmr);
        bpmr.setAttribute('aria-pressed', String(this._pmr));
        if (this._mesure) this._mesure.noter('filtre', 'accessible');
        this._appliquerFiltres();
         
        if (this._pmr) this._cadrerSurFiltre();
      });

      const bau = this.querySelector('#vmAutour');
      if (bau) bau.addEventListener('click', () => {
        this._autourFamille = null; this._autourEquip = ''; this._autourPhrase = '';
      }, true);
      if (bau) bau.addEventListener('click', () => {
        const v = this.querySelector('#vmAutourV');
        if (v && !v.hidden) this._fermerAutour(); else this._ouvrirAutour();
      });

      const hl = this.querySelector('#vmHL');
      if (hl) hl.addEventListener('click', async () => {
        if (this._horsLigneEnCours) { this._horsLigneEnCours = false; return; }    
        if (this._mesure) this._mesure.noter('hors-ligne', 'preparation');
        hl.classList.add('is-busy');
        const n = hl.querySelector('#vmHLn');
        const bilan = await this._preparerHorsLigne((pc) => { n.textContent = pc + '%'; });
        hl.classList.remove('is-busy');
        n.textContent = '';
        if (bilan.ok) {
          hl.classList.add('is-on');
          hl.title = this._t('horsLigneFait');
          this._bandeau(this._t('horsLigneFait'),
            bilan.faits + ' / ' + bilan.total + (bilan.ko ? ' · ' + bilan.ko + ' ko' : '') +
            (bilan.echecs ? ' · ' + bilan.echecs + ' non récupérées' : ''));
        }
      });

      const pj = this.querySelector('#vmProgJour');
      if (pj) pj.addEventListener('click', () => {
        this._progJour = !this._progJour;
        pj.classList.toggle('is-on', this._progJour);
        pj.setAttribute('aria-pressed', String(this._progJour));
        this._appliquerFiltres();
         
        if (this._progJour) this._cadrerSurFiltre();
      });

      const raz = this.querySelector('#vmRaz');
      if (raz) raz.addEventListener('click', () => this._reinitialiser());

      this.querySelectorAll('.vm__tri button').forEach(b => b.addEventListener('click', () => {
        this._tri = b.dataset.tri;
        this.querySelectorAll('.vm__tri button').forEach(x => x.classList.toggle('on', x === b));
        this._rendreProg();
      }));

      this.querySelectorAll('.vm__niv').forEach(b =>
        b.addEventListener('click', () => this._allerVue(b.dataset.vue)));
      this.querySelector('#vmGeo').addEventListener('click', () => this._localiser());
      this.querySelector('#vmVoile').addEventListener('click', e => { if (e.target.id === 'vmVoile') this._fermerFiche(); });

       
       
      this.querySelector('#vmBandeau').addEventListener('click', e => {
        if (e.target.closest('.vm__bx') || !this._bandeauPoi) return;
        const o = (this._p.poi || []).find(x => x.id === this._bandeauPoi);
        if (!o) return;
        


        const b = this.querySelector('#vmBandeau'); if (b) b.hidden = true;
        this._fiche(o);
      });

       
       
       
      if (this._onKey) document.removeEventListener('keydown', this._onKey);
      this._onKey = e => { if (e.key === 'Escape') this._fermerFiche(); };
      document.addEventListener('keydown', this._onKey);

      const rech = this.querySelector('#vmRech');
      rech.addEventListener('input', () => this._chercher(rech.value));
      





      rech.addEventListener('keydown', (e) => {
        const box = this.querySelector('#vmRes');
        if (!box || box.hidden) return;
        const l = [...box.querySelectorAll('button')];
        if (!l.length) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          const i = l.indexOf(this._rechActif);
          const j = e.key === 'ArrowDown'
            ? (i < 0 ? 0 : Math.min(l.length - 1, i + 1))
            : (i <= 0 ? 0 : i - 1);
          this._marquerResultat(l, j);
        } else if (e.key === 'Enter' && this._rechActif) {
          e.preventDefault();
          this._rechActif.click();
        } else if (e.key === 'Escape' && this._rechActif) {
          e.preventDefault();
          this._marquerResultat(l, -1);
        }
      });
      



      rech.addEventListener('blur', () => setTimeout(() => {
        if (this._rechPlein) return;
        const r = this.querySelector('#vmRes'); if (r) r.hidden = true;
      }, 160));
      const bt = this.querySelector('#vmRechBt'), bx = this.querySelector('#vmRechX');
      if (bt) bt.addEventListener('click', () => this._ouvrirRecherche(true));
      if (bx) bx.addEventListener('click', () => this._ouvrirRecherche(false));
      rech.addEventListener('focus', () => { if (this._tactile()) this._ouvrirRecherche(true); });
    }

    




    _brancherPropositions(box) {
      const ch = this.querySelector('#vmRech');
      box.querySelectorAll('[data-mot]').forEach(b => b.addEventListener('click', () => {
        ch.value = b.dataset.mot; this._chercher(ch.value);
      }));
      box.querySelectorAll('[data-cat]').forEach(b => b.addEventListener('click', () => {
        this._isolerFamille(b.dataset.cat); this._ouvrirRecherche(false);
      }));
    }
    









    _bornerResultats() {
      const vm = this.querySelector('.vm'), ch = this.querySelector('.vm__rech'),
            r = this.querySelector('#vmRes');
      if (!vm || !ch || !r) return;
       
       
      if (vm.classList.contains('est-etroit') && this._rechPlein) { r.style.maxHeight = ''; return; }
      const bas = vm.getBoundingClientRect().bottom, sous = ch.getBoundingClientRect().bottom;
      const place = Math.round(bas - sous - 16);
      r.style.maxHeight = place > 120 ? place + 'px' : '120px';
    }
    





    _rangerProgramme(range) {
      const vm = this.querySelector('.vm');
      if (!vm) return;
      this._progRange = !!range;
      vm.classList.toggle('a-progrange', this._progRange);
      const p = this.querySelector('#vmProgRange');
      if (p) p.hidden = !this._progRange;
      const a = this.querySelector('#vmProg');
      if (a) a.setAttribute('aria-hidden', this._progRange ? 'true' : 'false');
      

      const n = this.querySelector('#vmProgRangeNb');
      if (n) {
        const c = (this._p.animations || []).filter(x => x.date === this._jour).length;
        n.textContent = c ? String(c) : '';
        n.hidden = !c;
      }
       
      if (this._map) { try { this._map.resize(); } catch (e) {} }
       
      this._bornerResultats();
    }
    



    _direListeOuverte(on) {
      const ch = this.querySelector('#vmRech');
      if (ch) ch.setAttribute('aria-expanded', on ? 'true' : 'false');
    }
    






    









    









    _placerRecherche(enBarre) {
      const vm = this.querySelector('.vm'), z = this.querySelector('.vm__rech');
      if (!vm || !z) return;
      if (enBarre && z.parentElement !== vm) {
        if (!this._rechNid) { this._rechAncre = z.nextElementSibling; this._rechNid = z.parentElement; }
        vm.appendChild(z);
      } else if (!enBarre && this._rechNid && z.parentElement === vm) {
        this._rechNid.insertBefore(z, this._rechAncre || null);
      }
    }
    












    _placerNiveaux(dansFiltres) {
      const cible = this.querySelector('.vm__filtres'), n = this.querySelector('.vm__niveaux');
      if (!cible || !n) return;
      if (dansFiltres && n.parentElement !== cible) {
        if (!this._nivNid) { this._nivAncre = n.nextElementSibling; this._nivNid = n.parentElement; }
        cible.insertBefore(n, cible.firstChild);
      } else if (!dansFiltres && this._nivNid && n.parentElement === cible) {
        this._nivNid.insertBefore(n, this._nivAncre || null);
      }
    }
    _feuille(quoi) {
      const vm = this.querySelector('.vm');
      if (!vm) return;
      this._placerNiveaux(vm.classList.contains('est-etroit'));
      const meme = this._feuilleOuverte === quoi;
      this._feuilleOuverte = meme ? null : quoi;
      ['vues', 'filtres', 'plus'].forEach(n => vm.classList.toggle('a-f-' + n, this._feuilleOuverte === n));
      vm.classList.toggle('a-feuille', !!this._feuilleOuverte);
      const paire = { vues: '#vmAccVues', filtres: '#vmAccFiltres', plus: '#vmAccPlus' };
      Object.entries(paire).forEach(([n, sel]) => {
        const b = this.querySelector(sel);
        if (b) b.setAttribute('aria-expanded', this._feuilleOuverte === n ? 'true' : 'false');
      });
      

      if (this._feuilleOuverte && this._rechPlein) this._ouvrirRecherche(false);
    }
    


    _majCompteurFiltres() {
      const n = this.querySelector('#vmAccFiltresN');
      if (!n) return;
      let c = 0;
      if (this._actives) c += this._actives.size;
      if (this._pmr) c++;
      if (this._progJour) c++;
      if (this._cuis && this._cuis.size) c += this._cuis.size;
       
      const tout = (this._p.categories || []).length;
      if (this._actives && this._actives.size >= tout) c -= this._actives.size;
      n.textContent = c > 0 ? String(c) : '';
      n.hidden = c <= 0;
      const b = this.querySelector('#vmAccFiltres');
      if (b) b.classList.toggle('est-actif', c > 0);
    }
    _ouvrirRecherche(on) {
      const vm = this.querySelector('.vm'), ch = this.querySelector('#vmRech');
      const zone = this.querySelector('.vm__rech');
      if (!vm || !ch) return;
      








      

      const doigt = vm.classList.contains('est-etroit');
      if (!doigt) this._placerRecherche(!!on);
      this._rechPlein = !!on;
      vm.classList.toggle('a-rech', !!on);
      if (on) {
        this._chercher(ch.value);
        this._bornerResultats();
        try { ch.focus({ preventScroll: true }); } catch (e) { ch.focus(); }
      } else {
        ch.blur();
        const r = this.querySelector('#vmRes'); if (r) r.hidden = true;
      }
    }
    


    _recents(ajout) {
      let l = [];
      try { l = JSON.parse(localStorage.getItem('rdr-carte-recents') || '[]'); } catch (e) { l = []; }
      if (!Array.isArray(l)) l = [];
      if (ajout) {
        l = [ajout].concat(l.filter(x => x !== ajout)).slice(0, 5);
        try { localStorage.setItem('rdr-carte-recents', JSON.stringify(l)); } catch (e) {}
      }
      return l;
    }
    







    _propositions() {
      const ordre = ['toilettes', 'restauration', 'entrees', 'secours', 'boutiques',
                     'mobilite', 'parkings', 'animations', 'services'];
      const rac = ordre.filter(c => (this._p.categories || []).some(x => x.cle === c))
        .slice(0, 6).map(c => [c, c]);
      const rec = this._recents();
      





      const classes = [];
      (this._p.bateaux || []).forEach(b => {
        const l = b.classe && this._libClasse(b.classe);
        if (l && classes.indexOf(l) < 0) classes.push(l);
      });
      if (!rac.length && !rec.length && !classes.length) return '';
      return (rec.length ? '<p class="vm__resh">' + this._esc(this._t('recents')) + '</p>' +
          rec.map(t => '<button class="vm__resrec" data-mot="' + this._esc(t) + '">' +
            svg(IC.horloge) + this._esc(t) + '</button>').join('') : '') +
        (rac.length ? '<p class="vm__resh">' + this._esc(this._t('raccourcis')) + '</p>' +
          '<div class="vm__resrac">' + rac.map(([c]) => {
            const cat = this._cat(c);
            return '<button data-cat="' + this._esc(c) + '" style="--c:' + couleurSure(cat.couleur, C.teal) + '">' +
              svg(PICTO[cat.picto] || PICTO.star) + '<span>' + this._esc(this._libCat(cat)) + '</span></button>';
          }).join('') + '</div>' : '') +
        (classes.length ? '<p class="vm__resh">' + this._esc(this._t('flotteTitre')) + '</p>' +
          '<div class="vm__resrac">' + classes.slice(0, 6).map(l =>
            '<button data-mot="' + this._esc(l) + '" style="--c:' + C.teal + '">' +
            svg(PICTO.boat) + '<span>' + this._esc(l) + '</span></button>').join('') + '</div>' : '');
    }

    _emit(nom, detail) { try { this.dispatchEvent(new CustomEvent(nom, { detail, bubbles: true, composed: true })); } catch {} }

     
    






    _jours() { return [...new Set((this._p.animations || []).map(a => a.date))].filter(Boolean).sort(); }
    _min(hhmm) { const m = /^(\d{1,2}):(\d{2})/.exec(hhmm || ''); return m ? +m[1] * 60 + +m[2] : 0; }
    _dateCourte(iso) {
      const d = new Date(iso + 'T12:00:00');
      if (isNaN(d)) return iso;
      return d.toLocaleDateString(this._lang === 'en' ? 'en-GB' : 'fr-FR', { day: '2-digit', month: 'short' });
    }
    _dateLongue(iso) {
      const d = new Date(iso + 'T12:00:00');
      if (isNaN(d)) return iso;
      return d.toLocaleDateString(this._lang === 'en' ? 'en-GB' : 'fr-FR',
        { weekday: 'long', day: 'numeric', month: 'long' });
    }
    _hhmm(min) { return String(Math.floor(min / 60)).padStart(2, '0') + ':' + String(min % 60).padStart(2, '0'); }

    _peupler() {
      const js = this._jours();
      if (!js.length) { this.querySelector('#vmProg').hidden = true; return; }
       
      const now = parisJourHeure();
      this._aujourdhui = js.includes(now.jour) ? now.jour : null;
      this._jour = this._aujourdhui || js[0];
      this._heure = this._aujourdhui ? now.minutes : this._premiereHeure();
      this._rendreProg();
      this._appliquerFiltres();
       
       
      requestAnimationFrame(() => { const vm = this.querySelector('.vm'); if (vm) vm.classList.add('a-prgprete'); });
    }
     
     
    _premiereHeure() {
      const a = (this._p.animations || []).filter(x => x.date === this._jour).map(x => this._min(x.debut));
      return a.length ? Math.max(480, Math.min(...a)) : 660;
    }
    _changerJour(d) {
      const js = this._jours(), i = js.indexOf(this._jour) + d;
      if (i < 0 || i >= js.length) return;
      this._jour = js[i];
       
       
      setTimeout(() => this._appliquerFiltres(), 0);
      this._heure = this._jour === this._aujourdhui ? parisJourHeure().minutes : this._premiereHeure();
      this._rendreProg();
    }
     
     
    _revenirMaintenant() {
      if (!this._aujourdhui) return;
      this._jour = this._aujourdhui;
      this._heureLibre = false;
      this._heure = parisJourHeure().minutes;
      this._rendreProg();
    }
    

    _basculerProg(force) {
      const vm = this.querySelector('.vm'), b = this.querySelector('#vmProgBasc');
      if (!vm || !b) return;
      const ouvert = typeof force === 'boolean' ? force : !vm.classList.contains('a-prog');
      vm.classList.toggle('a-prog', ouvert);
      b.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
      const t = this.querySelector('#vmProgBascT');
      if (t) t.textContent = this._t(ouvert ? 'progReduire' : 'progTitre');
    }

     
     
    _amenerDansLaListe(el, liste, doux) {
      const haut = el.offsetTop - liste.offsetTop;
      const bas = haut + el.offsetHeight;
      let y = liste.scrollTop;
      if (haut < y) y = haut;
      else if (bas > y + liste.clientHeight) y = bas - liste.clientHeight;
      if (y === liste.scrollTop) return;
      if (doux && liste.scrollTo) liste.scrollTo({ top: y, behavior: 'smooth' });
      else liste.scrollTop = y;
    }

    





    _majHeure() {
      const e = (this._p.poi || []).map(o => {
        const x = this._etatOuverture(o, this._jour, this._heure);
        return x ? x.etat.charAt(0) : '-';
      }).join('');
      if (e !== this._empreinteOuv) { this._empreinteOuv = e; if (this._reposer) this._reposer(); }
      this._majNuit();
    }
    



    _battreHeure() {
      clearInterval(this._batt);
      this._batt = setInterval(() => {
        if (!this.isConnected) { clearInterval(this._batt); return; }
        const p = parisJourHeure();
        if (this._jour !== this._aujourdhui || this._heure === p.minutes) return;
        if (this._heureLibre) return;    
        this._heure = p.minutes;
        this._rendreProg();
      }, 60000);
    }
    _rendreProg() {
      




      this._majHeure();
      if (!this.querySelector('#vmJour')) return;
      const d = new Date(this._jour + 'T12:00:00');
      this.querySelector('#vmJour').textContent = d.toLocaleDateString(this._lang === 'en' ? 'en-GB' : 'fr-FR',
        { weekday: 'short', day: '2-digit', month: 'short' }).toUpperCase();

      const h = this._heure;
      const curseur = this.querySelector('#vmHeure');
      if (curseur) curseur.value = h;
      const val = this.querySelector('#vmHeureV');
      if (val) val.textContent = this._hhmm(h);
      const bnow = this.querySelector('#vmNow');
      if (bnow) bnow.hidden = !this._aujourdhui;

      



      const tri = this._tri || 'heure';
      const list = (this._p.animations || []).filter(a => a.date === this._jour)
        .sort((a, b) => {
          if (tri === 'lieu') {
            const la = (this._lieuDe(a.poiId) || {}).nom || 'zzz';
            const lb = (this._lieuDe(b.poiId) || {}).nom || 'zzz';
            if (la !== lb) return la.localeCompare(lb, 'fr');
          } else if (tri === 'type') {
            const ta = a.cat || 'zzz', tb = b.cat || 'zzz';
            if (ta !== tb) return ta.localeCompare(tb, 'fr');
          }
          return a.debut.localeCompare(b.debut);
        });
       
       
      let precedent = null;
      const intertitre = (a) => {
        if (tri === 'heure') return '';
        



        const v = tri === 'lieu'
          ? ((this._lieuDe(a.poiId) || {}).nom || '—')
          : (a.catLib || (a.cat || '—').replace(/-/g, ' '));
        if (v === precedent) return '';
        precedent = v;
        return '<div class="vm__inter">' + this._esc(v) + '</div>';
      };

       
       
       
      const relatif = a => { const d0 = this._min(a.debut), f = this._min(a.fin);
        return h >= f ? 'passe' : (h >= d0 ? 'encours' : 'avenir'); };
      






      const reel = parisJourHeure().jour;
      const etat = a => this._jour === reel ? relatif(a) : (this._jour < reel ? 'passe' : 'avenir');
      const enCours = list.filter(a => etat(a) === 'encours');
      this._poiActifs = list.filter(a => relatif(a) === 'encours').map(a => a.poiId).filter(Boolean);
      

      



      const nb = this.querySelector('#vmProgNb');
      if (nb) { nb.hidden = !enCours.length; nb.textContent = String(enCours.length);
        nb.setAttribute('aria-label', enCours.length + ' ' + this._t('nbEnCours'));
        nb.title = enCours.length + ' ' + this._t('nbEnCours'); }
       
       
      this._ajusterPoignee();

      this.querySelector('#vmProgList').innerHTML = list.map(a => {
        const poi = this._lieuDe(a.poiId);
         
         
        const teinte = poi ? this._cat(poi.cat).couleur : C.teal;
        const e = etat(a);
         
         
        const st = a.statut && a.statut !== 'ouvert' ? a.statut : null;
        return intertitre(a) +
          '<article class="vm__ev is-' + e + (st ? ' st-' + st : '') + '" data-an="' + this._esc(a.id) + '" style="--c:' + couleurSure(teinte, C.teal) + '">' +
          '<div class="vm__evh">' + this._esc(a.debut) + ' › ' + this._esc(a.fin) +
            (st ? '<em class="vm__statut">' + this._esc(this._t('st' + st.charAt(0).toUpperCase() + st.slice(1)) || st) + '</em>' : '') +
            (e === 'encours' && !st ? '<em class="vm__direct">' + this._esc(this._t('enCours')) + '</em>' : '') + '</div>' +
          '<h4>' + this._esc(a.titre) + '</h4>' +
          (a.desc ? '<p>' + this._esc(a.desc) + '</p>' : '') +
          (poi ? '<span class="vm__evlieu">' + svg(IC.lieu, 'vm__evico') + this._esc(poi.nom) + '</span>' : '') +
          '</article>';
      }).join('') || '<p class="vm__vide">' + this._esc(this._t('rienA')) + '</p>';

      this.querySelectorAll('.vm__ev').forEach(e => {
        e.addEventListener('click', () => this._ouvrirAnimation(e.dataset.an));
         
        e.addEventListener('mouseenter', () => {
          const a = (this._p.animations || []).find(x => x.id === e.dataset.an);
          this._echoLieu(a && a.poiId);
        });
        e.addEventListener('mouseleave', () => this._echoLieu(null));
      });
       
       
      




      const cible = this.querySelector('.vm__ev.is-encours') || this.querySelector('.vm__ev.is-avenir');
      const liste = this.querySelector('#vmProgList');
      if (cible && liste && cible.offsetParent) this._amenerDansLaListe(cible, liste, false);
      this._majActifs();
       
       
      if (this._calerAttribution) this._calerAttribution();
    }

    



    











    _majActifs() {
      if (!this._prete) return;
      const ids = this._poiActifs || [];
      this._halos = this._halos || new Map();

      for (const [id, mk] of this._halos) {
        if (!ids.includes(id)) { mk.remove(); this._halos.delete(id); }
      }
      for (const id of ids) {
        if (this._halos.has(id)) continue;
        const o = (this._p.poi || []).find(x => x.id === id);
        if (!o) continue;
        const c = this._estSurface(o) || this._estTrace(o) ? this._centre(o) : [+o.lng, +o.lat];
        if (!this._estPoint(c)) continue;    
        this._halos.set(id, new maplibregl.Marker({ element: enveloppe('vm__pulse') }).setLngLat(c).addTo(this._map));
      }
    }
    



     
     
     
     
    _carteStandSurvol(id) {
      this.querySelectorAll('.vm__logo--stand.est-survol').forEach(e => e.classList.remove('est-survol'));
      if (!id) return;
      const e = this.querySelector('.vm__logo--stand[data-poi="' + String(id).replace(/"/g, '') + '"]');
      if (e) e.classList.add('est-survol');
    }
    _carteStandActive(id) {
      this.querySelectorAll('.vm__logo--stand.est-actif').forEach(e => e.classList.remove('est-actif'));
      if (!id) return;
      const e = this.querySelector('.vm__logo--stand[data-poi="' + String(id).replace(/"/g, '') + '"]');
      if (e) e.classList.add('est-actif');
    }
    _mettreEnAvant(o) {
      this._retirerAvant();
      if (!this._map || !this._prete || !o) return;
      






      const c = (this._estSurface(o) || o.stand || this._estTrace(o)) ? this._centre(o) : [+o.lng, +o.lat];
      if (!this._estPoint(c)) return;
      this._avantObj = o;
      this._carteStandActive(o && o.stand ? o.id : null);
      









      if (!(o && o.amer === true)) {
        this._avant = new maplibregl.Marker({ element: enveloppe('vm__cible') }).setLngLat(c).addTo(this._map);
      }
      this._majReperes();
    }
    _retirerAvant() { if (this._avant) { this._avant.remove(); this._avant = null; } this._avantObj = null;
      this._carteStandActive(null); }

    










    _tailleIcone() {
      const z = this._map ? this._map.getZoom() : 15.5;
      const p = [[13, .72], [15.5, 1.02], [17.5, 1.24]];
      let s = p[p.length - 1][1];
      if (z <= p[0][0]) s = p[0][1];
      else for (let k = 1; k < p.length; k++) {
        if (z > p[k][0]) continue;
        const [z0, s0] = p[k - 1], [z1, s1] = p[k];
        s = s0 + (s1 - s0) * (z - z0) / (z1 - z0);
        break;
      }
      return 28 * s;    
    }
    



     
     
     
    _estPose(id) {
      if (!this._map || id == null) return true;
      return ['poi', 'surf', 'trace'].some(nom => {
        const src = this._map.getSource(nom);
        const d = src && src._data;
        return !!(d && d.features && d.features.some(f => f.properties && f.properties.id === id));
      });
    }
    _majReperes() {
      if (!this._map || !this._prete) return;
      const t = this._tailleIcone();
      const poser = (mk, o, d) => {
        const el = mk && mk.getElement && mk.getElement();
        if (!el) return;
        const bague = el.firstElementChild;
        if (bague) {
          bague.style.width = d + 'px'; bague.style.height = d + 'px';
          bague.style.margin = (-d / 2) + 'px 0 0 ' + (-d / 2) + 'px';
        }
        







        el.style.visibility = (!o || this._estPose(o.id)) ? '' : 'hidden';
      };
       
       
      if (this._avant) poser(this._avant, this._avantObj, Math.round(t + 11));
      if (this._halos) this._halos.forEach((mk, id) => poser(mk, (this._p.poi || []).find(x => x.id === id), Math.round(t * .8)));
    }
    _viderHalos() {
      if (!this._halos) return;
      this._halos.forEach(m => m.remove());
      this._halos.clear();
    }

     
     
     
     
     
     
    _bandeau(titre, sous, poiId) {
      if (this._atelier) return;
      const b = this.querySelector('#vmBandeau');
      this._bandeauPoi = poiId || null;
      b.classList.toggle('vm__bandeau--ouvrable', !!poiId);
      b.innerHTML = '<strong>' + this._esc(titre) + '</strong>' + (sous ? '<span>' + this._esc(sous) + '</span>' : '') +
        '<button class="vm__bx" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button>';
      b.hidden = false;
      b.querySelector('.vm__bx').addEventListener('click', e => {
        e.stopPropagation();
        b.hidden = true;
        this._bandeauPoi = null;
      });
    }
    





    _tactile() {
      return typeof matchMedia === 'function' && matchMedia('(hover:none)').matches;
    }
    



    _ouvrirPoi(id, sansCadrer) {
      const rejoue = this._apercuTouche === id &&
        (Date.now() - (this._apercuT0 || 0)) < 260;
      if (this._tactile() && !this._atelier && (this._apercuTouche !== id || rejoue)
          && (this._p.poi || []).some(o => o.id === id)) {
        const o = (this._p.poi || []).find(x => x.id === id);
        this._apercuTouche = id;
        this._apercuT0 = Date.now();
        




        if (o && o.stand && this._ligneValide(o.polygone, 3) && this._map) {
          const lg = o.polygone.map(p => p[0]), lt = o.polygone.map(p => p[1]);
          this._map.fitBounds([[Math.min(...lg), Math.min(...lt)], [Math.max(...lg), Math.max(...lt)]],
            { padding: 70, maxZoom: 20.8, duration: 700 });
        }
        this._survolCarte(id);
        this._apercuLieu(o, this._map ? this._map.project(this._centre(o)) : { x: 0, y: 0 });
         
        this._apercuVise = { k: 'poi', id: id };
        this._mettreEnAvant(o);
        return;
      }
      this._apercuTouche = null;
      

      if (this._atelier) return;
       
       
      if (!(this._p.poi || []).some(o => o.id === id) &&
          (this._p.pontons || []).some(p => p.id === id)) { this._allerPonton(id); return; }
      const o = (this._p.poi || []).find(x => x.id === id);
      if (!o) return;
      this._poiOuvert = id;
      






      const aUnPoint = Number.isFinite(o.lng) && Number.isFinite(o.lat);
      const trace = Array.isArray(o.trace) && o.trace.length > 1 ? o.trace : null;
      






      if (sansCadrer) {   }
      else if (this._map && o.stand && this._ligneValide(o.polygone, 3)) {
        const lg = o.polygone.map(p => p[0]), lt = o.polygone.map(p => p[1]);
        this._map.fitBounds([[Math.min(...lg), Math.min(...lt)], [Math.max(...lg), Math.max(...lt)]],
          { padding: this._estEtroit() ? 70 : 200, maxZoom: 20.8, duration: 700 });
      } else if (this._map && aUnPoint) {
        





        const cadrerPoint = () => {
          const fiche = this.querySelector('#vmFiche');
          const h = this._estEtroit() && fiche ? fiche.offsetHeight : 0;
          const dy = h ? Math.min(Math.round(h / 2), Math.max(0, Math.round(this.clientHeight / 2) - 96)) : 0;
          this._map.easeTo({ center: [o.lng, o.lat], zoom: this._zoomPourVoir(o, 17), offset: [0, -dy], duration: 550 });
        };
        this._cadrerApresFiche = cadrerPoint;
      } else if (this._map && trace) {
        const lng = trace.map(c => c[0]), lat = trace.map(c => c[1]);
        this._map.fitBounds([[Math.min(...lng), Math.min(...lat)], [Math.max(...lng), Math.max(...lat)]],
          { padding: this._paddingVolets(), duration: 700 });
      }
      this._mettreEnAvant(o);
      




      this._fermerApercu();
      this._fiche(o);
       
      if (this._cadrerApresFiche) { const f = this._cadrerApresFiche; this._cadrerApresFiche = null; f(); }
      if (this._mesure) this._mesure.noter('poi', id);
      this._emit('vm-poi', { id });
    }
    









    _rafraichirFiche() {
       
       
      if (this._refiche) return;
      



      if (this._batiOuvert) {
        const voile0 = this.querySelector('#vmVoile');
        if (voile0 && voile0.hidden) { this._batiOuvert = null; return; }
        const id = this._batiOuvert;
        const dedans = this._contenuDe(id)
          .filter(o => this._garde({ cat: o.cat, c: this._centre(o), o }));
        this._refiche = true;
        try { if (dedans.length > 1) this._ouvrirContenu(id, dedans); }
        catch (e) { this._incident('rafraîchir le bâtiment', e); }
        this._refiche = false;
        return;
      }
      if (!this._poiOuvert) return;
      



      const voile = this.querySelector('#vmVoile');
      if (voile && voile.hidden) return;
      const o = (this._p.poi || []).find(x => x.id === this._poiOuvert);
      if (!o || !this.querySelector('#vmFiche')) return;
      this._refiche = true;
      try { this._fiche(o, true); } catch (e) { this._incident('rafraîchir la fiche', e); }
      this._refiche = false;
    }
    


    _fiche(o, silencieux) {
       
       
      if (!silencieux) {
        if (this._mesure) this._mesure.noter('fiche', o.id);
        this._noterFil('poi', o.id, o.nom);
      }
      const c = this._cat(o.cat);
      const anims = (this._p.animations || []).filter(a => a.poiId === o.id);
      






      const galerie = (Array.isArray(o.galerie) ? o.galerie : []).map(u => urlSure(u)).filter(Boolean);
      const vues = [urlSure(o.photo)].concat(galerie).filter((u, k, t) => u && t.indexOf(u) === k);
      const bandeVues = vues.length > 1
        ? '<div class="vm__fgal" role="group" aria-label="' + escAttr(this._t('photos') || 'Photos') + '">' +
            vues.map((u, k) => '<button type="button" class="vm__fgv' + (k === 0 ? ' est-active' : '') + '" data-vue="' + k + '"' +
              ' aria-label="' + escAttr((this._t('photos') || 'Photos') + ' ' + (k + 1) + '/' + vues.length) + '">' +
              '<img src="' + this._esc(vignette(u, 96, 72)) + '" alt="" loading="lazy"' + this._repli('', true) + '></button>').join('') +
          '</div>'
        : '';
      this.querySelector('#vmFiche').innerHTML =
        '<button class="vm__fx" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button>' +
        (vues[0] ? '<img class="vm__fimg" src="' + this._esc(vues[0]) + '" alt="" loading="eager" decoding="async"' + this._repli('') + '>' : '') +
        '<div class="vm__fbody">' +
          bandeVues +
          (urlSure(o.logo) ? '<img class="vm__flogo" src="' + this._esc(vignette(urlSure(o.logo), 64)) + '" alt=""' + this._repli('') + '>' : '') +
          '<span class="vm__fcat" style="--c:' + couleurSure(c.couleur) + '">' + svg(PICTO[c.picto] || PICTO.star, 'vm__fic') + this._esc(this._libCat(c)) + '</span>' +
          















          

          (() => { const a = this._acces(o);
            return a ? '<span class="vm__facces is-' + a.replace('acces', '').toLowerCase() + '">' +
              svg(PICTO.sortie || PICTO.door, 'vm__fic') + this._esc(this._t(a)) + '</span>' : ''; })() +
          (o.pmr ? '<button type="button" class="vm__fpmrb" title="' + escAttr(this._t('pmr')) + '">' +
            svg(PICTO.pmr, '') + '<span class="vm__fpmrt">' +
            this._esc(this._t('pmrCourt') || 'Accessible PMR') + '</span></button>' : '') +
          




          '<h3>' + this._esc(o.stand ? (o.exposant || this._t('standLibre')) : o.nom) + '</h3>' +
          (o.stand && o.nom ? '<p class="vm__fh">' + svg(IC.lieu, 'vm__fico') +
            '<b>' + this._esc(this._t('emplacement')) + '</b><span>' + this._esc(o.nom) +
            (o.aire ? ' · ' + o.aire + ' m²' : '') + '</span></p>' : '') +
          






          (o.sousCat && sansAccent(o.sousCat) !== sansAccent(o.nom)
            ? '<p class="vm__fsous">' + this._esc(o.sousCat) + '</p>' : '') +
          this._ligneBarrage(o) +
          this._ligneHoraire(o) +
          (o.dates ? '<p class="vm__fh">' + svg(IC.horloge, 'vm__fico') + this._esc(this._t('dates')) + ' ' + this._esc(o.dates) + '</p>' : '') +
          (o.desc ? '<p>' + this._esc(o.desc) + '</p>' : '') +
          (o.adresse ? '<p class="vm__fh">' + svg(IC.lieu, 'vm__fico') + this._esc(o.adresse) + '</p>' : '') +
           
           
          








          













          


          (() => { const eq = this._equipements(o).filter(e => e.cle !== 'pmr');
            return eq.length
              ? '<ul class="vm__feq">' + eq.map(e =>
                  '<li><span>' + svg(PICTO[e.picto] || PICTO.star, '') + '</span>' +
                  this._esc(this._libEquip(e)) + '</li>').join('') + '</ul>'
              : ''; })() +
          


          (o.statut === 'accredite' ? '<p class="vm__falerte">' + this._esc(this._t('accredite')) + '</p>' :
            (o.statut && o.statut !== 'ouvert'
              ? '<p class="vm__falerte">' + this._esc(this._t('st' + o.statut.charAt(0).toUpperCase() + o.statut.slice(1)) || o.statut) + '</p>'
              : '')) +
          (o.infos ? '<p class="vm__finfos"><b>' + this._esc(this._t('infos')) + '</b> ' + this._esc(o.infos) + '</p>' : '') +
           
           
          ((o.cuisine || []).length ? '<p class="vm__cuis"><b>' + this._esc(this._t('cuisine')) + '</b>' +
            o.cuisine.filter(k => CUISINES[k]).map(k => '<span>' + svg(CUISINES[k].picto, 'vm__cico') +
              this._esc(this._lang === 'en' ? CUISINES[k].libelleEn : CUISINES[k].libelle) + '</span>').join('') + '</p>' : '') +
          (urlSure(o.lienExterne) ? '<a class="vm__flien" href="' + this._esc(urlSure(o.lienExterne)) + '" target="_blank" rel="noopener noreferrer">' +
            this._esc(this._t('enSavoir')) + '</a>' : '') +
          







          '</div>' +
          (anims.length ? '<div class="vm__fanims"><h4>' + this._esc(this._t('prog')) + '</h4>' + anims.map(a =>
            '<button class="vm__fan" data-an="' + this._esc(a.id) + '"><b>' + this._esc(a.debut) + '</b>' +
             
             
            '<span>' + this._esc(a.titre) + '</span>' +
            







            (a.statut && a.statut !== 'ouvert'
              ? '<em class="vm__fanst st-' + this._esc(a.statut) + '">' +
                this._esc(this._t('st' + a.statut.charAt(0).toUpperCase() + a.statut.slice(1)) || a.statut) +
                '</em>' : '') +
            (a.date && a.date !== this._jour ? '<i>' + this._esc(this._dateCourte(a.date)) + '</i>' : '') +
            '</button>').join('') + '</div>' : '') +
           
           
           
           
          '<ul class="vm__opts">' +
            (this._estPoint(this._centre(o))
              ? '<li><a class="vm__opt vm__fgo" href="https://www.google.com/maps/dir/?api=1&destination=' +
                  encodeURIComponent(this._centre(o)[1] + ',' + this._centre(o)[0]) + '" target="_blank" rel="noopener noreferrer">' +
                  '<span class="vm__opti est-fort">' + svg(IC.chemin, '') + '</span>' +
                  '<span class="vm__optt"><b>' + this._esc(this._t('yaller')) + '</b>' +
                  '<em>' + this._esc(this._t('volDOiseau') || 'Itinéraire') + '</em></span>' +
                  svg(IC.chevronD, 'vm__optc') + '</a></li>'
              : '') +
            '<li><button class="vm__opt vm__fpart" data-part-cle="poi" data-part-id="' + this._esc(o.id) + '">' +
              '<span class="vm__opti">' + svg(IC.partage, '') + '</span>' +
              '<span class="vm__optt"><b>' + this._esc(this._t('partager')) + '</b></span>' +
              svg(IC.chevronD, 'vm__optc') + '</button></li>' +
             
            this._boutonRetour('') +
          '</ul>' +
        '</div>';
      this._ouvrirPanneau();
      this.querySelector('.vm__fx').addEventListener('click', () => this._fermerFiche());
      this.querySelectorAll('.vm__fan').forEach(b => b.addEventListener('click', () => this._ouvrirAnimation(b.dataset.an)));
      const rt = this.querySelector('#vmRetour');
      if (rt) rt.addEventListener('click', () => this._retourFil());
      const bp = this.querySelector('.vm__fpart');
      if (bp) bp.addEventListener('click', () => this._partager(o.nom, bp.dataset.partCle, bp.dataset.partId));
      

      this.querySelectorAll('.vm__fgv').forEach(b => b.addEventListener('click', () => {
        const grande = this.querySelector('#vmFiche .vm__fimg');
        const u = vues[+b.dataset.vue];
        if (!grande || !u) return;
        grande.src = u;
        this.querySelectorAll('.vm__fgv').forEach(x => x.classList.toggle('est-active', x === b));
      }));
      









      const ba = this.querySelector('.vm__fpmrb');
      if (ba) ba.addEventListener('click', () => {
        const on = !ba.classList.contains('est-ouvert');
        ba.classList.toggle('est-ouvert', on);
        ba.setAttribute('aria-expanded', on ? 'true' : 'false');
      });
    }
    


    













    _estFeuille() {
      try { return window.matchMedia('(max-width:820px)').matches; } catch (e) { return false; }
    }

    










    _noterFil(k, id, titre) {
      if (!this._filPanneau) this._filPanneau = [];
      const e = this._ecranPanneau;
      if (e && !(e.k === k && e.id === id)) this._filPanneau.push(e);
      if (this._filPanneau.length > 12) this._filPanneau.shift();
      this._ecranPanneau = { k: k, id: id, titre: titre || '' };
    }
    _retourFil() {
      const p = (this._filPanneau || []).pop();
      if (!p) return false;
       
       
      this._ecranPanneau = null;
      if (p.k === 'poi') this._ouvrirPoi(p.id);
      else if (p.k === 'an') this._ouvrirAnimation(p.id);
      else if (p.k === 'bateau') this._allerBateau(p.id);
      else return false;
      return true;
    }
     
     
    _boutonRetour(repli) {
      





      const fil = this._filPanneau || [];
      const p = fil[fil.length - 1];
      const lib = p && p.titre
        ? (this._t('retourVers') || 'Retour à') + ' ' + p.titre
        : (repli || this._t('retourProg'));
      if (!p && !repli) return '';
      





      return '<li><button class="vm__opt vm__retour" id="vmRetour" data-fil="' + (p ? '1' : '') + '"' +
        ' title="' + escAttr(lib) + '" aria-label="' + escAttr(lib) + '">' +
        '<span class="vm__opti">' + svg(IC.chevronG, '') + '</span>' +
        '<span class="vm__optt"><b>' + this._esc(lib) + '</b></span></button></li>';
    }
    







    _suiteDuProgramme(a) {
      const suite = (this._p.animations || [])
        .filter(x => x.poiId === a.poiId && x.id !== a.id && x.date === a.date)
        .sort((x, y) => String(x.debut).localeCompare(String(y.debut)));
      if (!suite.length) return '';
      return '<div class="vm__fanims"><h4>' + this._esc(this._t('suite') || 'À suivre ici') + '</h4>' +
        suite.map(x => '<button class="vm__fan" data-an="' + this._esc(x.id) + '">' +
          '<b>' + this._esc(x.debut) + '</b><span>' + this._esc(x.titre) + '</span></button>').join('') +
        '</div>';
    }
    









    _ageTymal(maj) {
      const t = Date.parse(maj);
      if (!isFinite(t)) return null;
      const min = Math.max(0, Math.round((Date.now() - t) / 60000));
      return { min: min, vieux: min > 60 };
    }
    



    _ficheTymal(t) {
      if (!t) return;
      const n = this.querySelector("#vmTymalP");
      if (!n) return;
      const a = this._ageTymal(t.maj);
      const depuis = !a ? "" : a.min < 1 ? this._t("tymalMaintenant")
        : a.min < 60 ? this._t("tymalDepuis").replace("{n}", a.min)
        : this._t("tymalDepuisH").replace("{n}", Math.round(a.min / 60));
      n.innerHTML =
        '<span class="vm__typic">' + svg(PICTO.tymal, "") + '</span>' +
        '<span class="vm__tytxt">' +
          '<b>TyMal</b>' +
          (depuis ? '<i class="vm__tyou' + (a.vieux ? " est-vieux" : "") + '">' +
            this._esc(this._t("tymalIci")) + " " + this._esc(depuis) + '</i>' : "") +
          (t.prochainLieu ? '<em>' + this._esc(this._t("prochain")) + " : " +
            this._esc(t.prochainLieu) + '</em>' : "") +
          (a && a.vieux ? '<u>' + this._esc(this._t("tymalIncertain")) + '</u>' : "") +
        '</span>' +
        '<button class="vm__tyx" type="button" aria-label="' + this._esc(this._t("fermer")) + '">' + svg(IC.fermer) + '</button>';
      n.hidden = false;
      n.querySelector(".vm__tyx").addEventListener("click", () => { n.hidden = true; });
       
       
      if (this._map && this._estPoint([+t.lng, +t.lat])) {
        this._map.easeTo({ center: [+t.lng, +t.lat], zoom: Math.max(this._map.getZoom(), 17), duration: 600 });
      }
    }
    _ouvrirPanneau() {
      const v = this.querySelector('#vmVoile');
      if (!v) return;
      this._selectionnerBateau(null);
      


      const vm0 = this.querySelector('.vm'); if (vm0) vm0.classList.add('a-fiche');
      this._focusAvant = document.activeElement;
      const modal = this._estFeuille();
      this._panneauModal = modal;
      v.setAttribute('role', modal ? 'dialog' : 'region');
      if (modal) v.setAttribute('aria-modal', 'true'); else v.removeAttribute('aria-modal');
      v.hidden = false;
       
      const vm = this.querySelector('.vm');
      if (modal && vm) Array.prototype.forEach.call(vm.children, n => {
        if (n === v) return;
        if ('inert' in n) n.inert = true; else n.setAttribute('aria-hidden', 'true');
        n.dataset.vmInerte = '1';
      });
      const cible = v.querySelector('.vm__fx') || v;
      try { cible.focus({ preventScroll: true }); } catch (e) { cible.focus(); }
    }
    _fermerFiche() {
      const v = this.querySelector('#vmVoile'); if (v) v.hidden = true;
      const vm0 = this.querySelector('.vm'); if (vm0) vm0.classList.remove('a-fiche');
      







      this._poiOuvert = null;
       
       
      this._batiOuvert = null;
      const vm = this.querySelector('.vm');
      if (vm) Array.prototype.forEach.call(vm.children, n => {
        if (!n.dataset || n.dataset.vmInerte !== '1') return;
        if ('inert' in n) n.inert = false; else n.removeAttribute('aria-hidden');
        delete n.dataset.vmInerte;
      });
      





      this._filPanneau = [];
      this._ecranPanneau = null;
      const r = this._focusAvant;
      this._focusAvant = null;
      if (r && r.isConnected && typeof r.focus === 'function') {
        try { r.focus({ preventScroll: true }); } catch (e) { r.focus(); }
      }
      this._retirerAvant();
      this._selectionnerBateau(null);
    }

    


















    _replierAttribution() {
      const a = this.querySelector('.maplibregl-ctrl-attrib');
      if (!a) return;
      












      const vm = this.querySelector('.vm');
      if (vm && a.parentElement !== vm) {
        a.classList.add('vm__attrib');
        vm.appendChild(a);
      }
      





      







      const caler = () => {
        const v = this.querySelector('.vm');
        if (!v) return;
        const cadre = v.getBoundingClientRect();
        




        





        if (v.classList.contains('est-etroit')) {
          a.style.top = '';
          a.style.bottom = '';
          return;
        }
        a.style.top = '';
        const bord = cadre.bottom;
        








        const vise = { droite: cadre.right - 6, bas: bord - 6, cote: 44 };
        const gauche = vise.droite - vise.cote, sommet = vise.bas - vise.cote;
        let haut = 0;
        


        ['#vmProg', '.vm__filtres', '.vm__bandeau', '.vm__cta'].forEach(sel => {
          this.querySelectorAll(sel).forEach(e => {
            const r = e.getBoundingClientRect();
            if (!r.width || !r.height) return;
            const s = getComputedStyle(e);
            if (s.display === 'none' || s.visibility === 'hidden') return;
            if (r.right <= gauche || r.left >= vise.droite ||
                r.bottom <= sommet || r.top >= vise.bas) return;    
            haut = Math.max(haut, bord - r.top);
          });
        });
        a.style.bottom = haut ? Math.max(6, Math.round(haut) + 8) + 'px' : '';
      };
      






      const soigner = () => {
        const inner = a.querySelector('.maplibregl-ctrl-attrib-inner') || a;
        if (!inner || inner.dataset.vmSoigne === inner.innerHTML) return;
        if (inner.innerHTML.indexOf('|') < 0) { inner.dataset.vmSoigne = inner.innerHTML; return; }
        


        inner.innerHTML = inner.innerHTML
          .split(/\s*\|\s*/).join(' <span class="vm__attsep" aria-hidden="true">·</span> ');
        inner.dataset.vmSoigne = inner.innerHTML;
      };
      this._calerAttribution = () => { soigner(); caler(); };
      soigner();
      caler();
      const replier = () => { a.classList.remove('maplibregl-compact-show'); soigner(); caler(); };
      replier();
      

      if (!this._attribCablee && this._map) {
        this._attribCablee = true;
        this._map.on('movestart', replier);
        this._map.on('zoomstart', replier);
      }
    }

     
     
    _alertePlan(msg) {
      if (this._planSignale) return;
      this._planSignale = true;
      const b = this.querySelector('#vmCarte');
      if (!b) return;
      const d = document.createElement('div');
      d.className = 'vm__alerte';
      d.textContent = msg;
      b.appendChild(d);
    }

    _ouvrirAnimation(id) {
      if (this._atelier) return;
      const a = (this._p.animations || []).find(x => x.id === id);
      if (!a) return;
      const o = (this._p.poi || []).find(x => x.id === a.poiId);
      this._noterFil('an', a.id, a.titre);
       
       
      


      if (o && this._map) {
        const c = this._estSurface(o) || this._estTrace(o) ? this._centre(o) : [+o.lng, +o.lat];
        if (this._estPoint(c)) this._map.easeTo({ center: c, zoom: this._zoomPourVoir(o, 17.2), duration: 600 });
        this._mettreEnAvant(o);
      }
      this.querySelector('#vmFiche').innerHTML =
        '<button class="vm__fx" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button>' +
        (urlSure(a.photo) ? '<img class="vm__fimg" src="' + this._esc(urlSure(a.photo)) + '" alt="" loading="eager" decoding="async"' + this._repli('') + '>' : '') +
        '<div class="vm__fbody">' +
          


          '<span class="vm__fh">' + svg(IC.horloge, 'vm__fico') +
            (a.date ? this._esc(this._dateLongue(a.date)) + ' · ' : '') +
            this._esc(a.debut) + ' › ' + this._esc(a.fin) + '</span>' +
          '<h3>' + this._esc(a.titre) + '</h3>' +
          (o ? '<p class="vm__flieu">' + svg(IC.lieu, 'vm__fico') + this._esc(o.nom) + '</p>' : '') +
          (a.desc ? '<p>' + this._esc(a.desc) + '</p>' : '') +
          '<p class="vm__ftags">' + (a.gratuit ? '<span>' + this._esc(this._t('gratuit')) + '</span>' : '') +
            (a.reservation ? '<span>' + this._esc(this._t('reservation')) + '</span>' : '') +
            (a.statut && a.statut !== 'ouvert' ? '<span class="vm__tstatut">' +
              this._esc(this._t('st' + a.statut.charAt(0).toUpperCase() + a.statut.slice(1)) || a.statut) + '</span>' : '') + '</p>' +
          (urlSure(a.lienExterne) ? '<a class="vm__cta vm__cta--fort vm__fgo" href="' + this._esc(urlSure(a.lienExterne)) + '" target="_blank" rel="noopener noreferrer">' +
            this._esc(this._t('enSavoir') || 'En savoir plus') + '<span class="vm__ctaic">' + svg(IC.fleche) + '</span></a>' : '') +
          


          this._suiteDuProgramme(a) +
          this._boutonRetour(this._t('retourProg')) +
        '</div>';
      this.querySelector('#vmVoile').hidden = false;
      this.querySelector('.vm__fx').addEventListener('click', () => this._fermerFiche());
       
      this.querySelectorAll('.vm__fan').forEach(b =>
        b.addEventListener('click', () => this._ouvrirAnimation(b.dataset.an)));
      const ret = this.querySelector('#vmRetour');
      if (ret) ret.addEventListener('click', () => {
         
        if (ret.dataset.fil && this._retourFil()) return;
         
        this._fermerFiche();
        const l = this.querySelector('.vm__ev[data-an="' + id + '"]');
        const liste = this.querySelector('#vmProgList');
        if (l && liste) { this._amenerDansLaListe(l, liste, true); l.classList.add('is-vu');
                 setTimeout(() => l.classList.remove('is-vu'), 1600); }
      });
      if (this._mesure) this._mesure.noter('animation', id);
      this._emit('vm-animation', { id });
    }

    



    utiliserMemoire() {
      const m = lireMemoire();
      if (!m) return false;
       
       
      this._p = this._assainir(m.p);
      this._fraicheur = { source: 'memoire', le: m.le };
      this._monter();
      return true;
    }
    aUneMemoire() { return !!lireMemoire(); }
    etatDonnees() { return this._fraicheur || { source: 'inconnu' }; }

    





    equipementsOfferts(cat) {
      return equipOfferts(cat).map(e => ({ cle: e.cle, libelle: e.libelle, picto: e.picto }));
    }
    pictoSvg(nom) { return PICTO[nom] || ''; }
     
     
    








    focusPoi(id) { this._apercuTouche = id; this._ouvrirPoi(id); }
     
     
     
    focusAnimation(id) { this._ouvrirAnimation(id); }

     
    








    _indexRech() {
      if (this._idxRech && this._idxRechJeton === this._jeton) return this._idxRech;
      const idx = [];
      const pousser = (e) => {
        e.n = sansAccent(e.t);
        e.ns = sansAccent(e.s);
        e.mots = motsDe([e.t, e.s, e.plus].filter(Boolean).join(' '));
        







        e.tout = sansAccent([e.t, e.s, e.plus].filter(Boolean).join(' '));
        e.compact = e.tout.replace(/[^a-z0-9]+/g, '');
        idx.push(e);
      };
      (this._p.poi || [])
        .filter(o => !(o.barrage && this._periodeBarrage(o) === 'apres'))
        .forEach(o => {
          const c = this._cat(o.cat);
          const eqs = this._equipements(o);
          pousser({ k: 'poi', id: o.id, cat: o.cat,
            t: o.exposant || o.nom || '',
            s: o.exposant ? [o.nom, o.sousCat].filter(Boolean).join(' · ')
                          : (o.sousCat || this._libCat(c)),
             
             
             
            plus: [o.nom, o.sousCat, o.desc].concat(eqs.map(e => this._libEquip(e)))
              .filter(Boolean).join(' '),
            img: o.photo, couleur: couleurSure(c.couleur, C.teal),
             
             
            picto: this._pictoDe(o),
             
             
             
            eq: eqs,
             
             
            ref: o, pos: this._centre(o) });
        });
      (this._p.animations || []).forEach(a => pousser({ k: 'an', id: a.id, cat: 'animations',
        t: a.titre || '', s: this._t('prog'), plus: a.desc, img: a.photo,
        couleur: C.ambre, picto: 'star', pos: null }));
      






      (this._p.bateaux || []).filter(b => b.nom).forEach(b => pousser({ k: 'bateau', id: b.id, cat: 'bateaux',
        t: b.nom, s: [b.voile, b.skipper || this._libClasse(b.classe)].filter(Boolean).join(' · '),
        plus: [b.skipper, b.voile, this._libClasse(b.classe)].filter(Boolean).join(' '),
        img: b.photo, couleur: this._couleurClasse(b.classe), picto: 'boat',
        pos: this._estPoint([b.lng, b.lat]) ? [+b.lng, +b.lat] : null }));
      (this._p.zones || []).forEach(z => pousser({ k: 'zone', id: z.id, cat: z.cat || 'bateaux',
        t: z.nom || '', s: this._libCat(this._cat(z.cat)), plus: z.desc,
        couleur: couleurSure(z.couleur, C.teal), picto: 'boat', pos: this._centre(z) }));
      (this._p.categories || []).forEach(c => pousser({ k: 'cat', id: c.cle, cat: c.cle,
        t: this._libCat(c), s: this._t('voirTout'),
        plus: (LEXIQUE[c.cle] || []).join(' '),
        couleur: couleurSure(c.couleur, C.teal), picto: c.picto, pos: null }));
      this._idxRech = idx;
      this._idxRechJeton = this._jeton;
      return idx;
    }
    


    _clesDuMot(table, q) {
      const dedans = new Set();
      const t = tolerance(q.length);
      Object.keys(table).forEach(cle => {
        if (table[cle].some(m => {
          const n = sansAccent(m);
          if (n === q || n.startsWith(q)) return true;
          if (q.length >= 4 && n.includes(q)) return true;
          





          return q.length >= 5 && n.charCodeAt(0) === q.charCodeAt(0) && distMots(n, q, t) <= t;
        })) dedans.add(cle);
      });
      return dedans;
    }
    _famillesDuMot(q) { return this._clesDuMot(LEXIQUE, q); }
     
     
    _equipDuMot(q) { return this._clesDuMot(MOTS_EQUIP, q); }
    



    _scoreRech(e, q, familles, equips) {
      let s = 0;
      e.eqm = null;
       
      const qc = q.replace(/[^a-z0-9]+/g, '');
      if (e.n === q) s = 1000;
      else if (e.n.startsWith(q)) s = 820;
      else if (e.mots.some(m => m.startsWith(q))) s = 640;
      else if (e.n.includes(q)) s = 500;
      



      else if (e.tout && e.tout.includes(q)) s = 560;
      else if (q.length >= 4 && e.compact && e.compact.includes(qc)) s = 520;
      else if (e.ns.includes(q)) s = 340;
      else if (q.length >= 4 && e.mots.some(m => m.includes(q))) s = 300;
      else if (q.length >= 4) {
         
         
        const t = tolerance(q.length);
        if (e.mots.some(m => m.charCodeAt(0) === q.charCodeAt(0) && distMots(m, q, t) <= t)) s = 240;
      }
       
      if (familles.has(e.cat)) s = Math.max(s, e.k === 'cat' ? 760 : 420);
      








      if (equips && equips.size && e.eq && e.eq.length) {
        const t = e.eq.find(x => equips.has(x.cle));
        if (t) {
          s = Math.max(s, 780);
          








          const dit = sansAccent(t.cle) + ' ' + sansAccent(t.libelle || '');
          if (motsDe(dit).some(m => m.length > 2 && e.n.includes(m))) s += 60;
          e.eqm = t;
        }
      }
      if (!s) return 0;
      


      const moi = this._positionMoi && this._positionMoi();
      if (moi && e.pos && this._estPoint(e.pos)) {
        const d = this._metresEntre(moi, e.pos);
        s += Math.max(0, 45 - d / 20);
        e.d = Math.round(d);
      } else e.d = null;
       
       
      if (e.k === 'poi' && e.ref) {
        const et = this._etatOuverture(e.ref, this._jour, this._heure);
        if (et && et.etat === 'ferme') s -= 60;
      }
      return s;
    }
    


    _marquerResultat(l, j) {
      l.forEach(b => { b.classList.remove('est-actif'); b.removeAttribute('aria-selected'); });
      const rech = this.querySelector('#vmRech');
      if (j < 0 || !l[j]) {
        this._rechActif = null;
        if (rech) rech.removeAttribute('aria-activedescendant');
        return;
      }
      const b = l[j];
      b.classList.add('est-actif');
      b.setAttribute('aria-selected', 'true');
      if (!b.id) b.id = 'vmRes' + j;
      if (rech) rech.setAttribute('aria-activedescendant', b.id);
      this._rechActif = b;
      


      const box = b.parentElement;
      if (box && box.scrollHeight > box.clientHeight) {
        const h = b.offsetTop, f = h + b.offsetHeight;
        if (h < box.scrollTop) box.scrollTop = h - 4;
        else if (f > box.scrollTop + box.clientHeight) box.scrollTop = f - box.clientHeight + 4;
      }
    }
    _chercher(q) {
      const box = this.querySelector('#vmRes');
      this._rechActif = null;
      q = (q || '').trim().toLowerCase();
      if (q.length < 2) {
        




        if (this._rechPlein) { const p = this._propositions();
          if (p) { box.innerHTML = p; box.hidden = false; this._direListeOuverte(true); this._brancherPropositions(box);
            this._bornerResultats(); return; } }
        box.hidden = true; this._direListeOuverte(false); return;
      }
      







      const qn = sansAccent(q);
      const familles = this._famillesDuMot(qn);
       
       
      const equips = this._equipDuMot(qn);
      const notes = [];
      this._indexRech().forEach(e => {
        const s = this._scoreRech(e, qn, familles, equips);
        if (s > 0) notes.push({ e: e, s: s });
      });
      notes.sort((a, b) => b.s - a.s ||
        (a.e.d != null && b.e.d != null ? a.e.d - b.e.d : 0) ||
        a.e.t.length - b.e.t.length);
      const TAILLE = 8;
      const total = notes.length;
      const res = notes.slice(0, TAILLE).map(x => Object.assign({}, x.e,
         
         
         
        { t: x.e.t, s: x.e.s, sc: x.s, id: x.e.id, k: x.e.k, img: x.e.img }));
       
       
       
      const norm = sansAccent;
      void norm;
      





      



      




      const surligner = (brut, norme) => {
        const i = qn.length >= 2 && norme.length === brut.length ? norme.indexOf(qn) : -1;
        if (i < 0) return this._esc(brut);
        return this._esc(brut.slice(0, i)) + '<mark>' + this._esc(brut.slice(i, i + qn.length)) +
               '</mark>' + this._esc(brut.slice(i + qn.length));
      };
      



      const etatDe = (r) => {
        if (r.k !== 'poi' || !r.ref) return '';
        const e = this._etatOuverture(r.ref, this._jour, this._heure);
        if (!e) return '';
        if (e.etat === 'ouvert') return '<b class="vm__reso">' + this._esc(this._t('ouvert')) + '</b>';
        if (e.etat === 'bientot') return '<b class="vm__reso is-bientot">' +
          this._esc(this._t('fermeDans').replace('{n}', String(e.reste))) + '</b>';
        return '<b class="vm__reso is-ferme">' + this._esc(this._t('ferme')) + '</b>';
      };
      const ligne = (r) => {
        



        const img = vignette(r.img, 32);
        const pastille = '<span class="vm__resic" style="--c:' + r.couleur + '">' +
          svg(PICTO[r.picto] || PICTO.star, '') + '</span>';
         
         
        return '<button role="option" aria-selected="false" data-k="' + r.k + '" data-id="' + this._esc(r.id) + '">' +
          (img
            ? '<span class="vm__resic vm__resic--img" style="--c:' + r.couleur + '">' +
                '<img src="' + this._esc(img) + '" alt="" loading="lazy" decoding="async"' +
                this._repli(pastille, true) + '></span>'
            : pastille) +
          





          






          



          (() => { const lib = r.eqm ? this._libEquip(r.eqm) : '';
            const double = lib && sansAccent(lib) === sansAccent(r.s || '');
            return '<span class="vm__rest"><b>' + surligner(r.t, r.n) + '</b>' +
              '<em>' +
                (lib ? '<i class="vm__reseq">' + svg(PICTO[r.eqm.picto] || PICTO.star, '') +
                   this._esc(lib) + '</i>' : '') +
                (double ? '' : this._esc(r.s)) + etatDe(r) + '</em></span>'; })() +
          (r.d != null ? '<i class="vm__resd">' + Math.round(r.d) + '<u>m</u></i>' : '') +
          '</button>';
      };
      





      const GROUPES = [
        { k: 'cat',    titre: this._t('grRacc') },
        { k: 'poi',    titre: this._t('grLieux') },
        { k: 'bateau', titre: this._t('bateaux') },
        { k: 'an',     titre: this._t('prog') },
        { k: 'zone',   titre: this._t('classes') }
      ];
      





      const parGroupes = (liste) => GROUPES
        .map(g => ({ g: g, l: liste.filter(r => r.k === g.k) }))
        .filter(x => x.l.length)
        .sort((a, b) => (b.l[0].sc || 0) - (a.l[0].sc || 0))
        .map(x => '<div class="vm__resh">' + this._esc(x.g.titre) + '</div>' +
          x.l.map(ligne).join(''))
        .join('');
      




      const secours = () => {
        const proches = this._indexRech().filter(e => e.k === 'cat').slice(0, 6);
        return '<span class="vm__vide">' + this._esc(this._t('aucun')) + '</span>' +
          '<div class="vm__resh">' + this._esc(this._t('rienA')) + '</div>' +
          proches.map(ligne).join('');
      };
      










      const proximite = () => {
        const c = res.find(r => r.k === 'cat');
        if (!c || !c.id) return '';
        if (this._famillesBesoin().indexOf(c.id) < 0) return '';
        const cat = this._cat(c.id);
        




        const eq = (res.find(r => r.eqm && r.eqm.cle) || {}).eqm;
        const dit = (k) => { const v = this._t(k); return v && v !== k ? v : ''; };
        const phrase = (eq && dit('proxEq_' + eq.cle)) || dit('proxCat_' + c.id) ||
          this._t('proxTitre').replace('{f}', this._libCat(cat));
        const vise = eq && dit('proxEq_' + eq.cle) ? eq.cle : '';
        


        return '<button class="vm__resprox" role="option" aria-selected="false" data-prox="' + this._esc(c.id) + '"' +
          (vise ? ' data-proxeq="' + this._esc(vise) + '"' : '') + '>' +
          '<span class="vm__resproxi">' + svg(PICTO.boussole) + '</span>' +
          '<span class="vm__resproxt">' + this._esc(phrase) + '</span>' +
          svg(IC.chevronG, 'vm__resproxc') + '</button>';
      };
      box.innerHTML = res.length
        ? proximite() + parGroupes(res) +
           
           
          (total > res.length
            ? '<div class="vm__resplus">' + this._esc(this._t('resultatsN')
                .replace('{a}', String(res.length)).replace('{n}', String(total))) + '</div>' : '')
        : secours();
      



      clearTimeout(this._tRechMesure);
      if (!res.length && this._mesure) {
        const terme = this._mesure.terme(q);
        if (terme.length >= 3) this._tRechMesure = setTimeout(() => this._mesure && this._mesure.noter('recherche-vide', terme), 1200);
      }
      box.hidden = false;
      this._direListeOuverte(true);
       
       
      this._bornerResultats();
      














      box.querySelectorAll('[data-prox]').forEach(b => b.addEventListener('click', () => {
        this._autourFamille = b.dataset.prox;
        this._autourEquip = b.dataset.proxeq || '';
        this._autourPhrase = (b.querySelector('.vm__resproxt') || {}).textContent || '';
        this._ouvrirRecherche(false);
        this._ouvrirAutour();
      }));
      const choisir = (b) => {
        if (b.dataset.fait === '1') return;           
        b.dataset.fait = '1';
        setTimeout(() => { delete b.dataset.fait; }, 400);
        if (this._mesure) this._mesure.noter('recherche-trouve', b.dataset.id);
        const k = b.dataset.k, id = b.dataset.id;
        box.hidden = true;
         
         
        this._ouvrirRecherche(false);
        





        if (k === 'poi') { this._apercuTouche = id; this._apercuT0 = 0; this._ouvrirPoi(id); }
        else if (k === 'an') this._ouvrirAnimation(id);
        else if (k === 'bateau') this._allerBateau(id);
        else if (k === 'zone') this._allerZone(id);
        else if (k === 'cat') this._isolerFamille(id);
      };
      box.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => choisir(b));
        b.addEventListener('mousedown', () => choisir(b));
        





        if (b.dataset.k === 'poi') {
          b.addEventListener('mouseenter', () => this._survolCarte(b.dataset.id));
          b.addEventListener('mouseleave', () => this._survolCarte(null));
          b.addEventListener('focus', () => this._survolCarte(b.dataset.id));
          b.addEventListener('blur', () => this._survolCarte(null));
        }
      });
    }

    _allerBateau(id) {
      const b = (this._p.bateaux || []).find(x => x.id === id);
      if (!b || !this._map || !this._estPoint([b.lng, b.lat])) return;
      this._map.easeTo({ center: [+b.lng, +b.lat], zoom: Math.max(this._map.getZoom(), 17.4), duration: 600 });
      this._ficheBateau(b);
    }
     
     
    




    




















    


    _encadreDemande() {
      if (this._encadreLu === undefined) {
        try { this._encadreLu = new URLSearchParams(location.search).has('encadre'); }
        catch (e) { this._encadreLu = false; }
      }
      return this._encadreLu;
    }

    _modeEncadre(id) {
      const vm = this.querySelector('.vm');
      if (vm) vm.classList.add('est-encadre');
      this._encadre = true;
      const o = (this._p.poi || []).find(x => x.id === id);
      if (!o || !this._map) return;
      const p = this._paddingEncadre();
      if (o.stand && this._ligneValide(o.polygone, 3)) {
        const lg = o.polygone.map(c => c[0]), lt = o.polygone.map(c => c[1]);
        this._map.fitBounds([[Math.min(...lg), Math.min(...lt)], [Math.max(...lg), Math.max(...lt)]],
          { padding: p, maxZoom: 19.6, duration: 0 });
      } else if (this._estPoint([o.lng, o.lat])) {
        this._map.jumpTo({ center: [+o.lng, +o.lat], zoom: 17.6 });
      } else if (this._estSurface(o) || this._estTrace(o)) {
        const c = this._centre(o);
        if (this._estPoint(c)) this._map.jumpTo({ center: c, zoom: 17.2 });
      }
      this._mettreEnAvant(o);
      this._poserIci(o);
    }

    












    _poserIci(o) {
      if (this._ici) { this._ici.forEach(m => m.remove()); this._ici = null; }
      if (!this._map || !o) return;
      const c = (this._estSurface(o) || o.stand || this._estTrace(o))
        ? this._centre(o) : [+o.lng, +o.lat];
      if (!this._estPoint(c)) return;

      const pt = document.createElement('div');
      pt.className = 'vm__icipt';
      const chip = document.createElement('div');
      chip.className = 'vm__ici';
      chip.textContent = o.nom || '';

      



      this._ici = [
        new maplibregl.Marker({ element: pt, anchor: 'center' }).setLngLat(c).addTo(this._map)
      ];
      if (o.nom) this._ici.push(
        new maplibregl.Marker({ element: chip, anchor: 'bottom', offset: [0, -16] })
          .setLngLat(c).addTo(this._map));
    }

    _ouvrirDepuisLURL() {
      let p;
      try { p = new URLSearchParams(location.search); } catch (e) { return; }
      const vue = p.get('vue'), jour = p.get('jour'), poi = p.get('poi'), an = p.get('an'), bat = p.get('bateau');
      


      if (p.get('encadre') && poi && (this._p.poi || []).some(o => o.id === poi)) {
        this._modeEncadre(poi);
        return;
      }
      if (vue && (this._p.config.vues || []).some(v => v.cle === vue)) this._allerVue(vue);
      if (jour && this._jours().indexOf(jour) >= 0) { this._jour = jour; this._rendreProg(); }
      if (an && (this._p.animations || []).some(a => a.id === an)) setTimeout(() => this._ouvrirAnimation(an), 700);
      else if (poi && (this._p.poi || []).some(o => o.id === poi)) setTimeout(() => this._ouvrirPoi(poi), 700);
       
      else if (bat) {
        


        const trouve = (this._p.bateaux || []).find(x => x.id === bat || x.refId === bat);
        if (trouve) setTimeout(() => this._allerBateau(trouve.id), 700);
      }
    }
    







    _lienProgramme() {
      const brut = urlSure(this._p && this._p.config && this._p.config.pageProgramme);
      if (!brut) return '';
      if (this._lang !== 'en') return brut;
      if (brut.charAt(0) !== '/' || brut.indexOf('/en/') === 0 || brut === '/en') return brut;
      return '/en' + brut;
    }
     
     
    _lienVers(cle, id) {
      try {
        const u = new URL(location.href);
        ['poi', 'an', 'bateau'].forEach(k => u.searchParams.delete(k));
        u.searchParams.set(cle, id);
        return u.toString();
      } catch (e) { return location.href; }
    }
    async _partager(titre, cle, id) {
      const url = this._lienVers(cle, id);
      if (this._mesure) this._mesure.noter('partage', cle);
      try {
        if (navigator.share) { await navigator.share({ title: titre, url }); return; }
        await navigator.clipboard.writeText(url);
        this._bandeau(titre, this._t('lienCopie'));
      } catch (e) {   }
    }

    _allerZone(id) {
      const z = (this._p.zones || []).find(x => x.id === id);
      if (!z || !this._map || !this._ligneValide(z.polygone, 3)) return;
      const lng = z.polygone.map(c => c[0]), lat = z.polygone.map(c => c[1]);
      this._map.setMaxBounds(null);
      this._map.fitBounds([[Math.min(...lng), Math.min(...lat)], [Math.max(...lng), Math.max(...lat)]],
        { padding: this._paddingVolets(), duration: 800 });
      this._bandeau(z.nom, z.desc || '');
    }
    




    _isolerFamille(cle) {
      this._actives = new Set([cle]);
      this._refletFiltres();
      this._appliquerFiltres();
      this._cadrerSurFiltre();
      if (this._mesure) this._mesure.noter('filtre', cle);
    }
    



    _refletFiltres() {
       
       
      this._majCompteurFiltres();
       
       
       
      requestAnimationFrame(() => this._majDefileFiltres());
      const tous = (this._p.categories || []).length;
      this.querySelectorAll('.vm__f').forEach(x => {
        const c = x.dataset.cat;
        const on = c === '__tout' ? !this._actives : (!this._actives || this._actives.has(c));
        x.classList.toggle('is-on', on);
        if (c && c !== '__tout') x.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      




      const vm = this.querySelector('.vm');
      if (vm) vm.classList.toggle('a-filtre', !!this._actives);
       
       
      if (!this._actives && this._plancherAvantFiltre != null && this._map) {
        try { this._map.setMinZoom(this._plancherAvantFiltre); } catch (e) {}
        this._plancherAvantFiltre = null;
      }
      const n = this.querySelector('#vmFiltreEtat');
      if (n) {
        





        const tousNoms = this._actives
          ? [...this._actives].map(c => this._libCat(this._cat(c))) : [];
        const libelle = tousNoms.length > 2
          ? this._t('famillesN').replace('{n}', String(tousNoms.length))
          : tousNoms.join(', ');
        n.innerHTML = this._actives
          ? svg(IC.cible || IC.boussole, '') +
            '<span title="' + escAttr(tousNoms.join(', ')) + '">' + this._esc(libelle) + '</span>' +
            '<button id="vmFiltreRaz">' + this._esc(this._t('tout')) + '</button>' : '';
        if (this._actives) n.setAttribute('aria-label', tousNoms.join(', '));
        else n.removeAttribute('aria-label');
        const r = n.querySelector('#vmFiltreRaz');
        if (r) r.addEventListener('click', () => {
          this._actives = null; this._refletFiltres(); this._appliquerFiltres();
        });
        n.hidden = !this._actives;
         
         
        const vmr = this.querySelector('.vm');
        if (vmr) vmr.classList.toggle('a-fetat', !!this._actives);
        



        





        const f = this.querySelector('.vm__filtres'), vm = this.querySelector('.vm');
        if (vm && vm.classList.contains('est-etroit')) { n.style.bottom = ''; return; }
        if (f && vm) requestAnimationFrame(() => {
          const rf = f.getBoundingClientRect(), rv = vm.getBoundingClientRect();
          if (!rf.height) return;
          n.style.bottom = Math.round(rv.bottom - rf.top + 7) + 'px';
        });
      }
      void tous;
    }
    

    


    _cadrerSurFiltre() {
      if (!this._map) return;
      const actif = this._actives || this._pmr || this._progJour;
      if (!actif) return;
      const duJour = this._progJour
        ? new Set((this._p.animations || []).filter(a => a.date === this._jour)
            .map(a => a.poiId).filter(Boolean))
        : null;
      const pts = (this._p.poi || [])
        .filter(o => (!this._actives || this._actives.has(o.cat)) &&
                     (!this._pmr || o.pmr === true) &&
                     (!duJour || duJour.has(o.id)))
        .map(o => this._centre(o))
        .filter(c => this._estPoint(c));
      if (!pts.length) return;
      const lg = pts.map(c => c[0]), lt = pts.map(c => c[1]);
      const bornes = [[Math.min(...lg), Math.min(...lt)], [Math.max(...lg), Math.max(...lt)]];
      const marges = this._paddingVolets();
      











      const lim = this._p.config.limites;
      if (lim) {
        const largeurDemandee = Math.abs(bornes[1][0] - bornes[0][0]);
        const largeurPermise = Math.abs(lim[1][0] - lim[0][0]);
        const part = largeurPermise ? largeurDemandee / largeurPermise : 0;
        if (part > 0.55) {
          const k = Math.max(0, (1 - part) / 0.45);           
          ['top', 'right', 'bottom', 'left'].forEach(c => { marges[c] = Math.round(marges[c] * k) + 6; });
        }
      }
      







      try {
        







        const cam = this._map.cameraForBounds(bornes, { padding: marges, maxZoom: 17.6 });
        const plancher = this._map.getMinZoom();
        if (cam && cam.zoom < plancher) {
          const dedans = (v) => v.bornes &&
            bornes[0][0] >= Math.min(v.bornes[0][0], v.bornes[1][0]) &&
            bornes[1][0] <= Math.max(v.bornes[0][0], v.bornes[1][0]) &&
            bornes[0][1] >= Math.min(v.bornes[0][1], v.bornes[1][1]) &&
            bornes[1][1] <= Math.max(v.bornes[0][1], v.bornes[1][1]);
          const hote = (this._p.config.vues || []).find(v => v.cle !== this._mode &&
            [...this._actives].every(c => (v.familles || []).indexOf(c) >= 0) && dedans(v));
          if (hote) { this._allerVue(hote.cle); return; }
           
           
          if (this._plancherAvantFiltre == null) this._plancherAvantFiltre = plancher;
          this._map.setMinZoom(Math.max(0, cam.zoom - 0.05));
        }
        this._map.fitBounds(bornes, { padding: marges, maxZoom: 17.6, duration: 700 });
      } catch (e) { this._incident('cadrage du filtre', e); }
    }

     
    _localiser() {
      if (!navigator.geolocation) { this._bandeau(this._t('melocaliser'), '—'); return; }
      const btn = this.querySelector('#vmGeo');
       
       
       
      if (this._geoMarqueur && this._map) {
        if (this._mesure) this._mesure.noter('geoloc', 'recentrage');
        this._map.easeTo({ center: this._geoMarqueur.getLngLat(), zoom: Math.max(this._map.getZoom(), 17), duration: 600 });
        return;
      }
       
      if (this._mesure) this._mesure.noter('geoloc', 'demande');
      if (btn) btn.classList.add('is-busy');
      



      this._geoVeille = navigator.geolocation.watchPosition(pos => {
        btn.classList.remove('is-busy'); btn.classList.add('is-on');
        const { longitude: lng, latitude: lat, accuracy } = pos.coords;
        if (!this._geoMarqueur) {
          const el = document.createElement('div'); el.className = 'vm__moi';
          this._geoMarqueur = new maplibregl.Marker({ element: el }).setLngLat([lng, lat]).addTo(this._map);
          this._map.easeTo({ center: [lng, lat], zoom: Math.max(this._map.getZoom(), 17), duration: 700 });
        } else this._geoMarqueur.setLngLat([lng, lat]);
        




        this._cerclePrecision(lng, lat, accuracy);
        this._suivreCap();
         
        if (this._urgenceActive()) this._majUrgence();
        if (this._autourEnAttente) { this._autourEnAttente = false; this._ouvrirAutour(); }
         
         
        this._bandeau(this._t('melocaliser'), this._t('precision') + ' ± ' + Math.round(accuracy) + ' m');
      }, () => {
        btn.classList.remove('is-busy');
        this._bandeau(this._t('melocaliser'), this._lang === 'en' ? 'Location unavailable or refused.' : 'Localisation indisponible ou refusée.');
      }, { enableHighAccuracy: true, maximumAge: 10000, timeout: 8000 });
    }
     
     
    arreterLocalisation() {
      if (this._onCap && this._capNoms) { this._capNoms.forEach(n => window.removeEventListener(n, this._onCap, true)); this._onCap = null; }
      this._capPose = false;
      if (this._geoVeille != null && navigator.geolocation) {
        try { navigator.geolocation.clearWatch(this._geoVeille); } catch (e) {}
      }
      this._geoVeille = null;
      if (this._geoCercle && this._map && this._map.getLayer('geo-precision')) {
        try { this._map.removeLayer('geo-precision'); this._map.removeSource('geo-precision'); } catch (e) {}
      }
      this._geoCercle = false;
    }

    







    _suivreCap() {
      if (this._capPose || typeof DeviceOrientationEvent === 'undefined') return;
      this._capPose = true;
      const poser = () => {
        this._onCap = (e) => {
          let deg = null;
          if (typeof e.webkitCompassHeading === 'number') deg = e.webkitCompassHeading;
          else if (e.absolute && typeof e.alpha === 'number') deg = 360 - e.alpha;
          if (deg == null || isNaN(deg) || !this._geoMarqueur) return;
          this._geoMarqueur.getElement().style.setProperty('--vm-cap', Math.round(deg) + 'deg');
          this._geoMarqueur.getElement().classList.add('a-cap');
        };
        



        this._capNoms = ['deviceorientationabsolute', 'deviceorientation'];
        this._capNoms.forEach(n => window.addEventListener(n, this._onCap, true));
      };
      const dem = DeviceOrientationEvent.requestPermission;
      if (typeof dem === 'function') {
         
        dem().then(r => { if (r === 'granted') poser(); }).catch(() => {});
      } else poser();
    }

     
     
    _cerclePrecision(lng, lat, m) {
      if (!this._map || !this._prete) return;
      const R = 6378137, pts = [], n = 48;
      for (let i = 0; i <= n; i++) {
        const a = i / n * 2 * Math.PI;
        pts.push([lng + (m * Math.cos(a)) / (R * Math.cos(lat * Math.PI / 180)) * 180 / Math.PI,
                  lat + (m * Math.sin(a)) / R * 180 / Math.PI]);
      }
      const data = { type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [pts] } };
      const src = this._map.getSource('geo-precision');
      if (src) { src.setData(data); return; }
      this._map.addSource('geo-precision', { type: 'geojson', data });
      this._map.addLayer({ id: 'geo-precision', type: 'fill', source: 'geo-precision',
        paint: { 'fill-color': C.teal, 'fill-opacity': .16, 'fill-outline-color': C.tealDeep } });
      this._geoCercle = true;
    }

    














    _sonderCoins() {
      if (!this.isConnected || this._coinsFiges) return null;
      const r = this.getBoundingClientRect();
      if (r.width < 40 || r.height < 40) return null;
      const MARGE = 8, MAXI = 160;
      const etranger = (n) => {
        if (!n || n === document.documentElement || n === document.body) return false;
        if (this.contains(n)) return false;
        let x = n;
        while (x && x !== document.documentElement) {
          if (getComputedStyle(x).position === 'fixed') return true;
          x = x.parentElement;
        }
        return false;
      };
      



      






















      const percer = (n, x, y) => {
        let p = n;
        for (let k = 0; k < 4 && p && p.shadowRoot; k++) {
          let dedans = null;
          try { dedans = p.shadowRoot.elementFromPoint(x, y); } catch (e) { break; }
          if (!dedans || dedans === p) break;
          p = dedans;
        }
        return p;
      };
      const sonde = (xs, ys, aGauche) => {
        let hMax = 0, lMax = 0;
        xs.forEach(x => ys.forEach(y => {
          if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) return;
          let touches = [];
          try { touches = document.elementsFromPoint(x, y) || []; } catch (e) { return; }
          const cible = touches.map(n => percer(n, x, y)).find(etranger);
          if (!cible) return;
          const b = cible.getBoundingClientRect();
          if (b.width > MAXI || b.height > MAXI) return;    
          hMax = Math.max(hMax, Math.min(MAXI, r.bottom - b.top + MARGE));
          lMax = Math.max(lMax, Math.min(MAXI, (aGauche ? b.right - r.left : r.right - b.left) + MARGE));
        }));
        return { h: Math.round(hMax), l: Math.round(lMax) };
      };
      const ys = [r.bottom - 12, r.bottom - 30, r.bottom - 50, r.bottom - 70];
      const g = sonde([r.left + 14, r.left + 32, r.left + 52, r.left + 72], ys, true);
      const d = sonde([r.right - 14, r.right - 32, r.right - 52, r.right - 72], ys, false);
      




      






      const xg = [r.left + 6, r.left + 18, r.left + 30, r.left + 44];
      const xd = [r.right - 6, r.right - 18, r.right - 30, r.right - 44];
      const yHaut = [.20, .32, .44, .56].map(p => r.top + r.height * p);
      


      


      const depart = Math.max(12, Math.max(g.h, d.h) + 10);
      const yBas = [0, 30, 60, 90, 130, 170, 210]
        .filter(v => depart + v < r.height * .6).map(v => r.bottom - depart - v);
      const fgH = sonde(xg, yHaut, true), fgB = sonde(xg, yBas, true);
      const fdH = sonde(xd, yHaut, false), fdB = sonde(xd, yBas, false);
      return { gauche: g, droite: d, bas: Math.max(g.h, d.h),
               flancG: Math.max(fgH.l, fgB.l), flancD: Math.max(fdH.l, fdB.l),
               flancGBas: fgB.l, flancDBas: fdB.l };
    }
    

    _appliquerCoins(sonde) {
      const vm = this.querySelector('.vm');
      if (!vm) return;
      const cf = (this._p.config || {}).coinsFlottants;
      const eteint = cf === false || cf === 0;
      const obj = cf && typeof cf === 'object' ? cf : (typeof cf === 'number' ? { bas: cf } : {});
      const cote = typeof obj.cote === 'number' ? obj.cote : null;
      const val = (explicite, mesure, defaut) =>
        eteint ? defaut : (typeof explicite === 'number' ? explicite : (mesure != null ? Math.max(defaut, mesure) : defaut));
      const s2 = sonde || { gauche: { h: 0, l: 0 }, droite: { h: 0, l: 0 }, bas: 0,
                            flancG: 0, flancD: 0, flancGBas: 0, flancDBas: 0 };
      const bas = val(obj.bas, s2.bas, 0);
      const g = val(typeof obj.gauche === 'number' ? obj.gauche : cote, s2.gauche.l, 14);
      const d = val(typeof obj.droite === 'number' ? obj.droite : cote, s2.droite.l, 14);
      const pose = (n, v) => { if (vm.style.getPropertyValue(n) !== v) vm.style.setProperty(n, v); };
      pose('--vm-coins', Math.max(0, bas) + 'px');
      pose('--vm-coins-g', Math.max(14, g) + 'px');
      pose('--vm-coins-d', Math.max(14, d) + 'px');
       
      pose('--vm-bord-g', (eteint ? 0 : Math.max(0, s2.flancG || 0)) + 'px');
      pose('--vm-bord-d', (eteint ? 0 : Math.max(0, s2.flancD || 0)) + 'px');
      pose('--vm-bord-g-bas', (eteint ? 0 : Math.max(0, s2.flancGBas || 0)) + 'px');
      pose('--vm-bord-d-bas', (eteint ? 0 : Math.max(0, s2.flancDBas || 0)) + 'px');
      this._ajusterPoignee();
    }
    

    _suivreCoins() {
      const passe = () => this._appliquerCoins(this._coinsFiges ? null : this._sonderCoins());
      let att = 0;
      const bientot = () => { cancelAnimationFrame(att); att = requestAnimationFrame(passe); };
      passe();
      


      clearTimeout(this._tCoins1); clearTimeout(this._tCoins2); clearTimeout(this._tCoins3);
      this._tCoins1 = setTimeout(passe, 1500);
      this._tCoins2 = setTimeout(passe, 5000);
      this._tCoins3 = setTimeout(passe, 12000);
      if (!this._roCoins && typeof ResizeObserver !== 'undefined') {
        this._roCoins = new ResizeObserver(bientot);
        this._roCoins.observe(this);
      }
      



      if (!this._moCoins && typeof MutationObserver !== 'undefined') {
        





        this._moCoins = new MutationObserver(() => {
          const t = Date.now();
          if (t - (this._dernierSondage || 0) < 2000) return;
          this._dernierSondage = t;
          clearTimeout(this._tCoinsMut);
          this._tCoinsMut = setTimeout(passe, 500);
        });
        try { this._moCoins.observe(document.body, { childList: true, subtree: true }); } catch (e) {}
      }
       
      if (!this._onVisibleCoins) {
        this._onVisibleCoins = () => { if (document.visibilityState === 'visible') bientot(); };
        document.addEventListener('visibilitychange', this._onVisibleCoins);
      }
    }
    


    reglerCoins(v) {
      this._p.config = this._p.config || {};
      this._p.config.coinsFlottants = v;
      this._coinsFiges = v === false || v === 0 || (v && typeof v === 'object' && v.auto === false);
      this._appliquerCoins(this._coinsFiges ? null : this._sonderCoins());
      return { bas: getComputedStyle(this.querySelector('.vm')).getPropertyValue('--vm-coins').trim() };
    }

    

    _majListeA11y(visibles) {
      const n = this.querySelector('#vmA11y');
      if (!n) return;
      const lieux = (this._p.poi || []).filter(o => visibles.indexOf(o.id) >= 0);
      n.innerHTML = '<h2>' + this._esc(this._t('listeLieux')) + '</h2><ul>' +
        lieux.map(o => {
          const c = this._cat(o.cat);
          return '<li><button data-a11y="' + this._esc(o.id) + '">' + this._esc(o.nom) +
            ' <span>' + this._esc(this._libCat(c)) + (o.pmr ? ', ' + this._esc(this._t('pmr')) : '') +
            (o.horaires ? ', ' + this._esc(o.horaires) : '') + '</span></button></li>';
        }).join('') + '</ul>' +
        


        (this._flotteVive ? '<h2>' + this._esc(this._t('flotte')) + '</h2><ul>' +
          (this._p.bateaux || []).filter(x => x.nom).map(x =>
            '<li><button data-a11yb="' + this._esc(x.id) + '">' + this._esc(x.nom) +
            ' <span>' + this._esc(this._libClasse(x.classe)) +
            (x.skipper ? ', ' + this._esc(x.skipper) : '') + '</span></button></li>').join('') + '</ul>' : '');
      n.querySelectorAll('button[data-a11yb]').forEach(b =>
        b.addEventListener('click', () => this._allerBateau(b.dataset.a11yb)));
      n.querySelectorAll('button[data-a11y]').forEach(b => {
        b.addEventListener('click', () => this._ouvrirPoi(b.dataset.a11y));
         
         
        b.addEventListener('focus', () => this._echoLieu(b.dataset.a11y));
        b.addEventListener('blur', () => this._echoLieu(null));
      });
    }
    _annoncer(texte) {
      const n = this.querySelector('#vmAnnonce');
      if (!n || !texte || n.textContent === texte) return;
      n.textContent = texte;
    }

    

    



    _reglePoiLib() { return ['case', ['boolean', ['feature-state', 'sousCarte'], false], 0, 1]; }
    _apercuFamille(cle) {
      if (!this._map || !this._prete) return;
      ['poi-pt', 'poi-lib'].forEach(l => {
        if (!this._map.getLayer(l)) return;
        const p = l === 'poi-pt' ? 'icon-opacity' : 'text-opacity';
        try {
          this._map.setPaintProperty(l, p, cle
            ? ['case', ['==', ['get', 'cat'], cle], 1, 0.22]
            




            : (l === 'poi-lib' ? this._reglePoiLib() : 1));
        } catch (e) {   }
      });
    }

    


    _echoLieu(poiId) {
      if (this._echo) { this._echo.remove(); this._echo = null; }
      if (!poiId || !this._map || !this._prete) return;
      const o = (this._p.poi || []).find(x => x.id === poiId);
      if (!o) return;
      const c = this._estSurface(o) || this._estTrace(o) ? this._centre(o) : [+o.lng, +o.lat];
      if (!this._estPoint(c)) return;
      const el = document.createElement('div');
      el.className = 'vm__echo';
      el.setAttribute('aria-hidden', 'true');
      this._echo = new maplibregl.Marker({ element: el }).setLngLat(c).addTo(this._map);
    }

    












    _distanceM(a, b) {
      const R = 6371000, r = Math.PI / 180;
      const dLat = (b[1] - a[1]) * r, dLng = (b[0] - a[0]) * r;
      const x = Math.sin(dLat / 2) ** 2 +
        Math.cos(a[1] * r) * Math.cos(b[1] * r) * Math.sin(dLng / 2) ** 2;
      return Math.round(2 * R * Math.asin(Math.sqrt(x)));
    }
    _capVers(a, b) {
      const r = Math.PI / 180;
      const y = Math.sin((b[0] - a[0]) * r) * Math.cos(b[1] * r);
      const x = Math.cos(a[1] * r) * Math.sin(b[1] * r) -
                Math.sin(a[1] * r) * Math.cos(b[1] * r) * Math.cos((b[0] - a[0]) * r);
      const deg = (Math.atan2(y, x) / r + 360) % 360;
      const cles = ['capN', 'capNE', 'capE', 'capSE', 'capS', 'capSO', 'capO', 'capNO'];
      return { deg, mot: this._t(cles[Math.round(deg / 45) % 8]) };
    }
    _positionMoi() {
      if (!this._geoMarqueur) return null;
      const p = this._geoMarqueur.getLngLat();
      return [p.lng, p.lat];
    }
     
     
    










    







    _acces(o) {
      if (!o || o.cat !== 'entrees') return '';
      const e = Array.isArray(o.equipements) ? o.equipements : [];
      const entree = e.indexOf('entree') >= 0, sortie = e.indexOf('sortie') >= 0;
      if (e.indexOf('secours') >= 0 && !entree) return 'accesSecours';
      if (entree && sortie) return 'accesDeux';
      if (sortie) return 'accesSortie';
      if (entree) return 'accesEntree';
      return '';
    }
    _famillesBesoin() {
      const a = (this._p.config || {}).autourDeMoi || {};
      return Array.isArray(a.familles) && a.familles.length
        ? a.familles : ['toilettes', 'secours', 'restauration', 'services', 'entrees'];
    }
    _famillesAutour() {
       
       
      if (this._autourFamille) return [this._autourFamille];
      return this._famillesBesoin();
    }
    _voisins(moi) {
      const fam = this._famillesAutour();
      const conf = (this._p.config || {}).autourDeMoi || {};
       
       
      const total = conf.total || 8;
      const parFamille = this._autourFamille ? total : (conf.nbParFamille || 2);
      const par = {};
      (this._p.poi || []).forEach(o => {
        if (fam.indexOf(o.cat) < 0) return;
         
         
         
        if (this._autourEquip && (o.equipements || []).indexOf(this._autourEquip) < 0) return;
        const c = this._estSurface(o) || this._estTrace(o) ? this._centre(o) : [+o.lng, +o.lat];
        if (!this._estPoint(c)) return;
        (par[o.cat] = par[o.cat] || []).push({ o, c, d: this._distanceM(moi, c) });
      });
       
       
      const liste = [];
      fam.forEach(f => (par[f] || []).sort((x, y) => x.d - y.d).slice(0, parFamille).forEach(v => liste.push(v)));
      return liste.sort((x, y) => x.d - y.d).slice(0, total);
    }
    _ouvrirAutour() {
      const v = this.querySelector('#vmAutourV');
      if (!v) return;
      const moi = this._positionMoi();
      if (!moi) {
         
        this._autourEnAttente = true;
        this._localiser();
        v.innerHTML = '<div class="vm__etath"><b>' + this._esc(this._t('autourTitre')) + '</b>' +
          '<button class="vm__ux" id="vmAutourX" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button></div>' +
          '<p class="vm__vide">' + this._esc(this._t('autourLocaliser')) + '</p>';
        v.hidden = false;
        const x0 = v.querySelector('#vmAutourX'); if (x0) x0.addEventListener('click', () => this._fermerAutour());
        return;
      }
      const liste = this._voisins(moi);
      const titre = this._autourPhrase || (this._autourFamille
        ? this._t('proxTitre').replace('{f}', this._libCat(this._cat(this._autourFamille)))
        : this._t('autourTitre'));
      v.innerHTML = '<div class="vm__etath"><b>' + this._esc(titre) + '</b>' +
          '<button class="vm__ux" id="vmAutourX" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button></div>' +
        




        (liste.length ? '<ul class="vm__aul" aria-label="' + this._esc(this._t('autourTitre')) + '">' + liste.map(v2 => {
          const c = this._cat(v2.o.cat), cap = this._capVers(moi, v2.c);
          return '<li><button class="vm__auli" data-id="' + this._esc(v2.o.id) + '">' +
            '<span class="vm__aupic" style="--c:' + couleurSure(c.couleur) + '">' + svg(PICTO[c.picto] || PICTO.star, 'vm__fic') + '</span>' +
            







            '<span class="vm__aunom">' + this._esc(v2.o.nom) +
              



              (v2.o.pmr ? ' ' + svg(PICTO.pmr, 'vm__aupmr') +
                '<i class="vm__seulLu">' + this._esc(this._t('pmrCourt')) + '</i>' : '') +
              (() => { const e = this._etatOuverture(v2.o, this._jour, this._heure);
                if (!e || !e.etat || e.etat === 'inconnu') return '';
                return '<em class="vm__auetat is-' + e.etat + '">' +
                  this._esc(this._t(e.etat === 'ouvert' ? 'ouvert' : 'ferme')) + '</em>'; })() +
              '</span>' +
            '<span class="vm__audist"><b>' + this._esc(this._distanceLisible(v2.d)) + '</b>' +
              '<i style="transform:rotate(' + Math.round(cap.deg) + 'deg)" aria-hidden="true">&#8593;</i>' +
              '<em>' + this._esc(cap.mot) + '</em></span>' +
            '</button></li>';
        }).join('') + '</ul>' : '<p class="vm__vide">' + this._esc(this._t('autourVide')) + '</p>');
      v.hidden = false;
      const x = v.querySelector('#vmAutourX'); if (x) x.addEventListener('click', () => this._fermerAutour());
      v.querySelectorAll('.vm__auli').forEach(b => b.addEventListener('click', () => {
        this._tracerVers(b.dataset.id);
        this._fermerAutour();
      }));
      if (this._mesure) this._mesure.noter('autour', 'ouvert');
    }
    





    _ajusterPoignee() {
      const t = this.querySelector('#vmProgBascT');
      if (!t || !t.offsetParent) return;
      t.style.fontSize = '';
      const base = parseFloat(getComputedStyle(t).fontSize) || 11.5;
      let px = base;
      let garde = 0;
      while (t.scrollWidth > t.clientWidth + 1 && px > 9 && garde++ < 20) {
        px -= 0.5;
        t.style.fontSize = px + 'px';
      }
       
       
      t.style.letterSpacing = px < 10.5 ? '.05em' : '';
    }
    _distanceLisible(m) { return m < 1000 ? m + ' m' : (m / 1000).toFixed(1).replace('.', ',') + ' km'; }
    _fermerAutour() {
      const v = this.querySelector('#vmAutourV'); if (v) v.hidden = true;
       
       
      this._autourFamille = null;
      this._autourEquip = '';
      this._autourPhrase = '';
      this._batiOuvert = null;
    }

    

















    _ouvrirContenu(idEdifice, liste) {
      const zone = this.querySelector('#vmFiche');
      if (!zone || !liste || !liste.length) return;
      const b = this._batiParId(idEdifice);
      this._batiOuvert = idEdifice;
      



      this._poiOuvert = null;
      

      const parCat = new Map();
      liste.forEach(o => parCat.set(o.cat, (parCat.get(o.cat) || 0) + 1));
      const rangs = [...parCat.entries()].sort((x, y) => y[1] - x[1]);
      const resume = rangs.map(([cle, n]) => n + ' ' + this._libCat(this._cat(cle)).toLowerCase()).join(' · ');
      const dom = this._cat(rangs[0][0]);
      const melange = parCat.size > 1;
      const nom = this._nomBati(b);
      zone.innerHTML =
        '<button class="vm__fx" aria-label="' + this._esc(this._t('fermer')) + '">' + svg(IC.fermer) + '</button>' +
        '<div class="vm__fbody">' +
          '<span class="vm__fcat" style="--c:' + couleurSure(dom.couleur) + '">' +
            svg(PICTO[dom.picto] || PICTO.star, 'vm__fic') + this._esc(resume) + '</span>' +
          '<h3>' + this._esc(this._t('batiTitre')) + '</h3>' +
          (nom ? '<p class="vm__fsous">' + this._esc(nom) + '</p>' : '') +
          '<ul class="vm__opts">' + liste.map(o => {
            const c = this._cat(o.cat);
            const e = this._etatOuverture(o, this._jour, this._heure);
            


            const sous = [
              (e && e.etat && e.etat !== 'inconnu') ? this._t(e.etat === 'ouvert' ? 'ouvert' : 'ferme') : '',
              (melange || o.sousCat) ? (o.sousCat || this._libCat(c)) : ''
            ].filter(Boolean).join(' · ');
            return '<li><button class="vm__opt vm__batil" data-id="' + this._esc(o.id) + '">' +
              '<span class="vm__opti est-fam" style="--c:' + couleurSure(c.couleur) + '">' +
                svg(PICTO[c.picto] || PICTO.star, '') + '</span>' +
              '<span class="vm__optt"><b>' + this._esc(o.nom || o.id) + '</b>' +
                (sous ? '<em>' + this._esc(sous) + '</em>' : '') + '</span>' +
              svg(IC.chevronD, 'vm__optc') + '</button></li>';
          }).join('') + '</ul>' +
        '</div>';
      this._ouvrirPanneau();
      const x = zone.querySelector('.vm__fx');
      if (x) x.addEventListener('click', () => this._fermerFiche());
      







      zone.querySelectorAll('.vm__batil').forEach(bt => bt.addEventListener('click', () => {
        const id = bt.dataset.id;
        const o = (this._p.poi || []).find(y => y.id === id);
        this._batiOuvert = null;
        const c = o ? this._centre(o) : null;
        if (this._map && this._estPoint(c)) {
          this._map.easeTo({ center: c, zoom: Math.min(21, Math.max(this._map.getZoom() + 1.2, 19)), duration: 600 });
          this._ouvrirPoi(id, true);
        } else this._ouvrirPoi(id);
      }));
      if (this._mesure) this._mesure.noter('bati-liste', idEdifice);
    }
    _fermerContenu() { if (this._batiOuvert) this._fermerFiche(); }

    


    _tracerVers(id) {
      const o = (this._p.poi || []).find(x => x.id === id);
      const moi = this._positionMoi();
      if (!o || !moi || !this._map) return;
      const c = this._estSurface(o) || this._estTrace(o) ? this._centre(o) : [+o.lng, +o.lat];
      if (!this._estPoint(c)) return;
      const d = this._distanceM(moi, c), cap = this._capVers(moi, c);
      const data = { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: [moi, c] } };
      const src = this._map.getSource('vers');
      if (src) src.setData(data);
      else {
        this._map.addSource('vers', { type: 'geojson', data });
        this._map.addLayer({ id: 'vers-h', type: 'line', source: 'vers',
          layout: { 'line-cap': 'round' },
          paint: { 'line-color': C.surface, 'line-width': 7, 'line-opacity': .9 } });
        this._map.addLayer({ id: 'vers-l', type: 'line', source: 'vers',
          layout: { 'line-cap': 'round' },
          paint: { 'line-color': C.tealDeep, 'line-width': 3, 'line-dasharray': [1.6, 1.4] } });
      }
      this._map.fitBounds([[Math.min(moi[0], c[0]), Math.min(moi[1], c[1])],
                           [Math.max(moi[0], c[0]), Math.max(moi[1], c[1])]],
        { padding: this._paddingVolets(), duration: 800, maxZoom: 18 });
      this._mettreEnAvant(o);
      this._bandeau(o.nom, this._distanceLisible(d) + ' · ' + this._t('volDOiseau') + ' · ' + cap.mot, o.id);
      if (this._mesure) this._mesure.noter('autour', 'trace');
    }
    _effacerTrace() {
      if (!this._map) return;
      ['vers-l', 'vers-h'].forEach(l => { if (this._map.getLayer(l)) this._map.removeLayer(l); });
      if (this._map.getSource('vers')) this._map.removeSource('vers');
    }

     
    





    




    _sansSurvolTactile(css) {
      




      const ouvre = css.indexOf('>') + 1;
      const ferme = css.lastIndexOf('</style>');
      if (ouvre <= 0 || ferme < 0) return css;
      const tete = css.slice(0, ouvre), corps = css.slice(ouvre, ferme), pied = css.slice(ferme);

      





      const normal = [], survol = [];
      let prof = 0, debut = 0;
      for (let i = 0; i < corps.length; i++) {
        const c = corps[i];
        if (c === '{') prof++;
        else if (c === '}') {
          prof--;
          if (prof === 0) {
            const regle = corps.slice(debut, i + 1);
            debut = i + 1;
            const selecteur = regle.slice(0, regle.indexOf('{'));
             
             
            (selecteur.indexOf('@') < 0 && selecteur.indexOf(':hover') >= 0 ? survol : normal).push(regle);
          }
        }
      }
      if (debut < corps.length) normal.push(corps.slice(debut));
       
       
      const protege = survol.length
        ? '@media (hover:hover) and (pointer:fine){' + survol.join('') + '}'
        : '';
      return tete + normal.join('') + protege + pied;
    }
    




















    _etroitParConteneur(css) {
      const re = /@media\s*\(\s*max-width\s*:\s*(\d+)px\s*\)\s*\{/g;
      const paliers = {};
      let m, out = css;
       
      const trouves = [];
      while ((m = re.exec(css))) trouves.push({ px: +m[1], debut: m.index, apres: m.index + m[0].length });
      if (!trouves.length) return css;
      trouves.forEach(t => {
         
         
        let prof = 1, j = t.apres;
        for (; j < css.length && prof > 0; j++) {
          if (css[j] === '{') prof++;
          else if (css[j] === '}') prof--;
        }
        (paliers[t.px] = paliers[t.px] || []).push(css.slice(t.apres, j - 1));
      });
      const prefixe = (sel, cl) => sel.split(',').map(s => {
        s = s.trim();
        if (!s) return s;
         
         
        return /^\.vm(?![\w-])/.test(s) ? s.replace(/^\.vm/, '.vm.' + cl) : '.vm.' + cl + ' ' + s;
      }).join(',');
      let copie = '';
      


      Object.keys(paliers).map(Number).sort((a, b) => b - a).forEach(px => {
        const cl = 'sous-' + px;
        paliers[px].join('').replace(/([^{}]+)\{([^{}]*)\}/g, (tout, sel, corps) => {
          const s = sel.trim();
           
           
          copie += (s.charAt(0) === '@' ? tout : prefixe(s, cl) + '{' + corps + '}');
          return tout;
        });
      });
      




      this._paliersLargeur = Object.keys(paliers).map(Number).sort((a, b) => a - b);
      const ferme = out.lastIndexOf('</style>');
      return ferme < 0 ? out + copie : out.slice(0, ferme) + copie + out.slice(ferme);
    }
    


    _suivreLargeur() {
      const vm = this.querySelector('.vm');
      if (!vm || this._roLarge) return;
      const juger = () => {
        const L = vm.clientWidth, H = vm.clientHeight;
        




        if (!L || (L === this._largeurVue && H === this._hauteurVue)) return;
        const memeLargeur = L === this._largeurVue;
        this._largeurVue = L; this._hauteurVue = H;
        










        const Leff = (H > 0 && H <= 480 && L <= 1100) ? Math.min(L, 820) : L;
        const memeEff = this._largeurEff === Leff;
        this._largeurEff = Leff;
        if (!memeLargeur || !memeEff) {
          (this._paliersLargeur || []).forEach(px => vm.classList.toggle('sous-' + px, Leff <= px));
          vm.classList.toggle('est-etroit', Leff <= 820);
        }
        vm.classList.toggle('est-bas', H > 0 && H <= 480);
        








        if (H > 0) vm.style.setProperty('--vm-hv', H + 'px');
         
        this._bornerResultats();
         
        if (this._calerAttribution) this._calerAttribution();
         
         
        const doigt = vm.classList.contains('est-etroit');
        this._placerNiveaux(doigt);
         
         
        this._placerRecherche(doigt);
        






        if (this._urgenceActive()) this._majUrgence();
         
         
         
         
        if (this._map) this._map.resize();
        this._majDefileFiltres();
      };
      try {
        this._roLarge = new ResizeObserver(juger);
        this._roLarge.observe(vm);
      } catch (e) {   }
      juger();
    }
    











    _majDefileFiltres() {
      const f = this.querySelector('.vm__filtres');
      if (!f) return;
      if (!this._surRailFiltres) {
        this._surRailFiltres = () => this._majDefileFiltres();
        f.addEventListener('scroll', this._surRailFiltres, { passive: true });
      }
      const reste = f.scrollWidth - f.clientWidth;
       
       
      const debut = f.scrollLeft > 2, fin = reste > 2 && f.scrollLeft < reste - 2;
      f.classList.toggle('a-defile-g', debut);
      f.classList.toggle('a-defile-d', fin);
    }
    _css() { return this._etroitParConteneur(this._sansSurvolTactile(this._cssBrut())); }
    _cssBrut() {
      return '<style>' +
      



























      'village-map{display:block;width:100%;}' +
      '.vm{' +
        










        '--vm-ink:' + C.ink + ';--vm-ink-2:' + C.ink2 + ';--vm-ink-3:' + C.ink3 + ';' +
        '--vm-ink-t3:' + C.inkT3 + ';' +
        '--vm-encre-fond:' + C.ink + ';--vm-sur-clair:' + C.ink + ';' +
        '--vm-bg:' + C.bg + ';--vm-surface:' + C.surface + ';--vm-line:' + C.line + ';--vm-line-fort:' + C.lineFort + ';' +
        '--vm-teal:' + C.teal + ';--vm-teal-deep:' + C.tealDeep + ';--vm-teal-ink:' + C.tealInk + ';' +
        '--vm-ambre:' + C.ambre + ';--vm-direct:' + C.direct + ';--vm-direct-fonce:' + C.directFonce + ';--vm-tymal:' + C.tymal + ';' +
         
         
        '--vm-ink-fonce:' + C.ink + ';' +
        '--vm-pmr:' + C.pmr + ';--vm-pmr-clair:' + C.pmrClair + ';' +
        



        '--vm-r-card:18px 4px 14px 4px;--vm-r-ui:9px;--vm-r-btn:10px 0 10px 0;--vm-r-sel:9px 0 9px 0;' +
        '--vm-ombre:0 1px 2px rgba(10,26,53,.04),0 5px 18px rgba(10,26,53,.07);' +
        '--vm-ombre-h:0 3px 6px rgba(10,26,53,.07),0 14px 34px rgba(10,26,53,.13);' +
        








         
         
        





        '--vm-attrib:26px;' +
        '--vm-prgpeek:50px;--vm-coins:0px;--vm-coins-g:14px;--vm-coins-d:14px;--vm-bord-g:0px;--vm-bord-d:0px;--vm-bord-g-bas:0px;--vm-bord-d-bas:0px;' +
        


        



        'position:relative;width:100%;height:100%;min-height:520px;overflow:hidden;overflow:clip;' +
        'font-family:Montserrat,system-ui,sans-serif;color:var(--vm-ink);}' +
      


















      '.vm.a-nuit{' +
        '--vm-surface:' + melanger(C.ink, '#FFFFFF', .09) + ';' +
        '--vm-bg:' + melanger(C.ink, '#FFFFFF', .03) + ';' +
        '--vm-line:' + melanger(C.ink, '#FFFFFF', .20) + ';' +
        '--vm-line-fort:' + melanger(C.ink, '#FFFFFF', .30) + ';' +
        '--vm-ink:' + melanger(C.ink, '#FFFFFF', .94) + ';' +
        '--vm-ink-2:' + melanger(C.ink, '#FFFFFF', .68) + ';' +
         
         
        '--vm-ink-3:' + melanger(C.ink, '#FFFFFF', .44) + ';' +
        

        '--vm-ink-t3:' + melanger(C.ink, '#FFFFFF', .56) + ';' +
        


        '--vm-encre-fond:' + melanger(C.ink, '#FFFFFF', .24) + ';' +
        


        '--vm-ombre:0 1px 2px rgba(0,0,0,.28),0 5px 18px rgba(0,0,0,.34);' +
        '--vm-ombre-h:0 3px 6px rgba(0,0,0,.34),0 14px 34px rgba(0,0,0,.44);' +
        'color:var(--vm-ink);}' +
      


      '.vm,.vm .vm__prg,.vm .vm__barre,.vm .vm__fiche{transition:background-color .9s ease,color .9s ease,border-color .9s ease;}' +
      




      '@media (prefers-reduced-motion:reduce){.vm,.vm .vm__prg,.vm .vm__barre,.vm .vm__fiche{transition:none;}' +
        '.vm *,.vm *::before,.vm *::after{animation:none!important;transition:none!important;}}' +
      















      '@supports (background:color-mix(in srgb,red 50%,#fff)){' +
        '.vm.a-nuit .vm__f::before{background:color-mix(in srgb,var(--c,var(--vm-teal)) 68%,#fff);}' +
        '.vm.a-nuit .vm__resic,.vm.a-nuit .vm__aupic{background:color-mix(in srgb,var(--c,var(--vm-teal)) 68%,#fff);}' +
      '}' +
      

      

      '.vm__fbar{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 8px;padding:9px 11px;margin:0 0 8px;' +
        'border-left:3px solid var(--vm-ambre);border-radius:0 var(--vm-r-ui) var(--vm-r-ui) 0;background:var(--vm-bg);}' +
      '.vm__fbar b{font:800 11px Montserrat,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:var(--vm-ink);}' +
      '.vm__fbar span{font-size:11.5px;color:var(--vm-ink-2);}' +
      '.vm__fbar.is-dur{border-left-color:var(--vm-ink);}' +
      '.vm__fhe{font-weight:800;}' +
      '.vm__fhe.is-ouvert,.vm__svh.is-ouvert{color:var(--vm-teal-deep);}' +
      '.vm.a-nuit .vm__fhe.is-ouvert,.vm.a-nuit .vm__svh.is-ouvert{color:var(--vm-teal);}' +
      


      



      '.vm__fhe.is-bientot,.vm__svh.is-bientot{color:var(--vm-ink);align-self:flex-start;box-shadow:inset 0 -2px 0 var(--vm-ambre);}' +
      '.vm.a-nuit .vm__fhe.is-bientot,.vm.a-nuit .vm__svh.is-bientot{color:var(--vm-ambre);}' +
      '.vm__fhe.is-ferme,.vm__svh.is-ferme{color:var(--vm-ink-t3);}' +
      '.vm__fh span{color:var(--vm-ink-2);}' +
      '.vm__fh b+span::before{content:"·";margin:0 6px;color:var(--vm-ink-3);}' +
      '.vm *,.vm *::before,.vm *::after{box-sizing:border-box;}' +
      


      '.vm [hidden]{display:none !important;}' +
      









      '.vm__carte{position:absolute;inset:0;z-index:0;isolation:isolate;}' +
      '.vm__err{padding:20px;background:var(--vm-bg);color:var(--vm-ink);font:600 13px Montserrat,sans-serif;border-left:3px solid var(--vm-ambre);border-radius:0 var(--vm-r-ui) var(--vm-r-ui) 0;}' +
      '.vm__alerte{position:absolute;top:62px;left:56px;z-index:5;max-width:360px;padding:11px 15px;background:var(--vm-surface);color:var(--vm-ink);border-left:3px solid var(--vm-ambre);border-radius:0 var(--vm-r-ui) var(--vm-r-ui) 0;font:600 12px Montserrat,sans-serif;line-height:1.45;box-shadow:var(--vm-ombre);}' +

      










      








      '.vm.a-rech.a-rech .vm__res.vm__res button.vm__resprox,.vm__resprox{display:flex;align-items:center;gap:9px;' +
        'width:100%;min-height:44px;height:44px;' +
        'margin:4px 0 6px;padding:0 10px 0 8px;border:1px solid var(--vm-teal);' +
        'border-radius:var(--vm-r-ui);background:var(--vm-surface);box-shadow:none;' +
        'text-align:left;cursor:pointer;grid-template-columns:none;grid-template-rows:none;}' +
      '.vm__resproxi{flex:none;display:flex;align-items:center;justify-content:center;' +
        'width:26px;height:26px;border-radius:50%;background:rgba(93,191,192,.14);' +
        'color:var(--vm-teal-deep);}' +
      '.vm__resproxi svg{width:14px;height:14px;}' +
       
      '.vm.a-rech.a-rech .vm__res.vm__res .vm__resproxt,.vm__resproxt{grid-column:auto;flex:1;min-width:0;' +
        'font:700 12px Montserrat,sans-serif;letter-spacing:.01em;text-transform:none;' +
        'color:var(--vm-ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
       
      '.vm__resproxc{flex:none;width:15px;height:15px;color:var(--vm-teal-deep);' +
        'transform:rotate(180deg);}' +
      


      '.vm__facces{display:inline-flex;align-items:center;gap:5px;margin-left:6px;' +
        'padding:4px 9px 4px 7px;border-radius:var(--vm-r-sel);' +
        'background:var(--vm-bg);color:var(--vm-ink-2);' +
        'font:700 10px Montserrat,sans-serif;letter-spacing:.05em;text-transform:uppercase;' +
        'vertical-align:middle;}' +
      '.vm__facces svg{width:13px;height:13px;stroke-width:2.1;}' +
      '.vm__facces.is-deux{color:var(--vm-teal-ink);}' +
      '.vm__facces.is-deux svg{color:var(--vm-teal-deep);}' +
      '.vm__facces.is-sortie,.vm__facces.is-secours{color:var(--vm-ink);' +
        'background:rgba(240,180,41,.18);}' +
      '.vm__resrec{display:flex;align-items:center;gap:10px;width:100%;min-height:48px;padding:0 8px;' +
        'border:0;border-bottom:1px solid var(--vm-line);background:none;text-align:left;cursor:pointer;' +
        'font:500 14px Montserrat,sans-serif;color:var(--vm-ink);}' +
      '.vm__resrec svg{width:16px;height:16px;color:var(--vm-ink-3);flex:none;}' +
      '.vm__resrac{display:flex;flex-wrap:wrap;gap:8px;padding:0 8px;}' +
      '.vm__resrac button{display:flex;align-items:center;gap:8px;min-height:48px;padding:0 14px;' +
        'border:1px solid var(--vm-line);border-radius:var(--vm-r-sel);background:var(--vm-surface);' +
        'font:700 12px Montserrat,sans-serif;color:var(--vm-ink);cursor:pointer;}' +
      '.vm__resrac svg{width:17px;height:17px;color:var(--c,var(--vm-teal));flex:none;}' +

      



      '.vm__sanscarte{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;padding:24px 28px;text-align:center;background:var(--vm-bg);}' +
      '.vm__scico{width:30px;height:30px;color:var(--vm-ink-3);}' +
      '.vm__sanscarte b{max-width:30ch;color:var(--vm-ink);font:700 16px Montserrat,sans-serif;line-height:1.3;}' +
      '.vm__sanscarte span{max-width:44ch;color:var(--vm-ink-2);font:500 13px Montserrat,sans-serif;line-height:1.5;}' +
      


      '.vm__sanscarte .vm__cta{width:auto;min-width:236px;max-width:100%;margin-top:5px;padding-right:8px;}' +

      




      


      '.vm__niveaux{display:inline-flex;flex:none;padding:3px;border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);background:var(--vm-surface);box-shadow:var(--vm-ombre);}' +
      '.vm__niv{padding:7px 14px;border:0;border-radius:var(--vm-r-sel);background:transparent;color:var(--vm-ink-2);font:700 10.5px Montserrat,sans-serif;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:background .2s,color .2s;}' +
      









      '.vm__niv:not(.is-on):hover{color:var(--vm-ink);background:var(--vm-bg);}' +
      '.vm__niv.is-on{background:var(--vm-encre-fond);color:#fff;}' +
      '.vm__nivC{display:none;}' +
       
       
       
      '.vm__nivi,.vm__nivn,.vm__fsect,.vm__fok{display:none;}' +
      '.vm__niv:focus-visible{outline:2px solid var(--vm-teal-deep);outline-offset:2px;}' +
      



      '@media(max-width:1180px){' +
        '.vm__niveaux{position:absolute;top:50px;left:0;right:0;display:flex;}' +
        '.vm__niv{flex:1;min-width:0;padding:8px 4px;text-align:center;overflow:hidden;text-overflow:ellipsis;}' +
        '.vm__nivL{display:none;}.vm__nivC{display:inline;}' +
      '}' +

      

      '.vm__filtres{position:absolute;left:calc(12px + var(--vm-bord-g));bottom:calc(12px + var(--vm-coins) + env(safe-area-inset-bottom,0px));z-index:3;display:flex;flex-direction:column;gap:5px;max-height:calc(100% - 128px - var(--vm-urgent-h,0px));overflow:auto;padding:2px;}' +
      









      '.vm__fetat{position:absolute;left:calc(12px + var(--vm-bord-g));z-index:6;' +
         
        'bottom:calc(12px + var(--vm-coins) + env(safe-area-inset-bottom,0px) + 46px);' +
        'display:inline-flex;align-items:center;gap:8px;width:max-content;' +
        'max-width:calc(100% - 24px - var(--vm-bord-g));padding:5px 5px 5px 11px;' +
        'border-radius:9px 0 9px 0;background:var(--vm-encre-fond);color:#fff;' +
        'box-shadow:var(--vm-ombre);font:700 11px Montserrat,sans-serif;}' +
      '.vm__fetat[hidden]{display:none;}' +
      '.vm__fetat svg{flex:none;width:14px;height:14px;color:var(--vm-ambre);}' +
      '.vm__fetat span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
      '.vm__fetat button{flex:none;min-height:30px;padding:5px 10px;border:1px solid rgba(255,255,255,.34);' +
        'border-radius:7px 0 7px 0;background:none;color:#fff;cursor:pointer;white-space:nowrap;' +
        'font:700 9.5px Montserrat,sans-serif;letter-spacing:.06em;text-transform:uppercase;}' +
      '.vm__fetat button:hover{background:rgba(255,255,255,.15);}' +
       
      '.vm.est-etroit .vm__fetat button{min-height:36px;padding:8px 12px;}' +
       
      '.vm.a-urgence.a-urgence .vm__fetat{display:none;}' +
      '.vm.a-feuille.a-feuille .vm__fetat{display:none;}' +
      '.vm__f[hidden]{display:none;}' +
      '.vm__f{display:inline-flex;align-items:center;gap:8px;padding:7px 13px 7px 10px;border:1px solid var(--vm-line);border-radius:var(--vm-r-sel);background:var(--vm-surface);color:var(--vm-ink-2);font:700 10.5px Montserrat,sans-serif;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;box-shadow:var(--vm-ombre);transition:color .18s,border-color .18s,opacity .18s;white-space:nowrap;}' +
      '.vm__f::before{content:"";width:8px;height:8px;border-radius:50%;flex:none;background:var(--c,var(--vm-teal));box-shadow:0 0 0 2px rgba(255,255,255,.9);transition:background .18s;}' +
      '.vm__f .vm__fic{width:13px;height:13px;flex:none;color:var(--vm-ink-3);transition:color .18s;}' +
      '.vm__f.is-on{color:var(--vm-ink);border-color:var(--vm-line-fort);}' +
      '.vm__f.is-on .vm__fic{color:var(--vm-ink-2);}' +
      '.vm__f:not(.is-on){opacity:.5;}' +
      '.vm__f:not(.is-on)::before{background:transparent;box-shadow:inset 0 0 0 1.5px var(--vm-ink-3);}' +
      '.vm__f:hover{border-color:var(--vm-teal);}' +
      '.vm__f:focus-visible{outline:2px solid var(--vm-teal-deep);outline-offset:2px;}' +
       
      '.vm__f--tout,.vm__f--tout.is-on{background:var(--vm-encre-fond);color:#fff;border-color:var(--vm-encre-fond);opacity:1;padding-left:13px;}' +
      '.vm__f--tout::before{display:none;}' +
      '.vm__cuisines{display:flex;flex-wrap:wrap;gap:4px;margin:2px 0 4px;padding:6px;border:1px solid var(--vm-line);' +
        'border-radius:var(--vm-r-ui);background:var(--vm-surface);box-shadow:var(--vm-ombre);}' +
      '.vm__cuisines[hidden]{display:none;}' +
      '.vm__cuisines button{display:inline-flex;align-items:center;gap:5px;padding:5px 9px;border:1px solid var(--vm-line);' +
        'border-radius:6px;background:transparent;color:var(--vm-ink-2);font:700 9.5px Montserrat,sans-serif;' +
        'letter-spacing:.04em;text-transform:uppercase;cursor:pointer;}' +
      '.vm__cuisines button.is-on{background:var(--vm-teal-deep);border-color:var(--vm-teal-deep);color:#fff;}' +
      '.vm__cico{width:12px;height:12px;flex:none;}' +
      

      

      '.vm__classes{display:grid;grid-template-columns:1fr 1fr;width:236px;max-width:100%;box-sizing:border-box;}' +
      '.vm__classes button{justify-content:flex-start;}' +
      '.vm.est-etroit .vm__classes{width:100%;}' +
      '.vm__classes button img{width:14px;height:18px;object-fit:contain;flex:none;filter:drop-shadow(0 0 1px #fff);}' +
      '.vm__classes button.is-on{background:var(--c,var(--vm-teal-deep));border-color:var(--c,var(--vm-teal-deep));color:var(--vm-ink);}' +
      '.vm__cuis{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:2px 0 12px !important;}' +
      '.vm__cuis b{font:800 9px Montserrat,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--vm-ink-2);}' +
      '.vm__cuis span{display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:6px 2px 6px 2px;' +
        'background:var(--vm-bg);color:var(--vm-ink);font:800 9.5px Montserrat,sans-serif;letter-spacing:.05em;' +
        'text-transform:uppercase;}' +
      '.vm__pdf{margin-top:4px;padding:9px 13px;border-radius:var(--vm-r-ui);background:var(--vm-surface);color:var(--vm-ink);border:1px solid var(--vm-line);box-shadow:var(--vm-ombre);font:700 10.5px Montserrat,sans-serif;letter-spacing:.07em;text-transform:uppercase;text-decoration:none;text-align:center;}' +

      '.vm__outils{position:absolute;top:calc(12px + var(--vm-urgent-h,0px));left:56px;right:340px;z-index:3;display:flex;gap:8px;}' +
      '.vm .maplibregl-ctrl-top-left{margin-top:var(--vm-urgent-h,0px);}' +
      '.vm.est-etroit .maplibregl-ctrl-top-left{margin-top:calc(var(--vm-urgent-h,0px) + 58px);}' +
      '.vm.est-etroit.a-rech .maplibregl-ctrl-top-left{visibility:hidden;}' +
      '.vm.a-urgent .vm__prog{top:calc(var(--vm-urgent-h,0px) + 12px);}' +
      

      '.vm.a-urgent .vm__prgrange{top:calc(var(--vm-urgent-h,0px) + 12px);}' +
      '.vm__alerte{margin-top:var(--vm-urgent-h,0px);}' +
      




      '.vm__rechbt,.vm__rechx{display:none;}' +
      '.vm__rech{position:relative;flex:1;max-width:380px;}' +
      '.vm__rech input{width:100%;height:42px;padding:0 12px 0 38px;border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);background:var(--vm-surface);box-shadow:var(--vm-ombre);font:500 13px Montserrat,sans-serif;color:var(--vm-ink);}' +
      '.vm__rech input::placeholder{color:var(--vm-ink-3);}' +
      '.vm__rech input:focus{outline:none;border-color:var(--vm-teal);box-shadow:var(--vm-ombre),0 0 0 3px rgba(93,191,192,.22);}' +
      '.vm__rico{position:absolute;left:13px;top:12.5px;width:17px;height:17px;color:var(--vm-ink-3);pointer-events:none;}' +
      




      '.vm__res{position:absolute;top:48px;left:0;right:0;z-index:6;background:var(--vm-surface);border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);box-shadow:var(--vm-ombre-h);max-height:calc(var(--vm-hv,100vh) - 84px - var(--vm-coins,0px));overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;}' +
      '.vm__res button{display:flex;align-items:center;gap:10px;width:100%;padding:9px 12px;border:0;background:none;text-align:left;font:500 13px Montserrat,sans-serif;color:var(--vm-ink);cursor:pointer;}' +
      '.vm__resic{flex:none;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:var(--vm-r-sel);background:var(--c);color:var(--vm-sur-clair);}' +
      '.vm__resic svg{width:15px;height:15px;}' +
       
       
      '.vm__resic--img{width:34px;height:34px;padding:0;background:var(--vm-bg);box-shadow:inset 0 0 0 2px var(--c);overflow:hidden;}' +
      '.vm__resic--img img{width:100%;height:100%;object-fit:cover;display:block;}' +
      




      '.vm__rest{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;}' +
      '.vm__rest>b{font:600 13.5px Montserrat,sans-serif;line-height:1.25;' +
        'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
      '.vm__rest>em{display:flex;align-items:center;gap:7px;font-style:normal;' +
        'font:500 11px Montserrat,sans-serif;color:var(--vm-ink-t3);' +
        'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
       
      '.vm__reso{flex:none;display:inline-flex;align-items:center;gap:4px;' +
        'font:700 10px Montserrat,sans-serif;letter-spacing:.05em;text-transform:uppercase;' +
        'color:var(--vm-teal-deep);}' +
      '.vm__reso::before{content:"";width:5px;height:5px;border-radius:50%;background:currentColor;}' +
      '.vm__reso.is-bientot{color:var(--vm-sur-clair);}' +
      '.vm__reso.is-ferme{color:var(--vm-ink-t3);}' +
      


      




      '.vm__res button i.vm__reseq{flex:none;display:inline-flex;align-items:center;gap:5px;' +
        'margin:0;padding:2px 8px 2px 3px;border-radius:999px;background:var(--vm-bg);' +
        'font:600 10.5px Montserrat,sans-serif;font-style:normal;letter-spacing:0;' +
        'text-transform:none;color:var(--vm-teal-ink);}' +
      '.vm__reseq svg{width:13px;height:13px;stroke-width:2.1;color:var(--vm-teal-deep);}' +
      





      '.vm.a-nuit .vm__reso{color:var(--vm-teal);}' +
      '.vm.a-nuit .vm__reso.is-bientot{color:var(--vm-ambre);}' +
       
       
      '.vm.a-nuit .vm__reseq,.vm.a-nuit .vm__reseq svg{color:var(--vm-teal);}' +
      

      '.vm__resd{flex:none;font:800 14px Montserrat,sans-serif;font-style:normal;' +
        'color:var(--vm-ink-2);text-align:right;line-height:1;}' +
      '.vm__resd u{display:block;margin-top:2px;font:700 9px Montserrat,sans-serif;' +
        'text-decoration:none;letter-spacing:.08em;color:var(--vm-ink-t3);}' +
       
      



      

      '.vm__frang{position:relative;display:flex;align-items:center;}' +
      '.vm__frang .vm__f{flex:1;min-width:0;padding-right:40px;}' +
      '.vm__fplus{position:absolute;right:9px;top:50%;transform:translateY(-50%);flex:none;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;background:var(--vm-bg);color:var(--vm-ink-2);font:700 14px Montserrat,sans-serif;font-style:normal;line-height:1;cursor:pointer;transition:background .18s,color .18s;}' +
      '.vm__fplus:hover{background:var(--vm-encre-fond);color:#fff;}' +
       
       
      '.vm__res button i{margin-left:auto;flex:none;font:600 10px Montserrat,sans-serif;font-style:normal;letter-spacing:.06em;text-transform:uppercase;color:var(--vm-ink-t3);}' +
      '.vm__res button:hover{background:var(--vm-bg);}' +
       
      '.vm__res button.est-actif{background:var(--vm-bg);box-shadow:inset 3px 0 0 var(--vm-teal);}' +
      



      '.vm__res button:focus-visible{background:var(--vm-bg);outline:3px solid var(--vm-teal-deep);outline-offset:-3px;}' +
      '.vm__geo{width:42px;height:42px;flex:none;border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);background:var(--vm-surface);box-shadow:var(--vm-ombre);color:var(--vm-ink-2);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:color .18s,border-color .18s;}' +
      '.vm__geo:hover{color:var(--vm-ink);border-color:var(--vm-teal);}' +
      '.vm__geo.is-on{background:var(--vm-encre-fond);border-color:var(--vm-encre-fond);color:var(--vm-teal);}' +
      '.vm__geo.is-busy{opacity:.55;}' +
      '.vm__gico{width:19px;height:19px;}' +

      




      





      '.vm__prog{position:absolute;top:12px;right:12px;max-height:calc(100% - 24px - var(--vm-coins) - var(--vm-urgent-h,0px));width:330px;z-index:3;background:var(--vm-surface);border:1px solid var(--vm-line);border-radius:var(--vm-r-card);box-shadow:0 8px 34px rgba(10,26,53,.16);display:flex;flex-direction:column;overflow:hidden;}' +
      '.vm__proghead{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:15px 16px;background:var(--vm-encre-fond);color:#fff;font:800 13px Montserrat,sans-serif;letter-spacing:.1em;}' +
      '.vm__jnav{width:28px;height:28px;border:0;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s;}' +
      '.vm__jnav:hover{background:rgba(255,255,255,.3);}' +
      '.vm__jnav svg{width:15px;height:15px;}' +

       
      '.vm__heure{padding:11px 16px 9px;border-bottom:1px solid var(--vm-line);background:var(--vm-bg);}' +
      '.vm__heure input{width:100%;margin:0;accent-color:var(--vm-teal-deep);cursor:pointer;}' +
      '.vm__heureb{display:flex;align-items:center;justify-content:space-between;margin-top:5px;font:800 12px Montserrat,sans-serif;color:var(--vm-ink);letter-spacing:.04em;}' +
      '.vm__hnow{padding:4px 10px;border:1px solid var(--vm-line-fort);border-radius:var(--vm-r-ui);background:var(--vm-surface);color:var(--vm-ink-2);font:700 9.5px Montserrat,sans-serif;letter-spacing:.09em;text-transform:uppercase;cursor:pointer;transition:color .18s,border-color .18s;}' +
      '.vm__hnow:hover{color:var(--vm-ink);border-color:var(--vm-teal);}' +

      '.vm__proglist{flex:1;overflow:auto;padding:10px;}' +
      '.vm__ev:focus-visible{outline:3px solid var(--vm-teal-deep);outline-offset:-3px;}' +
      '.vm__ev{position:relative;padding:12px 12px 12px 14px;border:1px solid var(--vm-line);border-left:3px solid var(--c,var(--vm-teal));background:var(--vm-surface);border-radius:0 var(--vm-r-ui) var(--vm-r-ui) 0;margin-bottom:8px;cursor:pointer;transition:box-shadow .2s,transform .2s,opacity .2s;}' +
      '.vm__ev:hover{box-shadow:var(--vm-ombre-h);transform:translateX(2px);}' +
       
      '.vm__ev.is-passe{opacity:.45;}' +
      '.vm__ev.is-encours{border-color:var(--vm-teal);box-shadow:0 0 0 1px var(--vm-teal),var(--vm-ombre);}' +
      '.vm__evh{display:flex;align-items:center;gap:8px;font:800 11px Montserrat,sans-serif;color:var(--vm-ink-2);letter-spacing:.05em;}' +
      '.vm__direct{display:inline-flex;align-items:center;gap:5px;padding:2px 7px;border-radius:20px;background:var(--vm-teal-deep);color:#fff;font:800 8.5px Montserrat,sans-serif;font-style:normal;letter-spacing:.1em;text-transform:uppercase;}' +
      '.vm__direct::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--vm-ambre);animation:vm-bat 1.6s ease-in-out infinite;}' +
      '@keyframes vm-bat{0%,100%{opacity:1}50%{opacity:.25}}' +
      '.vm__ev h4{margin:6px 0 4px;font:800 13.5px Montserrat,sans-serif;text-transform:uppercase;font-style:italic;line-height:1.2;}' +
      '.vm__ev p{margin:0 0 7px;font:400 12px Montserrat,sans-serif;color:var(--vm-ink-2);line-height:1.45;}' +
      '.vm__evlieu{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:6px 2px 6px 2px;background:var(--vm-bg);color:var(--vm-ink-2);font:800 9.5px Montserrat,sans-serif;letter-spacing:.06em;}' +
      '.vm__evico{width:11px;height:11px;}' +
      '.vm__vide{padding:16px 12px;color:var(--vm-ink-2);font:400 13px Montserrat,sans-serif;}' +
      

      '.vm__rest mark{background:var(--vm-ambre);color:var(--vm-sur-clair);border-radius:3px;padding:0 1px;}' +
       
      '.vm__resplus{padding:9px 12px 11px;border-top:1px solid var(--vm-line);' +
        'color:var(--vm-ink-t3);font:600 11px Montserrat,sans-serif;}' +
      




      '.vm__resh{margin:12px 12px 5px;font:800 10px Montserrat,sans-serif;letter-spacing:.12em;' +
        'text-transform:uppercase;color:var(--vm-ink-t3);}' +
      '.vm__res .vm__resh:first-child{margin-top:8px;}' +

      



      









      


      






      '.vm__cta{display:inline-flex;box-sizing:border-box;align-items:center;justify-content:flex-start;gap:11px;width:100%;max-width:100%;min-height:48px;padding:0 8px 0 18px;border:2px solid var(--vm-ink);border-radius:var(--vm-r-btn);background:transparent;color:var(--vm-ink);font:600 13.5px Montserrat,sans-serif;letter-spacing:.005em;text-align:left;text-decoration:none;cursor:pointer;transition:background .2s,color .2s,border-color .2s;}' +
      '.vm__cta:hover{background:var(--vm-bg);}' +
      



      '.vm__cta>span:not(.vm__ctaic){flex:1;min-width:0;}' +
      '.vm__ctat{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left;}' +
      




      '.vm__ctaic{display:flex;align-items:center;justify-content:center;width:32px;height:32px;flex:none;margin-left:auto;border-radius:50%;background:var(--past-fond,currentColor);transition:background .2s,color .2s,transform .2s;}' +
      '.vm__ctaic svg{width:16px;height:16px;stroke-width:2.1;}' +
      




      







      '.vm__ctaic svg{color:var(--vm-surface);}' +
      '.vm__cta--fort .vm__ctaic svg{color:var(--past-glyphe,#fff);}' +
      '.vm__cta:hover .vm__ctaic{transform:translateX(2px);}' +
      



      






      '.vm__cta--fort{background:var(--vm-teal-deep);border-color:var(--vm-teal-deep);color:#fff;box-shadow:0 2px 0 var(--vm-teal-ink),0 6px 16px rgba(0,103,110,.28);font-weight:700;}' +
      '.vm__cta--fort{--past-fond:#fff;--past-glyphe:var(--vm-teal-ink);}' +
      '.vm__cta--fort:active{transform:translateY(2px);box-shadow:0 0 0 var(--vm-teal-ink),0 3px 10px rgba(0,103,110,.24);}' +
      '.vm__cta--fort:hover{background:var(--vm-teal-ink);border-color:var(--vm-teal-ink);}' +
      '.vm__cta--moyen{border-color:var(--vm-ink);color:var(--vm-ink);}' +
      '.vm__cta--moyen .vm__ctaic{color:var(--vm-ink);}' +
      '.vm__cta--moyen:hover{background:var(--vm-bg);}' +
      '.vm__cta--doux{border-color:var(--vm-line-fort);color:var(--vm-ink-2);}' +
      '.vm__cta--doux .vm__ctaic{color:var(--vm-ink-2);}' +
      '.vm__cta--doux:hover{border-color:var(--vm-ink-2);background:var(--vm-bg);}' +
      





      '.vm__cta--fort:hover .vm__ctaic{transform:translateX(3px);}' +
      '.vm__prgbasc{display:none;}' +
       
       
      





      '.vm__progall{margin:12px;width:calc(100% - 24px);}' +

      

       
      '.vm__charge{position:absolute;inset:0;z-index:12;display:flex;flex-direction:column;align-items:center;' +
        'justify-content:center;gap:12px;padding:28px;text-align:center;background:var(--vm-bg);' +
        'transition:opacity .3s;}' +
      '.vm__charge[hidden]{display:none;}' +
      '.vm__charge--parti{opacity:0;pointer-events:none;}' +
      '.vm__spin{width:34px;height:34px;border:3px solid var(--vm-line);border-top-color:var(--vm-teal-deep);' +
        'border-radius:50%;animation:vm-tourne 1s linear infinite;}' +
      '@keyframes vm-tourne{to{transform:rotate(360deg)}}' +
      '@media(prefers-reduced-motion:reduce){.vm__spin{animation-duration:2.4s;}}' +
      '.vm__chargeT{margin:0;font:800 13px Montserrat,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--vm-ink);}' +
      '.vm__chargeS{margin:0;max-width:320px;font:400 12.5px Montserrat,sans-serif;color:var(--vm-ink-2);line-height:1.5;}' +
      '.vm__chargeS:empty{display:none;}' +
      '.vm__chargeB{margin-top:6px;}' +
      '.vm__chargeB[hidden]{display:none;}' +
       
      '.vm__etat{display:inline-flex;align-items:center;gap:7px;margin-bottom:5px;' +
        'padding:8px 13px;border:1px solid var(--vm-line);border-radius:20px;background:var(--vm-surface);' +
        'color:var(--vm-ink-2);font:700 10.5px Montserrat,sans-serif;letter-spacing:.05em;cursor:pointer;' +
        'box-shadow:var(--vm-ombre);white-space:nowrap;}' +
      '.vm__etat[hidden]{display:none;}' +
      '.vm__etat:hover{border-color:var(--vm-teal);color:var(--vm-ink);}' +
      '.vm__etat--vieux{background:var(--vm-ambre);border-color:var(--vm-ambre);color:var(--vm-sur-clair);}' +
      '.vm__eico{width:14px;height:14px;flex:none;}' +
      


      '.vm__etatv{position:absolute;left:calc(12px + var(--vm-bord-g,0px));' +
        'bottom:calc(var(--vm-coins,14px) + 12px + env(safe-area-inset-bottom,0px));' +
        'z-index:14;width:min(330px,calc(100% - 24px));' +
        'padding:14px 16px;background:var(--vm-surface);border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);' +
        'box-shadow:var(--vm-ombre-h);font:400 12px Montserrat,sans-serif;color:var(--vm-ink-2);line-height:1.5;}' +
      '.vm__etatv[hidden]{display:none;}' +
      '.vm__etath{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:8px;}' +
      '.vm__etath b{font:800 11px Montserrat,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:var(--vm-ink);}' +
      '.vm__etatv p{margin:0 0 9px;}' +
      '.vm__vigilance{display:flex;gap:8px;padding:9px 11px;border-left:3px solid var(--vm-ambre);' +
        'border-radius:0 var(--vm-r-ui) var(--vm-r-ui) 0;background:var(--vm-bg);color:var(--vm-ink);font-weight:600;}' +
      '.vm__etatd{font-size:11.5px;}' +
      '.vm__etatd b{color:var(--vm-ink);}' +
      '.vm__reessai{width:100%;}' +
      '.vm__urgent--perime{background:var(--vm-bg);color:var(--vm-ink-2);border-bottom:1px solid var(--vm-line);}' +
      











      '.vm__urgence{position:absolute;top:0;left:0;right:0;z-index:9;' +
        'padding:14px 16px calc(14px + env(safe-area-inset-bottom,0px));' +
        'background:var(--vm-encre-fond);color:#fff;border-bottom:4px solid var(--vm-ambre);' +
        'box-shadow:0 10px 30px rgba(10,26,53,.35);max-height:62%;overflow:auto;}' +
      '.vm__urgt{display:flex;align-items:flex-start;gap:12px;}' +
      '.vm__urgi{flex:none;width:26px;height:26px;color:var(--vm-ambre);}' +
      '.vm__urgt b{display:block;font:800 15px Montserrat,sans-serif;letter-spacing:.02em;}' +
      '.vm__urgt span{display:block;margin-top:4px;font:500 12.5px Montserrat,sans-serif;' +
        'color:rgba(255,255,255,.86);line-height:1.45;}' +
       
      '.vm__urgl{list-style:none;margin:13px 0 0;padding:0;display:flex;flex-direction:column;gap:7px;}' +
      '.vm__urgl button{display:flex;align-items:center;gap:11px;width:100%;padding:9px 11px;border:0;' +
        'border-radius:10px 0 10px 0;background:rgba(255,255,255,.10);color:#fff;cursor:pointer;text-align:left;}' +
      '.vm__urgl button:hover{background:rgba(255,255,255,.18);}' +
      '.vm__urgl i{flex:none;display:flex;align-items:center;justify-content:center;width:34px;height:34px;' +
        'border-radius:9px 0 9px 0;color:var(--vm-sur-clair);}' +
      '.vm__urgl i svg{width:19px;height:19px;stroke-width:2;}' +
      '.vm__urgl b{display:block;font:700 13px Montserrat,sans-serif;}' +
      '.vm__urgl em{display:block;font:600 11px Montserrat,sans-serif;font-style:normal;color:var(--vm-ambre);}' +
      '.vm__urga{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;}' +
      




      '.vm__urga button{display:flex;align-items:center;justify-content:center;gap:7px;' +
        'min-height:44px;padding:9px 15px;border:1px solid rgba(255,255,255,.34);' +
        'border-radius:9px 0 9px 0;background:none;color:#fff;font:700 10.5px Montserrat,sans-serif;' +
        'letter-spacing:.06em;text-transform:uppercase;cursor:pointer;}' +
      '.vm__urga button:hover{background:rgba(255,255,255,.14);}' +
      '.vm__urga svg{width:15px;height:15px;}' +
      





      


      



      '.vm.est-bas.est-bas .vm__outils{flex-direction:row;align-items:flex-start;right:10px;left:auto;}' +
      '.vm.est-bas.est-bas .vm__rech{right:260px;}' +
      '.vm.est-bas .vm__prgbasc{min-height:42px;padding-top:6px;padding-bottom:6px;}' +
      '.vm.est-bas .vm__urgence{right:auto;bottom:0;width:min(58%,460px);max-height:100%;' +
        'border-bottom:0;border-right:4px solid var(--vm-ambre);' +
        'box-shadow:10px 0 30px rgba(10,26,53,.35);}' +
      '.vm.est-bas .vm__urgt b{font-size:14px;}' +
      '.vm.est-bas .vm__urgt span{font-size:11.5px;}' +
      '.vm.est-bas .vm__urgl{margin-top:10px;gap:6px;}' +
      '.vm.est-bas .vm__urgl button{padding:7px 10px;}' +
      '.vm.est-bas .vm__urga{margin-top:10px;}' +
       
      '.vm.a-urgence.a-urgence.est-bas .vm__outils{top:12px;left:calc(var(--vm-urgence-l,0px) + 12px);}' +
      


      





      '.vm.a-urgence.a-urgence .vm__prog,.vm.a-urgence.a-urgence .vm__filtres,' +
        '.vm.a-urgence.a-urgence .vm__niveaux,.vm.a-urgence.a-urgence .vm__rech,' +
        '.vm.a-urgence.a-urgence .vm__rechbt,.vm.a-urgence.a-urgence .vm__urgent,' +
        '.vm.a-urgence.a-urgence .vm__typan,.vm.a-urgence.a-urgence .vm__bandeau,' +
        '.vm.a-urgence.a-urgence .vm__logo,.vm.a-urgence.a-urgence .vm__prgbasc,' +
        


        






        '.vm.a-urgence.a-urgence .vm__feuilv,.vm.a-urgence.a-urgence .vm__fok,' +
        '.vm.a-urgence.a-urgence .vm__depart,.vm.a-urgence.a-urgence .vm__mode,' +
        '.vm.a-urgence.a-urgence .vm__pont,.vm.a-urgence.a-urgence .vm__tymal{display:none;}' +
       
      '.vm.a-urgence.a-urgence .vm__outils{top:calc(var(--vm-urgence-h,150px) + 12px);}' +
      




      '.vm.a-rech .vm__urgent{display:none;}' +
      '.vm__urgent{position:absolute;top:0;left:0;right:0;z-index:8;display:flex;align-items:center;gap:11px;' +
        'padding:11px 14px;background:var(--vm-ambre);color:var(--vm-sur-clair);' +
        'font:600 12.5px Montserrat,sans-serif;line-height:1.4;box-shadow:0 3px 14px rgba(10,26,53,.16);}' +
      '.vm__urgent[hidden]{display:none;}' +
      '.vm__urgent b{font-weight:800;letter-spacing:.06em;text-transform:uppercase;font-size:10.5px;margin-right:4px;}' +
      '.vm__urgent span{flex:1;}' +
      '.vm__uico{width:18px;height:18px;flex:none;}' +
      '.vm__ux{width:26px;height:26px;flex:none;border:0;border-radius:50%;background:rgba(10,26,53,.12);' +
        'color:var(--vm-ink);cursor:pointer;display:flex;align-items:center;justify-content:center;}' +
      '.vm__ux svg{width:13px;height:13px;}' +
       
      '.vm__hl{position:relative;}' +
      '.vm__hl i{position:absolute;bottom:-3px;right:-3px;padding:1px 4px;border-radius:20px;background:var(--vm-encre-fond);' +
        'color:#fff;font:800 8px Montserrat,sans-serif;font-style:normal;}' +
      '.vm__hl i:empty{display:none;}' +
      '.vm__hl.is-busy{opacity:.7;}' +
      '.vm__hl.is-on{background:var(--vm-teal-deep);border-color:var(--vm-teal-deep);color:#fff;}' +
      '.vm__pj{display:inline-flex;align-items:center;gap:8px;margin-bottom:5px;padding:8px 12px;' +
        'border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);background:var(--vm-surface);' +
        'color:var(--vm-ink-2);font:700 10.5px Montserrat,sans-serif;letter-spacing:.06em;text-transform:uppercase;' +
        'cursor:pointer;box-shadow:var(--vm-ombre);white-space:nowrap;transition:background .18s,color .18s;}' +
      '.vm__pj:hover{border-color:var(--vm-teal);color:var(--vm-ink);}' +
      '.vm__pj.is-on{background:var(--vm-teal-deep);border-color:var(--vm-teal-deep);color:#fff;}' +
      '.vm__pj b{margin-left:auto;padding:2px 7px;border-radius:20px;background:var(--vm-bg);color:var(--vm-ink-2);' +
        'font:800 9.5px Montserrat,sans-serif;}' +
      '.vm__pj.is-on b{background:rgba(255,255,255,.24);color:#fff;}' +
      '.vm__pj--vide{opacity:.55;}' +
      '.vm__pjico{width:14px;height:14px;flex:none;}' +
       
      '.vm__pjc{display:none;}' +
      



      '.vm__filtres.a-defile-d{-webkit-mask-image:linear-gradient(to right,#000 calc(100% - 34px),transparent);' +
        'mask-image:linear-gradient(to right,#000 calc(100% - 34px),transparent);}' +
      '.vm__filtres.a-defile-g{-webkit-mask-image:linear-gradient(to left,#000 calc(100% - 34px),transparent);' +
        'mask-image:linear-gradient(to left,#000 calc(100% - 34px),transparent);}' +
      '.vm__filtres.a-defile-g.a-defile-d{-webkit-mask-image:linear-gradient(to right,transparent,#000 34px,#000 calc(100% - 34px),transparent);' +
        'mask-image:linear-gradient(to right,transparent,#000 34px,#000 calc(100% - 34px),transparent);}' +
       
      '.vm__acc{display:none;}' +
      '.vm__plusF{display:none;}' +
      '.vm__accn{position:absolute;top:-2px;right:-2px;min-width:17px;height:17px;padding:0 4px;' +
        'display:flex;align-items:center;justify-content:center;border-radius:9px;' +
        'background:var(--vm-teal-deep,var(--vm-teal-ink));color:#fff;' +
        'font:800 9.5px Montserrat,sans-serif;font-style:normal;}' +
      '.vm__ftete{display:flex;gap:4px;margin-bottom:3px;}' +
      

      '.vm__ffam{display:contents;}' +
      '.vm__ftete .vm__f--tout{flex:1;}' +
      '.vm__raz{padding:7px 11px;border:1px solid var(--vm-line);border-radius:var(--vm-r-sel);background:var(--vm-surface);' +
        'color:var(--vm-ink-2);font:700 10px Montserrat,sans-serif;letter-spacing:.05em;text-transform:uppercase;' +
        'cursor:pointer;box-shadow:var(--vm-ombre);white-space:nowrap;}' +
      '.vm__raz:hover{color:var(--vm-ink);border-color:var(--vm-teal);}' +
      '.vm__f--absent{opacity:.45;}' +
       
      '.vm__tri{display:flex;gap:3px;padding:8px 12px;background:var(--vm-bg);border-bottom:1px solid var(--vm-line);}' +
      '.vm__tri button{flex:1;padding:6px 4px;border:1px solid transparent;border-radius:var(--vm-r-sel);background:transparent;' +
        'color:var(--vm-ink-2);font:700 9.5px Montserrat,sans-serif;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;}' +
      '.vm__tri button.on{background:var(--vm-surface);border-color:var(--vm-line);color:var(--vm-ink);}' +
      '.vm__inter{margin:12px 2px 6px;font:800 9.5px Montserrat,sans-serif;letter-spacing:.1em;' +
        'text-transform:uppercase;color:var(--vm-ink-2);}' +
      '.vm__inter:first-child{margin-top:2px;}' +
       
      '.vm__statut{padding:2px 7px;border-radius:20px;background:var(--vm-direct-fonce);color:#fff;' +
        'font:800 8.5px Montserrat,sans-serif;font-style:normal;letter-spacing:.09em;text-transform:uppercase;}' +
      '.vm__ev.st-annule h4,.vm__ev.st-annule .vm__evh{text-decoration:line-through;}' +
      



      '.vm__fanst{flex:none;margin-left:auto;padding:2px 7px;border-radius:20px;background:var(--vm-direct-fonce);color:#fff;' +
        'font:800 8.5px Montserrat,sans-serif;font-style:normal;letter-spacing:.09em;text-transform:uppercase;white-space:nowrap;}' +
      '.vm__fan:has(.st-annule) span{text-decoration:line-through;}' +
      '.vm__ev.st-annule,.vm__ev.st-complet{opacity:.62;}' +
      '.vm__ev.is-vu{box-shadow:0 0 0 2px var(--vm-teal),var(--vm-ombre-h);}' +
      '.vm__tstatut{background:var(--vm-direct-fonce) !important;color:#fff !important;}' +
      



      '.vm__retour .vm__opti{color:var(--vm-ink-2);}' +
      









      '.vm__mode{position:absolute;left:50%;bottom:calc(20px + var(--vm-coins) + env(safe-area-inset-bottom,0px));' +
        'transform:translateX(-50%);z-index:5;display:flex;align-items:center;gap:9px;padding:10px 18px 10px 15px;' +
        'background:var(--vm-teal-ink);color:#fff;border-radius:22px;box-shadow:var(--vm-ombre-h);' +
        'font:800 11px Montserrat,sans-serif;letter-spacing:.11em;text-transform:uppercase;white-space:nowrap;' +
        'animation:vm-apparait .28s cubic-bezier(.22,.61,.36,1);pointer-events:none;}' +
      '.vm__modeic{flex:none;width:16px;height:16px;color:var(--vm-ambre);}' +
      '.vm__mode[hidden]{display:none;}' +
      '@keyframes vm-apparait{from{opacity:0;transform:translate(-50%,-8px)}to{opacity:1;transform:translate(-50%,0)}}' +
      '.vm__bandeau{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(22px + var(--vm-coins) + env(safe-area-inset-bottom,0px));z-index:4;display:flex;align-items:center;gap:14px;max-width:min(560px,80%);padding:12px 12px 12px 18px;background:var(--vm-surface);border-radius:var(--vm-r-btn);box-shadow:var(--vm-ombre-h);}' +
      '.vm__bandeau--ouvrable{cursor:pointer;}' +
      

      '.vm__typan{position:absolute;left:50%;transform:translateX(-50%);' +
        'bottom:calc(22px + var(--vm-coins) + env(safe-area-inset-bottom,0px));z-index:6;' +
        'display:flex;align-items:flex-start;gap:13px;width:min(420px,calc(100% - 24px));' +
        'padding:13px 14px 14px 15px;background:var(--vm-surface);border-radius:var(--vm-r-card);' +
        'box-shadow:var(--vm-ombre-h);border-left:3px solid var(--vm-tymal);}' +
      '.vm__typic{flex:none;display:flex;align-items:center;justify-content:center;width:38px;height:38px;' +
        'border-radius:50%;background:var(--vm-tymal);color:var(--vm-sur-clair);}' +
      '.vm__typic svg{width:22px;height:22px;}' +
      '.vm__tytxt{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1;}' +
      '.vm__tytxt b{font-family:\'Varien\',Montserrat,sans-serif;font-style:italic;font-weight:800;' +
        'font-size:15px;text-transform:uppercase;letter-spacing:.02em;color:var(--vm-ink);}' +
      '.vm__tyou{font:700 12px Montserrat,sans-serif;font-style:normal;color:var(--vm-teal-deep);}' +
      '.vm.a-nuit .vm__tyou{color:var(--vm-teal);}' +
      '.vm__tyou.est-vieux{color:var(--vm-ink-2);}' +
      '.vm__tytxt em{font:500 12px Montserrat,sans-serif;font-style:normal;color:var(--vm-ink-2);}' +
      '.vm__tytxt u{margin-top:3px;font:500 11px Montserrat,sans-serif;text-decoration:none;color:var(--vm-ink-t3);line-height:1.4;}' +
      '.vm__tyx{flex:none;width:28px;height:28px;margin:-3px -4px 0 0;padding:0;border:0;border-radius:50%;' +
        'background:none;color:var(--vm-ink-3);cursor:pointer;display:flex;align-items:center;justify-content:center;}' +
      '.vm__tyx svg{width:14px;height:14px;}' +
      




      '.vm__bandeau strong{font-family:\'Varien\',Montserrat,sans-serif;font-style:italic;font-weight:800;font-size:15px;text-transform:uppercase;letter-spacing:.02em;flex:none;white-space:nowrap;}' +
      '.vm__bandeau span{font:500 12.5px Montserrat,sans-serif;color:var(--vm-ink-2);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
      '.vm__bx{margin-left:auto;width:26px;height:26px;border:0;border-radius:50%;background:var(--vm-bg);color:var(--vm-ink-2);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none;}' +
      '.vm__bx svg{width:14px;height:14px;}' +

      










      


      '.vm__voile{position:absolute;inset:0;z-index:16;display:flex;align-items:flex-start;justify-content:flex-end;pointer-events:none;}' +
      '.vm__voile[hidden]{display:none;}' +
       
      '.vm.a-fiche:not(.est-etroit) .vm__prog{visibility:hidden;opacity:0;transition:opacity .18s,visibility .18s;}' +
      


      '.vm__fiche{position:relative;pointer-events:auto;width:min(clamp(360px,28vw,440px),100%);max-height:calc(100% - 24px);overflow:auto;' +
        









        'background:var(--vm-surface);border-radius:var(--vm-r-card);' +
        'box-shadow:0 8px 34px rgba(10,26,53,.16),0 1px 2px rgba(10,26,53,.06);margin:12px 12px 12px 0;' +
        'animation:vm-panneau .22s cubic-bezier(.22,.61,.36,1);}' +
      '@keyframes vm-panneau{from{transform:translateX(22px);opacity:0}to{transform:none;opacity:1}}' +
      '@media(prefers-reduced-motion:reduce){.vm__fiche{animation:none;}}' +
      '.vm__fx{position:absolute;top:12px;right:12px;z-index:2;width:32px;height:32px;border:0;border-radius:50%;background:rgba(255,255,255,.94);color:var(--vm-sur-clair);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:var(--vm-ombre);}' +
      '.vm__fx svg{width:16px;height:16px;}' +
      '.vm__fimg{width:100%;height:230px;object-fit:cover;object-position:50% 30%;display:block;}' +
       
      '.vm__fhero{position:relative;flex:none;}' +
      '.vm__fhero--classe{height:150px;background:linear-gradient(135deg,var(--c,#5DBFC0),rgba(255,255,255,.35));}' +
      '.vm__fherof{position:absolute;right:26px;top:22px;height:100px;width:auto;filter:drop-shadow(0 0 1px #fff) drop-shadow(0 4px 10px rgba(10,26,53,.25));}' +
      '.vm__fskip{display:flex;align-items:center;gap:12px;margin:2px 0 12px;}' +
      

      '.vm__fskip--grand{align-items:flex-end;gap:14px;margin:0 0 10px;}' +
      '.vm__fbody--chevauche .vm__fskip--grand{margin-top:-56px;}' +
      '.vm__fportw{position:relative;flex:none;}' +
      '.vm__fskip--grand .vm__fport{width:96px;height:96px;box-shadow:0 0 0 3px var(--vm-surface),0 6px 16px rgba(10,26,53,.28);}' +
      '.vm__fpin{position:absolute;right:-10px;bottom:-2px;width:30px;height:38px;object-fit:contain;filter:drop-shadow(0 0 1px #fff) drop-shadow(0 2px 4px rgba(10,26,53,.35));}' +
      '.vm__fskip--grand .vm__fskipt{padding-bottom:6px;}' +
      '.vm__fskip--grand .vm__fskipt b{font-size:16px;}' +
       
      '.vm__fclasse{display:flex;align-items:center;gap:14px;flex:none;padding:22px 24px 18px;background:linear-gradient(135deg,var(--c,#5DBFC0),rgba(255,255,255,.35));}' +
      '.vm__fclassf{width:52px;height:66px;object-fit:contain;filter:drop-shadow(0 0 1px #fff) drop-shadow(0 4px 8px rgba(10,26,53,.3));}' +
      '.vm__fclassi{width:40px;height:40px;color:var(--vm-ink);}' +
      '.vm__fclasst{display:flex;flex-direction:column;gap:2px;}' +
      '.vm__fclasst b{font-family:\'Varien\',Montserrat,sans-serif;font-style:italic;font-weight:800;font-size:22px;text-transform:uppercase;line-height:1.1;color:var(--vm-ink);}' +
      '.vm__fclasst em{font:700 11px Montserrat,sans-serif;font-style:normal;letter-spacing:.06em;text-transform:uppercase;color:var(--vm-ink-2);}' +
      '.vm__fbatv{flex:none;width:40px;height:40px;border-radius:50%;object-fit:cover;background:var(--vm-bg);box-shadow:0 0 0 2px var(--vm-surface),0 2px 6px rgba(10,26,53,.2);}' +
      '.vm__fport{flex:none;width:52px;height:52px;border-radius:50%;object-fit:cover;background:var(--vm-bg);box-shadow:0 0 0 2px var(--vm-surface),0 2px 8px rgba(10,26,53,.22);}' +
      '.vm__fport--vide{display:flex;align-items:center;justify-content:center;color:var(--vm-ink-3);}' +
      '.vm__fport--vide svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}' +
      '.vm__fskipt{display:flex;flex-direction:column;gap:2px;min-width:0;}' +
      '.vm__fskipt b{font:800 14px Montserrat,sans-serif;color:var(--vm-ink);}' +
      '.vm__fskipt em{display:inline-flex;align-items:center;gap:6px;font:600 11px Montserrat,sans-serif;font-style:normal;color:var(--vm-ink-t3);}' +
      '.vm__fskipt em img{width:18px;height:12px;object-fit:cover;border-radius:2px;box-shadow:0 0 0 1px var(--vm-line);}' +
      '.vm__fspecs{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 12px;padding:0;list-style:none;}' +
      '.vm__fspecs li{padding:6px 10px;border-radius:7px;background:var(--vm-bg);font:600 11.5px Montserrat,sans-serif;color:var(--vm-ink);}' +
      '.vm__fspecs b{display:block;margin-bottom:1px;font:800 8.5px Montserrat,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:var(--vm-ink-t3);}' +
      '.vm__fcit{margin:0 0 12px;padding:8px 12px;border-left:3px solid var(--c,var(--vm-teal));font:italic 500 13px/1.5 Montserrat,sans-serif;color:var(--vm-ink-2);}' +
      '.vm__fbody{padding:20px 24px 24px;}' +
      



      '.vm__fgal{display:flex;gap:6px;margin:-8px -24px 14px;padding:0 24px 6px;overflow-x:auto;scroll-snap-type:x proximity;scrollbar-width:none;-webkit-overflow-scrolling:touch;}' +
      '.vm__fgal::-webkit-scrollbar{display:none;}' +
      '.vm__fgv{flex:none;width:72px;height:54px;margin:0;padding:0;border:2px solid transparent;border-radius:8px;overflow:hidden;background:var(--vm-bg);cursor:pointer;scroll-snap-align:start;transition:border-color .15s;}' +
      '.vm__fgv img{width:100%;height:100%;object-fit:cover;display:block;}' +
      '.vm__fgv.est-active{border-color:var(--vm-teal-deep);}' +
      '.vm__fgv:focus-visible{outline:2px solid var(--vm-teal-deep);outline-offset:2px;}' +
      

      '.vm__flogo{float:right;width:56px;height:56px;margin:-4px 0 8px 14px;padding:4px;object-fit:contain;border-radius:12px;background:#fff;border:1px solid var(--vm-line);box-shadow:var(--vm-ombre);}' +
      '.vm__fcat{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:6px 2px 6px 2px;background:var(--vm-bg);color:var(--vm-ink-2);font:800 9.5px Montserrat,sans-serif;letter-spacing:.1em;text-transform:uppercase;}' +
      '.vm__fcat .vm__fic{width:12px;height:12px;color:var(--c,var(--vm-teal-deep));}' +
      '.vm__fbody p.vm__fsub{margin:-2px 0 12px;color:var(--vm-ink-2);font:600 12.5px Montserrat,sans-serif;line-height:1.5;}' +
      '.vm__fbody .vm__fflotte{margin-top:0;padding-top:2px;border-top:0;}' +
      '.vm__fbody h3{margin:10px 0 8px;font-family:\'Varien\',Montserrat,sans-serif;font-style:italic;font-weight:800;font-size:24px;text-transform:uppercase;line-height:1.12;}' +
      '.vm__fbody p{margin:0 0 10px;font:400 13.5px Montserrat,sans-serif;color:var(--vm-ink-2);line-height:1.6;}' +
      


      '.vm__fh,.vm__flieu{display:flex;align-items:center;gap:8px;margin:0 0 7px;' +
        'font:600 13px Montserrat,sans-serif;color:var(--vm-ink);line-height:1.4;}' +
      '.vm__fh:last-of-type{margin-bottom:2px;}' +
      '.vm__fico{width:14px;height:14px;}' +
      '.vm__fbody p.vm__fsous,.vm__fsous{margin:-4px 0 10px;font:700 11px Montserrat,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--vm-ink-2);}' +
      





      


      




      







      '.vm__opts{margin:16px 0 0;padding:14px 0 0;list-style:none;border-top:1px solid var(--vm-line);}' +
      '.vm__opts li + li{border-top:1px solid var(--vm-line);}' +
      '.vm__opt{display:flex;box-sizing:border-box;align-items:center;gap:12px;width:100%;' +
        'padding:11px 24px;border:0;border-radius:0;background:none;text-align:left;cursor:pointer;' +
        'text-decoration:none;color:var(--vm-ink);' +
        'transition:background .18s;}' +
      



      '.vm__opt:hover{background:var(--vm-encre-fond);color:#fff;}' +
      







      '.vm__opt:active{background:var(--vm-encre-fond);color:#fff;}' +
      '.vm__opt:active .vm__optt>em,.vm__opt:active .vm__optc{color:rgba(255,255,255,.72);}' +
      '.vm__opt:active .vm__opti.est-fort{background:var(--vm-teal);color:var(--vm-teal-ink);}' +
      


      '.vm__opt:hover .vm__optt>em,.vm__opt:hover .vm__optc{color:rgba(255,255,255,.72);}' +
       
      '.vm__opt:hover .vm__opti.est-fort{background:var(--vm-teal);color:var(--vm-teal-ink);}' +
      '.vm__opti{display:flex;align-items:center;justify-content:center;width:36px;height:36px;flex:none;' +
        'border-radius:var(--vm-r-sel);background:var(--vm-bg);color:var(--vm-teal-deep);}' +
       
      '.vm__opti.est-fort{background:var(--vm-teal-deep);color:#fff;}' +
      '.vm__opti svg{width:17px;height:17px;stroke-width:2;}' +
      '.vm__optt{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}' +
      '.vm__optt>b{font:600 13.5px Montserrat,sans-serif;line-height:1.3;' +
        'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
      '.vm__optt>em{font:500 11.5px Montserrat,sans-serif;font-style:normal;color:var(--vm-ink-t3);' +
        'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
      '.vm__optc{flex:none;width:15px;height:15px;color:var(--vm-ink-t3);}' +
      '.vm__feq{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 12px;padding:0;list-style:none;}' +
      '.vm__feq li{display:inline-flex;align-items:center;gap:7px;padding:4px 11px 4px 4px;' +
        'border-radius:999px;background:var(--vm-bg);border:1px solid var(--vm-line);' +
        'font:600 11.5px Montserrat,sans-serif;color:var(--vm-ink-2);}' +
      '.vm__feq li>span{display:flex;align-items:center;justify-content:center;width:22px;height:22px;' +
        'flex:none;border-radius:50%;background:var(--vm-teal-deep);color:#fff;}' +
      '.vm__feq svg{width:13px;height:13px;stroke-width:2.1;}' +
      















      '.vm__fpmrb{display:inline-flex;align-items:center;justify-content:center;box-sizing:content-box;' +
        'min-width:24px;height:24px;padding:0;margin-left:8px;vertical-align:middle;flex:none;' +
        'border:0;border-radius:999px;background:var(--vm-pmr);color:#fff;cursor:pointer;' +
        'font:800 10px Montserrat,sans-serif;letter-spacing:.06em;text-transform:uppercase;' +
        'position:relative;transition:padding .2s;}' +
      '.vm__fpmrb svg{width:14px;height:14px;stroke-width:2.2;flex:none;}' +
      '.vm__fpmrt{max-width:0;overflow:hidden;white-space:nowrap;transition:max-width .22s ease,margin .22s ease;}' +
      





      '.vm__fpmrb:focus .vm__fpmrt,.vm__fpmrb.est-ouvert .vm__fpmrt{max-width:180px;margin:0 4px 0 6px;}' +
      '.vm__fpmrb:focus,.vm__fpmrb.est-ouvert{padding:0 6px 0 5px;outline:none;}' +
      '.vm__fpmrb:hover .vm__fpmrt{max-width:180px;margin:0 4px 0 6px;}' +
      '.vm__fpmrb:hover{padding:0 6px 0 5px;}' +
       
      '.vm__fpmrb:focus-visible{box-shadow:0 0 0 3px rgba(0,87,184,.35);}' +
      



      '.vm__fpmrb::after{content:"";position:absolute;top:50%;left:50%;width:44px;height:44px;' +
        'transform:translate(-50%,-50%);}' +
      


      '.vm.a-nuit .vm__fpmrb{background:var(--vm-pmr-clair);color:var(--vm-ink-fonce,#0A1A35);}' +
       
       
       
      '.vm__fbody p.vm__finfos,.vm__finfos{margin:10px 0;padding:9px 12px;border-left:3px solid var(--vm-ambre);background:var(--vm-bg);border-radius:0 var(--vm-r-ui) var(--vm-r-ui) 0;color:var(--vm-ink-2);font:500 13px Montserrat,sans-serif;}' +
      '.vm__finfos b{display:block;margin-bottom:2px;font:700 10px Montserrat,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:var(--vm-ink-t3);}' +
       
       
      




      '.vm__flien{display:inline-block;margin:6px 0 2px;color:var(--vm-teal-deep);font:600 12.5px Montserrat,sans-serif;text-decoration:underline;text-underline-offset:3px;}' +
      '.vm__fan span{flex:1;min-width:0;}' +
      '.vm__fan i{margin-left:auto;flex:none;white-space:nowrap;font:700 10px Montserrat,sans-serif;font-style:normal;letter-spacing:.06em;text-transform:uppercase;color:var(--vm-ink-t3);}' +
      '.vm__falerte{padding:10px 13px;border-left:3px solid var(--vm-ambre);border-radius:0 var(--vm-r-ui) var(--vm-r-ui) 0;background:var(--vm-bg);color:var(--vm-ink);font-weight:600;}' +
      





      '.vm__fanims{margin:14px 0;padding:12px 24px 0;border-top:1px solid var(--vm-line);}' +
      '.vm__fanims h4{margin:0 0 8px;font:800 11px Montserrat,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--vm-ink-2);}' +
      


      '.vm__fan{display:flex;align-items:baseline;gap:8px;width:100%;margin-bottom:5px;padding:10px 13px;border:1px solid var(--vm-line);border-left:3px solid var(--vm-teal);border-radius:0 var(--vm-r-ui) var(--vm-r-ui) 0;background:var(--vm-surface);text-align:left;font:500 12.5px Montserrat,sans-serif;color:var(--vm-ink);cursor:pointer;transition:box-shadow .18s;}' +
      '.vm__fan:hover{box-shadow:var(--vm-ombre);}' +
      '.vm__ftags span{display:inline-block;margin-right:6px;padding:3px 9px;border-radius:6px 2px 6px 2px;background:var(--vm-bg);color:var(--vm-ink-2);font:800 9.5px Montserrat,sans-serif;letter-spacing:.06em;text-transform:uppercase;}' +

      

      '.vm__tymal{width:38px;height:38px;border-radius:50%;background:var(--vm-tymal);color:var(--vm-sur-clair);border:2.5px solid #fff;box-shadow:var(--vm-ombre-h);align-items:center;justify-content:center;cursor:pointer;}' +
      '.vm__tymal svg{width:20px;height:20px;}' +
      '.vm__moi{position:relative;width:18px;height:18px;border-radius:50%;background:var(--vm-teal-deep);border:3px solid #fff;box-shadow:0 0 0 6px rgba(0,103,110,.20);}' +
      


      


      





      '.vm__cible{z-index:1;}' +
      '.vm__logo{z-index:3;}' +
      '.vm__tymal{z-index:4;}' +
      '.vm__cible{width:0;height:0;pointer-events:none;}' +
      

      '.vm__cible i{display:block;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;' +
        'border:2px solid var(--vm-teal-deep);box-shadow:0 0 0 4px rgba(93,191,192,.28);' +
        'animation:vm-cible .45s cubic-bezier(.22,.61,.36,1);}' +
      '@keyframes vm-cible{from{transform:scale(1.9);opacity:0}to{transform:scale(1);opacity:1}}' +
      












      '.vm .maplibregl-ctrl-bottom-right,.vm .maplibregl-ctrl-bottom-left{bottom:var(--vm-coins);z-index:9;}' +
      '.vm .maplibregl-ctrl-attrib{pointer-events:none;}' +
      








      '.vm .maplibregl-ctrl-attrib a,.vm .maplibregl-ctrl-attrib button,' +
        '.vm .maplibregl-ctrl-attrib-button{pointer-events:auto;cursor:pointer;}' +
      








      


















      



      '.vm__vueTag{position:absolute;left:50%;top:0;z-index:15;margin:0;padding:8px 16px;border-radius:0 0 4px 18px;background:var(--vm-encre-fond);color:#fff;font:800 11.5px Montserrat,sans-serif;letter-spacing:.09em;text-transform:uppercase;white-space:nowrap;pointer-events:none;box-shadow:var(--vm-ombre);transform:translate(-50%,-110%);opacity:0;transition:transform .26s cubic-bezier(.22,.61,.36,1),opacity .26s;}' +
      '.vm__vueTag.est-vu{transform:translate(-50%,0);opacity:1;}' +
      '.vm.a-urgent .vm__vueTag{top:var(--vm-urgent-h,0px);}' +
      











      '.vm .vm__attrib{position:absolute;right:6px;bottom:6px;left:auto;top:auto;z-index:2;margin:0;}' +
      '.vm .vm__attrib.maplibregl-compact-show{z-index:19;}' +
      







      







      '.vm.est-etroit .vm__attrib{left:calc(10px + var(--vm-bord-g-bas,0px));right:auto;top:auto;' +
        'bottom:calc(max(calc(var(--vm-prgpeek) + 10px),calc(var(--vm-coins) + 6px))' +
        ' + env(safe-area-inset-bottom,0px));}' +
      '.vm.est-etroit .vm__attrib.maplibregl-compact-show{max-width:calc(100% - 24px);}' +

      





      


      '.vm__jgrp{display:flex;align-items:center;gap:9px;flex:1;min-width:0;justify-content:center;}' +
      '.vm__jgrp #vmJour{white-space:nowrap;}' +
      


      





      '.vm__prgx{flex:none;display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;margin-left:2px;border:0;border-left:1px solid rgba(255,255,255,.18);border-radius:0;background:transparent;color:var(--vm-surface);cursor:pointer;opacity:.72;transition:opacity .18s;}' +
      '.vm__prgx:focus-visible{opacity:1;}' +
      '@media (hover:hover){.vm__prgx:hover{opacity:1;}}' +
      '.vm__prgxico{width:17px;height:17px;margin-left:5px;}' +
      '.vm.est-etroit .vm__prgx{display:none;}' +
      '.vm.a-progrange .vm__prog{display:none;}' +
      '.vm__prgrange{position:absolute;top:12px;right:12px;z-index:4;display:flex;align-items:center;justify-content:center;' +
        'width:44px;height:44px;padding:0;border:1px solid var(--vm-line);border-radius:50%;background:var(--vm-surface);' +
        'color:var(--vm-ink);box-shadow:var(--vm-ombre);cursor:pointer;transition:transform .18s;}' +
      '.vm__prgrange:hover{transform:scale(1.06);}' +
      




      

      '.vm__prog > .vm__cta{width:auto;min-width:0;max-width:100%;align-self:flex-end;margin:10px 12px 12px;}' +
      '.vm__prgrico{width:19px;height:19px;}' +
      

      '.vm__prgrnb{position:absolute;top:-3px;right:-3px;min-width:18px;height:18px;padding:0 4px;' +
        'display:flex;align-items:center;justify-content:center;border-radius:9px;background:var(--vm-ink);' +
        'color:var(--vm-surface);font:800 10px Montserrat,sans-serif;}' +
      '.vm.est-etroit .vm__prgrange{display:none;}' +
      




      '.vm .vm__attrib.maplibregl-compact-show{max-width:calc(100% - 12px);}' +

      '.vm.est-etroit .vm__attrib.maplibregl-compact-show{height:auto;min-height:28px;white-space:normal;}' +
      








       
       

      '.vm .maplibregl-ctrl-attrib.maplibregl-compact{min-height:24px;background:transparent;box-shadow:none;border-radius:12px;}' +
      '.vm .maplibregl-ctrl-attrib.maplibregl-compact:not(.maplibregl-compact-show){width:24px;height:24px;padding:0;}' +
      '.vm .maplibregl-ctrl-attrib-button{width:24px;height:24px;opacity:.34;border-radius:50%;' +
        'background-color:var(--vm-surface);transition:opacity .2s;}' +
      '.vm .maplibregl-ctrl-attrib-button:focus-visible{opacity:1;}' +
      '@media (hover:hover){.vm .maplibregl-ctrl-attrib-button:hover{opacity:1;}}' +
      

      








      




      '.vm .maplibregl-ctrl-attrib.maplibregl-compact-show{display:flex;align-items:center;' +
        'min-height:0;height:auto;padding:11px 44px 12px 15px;' +
        'border:1px solid var(--vm-line);border-radius:var(--vm-r-card);' +
        'background:var(--vm-surface);color:var(--vm-ink-2);' +
        'font:500 11.5px/1.55 Montserrat,sans-serif;letter-spacing:.005em;white-space:nowrap;' +
        'box-shadow:var(--vm-ombre-h);}' +
      '.vm .maplibregl-ctrl-attrib.maplibregl-compact-show .maplibregl-ctrl-attrib-inner{display:block;}' +
       
       
      '.vm .maplibregl-ctrl-attrib.maplibregl-compact-show a{color:var(--vm-teal-deep);text-decoration:underline;' +
        'text-underline-offset:2px;text-decoration-thickness:from-font;}' +
      '.vm .maplibregl-ctrl-attrib.maplibregl-compact-show a:hover{color:var(--vm-ink);}' +
       
      '.vm__attsep{margin:0 3px;color:var(--vm-ink-3);}' +
      

      '.vm .maplibregl-ctrl-attrib.maplibregl-compact-show .maplibregl-ctrl-attrib-button{opacity:1;' +
        'position:absolute;right:9px;top:50%;transform:translateY(-50%);margin:0;}' +
      '.vm__autourv{position:absolute;left:calc(12px + var(--vm-bord-g));right:calc(12px + var(--vm-bord-d));bottom:calc(var(--vm-coins) + 12px);z-index:7;max-height:56%;overflow:auto;padding:12px 14px 10px;background:var(--vm-surface);border:1px solid var(--vm-line);border-radius:var(--vm-r-card);box-shadow:var(--vm-ombre-h);}' +
      '@media(min-width:821px){.vm__autourv{right:auto;width:340px;}}' +
      '.vm__aul{display:flex;flex-direction:column;gap:4px;margin-top:8px;margin-bottom:0;padding:0;list-style:none;}' +
      '.vm__aul > li{display:contents;}' +
      

      '.vm__seulLu{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;' +
        'clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0;}' +
      '.vm__auli{display:flex;align-items:center;gap:10px;width:100%;min-height:52px;padding:8px 6px;border:0;border-bottom:1px solid var(--vm-line);background:none;text-align:left;cursor:pointer;}' +
      '.vm__auli:last-child{border-bottom:0;}' +
      '.vm__auli:hover{background:var(--vm-bg);}' +
      '.vm__aupic{flex:none;display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:var(--c);color:var(--vm-sur-clair);}' +
      '.vm__aupic svg{width:17px;height:17px;}' +
      '.vm__aunom{flex:1;min-width:0;font:600 13px Montserrat,sans-serif;color:var(--vm-ink);}' +
      


      '.vm__opti.est-fam{background:var(--c,var(--vm-teal-deep));color:#fff;}' +
      '.vm__opt:hover .vm__opti.est-fam,.vm__opt:active .vm__opti.est-fam{background:#fff;color:var(--c);}' +
      



      '.vm__auetat{display:block;margin-top:2px;font:700 9.5px Montserrat,sans-serif;font-style:normal;' +
        'letter-spacing:.08em;text-transform:uppercase;color:var(--vm-ink-t3);}' +
      '.vm__auetat.is-ouvert{color:var(--vm-teal-fonce,var(--vm-teal-ink));}' +
       
       
      '.vm__aupmr{width:13px;height:13px;vertical-align:-2px;color:var(--vm-pmr);}' +
      '.vm.a-nuit .vm__aupmr{color:var(--vm-pmr-clair);}' +
      '.vm__audist{flex:none;display:flex;align-items:center;gap:6px;color:var(--vm-ink-2);}' +
      '.vm__audist b{font:800 13px Montserrat,sans-serif;color:var(--vm-ink);}' +
       
       
      '.vm__audist i{display:inline-block;font-size:15px;line-height:1;color:var(--vm-teal-deep);}' +
      '.vm__audist em{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);}' +
      '.vm__au.is-on{background:var(--vm-encre-fond);color:#fff;}' +
       
       
       
       
      '.vm__moi.a-cap::before{content:"";position:absolute;left:50%;top:50%;width:62px;height:62px;margin:-31px 0 0 -31px;' +
        'border-radius:50%;pointer-events:none;transform:rotate(var(--vm-cap,0deg));' +
        'background:conic-gradient(from -26deg,rgba(93,191,192,.42),rgba(93,191,192,0) 52deg);}' +
      '.vm__echo{width:38px;height:38px;border-radius:50%;border:2px dashed var(--vm-teal-deep);opacity:.9;pointer-events:none;animation:vm-echo .4s cubic-bezier(.22,.61,.36,1);}' +
      '@keyframes vm-echo{from{transform:scale(1.6);opacity:0}to{transform:scale(1);opacity:.9}}' +
      






      '.vm__pmr .vm__pjico{color:var(--vm-pmr);}' +
      '.vm__pmr b{background:var(--vm-pmr);color:#fff;}' +
      '.vm__pmr.is-on{background:var(--vm-pmr);border-color:var(--vm-pmr);color:#fff;}' +
      '.vm__pmr.is-on .vm__pjico{color:#fff;}' +
      '.vm__pmr.is-on b{background:#fff;color:var(--vm-pmr);}' +
      '.vm.a-nuit .vm__pmr .vm__pjico{color:var(--vm-pmr-clair);}' +
      '.vm.a-nuit .vm__pmr b{background:var(--vm-pmr-clair);color:var(--vm-ink-fonce,#0A1A35);}' +
      '.vm.a-nuit .vm__pmr.is-on{background:var(--vm-pmr-clair);border-color:var(--vm-pmr-clair);color:var(--vm-ink-fonce,#0A1A35);}' +
      '.vm.a-nuit .vm__pmr.is-on .vm__pjico{color:var(--vm-ink-fonce,#0A1A35);}' +
      '.vm.a-nuit .vm__pmr.is-on b{background:var(--vm-ink-fonce,#0A1A35);color:var(--vm-pmr-clair);}' +
      '.vm__squel{position:absolute;inset:0;pointer-events:none;}' +
      '.vm__sq{position:absolute;background:var(--vm-line);border-radius:var(--vm-r-sel);opacity:.7;}' +
      '.vm__sq--outils{top:12px;left:12px;right:352px;height:42px;}' +
      '.vm__sq--volet{top:12px;right:12px;bottom:12px;width:330px;border-radius:var(--vm-r-card);}' +
      '.vm__sqcol{position:absolute;left:12px;bottom:12px;display:flex;flex-direction:column;gap:5px;}' +
      '.vm__sq--chip{position:relative;width:200px;height:31px;}' +
      '@media(max-width:820px){' +
        '.vm__sq--outils{right:12px;}' +
        '.vm__sq--volet{top:auto;left:0;right:0;width:auto;height:52px;bottom:0;border-radius:16px 0 0 0;}' +
        '.vm__sqcol{flex-direction:row;bottom:76px;}' +
        '.vm__sq--chip{width:104px;height:44px;}' +
      '}' +
       
      '.vm__sq::after{content:"";position:absolute;inset:0;border-radius:inherit;' +
        'background:linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent);' +
        'transform:translateX(-100%);animation:vm-miroir 1.5s ease-in-out infinite;}' +
      '@keyframes vm-miroir{to{transform:translateX(100%)}}' +
      '@media(prefers-reduced-motion:reduce){.vm__sq::after{animation:none;opacity:0;}}' +
      


      '.vm__a11y{position:absolute;left:-9999px;top:0;z-index:9;width:320px;max-height:70%;overflow:auto;padding:12px 14px;background:var(--vm-surface);border:2px solid var(--vm-teal-deep);border-radius:var(--vm-r-card);box-shadow:var(--vm-ombre-h);}' +
      '.vm__a11y:focus-within{left:12px;top:12px;}' +
      '.vm__a11y h2{margin:0 0 8px;font:800 11px Montserrat,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:var(--vm-ink-t3);}' +
      '.vm__a11y ul{margin:0;padding:0;list-style:none;}' +
      '.vm__a11y button{display:block;width:100%;padding:8px 6px;border:0;border-bottom:1px solid var(--vm-line);background:none;text-align:left;font:600 13px Montserrat,sans-serif;color:var(--vm-ink);cursor:pointer;}' +
      '.vm__a11y button span{display:block;font:500 11px Montserrat,sans-serif;color:var(--vm-ink-2);}' +
      '.vm__a11y button:focus-visible{outline:3px solid var(--vm-teal-deep);outline-offset:-3px;}' +
       
      '.vm__annonce{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;}' +
      





      






      '.vm__logo{display:none;padding:7px 9px 8px;border:0;background:var(--vm-surface);' +
        'border-radius:10px 0 10px 0;box-shadow:0 8px 22px rgba(10,26,53,.22);cursor:pointer;' +
        'transition:transform .16s cubic-bezier(.22,.61,.36,1),box-shadow .16s;}' +
      

      '.vm.a-logos .vm__logo{display:block;}' +
      






      






      '.vm .vm__logo--stand,.vm.a-logos .vm__logo--stand{display:none;}' +
      '.vm.a-standsT .vm__logo--stand.est-tete{display:block;}' +
      '.vm.a-standsM .vm__logo--stand.est-module{display:block;}' +
       
       
      





      '.vm__logo--stand .vm__logom i{align-self:center;}' +
      '.vm__logo--stand{padding:8px 12px 10px;border-radius:12px 0 12px 0;' +
        'box-shadow:0 10px 26px rgba(10,26,53,.24);}' +
      



      '.vm__logo--stand .vm__logom{gap:10px;max-width:255px;align-items:flex-start;}' +
       
      '.vm__stt{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1;}' +
       
      '.vm__logo--stand .vm__stt b{-webkit-line-clamp:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;}' +
      

      '.vm__stt em{font:500 10.5px Montserrat,sans-serif;font-style:normal;color:var(--vm-ink-2);' +
        'line-height:1.25;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}' +
       
      '.vm__stlot{flex:none;align-self:flex-start;margin-left:2px;padding-left:9px;' +
        'border-left:1px solid var(--vm-line);text-decoration:none;' +
        'font:700 9.5px Montserrat,sans-serif;letter-spacing:.06em;color:var(--vm-ink-t3);}' +
       
      '.vm__logo--stand.est-tete{padding:10px 14px 12px;}' +
      '.vm__logo--stand.est-tete .vm__logom{gap:12px;max-width:285px;align-items:flex-start;}' +
      '.vm__logo--stand.est-tete .vm__logom i{width:44px;height:44px;}' +
      '.vm__logo--stand.est-tete .vm__logom i svg{width:24px;height:24px;}' +
      '.vm__logo--stand.est-tete .vm__logom b{font-size:14px;}' +
      



      


      








      '.vm.est-etroit .vm__res button{min-height:52px;padding:11px 12px;}' +
      '.vm.est-etroit .vm__cta{min-height:48px;height:auto;}' +
      




      





      '.vm.est-etroit .vm__fplus{width:30px;height:30px;font-size:15px;right:11px;}' +
      '.vm.est-etroit .vm__filtres .vm__f{min-height:54px;padding:0 15px;' +
        'font-size:12px;letter-spacing:.05em;}' +
      '.vm.est-etroit .vm__filtres .vm__pj{min-height:54px;}' +
      '.vm.est-etroit .vm__filtres .vm__fic{width:19px;height:19px;}' +
      '.vm.est-etroit .vm__filtres .vm__ffam{gap:8px;}' +
      '.vm.est-etroit .vm__frang .vm__f{padding-right:44px;}' +
      




      



      '.vm.est-etroit .vm__fplus::after{content:"";position:absolute;top:50%;left:50%;' +
        'width:44px;height:44px;transform:translate(-50%,-50%);}' +
      '.vm.est-etroit .vm__logo--stand .vm__logom{max-width:225px;gap:8px;}' +
      '.vm.est-etroit .vm__logo--stand.est-tete .vm__logom{max-width:245px;gap:9px;}' +
      '.vm.est-etroit .vm__logo--stand .vm__logom b{font-size:12px;}' +
      '.vm.est-etroit .vm__logo--stand.est-tete .vm__logom b{font-size:12.5px;}' +
      '.vm.est-etroit .vm__logo--stand .vm__logom i{width:32px;height:32px;}' +
      '.vm.est-etroit .vm__logo--stand.est-tete .vm__logom i{width:36px;height:36px;}' +
      '.vm.est-etroit .vm__stt em{font-size:10px;-webkit-line-clamp:1;}' +
      '.vm.est-etroit .vm__logo--stand{padding:7px 10px 8px;}' +
       
       
      







      








      '.vm__logo--stand:focus-visible,.vm__logo--stand.est-survol{z-index:9;' +
        'transform:translateY(-3px);box-shadow:0 14px 30px rgba(10,26,53,.30);}' +
      '@media (hover:hover){.vm__logo--stand:hover{z-index:9;' +
        'transform:translateY(-3px);box-shadow:0 14px 30px rgba(10,26,53,.30);}}' +
      '.vm__logo--stand.est-actif{z-index:8;box-shadow:0 12px 28px rgba(10,26,53,.28);}' +
      '.vm .vm__logo--stand.a-filtre,.vm.a-standsT .vm__logo--stand.a-filtre,' +
        '.vm.a-standsM .vm__logo--stand.a-filtre{display:none;}' +
       
      '.vm__logo--stand.est-actif::before{opacity:1;height:3px;}' +
       
       
      







       
      '.vm.a-logos .vm__logo.a-masque{display:none;}' +
      '.vm__logo::after{content:"";position:absolute;left:50%;bottom:-5px;width:12px;height:12px;' +
        'transform:translateX(-50%) rotate(45deg);background:var(--vm-surface);border-radius:0 0 2px 0;' +
        'box-shadow:3px 3px 6px rgba(10,26,53,.10);}' +
      '.vm__logo::before{content:"";position:absolute;left:9px;right:9px;bottom:3px;height:2px;' +
        'border-radius:2px;background:var(--c,var(--vm-teal));opacity:.85;}' +
      '.vm__logo img{display:block;width:auto;height:52px;max-width:150px;min-width:40px;object-fit:contain;' +
        'position:relative;z-index:1;}' +
      

      '.vm__logom{position:relative;z-index:1;display:flex;align-items:center;gap:7px;max-width:150px;}' +
      '.vm__logom i{flex:none;width:38px;height:38px;border-radius:10px 0 10px 0;display:flex;' +
        'align-items:center;justify-content:center;color:#fff;font-style:normal;}' +
      '.vm__logom i svg{width:21px;height:21px;stroke:#fff;fill:none;stroke-width:1.9;' +
        'stroke-linecap:round;stroke-linejoin:round;}' +
      '.vm__logom b{font:700 13px Montserrat,sans-serif;color:var(--vm-ink);line-height:1.2;' +
        'overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}' +
      

      '.vm__tymal::before{display:none;}' +
      '.vm__tymal{display:block;padding:6px 7px 7px;}' +
      '.vm__tymal img{min-width:0;}' +
      '.vm__logo:hover{transform:translateY(-2px);' +
        'box-shadow:0 12px 28px rgba(10,26,53,.28);}' +
      '.vm__logo:focus-visible{outline:3px solid var(--vm-ink);outline-offset:2px;}' +
      

      '.vm__tymal img{width:100%;height:100%;object-fit:contain;display:block;}' +
      '.vm__tymalp{display:none;}' +
      '.vm__tymal--repli .vm__tymalp{display:block;}' +
      




      




      




      




      '.vm__depart{--k:1;display:block;border:0;background:none;padding:0;cursor:pointer;font:inherit;}' +
      '.vm__depin{display:block;transform:scale(var(--k));transform-origin:bottom center;' +
        'transition:transform .18s cubic-bezier(.22,.61,.36,1),filter .18s;' +
        'filter:drop-shadow(0 14px 30px rgba(10,26,53,.30));}' +
      '.vm__depart:hover .vm__depin{filter:drop-shadow(0 18px 40px rgba(10,26,53,.40));}' +
      '.vm__depart:focus-visible{outline:3px solid var(--vm-ink);outline-offset:4px;border-radius:var(--vm-r-card);}' +
      '.vm__depb{display:flex;align-items:center;gap:14px;max-width:360px;padding:12px 14px 12px 12px;' +
        'border-radius:var(--vm-r-card) 0 var(--vm-r-card) 0;background:var(--vm-surface);' +
        'border-left:4px solid var(--vm-teal-deep);text-align:left;}' +
      '.vm__deplogo{flex:none;width:58px;height:58px;border-radius:10px 0 10px 0;overflow:hidden;' +
        'display:flex;align-items:center;justify-content:center;background:var(--vm-bg);}' +
      '.vm__deplogo img{width:100%;height:100%;object-fit:contain;display:block;}' +
      '.vm__deptx{display:flex;flex-direction:column;gap:1px;min-width:0;}' +
      '.vm__deptx i{font:800 9.5px Montserrat,sans-serif;letter-spacing:.14em;text-transform:uppercase;' +
        'color:var(--vm-teal-deep);font-style:normal;}' +
      '.vm__deptx b{display:flex;align-items:center;gap:6px;font:800 20px Montserrat,sans-serif;' +
        'color:var(--vm-ink);line-height:1.1;}' +
      '.vm__deptym{width:22px;height:22px;object-fit:contain;display:block;flex:none;opacity:.95;}' +
      '.vm__deptx em{font:600 12.5px Montserrat,sans-serif;color:var(--vm-ink-2);font-style:normal;}' +
      '.vm__deptx u{margin-top:3px;font:700 10px Montserrat,sans-serif;color:var(--vm-ink-t3);text-decoration:none;}' +
      '.vm__depfl{flex:none;display:flex;align-items:center;justify-content:center;width:32px;height:32px;' +
        'border-radius:50%;background:var(--vm-teal-deep);color:#fff;transition:transform .18s;}' +
      '.vm__depart:hover .vm__depfl{transform:translateX(2px);}' +
      '.vm__depfl svg{width:15px;height:15px;}' +
      


      '.vm__deppt{display:block;width:0;height:0;margin:-1px auto 0;' +
        'border-left:11px solid transparent;border-right:11px solid transparent;' +
        'border-top:13px solid var(--vm-surface);}' +
      '@media(max-width:560px){.vm__depb{max-width:280px;padding:10px 11px 10px 10px;gap:11px;}' +
        '.vm__deplogo{width:46px;height:46px}.vm__deptx b{font-size:17px}' +
        '.vm__deptym{width:19px;height:19px}}' +
      




      '.vm__pont{display:flex;flex-direction:column;align-items:center;gap:3px;' +
        'border:0;background:none;padding:0;cursor:pointer;font:inherit;}' +
      


      '.vm__ponts{position:absolute;left:50%;top:30px;width:2px;height:44px;margin-left:-1px;' +
        'transform-origin:50% 0;background:var(--c,var(--vm-teal));opacity:.85;pointer-events:none;}' +
      




      '.vm__pontd{position:relative;display:flex;align-items:center;justify-content:center;' +
        'width:50px;height:50px;border-radius:50%;background:var(--vm-surface);' +
        'box-shadow:0 0 0 2.5px var(--c,var(--vm-teal)),0 5px 14px rgba(10,26,53,.24);' +
        'transition:transform .16s cubic-bezier(.22,.61,.36,1);}' +
      

      

      '.vm__pont.est-drapeau .vm__pontd{width:48px;height:60px;border-radius:0;background:none;box-shadow:none;' +
        'filter:drop-shadow(0 0 1px #fff) drop-shadow(0 0 1px #fff) drop-shadow(0 0 1.5px #fff) drop-shadow(0 4px 6px rgba(10,26,53,.3));}' +
      '.vm__pont.est-drapeau .vm__pontd img{width:48px;height:60px;object-fit:contain;}' +
      


      '.vm.est-loin .vm__pont.est-drapeau .vm__pontd,.vm.est-loin .vm__pont.est-drapeau .vm__pontd img{width:36px;height:45px;}' +
      '.vm.est-loin .vm__pont.est-drapeau .vm__pontn{top:-5px;right:-8px;min-width:18px;height:18px;font-size:10px;}' +
      '.vm__pont.est-drapeau .vm__pontn{top:-6px;right:-10px;}' +
      '.vm__pont:hover .vm__pontd,.vm__pont.est-releve .vm__pontd{transform:scale(1.22);}' +
       
      '.vm__pont.a-classe-off{display:none;}' +
      '.vm__pont:focus-visible .vm__pontd{transform:scale(1.1);outline:3px solid var(--vm-ink);outline-offset:2px;}' +
      '.vm__pontd img{width:34px;height:34px;object-fit:contain;display:block;}' +
      '.vm__ponti{width:28px;height:28px;color:var(--c,var(--vm-teal));}' +
      

      '.vm__pontn{position:absolute;top:-4px;right:-6px;min-width:20px;height:20px;padding:0 5px;' +
        'display:flex;align-items:center;justify-content:center;border-radius:20px;' +
        'background:var(--vm-encre-fond);color:#fff;font:800 11px Montserrat,sans-serif;' +
        'box-shadow:0 0 0 2px var(--vm-surface);}' +
      '.vm__pontl{max-width:110px;padding:2px 7px;border-radius:5px 0 5px 0;background:var(--vm-surface);' +
        'color:var(--vm-ink);font:800 9.5px Montserrat,sans-serif;letter-spacing:.07em;text-transform:uppercase;' +
        'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-shadow:0 2px 7px rgba(10,26,53,.16);}' +
      




      '.vm__survol{position:absolute;z-index:12;display:flex;align-items:center;gap:12px;' +
        'padding:11px 14px 11px 11px;background:var(--vm-surface);border-radius:14px 0 14px 0;' +
        'box-shadow:0 14px 34px rgba(10,26,53,.28);pointer-events:none;max-width:340px;' +
        'transform:translate(-50%,calc(-100% - 20px));' +
        'animation:vm-svin .16s cubic-bezier(.22,.61,.36,1);}' +
      '.vm__survol[hidden]{display:none;}' +
      



      '.vm.est-etroit .vm__survol{pointer-events:auto;cursor:pointer;}' +
      '.vm__survol::after{content:"";position:absolute;left:50%;bottom:-7px;width:15px;height:15px;' +
        'transform:translateX(-50%) rotate(45deg);background:var(--vm-surface);border-radius:0 0 3px 0;}' +
      '.vm__svbarre{position:absolute;left:0;top:12px;bottom:12px;width:3px;border-radius:0 3px 3px 0;}' +
      '.vm__svimg{flex:none;width:62px;height:62px;border-radius:12px 0 12px 0;object-fit:cover;display:block;}' +
      '.vm__svini,.vm__svpic{display:flex;align-items:center;justify-content:center;color:#fff;' +
        'font:800 18px Montserrat,sans-serif;letter-spacing:.04em;}' +
      '.vm__svpic svg{width:30px;height:30px;stroke:#fff;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}' +
      '.vm__svlogo{background:var(--vm-bg);display:flex;align-items:center;justify-content:center;padding:6px;}' +
      '.vm__svlogo img{max-width:100%;max-height:100%;object-fit:contain;}' +
      


      '.vm__svcl{flex:none;width:58px;height:58px;object-fit:contain;display:block;}' +
      '.vm__svt{display:flex;flex-direction:column;gap:2px;min-width:0;}' +
      '.vm__svt b{font:800 14px Montserrat,sans-serif;color:var(--vm-ink);white-space:nowrap;' +
        'overflow:hidden;text-overflow:ellipsis;max-width:210px;}' +
      '.vm__svt em{font:800 8.5px Montserrat,sans-serif;font-style:normal;letter-spacing:.11em;text-transform:uppercase;}' +
      '.vm__svt i{font:500 11.5px Montserrat,sans-serif;font-style:normal;color:var(--vm-ink-2);line-height:1.35;' +
        'white-space:normal;max-width:210px;}' +
      '.vm__svt u{display:inline-flex;align-items:center;gap:5px;margin-top:2px;text-decoration:none;' +
        'font:700 11px Montserrat,sans-serif;color:var(--vm-ink-t3);}' +
      '.vm__svt u svg{width:12px;height:12px;stroke:currentColor;fill:none;stroke-width:1.9;' +
        'stroke-linecap:round;stroke-linejoin:round;}' +
      '.vm__svfl{flex:none;width:16px;height:16px;color:var(--vm-ink-3);align-self:center;}' +
      '.vm.est-etroit .vm__svfl{display:flex;align-items:center;justify-content:center;' +
        'width:34px;height:34px;border-radius:50%;background:var(--vm-teal-deep);color:#fff;' +
        'box-shadow:0 2px 8px rgba(14,110,112,.34);}' +
      '.vm.est-etroit .vm__svfl svg{width:17px;height:17px;stroke-width:2.4;}' +
       
       
       
       
      '.vm.est-etroit .vm__survol{padding-right:10px;}' +
      '@keyframes vm-svin{from{opacity:0;transform:translate(-50%,calc(-100% - 12px));}' +
        'to{opacity:1;transform:translate(-50%,calc(-100% - 20px));}}' +
      


      '.vm__slo{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;}' +
      



      '.vm__pulse{width:0;height:0;pointer-events:none;}' +
      '.vm__pulse i{display:block;width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;' +
        'background:var(--vm-teal);opacity:.5;animation:vm-onde 2.1s cubic-bezier(.22,.61,.36,1) infinite;}' +
      '@keyframes vm-onde{0%{transform:scale(.55);opacity:.55}70%{opacity:0}100%{transform:scale(2.4);opacity:0}}' +
      '@media(prefers-reduced-motion:reduce){.vm__pulse i{animation:none;transform:scale(1.5);opacity:.32;}}' +

       
      '@media(max-width:820px){' +
        




        






        '.vm__prog{top:auto;left:0;right:0;bottom:0;width:auto;height:84%;padding-bottom:calc(var(--vm-coins) + env(safe-area-inset-bottom,0px));box-shadow:0 -6px 22px rgba(10,26,53,.14);border-radius:16px 0 0 0;' +
          



          










          


          




          'transform:translateY(calc(100% - var(--vm-prgpeek)));}' +
        



        '.vm.a-prgprete .vm__prog{transition:transform .3s cubic-bezier(.22,.61,.36,1);}' +
        '.vm.a-prog .vm__prog{transform:none;}' +
        




        '.vm.a-urgent .vm__prog{top:auto;}' +
        '.vm__prgbasc{position:relative;display:flex;align-items:center;gap:9px;width:100%;height:var(--vm-prgpeek);flex:none;padding:10px var(--vm-coins-d) 0 var(--vm-coins-g);border:0;background:var(--vm-encre-fond);color:#fff;font:800 11.5px Montserrat,sans-serif;letter-spacing:.09em;text-transform:uppercase;text-align:left;cursor:pointer;border-radius:16px 0 0 0;}' +
        '.vm__prggrip{position:absolute;top:7px;left:50%;width:34px;height:3px;margin-left:-17px;border-radius:2px;background:rgba(255,255,255,.42);}' +
        '.vm__prgbasc em{font-style:normal;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
        '.vm__prgnb{display:inline-flex;align-items:center;justify-content:center;flex:none;min-width:22px;padding:2px 7px;border-radius:999px;background:var(--vm-direct-fonce);color:#fff;font:800 10px Montserrat,sans-serif;letter-spacing:.05em;}' +
        '.vm__prgcar{margin-left:auto;width:9px;height:9px;border-right:2px solid rgba(255,255,255,.85);border-bottom:2px solid rgba(255,255,255,.85);transform:rotate(-135deg);transition:transform .25s;}' +
        '.vm.a-prog .vm__prgcar{transform:rotate(45deg);}' +
        


        


         
         
        '.vm__filtres{bottom:calc(max(calc(var(--vm-prgpeek) + 12px),calc(var(--vm-coins) + 6px + var(--vm-attrib,0px))) + env(safe-area-inset-bottom,0px));flex-direction:row;flex-wrap:nowrap;overflow-x:auto;left:calc(12px + var(--vm-bord-g-bas));right:calc(12px + var(--vm-bord-d-bas));align-items:flex-start;}' +
        '.vm.a-prgprete .vm__filtres{transition:bottom .3s cubic-bezier(.22,.61,.36,1),opacity .22s,transform .22s;}' +
        







        '.vm__filtres,.vm__plusF{position:absolute;left:0;right:0;bottom:0;top:auto;z-index:17;' +
          'flex-direction:column;align-items:stretch;gap:6px;' +
           
           
           
          'overflow-y:auto;overflow-x:hidden;' +
          'padding:16px max(16px,calc(4px + var(--vm-bord-d,0px)),calc(4px + var(--vm-bord-g,0px)))' +
            ' calc(12px + var(--vm-coins,0px) + env(safe-area-inset-bottom,0px))' +
            ' max(16px,calc(4px + var(--vm-bord-g,0px)),calc(4px + var(--vm-bord-d,0px)));' +
          'background:var(--vm-surface);border:0;border-radius:18px 4px 0 0;' +
          'box-shadow:0 -12px 44px rgba(10,26,53,.32);' +
          'transform:translateY(102%);visibility:hidden;' +
          'transition:transform .26s cubic-bezier(.22,.61,.36,1),visibility .26s;}' +
        '.vm.a-f-filtres .vm__filtres,.vm.a-f-plus .vm__plusF{transform:none;visibility:visible;}' +
        


        '.vm__filtres{max-height:86%;}' +
        '.vm__plusF{max-height:78%;}' +
         
        '.vm__plusF button{display:flex;align-items:center;gap:13px;width:100%;min-height:60px;' +
          'padding:10px 12px;border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);' +
          'background:var(--vm-surface);text-align:left;cursor:pointer;}' +
        '.vm__plusF button span{display:flex;flex-direction:column;gap:2px;min-width:0;}' +
        '.vm__plusF button b{font:700 13.5px Montserrat,sans-serif;color:var(--vm-ink);}' +
        '.vm__plusF button i{font:500 11.5px Montserrat,sans-serif;font-style:normal;' +
          'color:var(--vm-ink-t3);overflow:hidden;text-overflow:ellipsis;}' +
        '.vm__plico{flex:none;width:22px;height:22px;color:var(--vm-teal-deep,var(--vm-teal-ink));}' +
         
         
        '.vm__feuilv{position:absolute;inset:0;z-index:16;background:rgba(10,26,53,.42);' +
          'opacity:0;visibility:hidden;transition:opacity .22s,visibility .22s;}' +
        '.vm.a-feuille .vm__feuilv{opacity:1;visibility:visible;}' +
         
        '.vm__niveaux::before{font-size:9.5px;margin:0 2px 3px;}' +
        '.vm__niveaux::before,.vm__filtres::before,.vm__plusF::before{content:attr(data-titre);display:block;' +
          'margin:0 2px 4px;font:800 11px Montserrat,sans-serif;letter-spacing:.1em;' +
          'text-transform:uppercase;color:var(--vm-ink-t3);}' +
         
         
        '.vm__filtres::before,.vm__plusF::before{font-size:12.5px;color:var(--vm-ink);margin-bottom:10px;}' +
        '.vm__fsect{display:block;margin:16px 2px 6px;font:800 11px Montserrat,sans-serif;' +
          'letter-spacing:.1em;text-transform:uppercase;color:var(--vm-ink-t3);}' +
        







        '.vm__niveaux{position:static;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;' +
          'margin:0 0 2px;padding:0;border:0;background:none;box-shadow:none;' +
          'transform:none;visibility:visible;max-height:none;overflow:visible;}' +
        '.vm__niveaux::before{grid-column:1/-1;}' +
        '.vm__niv{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;' +
          'flex:1 1 0;min-width:0;width:auto;min-height:54px;padding:6px 5px;' +
          'border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);' +
          'background:var(--vm-surface);color:var(--vm-ink-2);' +
          'text-align:left;text-transform:none;letter-spacing:0;white-space:normal;' +
          'transition:background .2s,color .2s,border-color .2s;}' +
        '.vm__nivi{display:flex;align-items:center;justify-content:center;flex:none;' +
          'width:auto;height:auto;border-radius:0;background:none;color:inherit;}' +
        '.vm__nivi svg{width:15px;height:15px;}' +
        '.vm__nivt{display:flex;flex-direction:column;gap:0;min-width:0;}' +
        '.vm__nivL{display:none;}' +
         
         
        '.vm__nivt{align-items:center;max-width:100%;}' +
        '.vm__nivC{display:block;max-width:100%;font:800 10.5px Montserrat,sans-serif;line-height:1.15;' +
          'text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
        '.vm__nivn{display:block;font:600 9px Montserrat,sans-serif;font-style:normal;' +
          'letter-spacing:0;text-transform:none;color:var(--vm-ink-3);' +
          'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
        '.vm__niv.is-on{background:var(--vm-encre-fond);border-color:var(--vm-encre-fond);color:#fff;}' +
        '.vm__niv.is-on .vm__nivC{color:#fff;}' +
        '.vm__niv.is-on .vm__nivn{color:rgba(255,255,255,.72);}' +
        '.vm__niv.is-on .vm__nivi{color:#fff;}' +
         
         
        '.vm__niv.est-vide:not(.is-on){opacity:.55;}' +
        


        '.vm__fok{position:sticky;bottom:0;z-index:2;display:flex;align-items:center;' +
          'justify-content:center;gap:8px;width:100%;min-height:52px;margin:14px 0 0;' +
          'padding:10px 14px;border:0;border-radius:var(--vm-r-btn);' +
          'background:var(--vm-encre-fond);color:#fff;cursor:pointer;' +
          'font:800 12.5px Montserrat,sans-serif;letter-spacing:.06em;text-transform:uppercase;' +
          'text-align:center;' +
           
           
          'box-shadow:0 60px 0 60px var(--vm-surface);}' +
        '.vm__fok.est-vide{background:var(--vm-surface);color:var(--vm-ink);' +
          'box-shadow:inset 0 0 0 1px var(--vm-line),0 60px 0 60px var(--vm-surface);}' +
         
         
        '.vm__niveaux .vm__niv,.vm__filtres .vm__f,.vm__filtres .vm__pj{width:100%;justify-content:flex-start;}' +
        






        '.vm__filtres .vm__ffam{display:grid;grid-template-columns:1fr 1fr;grid-auto-flow:dense;gap:6px;}' +
        '.vm__filtres .vm__ffam .vm__f{min-height:46px;padding:5px 10px;gap:7px;justify-content:flex-start;' +
          'text-transform:none;letter-spacing:0;font:700 12.5px/1.15 Montserrat,sans-serif;white-space:normal;text-align:left;}' +
        '.vm__filtres .vm__ffam .vm__f span{min-width:0;}' +
        



        '.vm__filtres .vm__frang,.vm__filtres .vm__cuisines{grid-column:1/-1;}' +
        '.vm__filtres .vm__ftete{display:flex;flex-direction:row;gap:6px;margin:2px 0 6px;}' +
        '.vm__filtres .vm__frang{width:100%;}' +
        '.vm__filtres .vm__cuisines{position:static;flex-direction:row;flex-wrap:wrap;margin:2px 0 4px;}' +
        '.vm__filtres > *{flex:0 0 auto;}' +
         
        
















        '.vm__outils{top:calc(10px + var(--vm-urgent-h,0px));left:auto;right:10px;bottom:auto;' +
          'flex-direction:column;align-items:flex-end;gap:8px;width:auto;max-width:none;}' +
        '.vm__geo{position:relative;flex-direction:column;width:62px;height:auto;min-height:56px;' +
          'padding:8px 5px 6px;border-radius:var(--vm-r-ui);gap:3px;}' +
         
         
         
         
         
        '.vm__geo[data-lib]::after{content:attr(data-lib);display:block;max-width:100%;' +
          'font:700 8px Montserrat,sans-serif;letter-spacing:0;line-height:1.1;' +
          'color:var(--vm-ink-2);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
        '.vm__gico{width:19px;height:19px;}' +
         
        '.vm__outils #vmAutour,.vm__outils #vmHL,.vm__outils #vmVue{display:none;}' +
        '.vm__acc{display:flex;position:relative;}' +
        




        '.vm__accV{display:none;}' +
         
         
        '.vm__outils{display:flex;}' +
        '.vm__accP{order:9;}' +
        '.vm__accF{order:8;}' +
        '.vm__plusF{display:flex;}' +
        '.vm__acc.est-actif{background:var(--vm-encre-fond);color:#fff;}' +
         
         
         
         
        '.vm__acc.est-actif[data-lib]::after{color:#fff;}' +
         
        '.vm__filtres .vm__pjl{display:inline;}' +
        '.vm__filtres .vm__pjc{display:none;}' +
        



        '.vm.a-prog .vm__filtres{opacity:0;pointer-events:none;transform:translateY(10px);}' +
        


        '.vm__bandeau{bottom:calc(max(calc(var(--vm-prgpeek) + 12px),calc(var(--vm-coins) + 6px + var(--vm-attrib,0px))) + env(safe-area-inset-bottom,0px));left:12px;right:12px;transform:none;max-width:none;gap:4px 10px;padding:10px 11px 11px 14px;flex-wrap:wrap;}' +
        '.vm__bandeau strong{flex:none;}' +
        

        '.vm__bandeau span{flex:1 1 100%;white-space:normal;overflow:visible;}' +
        '.vm__bandeau span{flex:1 1 100%;order:3;}' +
        '.vm__bx{order:2;}' +
        


         
        '.vm__mode{bottom:calc(max(calc(var(--vm-prgpeek) + 12px),calc(var(--vm-coins) + 6px)) + 58px + env(safe-area-inset-bottom,0px));}' +
        '.vm__fetat{left:12px;right:12px;top:auto;max-width:none;width:auto;' +
          'justify-content:center;' +
          'bottom:calc(max(calc(var(--vm-prgpeek) + 12px),' +
            'calc(var(--vm-coins) + 6px + var(--vm-attrib,0px))) + 6px + env(safe-area-inset-bottom,0px));}' +
         
         
        '.vm.a-fetat.a-fetat .vm__bandeau{bottom:calc(max(calc(var(--vm-prgpeek) + 12px),calc(var(--vm-coins) + 6px + var(--vm-attrib,0px))) + 60px + env(safe-area-inset-bottom,0px));}' +
        '.vm.a-fetat.a-fetat .vm__mode{bottom:calc(max(calc(var(--vm-prgpeek) + 12px),calc(var(--vm-coins) + 6px + var(--vm-attrib,0px))) + 114px + env(safe-area-inset-bottom,0px));}' +
        '.vm.a-prog .vm__mode{bottom:calc(84% + 14px);}' +
        


        '.vm__proghead{font-size:12px;}' +
        '.vm__tri{padding:6px 10px;}' +
        '.vm__tri button{padding:7px 6px;font-size:10px;}' +
        '.vm__proglist{padding:8px 10px;}' +
        '.vm__progall{min-height:44px;}' +
        '.vm__prgbasc{min-height:46px;}' +
        


        '.vm__fan{min-height:44px;}' +
        



        


        '.vm__rechbt{align-items:center;justify-content:center;width:44px;height:44px;flex:none;' +
          'border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);background:var(--vm-surface);' +
          'color:var(--vm-ink);cursor:pointer;box-shadow:var(--vm-ombre);}' +
        '.vm__rechbt svg{width:19px;height:19px;}' +
        


        '.vm__rechbt{display:none;}' +
        '.vm__rech{position:absolute;top:calc(10px + var(--vm-urgent-h,0px));left:10px;right:78px;' +
          'z-index:6;display:flex;align-items:center;height:48px;padding:0 14px 0 40px;' +
          'border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);background:var(--vm-surface);' +
          'box-shadow:var(--vm-ombre);}' +
        '.vm__rech .vm__rico{position:absolute;left:14px;top:50%;transform:translateY(-50%);' +
          'width:18px;height:18px;color:var(--vm-ink-3);}' +
        








        '.vm__rech #vmRech{width:100%;height:44px;border:0;background:none;' +
          'box-shadow:none;padding:0;' +
          'font:500 16px Montserrat,sans-serif;color:var(--vm-ink);}' +
         
        '.vm__rech .vm__rechx{display:none;}' +
        '.vm.a-rech .vm__rechbt{display:none;}' +
        











        





        








        '.vm #vmRech::-webkit-search-cancel-button,.vm #vmRech::-webkit-search-decoration{' +
          '-webkit-appearance:none;appearance:none;display:none;}' +
        '.vm.a-rech.a-rech .vm__rech{display:flex;flex-direction:column;position:absolute;' +
          'top:0;right:0;bottom:0;left:0;width:auto;height:auto;max-width:none;z-index:40;' +
          'background:var(--vm-bg);' +
          'padding:calc(12px + env(safe-area-inset-top,0px)) 12px 0;box-sizing:border-box;}' +
        '.vm.a-rech .vm__rico{position:absolute;left:26px;top:calc(27px + env(safe-area-inset-top,0px));' +
          'width:19px;height:19px;color:var(--vm-ink-3);pointer-events:none;}' +
        '.vm.a-rech #vmRech{flex:none;width:100%;height:52px;padding:0 56px 0 46px;' +
          'border:1px solid var(--vm-line);border-radius:var(--vm-r-ui);background:var(--vm-surface);' +
          

          'font:500 16px Montserrat,sans-serif;color:var(--vm-ink);box-sizing:border-box;' +
          'box-shadow:0 1px 3px rgba(10,26,53,.06);}' +
         
        '.vm.a-rech .vm__rechx{display:flex;align-items:center;justify-content:center;position:absolute;' +
          'right:10px;top:calc(10px + env(safe-area-inset-top,0px));width:44px;height:44px;border:0;' +
          'border-radius:50%;background:var(--vm-surface);color:var(--vm-ink-2);cursor:pointer;' +
          'box-shadow:var(--vm-ombre);z-index:2;}' +
         
        '.vm.a-rech #vmRech{padding-right:66px;}' +
        '.vm.a-rech .vm__rechx svg{width:17px;height:17px;}' +
        

        


        '.vm.a-rech .vm__res{position:static;display:block;flex:1;min-height:0;margin-top:10px;align-self:stretch;width:100%;' +
          'max-height:none;height:auto;overflow-y:auto;-webkit-overflow-scrolling:touch;' +
          'border:0;box-shadow:none;background:none;' +
          'padding-bottom:calc(24px + var(--vm-coins,0px) + env(safe-area-inset-bottom,0px));}' +
         
        '.vm.a-rech .vm__res button{border-radius:var(--vm-r-ui);margin-bottom:6px;}' +
        

        '.vm.a-rech .vm__resrec{border-bottom:0;min-height:58px;padding:0 14px;}' +
        '.vm.a-rech .vm__resrac.vm__resrac{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:0;}' +
        '.vm.a-rech .vm__resrac.vm__resrac button{display:flex;align-items:center;gap:10px;' +
          'grid-template-columns:none;grid-template-rows:none;' +
          'margin-bottom:0;min-height:60px;height:auto;padding:0 12px;border:0;' +
          'border-radius:var(--vm-r-ui);background:var(--vm-surface);' +
          'font:700 12.5px Montserrat,sans-serif;line-height:1.2;}' +
        '.vm.a-rech .vm__resrac.vm__resrac button span{min-width:0;white-space:normal;}' +
        '.vm.a-rech .vm__resh{margin-top:14px;}' +
        

        '.vm.a-rech .vm__prgbasc,.vm.a-rech .vm__attrib,.vm.a-rech .vm__acc{display:none;}' +
        



        '.vm.a-rech .vm__res button{display:grid;grid-template-columns:46px 1fr;grid-template-rows:auto auto;' +
          'align-items:center;gap:2px 12px;width:100%;min-height:64px;padding:10px 8px;' +
          'border:0;border-bottom:1px solid var(--vm-line);background:none;text-align:left;cursor:pointer;}' +
        '.vm.a-rech .vm__res button:active{background:var(--vm-bg);}' +
        '.vm.a-rech .vm__resic{grid-row:1/3;width:42px;height:42px;}' +
        '.vm.a-rech .vm__rest{font:700 15px Montserrat,sans-serif;color:var(--vm-ink);}' +
        '.vm.a-rech .vm__res i{grid-column:2;font:500 12.5px Montserrat,sans-serif;color:var(--vm-ink-2);' +
          'font-style:normal;}' +
        


        '.vm.a-prgprete .vm__bandeau{transition:bottom .3s cubic-bezier(.22,.61,.36,1);}' +
        



        '.vm.a-prog .vm__bandeau{display:none;}' +
        '.vm__proghead{padding:9px 12px;}' +
        '.vm__heure{padding:6px 14px 10px;}' +
        


        '.vm__progall{margin:8px 12px 10px calc(12px + var(--vm-bord-g-bas,0px));width:calc(100% - 24px - var(--vm-bord-g-bas,0px));}' +
        

        








        








        '.vm__voile{align-items:flex-end;justify-content:center;padding:0;' +
          'background:rgba(10,26,53,.42);pointer-events:auto;}' +
        '.vm__fiche{width:100%;max-width:none;max-height:88%;margin:0;overflow:hidden;' +
          'display:flex;flex-direction:column;' +
          

          'border-radius:18px 4px 0 0;' +
          'box-shadow:0 -12px 44px rgba(10,26,53,.32);' +
          'animation:vm-feuille .26s cubic-bezier(.22,.61,.36,1);}' +
        

        '.vm__fiche > .vm__fbody{flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;}' +
        '.vm__fiche > .vm__fimg{flex:none;}' +
        

        '.vm__fiche .vm__fimg{height:170px;}' +
        '.vm__fhero--classe{height:120px;}' +
        '.vm__fherof{height:80px;top:16px;right:20px;}' +
        '.vm__fskip--grand .vm__fport{width:80px;height:80px;}' +
        '.vm__fbody--chevauche .vm__fskip--grand{margin-top:-46px;}' +
        

        '.vm__fiche{padding-bottom:calc(var(--vm-coins,0px) + env(safe-area-inset-bottom,0px));}' +
        







        '.vm__fiche .vm__opts{margin-left:var(--vm-bord-g-bas,0px);}' +
        '@keyframes vm-feuille{from{transform:translateY(30px);opacity:0}to{transform:none;opacity:1}}' +
        '@media(prefers-reduced-motion:reduce){.vm__fiche{animation:none;}}' +
      '}' +
      






      '@media(hover:none){' +
        '.vm__f,.vm__raz,.vm__niv,.vm__tri button,.vm__cuisines button{min-height:44px;}' +
        '.vm__pj{min-height:46px;}' +
        '.vm__jnav,.vm__ux,.vm__bx,.vm__fx{width:44px;height:44px;}' +
        '.vm__geo,.vm__rech input{min-height:44px;}' +
        '.vm__geo{min-width:44px;}' +
        



        '.vm__fplus::after{content:"";position:absolute;top:50%;left:50%;width:44px;height:44px;transform:translate(-50%,-50%);}' +
         
        '.vm__prgbasc{min-height:52px;}' +
        


        '.vm__heure input[type=range]{height:44px;}' +
        '.vm__heure input[type=range]::-webkit-slider-thumb{width:28px;height:28px;}' +
        '.vm__heure input[type=range]::-moz-range-thumb{width:28px;height:28px;}' +
        


        

        '.vm .maplibregl-ctrl-zoom-in,.vm .maplibregl-ctrl-zoom-out{display:none;}' +
         
        '.vm__outils{left:12px;}' +
        '.vm .maplibregl-ctrl-group{box-shadow:none;background:none;}' +
      '}' +
      





      






      '@media(max-height:560px) and (min-width:821px){' +
         
         
        '.vm__niveaux{position:static;}' +
         
         
         
        '.vm__niv{flex:0 0 auto;padding:8px 13px;overflow:visible;}' +
        '.vm__rech{min-width:170px;}' +
        '.vm__filtres{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;' +
          'left:calc(12px + var(--vm-bord-g-bas));right:calc(300px + 24px);max-height:none;align-items:center;' +
          'bottom:calc(10px + var(--vm-coins) + var(--vm-attrib,0px) + env(safe-area-inset-bottom,0px));}' +
        '.vm__filtres > *{flex:0 0 auto;}' +
         
        '.vm__filtres .vm__pjl{display:none;}' +
        '.vm__filtres .vm__pjc{display:inline;}' +
         
         
        '.vm__ftete{display:contents;}' +
        '.vm__cuisines{position:absolute;bottom:calc(64px + var(--vm-coins));left:12px;flex-direction:row;}' +
        '.vm__bandeau{right:calc(300px + 24px);left:12px;transform:none;max-width:none;}' +
        '.vm__mode{top:auto;bottom:calc(70px + var(--vm-coins));}' +
      '}' +
      '@media(max-height:560px){' +
        '.vm.est-bas.est-bas .vm__niveaux{display:flex;flex-direction:row;gap:6px;}' +
         
         
         
         
        '.vm.est-bas.est-bas .vm__niveaux::before{flex:none;align-self:center;' +
          'max-width:112px;margin:0 8px 0 2px;}' +
        '.vm.est-bas.est-bas .vm__niv{flex:1;min-width:0;min-height:52px;padding:8px 10px;gap:9px;}' +
        '.vm.est-bas.est-bas .vm__nivi{width:30px;height:30px;}' +
        '.vm.est-bas.est-bas .vm__nivi svg{width:16px;height:16px;}' +
        '.vm.est-bas.est-bas .vm__nivL{font-size:12.5px;}' +
        '.vm.est-bas.est-bas .vm__nivn{font-size:10.5px;}' +
        '.vm.est-bas.est-bas .vm__filtres{padding-top:12px;}' +
        '.vm.est-bas.est-bas .vm__filtres::before{margin-bottom:6px;}' +
        '.vm.est-bas.est-bas .vm__fsect{margin-top:12px;}' +
        '.vm.est-bas.est-bas .vm__fok{min-height:46px;margin-top:10px;}' +
        '.vm.est-bas.est-bas .vm__filtres{flex-direction:row;flex-wrap:wrap;' +
          'align-content:flex-start;gap:6px;}' +
        '.vm.est-bas.est-bas .vm__filtres > *{flex:0 0 100%;}' +
         
        '.vm.est-bas.est-bas .vm__filtres .vm__pj{flex:1 1 calc(50% - 3px);width:auto;min-height:42px;}' +
         
        '.vm.est-bas.est-bas .vm__filtres .vm__ffam{display:grid;grid-template-columns:1fr 1fr;gap:6px;}' +
        '.vm.est-bas.est-bas .vm__filtres .vm__f{min-height:42px;}' +
        '.vm.est-bas.est-bas .vm__filtres .vm__ffam > *,' +
          '.vm.est-bas.est-bas .vm__filtres .vm__f{min-width:0;}' +
        '.vm.est-bas.est-bas .vm__filtres .vm__cuisines{grid-column:1/-1;}' +
        '.vm.est-bas.est-bas .vm__fsect{margin:8px 2px 0;}' +
         
         
        '.vm.est-bas.est-bas .vm__filtres,.vm.est-bas.est-bas .vm__plusF{max-height:88%;}' +
        '.vm{min-height:0;}' +
         
         
        '.vm__filtres{max-height:calc(100% - 104px - var(--vm-urgent-h,0px));gap:4px;}' +
        '.vm__prog{width:300px;top:8px;right:8px;bottom:calc(8px + var(--vm-coins));}' +
        '.vm__heure{padding:6px 12px;}' +
      '}' +
      











      '.vm.est-encadre .vm__outils,' +
        '.vm.est-encadre .vm__filtres,' +
        '.vm.est-encadre .vm__plusF,' +
        '.vm.est-encadre .vm__fetat,' +
        '.vm.est-encadre .vm__prog,' +
        '.vm.est-encadre .vm__prgrange,' +
        '.vm.est-encadre .vm__urgent,' +
        '.vm.est-encadre .vm__urgence,' +
        '.vm.est-encadre .vm__bandeau,' +
        '.vm.est-encadre .vm__vueTag,' +
        '.vm.est-encadre .vm__typan{display:none !important;}' +
      






      '.vm.est-encadre .vm__rech{display:none !important;}' +
      


      '.vm.est-encadre{--vm-urgent-h:0px;}' +
      


      '.vm.est-encadre .maplibregl-ctrl-top-left{top:10px;left:10px;}' +
      






      '.vm.est-encadre .vm__sq,' +
        '.vm.est-encadre .vm__sqcol{display:none;}' +
      


      '.vm__ici{padding:8px 13px 9px;background:var(--vm-surface);' +
        'border-radius:12px 0 12px 0;box-shadow:0 12px 30px rgba(10,26,53,.28);' +
        'font:800 13.5px/1.25 Montserrat,system-ui,sans-serif;color:var(--vm-encre);' +
        'max-width:230px;text-align:center;pointer-events:none;z-index:5;}' +
      '.vm__icipt{width:15px;height:15px;border-radius:50%;background:var(--vm-teal-deep);' +
        'border:3px solid #fff;box-shadow:0 4px 14px rgba(10,26,53,.4);' +
        'pointer-events:none;z-index:5;}' +
      

      '.vm__icipt::before{content:"";display:block;width:100%;height:100%;' +
        'border-radius:50%;border:2px solid var(--vm-teal-deep);' +
        'animation:vm-ici 2s ease-out infinite;}' +
      '@keyframes vm-ici{0%{transform:scale(1);opacity:.8}70%,100%{transform:scale(3.4);opacity:0}}' +
      '@media(prefers-reduced-motion:reduce){.vm *{transition:none !important;animation:none !important;}}' +
      '</style>';
    }
  }

  customElements.define('village-map', VillageMap);
}
;
})();
