/**
 * Archives — 10s Intro Animation
 * 使用方法：在 </body> 前引入此文件即可
 * <script src="archives-intro.js"></script>
 */
(function () {
  /* ── 1. 创建全屏遮罩 ── */
  const overlay = document.createElement('div');
  overlay.id = '__archives-intro';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: #03070F;
    overflow: hidden;
    pointer-events: all;
  `;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;';

  const scanLine = document.createElement('div');
  scanLine.style.cssText = `
    position:absolute;left:0;right:0;height:1px;
    background:linear-gradient(90deg,transparent,rgba(0,191,255,0.85),transparent);
    opacity:0;top:0%;pointer-events:none;
  `;

  const titleWrap = document.createElement('div');
  titleWrap.style.cssText = `
    position:absolute;inset:0;display:flex;flex-direction:column;
    align-items:center;justify-content:center;pointer-events:none;
  `;

  const titleEl = document.createElement('div');
  titleEl.style.cssText = `
    font-size:clamp(36px,6vw,72px);font-weight:500;
    letter-spacing:0.38em;color:#fff;opacity:1;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    text-transform:uppercase;display:flex;gap:0;
  `;

  const subEl = document.createElement('div');
  subEl.style.cssText = `
    font-size:11px;letter-spacing:0.55em;color:rgba(0,191,255,0.6);
    opacity:0;margin-top:14px;text-transform:uppercase;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    transition:opacity 1.2s ease;
  `;
  subEl.textContent = '';

  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position:absolute;bottom:0;left:0;height:2px;width:0%;
    background:linear-gradient(90deg,#0080ff,#00BFFF,#ff3333,#ffd700);
    transition:width 0.1s linear;
  `;

  /* ── 2. 组装 DOM ── */
  titleWrap.appendChild(titleEl);
  titleWrap.appendChild(subEl);
  overlay.appendChild(canvas);
  overlay.appendChild(scanLine);
  overlay.appendChild(titleWrap);
  overlay.appendChild(progressBar);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden'; // 动画期间禁止滚动

  /* ── 3. Canvas 设置 ── */
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() {
    W = canvas.width = overlay.offsetWidth;
    H = canvas.height = overlay.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── 4. 工具函数 ── */
  function rand(a, b) { return a + Math.random() * (b - a); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  const BLUE = ['#00BFFF', '#0080FF', '#4DC3FF', '#00D4FF'];
  const RED  = ['#FF3333', '#FF5555', '#FF2200'];
  const GOLD = ['#FFD700', '#FFA500', '#FFE566'];
  const ALL  = [...BLUE, ...RED, ...GOLD];

  /* ── 5. 粒子类 ── */
  class Streak {
    constructor() {
      const fromLeft = Math.random() < 0.6;
      if (fromLeft) { this.x = rand(-100, W * 0.2); this.y = rand(H * 0.1, H); }
      else          { this.x = rand(0, W * 0.6);    this.y = H + rand(0, 80); }
      this.color = Math.random() < 0.55 ? pick(BLUE) : Math.random() < 0.5 ? pick(RED) : pick(GOLD);
      this.speed = rand(5, 14);
      const angle = rand(-0.5, 0.15);
      this.vx = Math.cos(angle) * this.speed;
      this.vy = -Math.abs(Math.sin(angle)) * this.speed * rand(0.4, 1.3);
      this.life = 0; this.maxLife = rand(50, 110);
      this.width = rand(0.8, 2.5); this.trail = [];
    }
    update() {
      this.life++; this.x += this.vx; this.y += this.vy; this.vy += 0.03;
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > 18) this.trail.shift();
    }
    draw() {
      if (this.trail.length < 2) return;
      const a = this.life < 8 ? this.life / 8 : Math.max(0, 1 - (this.life - 8) / (this.maxLife - 8));
      ctx.save(); ctx.globalAlpha = a * 0.85; ctx.strokeStyle = this.color;
      ctx.shadowColor = this.color; ctx.shadowBlur = 10; ctx.lineWidth = this.width;
      ctx.beginPath(); ctx.moveTo(this.trail[0].x, this.trail[0].y);
      for (let i = 1; i < this.trail.length; i++) ctx.lineTo(this.trail[i].x, this.trail[i].y);
      ctx.stroke(); ctx.restore();
    }
    dead() { return this.life >= this.maxLife; }
  }

  class Particle {
    constructor() {
      this.x = rand(0, W); this.y = rand(0, H);
      this.r = rand(0.8, 2.5); this.color = pick(ALL);
      this.alpha = rand(0.4, 1); this.vx = rand(-0.4, 0.4); this.vy = rand(-0.4, 0.4);
      this.life = 0; this.maxLife = rand(80, 220);
    }
    update() { this.life++; this.x += this.vx; this.y += this.vy; this.alpha *= 0.993; }
    draw() {
      ctx.save(); ctx.globalAlpha = this.alpha;
      ctx.shadowColor = this.color; ctx.shadowBlur = 5; ctx.fillStyle = this.color;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    }
    dead() { return this.life >= this.maxLife || this.alpha < 0.01; }
  }

  class Spark {
    constructor(x, y, col) {
      this.x = x; this.y = y; this.color = col;
      this.vx = rand(-4, 4); this.vy = rand(-4, 4);
      this.life = 0; this.maxLife = rand(18, 45); this.r = rand(0.5, 1.8);
    }
    update() { this.life++; this.x += this.vx; this.y += this.vy; this.vy += 0.12; this.vx *= 0.97; }
    draw() {
      const a = 1 - this.life / this.maxLife;
      ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = this.color;
      ctx.shadowColor = this.color; ctx.shadowBlur = 4;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    }
    dead() { return this.life >= this.maxLife; }
  }

  class Ring {
    constructor(x, y, col) {
      this.x = x; this.y = y; this.color = col;
      this.r = 0; this.maxR = rand(60, 140); this.life = 0; this.maxLife = 60;
    }
    update() { this.life++; this.r = this.maxR * (this.life / this.maxLife); }
    draw() {
      const a = 1 - this.life / this.maxLife;
      ctx.save(); ctx.globalAlpha = a * 0.5; ctx.strokeStyle = this.color;
      ctx.lineWidth = 1; ctx.shadowColor = this.color; ctx.shadowBlur = 8;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    }
    dead() { return this.life >= this.maxLife; }
  }

  /* ── 6. 辅助绘制 ── */
  function drawTunnel(alpha, t) {
    if (alpha <= 0) return;
    const cx = W * 0.5, cy = H * 0.48;
    ctx.save();
    for (let i = 10; i > 0; i--) {
      const s = i / 10, w = W * s * 0.85, h = H * s * 0.72;
      const pulse = Math.sin(t * 2 + i) * 0.01;
      ctx.globalAlpha = alpha * (0.03 + 0.015 * (10 - i) + pulse);
      ctx.strokeStyle = '#003388'; ctx.lineWidth = 0.5;
      ctx.strokeRect(cx - w / 2, cy - h / 2, w + pulse * W, h + pulse * H);
    }
    ctx.restore();
  }

  function drawGrid(alpha) {
    if (alpha <= 0) return;
    ctx.save(); ctx.globalAlpha = alpha * 0.06; ctx.strokeStyle = '#0044aa'; ctx.lineWidth = 0.5;
    const cols = 16, rows = 10;
    for (let i = 0; i <= cols; i++) { ctx.beginPath(); ctx.moveTo(i / cols * W, 0); ctx.lineTo(i / cols * W, H); ctx.stroke(); }
    for (let i = 0; i <= rows; i++) { ctx.beginPath(); ctx.moveTo(0, i / rows * H); ctx.lineTo(W, i / rows * H); ctx.stroke(); }
    ctx.restore();
  }

  /* ── 7. 状态变量 ── */
  let particles = [], streaks = [], sparks = [], rings = [];
  let frame = 0, animId, startTime;
  let letterEls = [];
  let letterTriggered = false, subTriggered = false;
  let scanTriggered = false, glitchId = null;

  /* ── 8. 字母逐个弹入 ── */
  const WORD = 'ARCHIVES';
  function buildTitle() {
    titleEl.innerHTML = ''; letterEls = [];
    for (let i = 0; i < WORD.length; i++) {
      const s = document.createElement('span');
      s.textContent = WORD[i];
      s.style.cssText = 'display:inline-block;opacity:0;transform:translateY(28px) scale(0.8);transition:opacity 0.5s ease,transform 0.5s ease;';
      titleEl.appendChild(s); letterEls.push(s);
    }
  }

  function triggerLetters() {
    if (letterTriggered) return; letterTriggered = true;
    letterEls.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
        el.style.textShadow = '0 0 20px rgba(0,191,255,0.9),0 0 60px rgba(0,191,255,0.4)';
        const x = W / 2 + (-WORD.length / 2 + i) * 42;
        const y = H / 2;
        for (let k = 0; k < 4; k++) sparks.push(new Spark(x, y + rand(-10, 10), pick(ALL)));
      }, i * 120);
    });
  }

  function triggerScan() {
    if (scanTriggered) return; scanTriggered = true;
    scanLine.style.transition = 'none'; scanLine.style.top = '0%'; scanLine.style.opacity = '0.7';
    setTimeout(() => { scanLine.style.transition = 'top 0.8s cubic-bezier(0.4,0,0.2,1),opacity 0.2s'; scanLine.style.top = '100%'; }, 50);
    setTimeout(() => { scanLine.style.opacity = '0'; }, 850);
  }

  function startGlitch() {
    if (glitchId) return;
    glitchId = setInterval(() => {
      titleEl.style.transform = `translate(${rand(-3, 3)}px,${rand(-2, 2)}px)`;
      titleEl.style.filter = `hue-rotate(${rand(0, 30)}deg)`;
      setTimeout(() => { titleEl.style.transform = ''; titleEl.style.filter = ''; }, 60);
    }, rand(1200, 2000));
  }

  /* ── 9. 粒子生成策略 ── */
  function spawnByPhase(t) {
    if (t < 1.5) {
      if (frame % 3 === 0) particles.push(new Particle());
    } else if (t < 3) {
      if (frame % 2 === 0) particles.push(new Particle());
      if (frame % 5 === 0) streaks.push(new Streak());
    } else if (t < 5.5) {
      if (frame % 1 === 0) particles.push(new Particle());
      if (frame % 2 === 0) streaks.push(new Streak());
      if (frame % 10 === 0) {
        const x = rand(W * 0.1, W * 0.9), y = rand(H * 0.1, H * 0.9), col = pick(ALL);
        for (let i = 0; i < 6; i++) sparks.push(new Spark(x, y, col));
        rings.push(new Ring(x, y, col));
      }
    } else if (t < 8) {
      if (frame % 2 === 0) particles.push(new Particle());
      if (frame % 3 === 0) streaks.push(new Streak());
      if (frame % 16 === 0) rings.push(new Ring(rand(W * 0.2, W * 0.8), rand(H * 0.2, H * 0.8), pick(BLUE)));
    } else {
      if (frame % 4 === 0) particles.push(new Particle());
      if (frame % 6 === 0) streaks.push(new Streak());
    }
  }

  /* ── 10. 主循环 ── */
  function loop(ts) {
    animId = requestAnimationFrame(loop);
    frame++;
    const elapsed = ts - startTime;
    const t = elapsed / 1000;

    progressBar.style.width = Math.min(t / 10 * 100, 100) + '%';

    ctx.fillStyle = 'rgba(3,7,15,0.16)';
    ctx.fillRect(0, 0, W, H);

    drawGrid(Math.min(1, Math.max(0, (t - 0.3) / 2)));
    drawTunnel(Math.min(1, Math.max(0, (t - 0.8) / 2.5)), t);

    spawnByPhase(t);
    particles = particles.filter(p => { p.update(); if (!p.dead()) { p.draw(); return true; } return false; });
    streaks   = streaks.filter(s => { s.update(); if (!s.dead()) { s.draw(); return true; } return false; });
    sparks    = sparks.filter(s => { s.update(); if (!s.dead()) { s.draw(); return true; } return false; });
    rings     = rings.filter(r => { r.update(); if (!r.dead()) { r.draw(); return true; } return false; });

    if (t >= 4.5) triggerScan();
    if (t >= 5.0) triggerLetters();
    if (t >= 6.2 && !subTriggered) { subTriggered = true; subEl.style.opacity = '1'; }
    if (t >= 6.5) startGlitch();

    /* 10秒结束：淡出遮罩，还原滚动 */
    if (t >= 10) {
      cancelAnimationFrame(animId);
      clearInterval(glitchId);
      overlay.style.transition = 'opacity 0.8s ease';
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
        document.body.style.overflow = '';
        window.removeEventListener('resize', resize);
      }, 800);
    }
  }

  /* ── 11. 启动 ── */
  buildTitle();
  startTime = performance.now();
  animId = requestAnimationFrame(loop);

})();
