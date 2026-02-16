import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ===== ENGINE SOUND (Web Audio API) ===== */
class EngineSound {
  private ctx: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private noiseGain: GainNode | null = null;
  private noiseSource: AudioBufferSourceNode | null = null;
  private active = false;

  start(): void {
    if (this.active) return;
    try {
      this.ctx = new AudioContext();
      const master = this.ctx.createGain();
      master.gain.value = 0;
      master.connect(this.ctx.destination);

      // Main engine tone (low rumble)
      const osc1 = this.ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.value = 55;
      const g1 = this.ctx.createGain();
      g1.gain.value = 0.3;
      osc1.connect(g1).connect(master);
      osc1.start();
      this.oscillators.push(osc1);

      // Harmonic overtone
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'square';
      osc2.frequency.value = 110;
      const g2 = this.ctx.createGain();
      g2.gain.value = 0.15;
      osc2.connect(g2).connect(master);
      osc2.start();
      this.oscillators.push(osc2);

      // Sub bass pulse
      const osc3 = this.ctx.createOscillator();
      osc3.type = 'sine';
      osc3.frequency.value = 30;
      const g3 = this.ctx.createGain();
      g3.gain.value = 0.2;
      osc3.connect(g3).connect(master);
      osc3.start();
      this.oscillators.push(osc3);

      // Noise for exhaust texture
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
      }
      this.noiseSource = this.ctx.createBufferSource();
      this.noiseSource.buffer = buffer;
      this.noiseSource.loop = true;
      this.noiseGain = this.ctx.createGain();
      this.noiseGain.gain.value = 0.04;

      // Lowpass filter on noise
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 300;
      this.noiseSource.connect(filter).connect(this.noiseGain).connect(master);
      this.noiseSource.start();

      this.gainNode = master;
      this.active = true;
    } catch {
      // Web Audio not available — silent fallback
    }
  }

  update(rpm: number): void {
    if (!this.active || !this.ctx || !this.gainNode) return;
    const t = this.ctx.currentTime;

    // Volume: 0 at idle, ramp up with RPM
    const volume = Math.min(0.18, (rpm / 9) * 0.18);
    this.gainNode.gain.setTargetAtTime(volume, t, 0.05);

    // Pitch scales with RPM
    const baseFreq = 40 + (rpm / 9) * 160;
    this.oscillators[0]?.frequency.setTargetAtTime(baseFreq, t, 0.05);
    this.oscillators[1]?.frequency.setTargetAtTime(baseFreq * 2, t, 0.05);
    this.oscillators[2]?.frequency.setTargetAtTime(baseFreq * 0.5, t, 0.05);

    // Noise gets louder at high RPM
    if (this.noiseGain) {
      const noiseVol = 0.02 + (rpm / 9) * 0.08;
      this.noiseGain.gain.setTargetAtTime(noiseVol, t, 0.05);
    }
  }

  stop(): void {
    if (!this.active) return;
    this.oscillators.forEach((o) => { try { o.stop(); } catch {} });
    try { this.noiseSource?.stop(); } catch {}
    try { this.ctx?.close(); } catch {}
    this.active = false;
  }
}

/* ===== TACHOMETER BUILD ===== */
function buildTachometer(): void {
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const tickGroup = document.getElementById('tickMarks');
  const labelGroup = document.getElementById('numberLabels');
  const redZoneGroup = document.getElementById('redZoneArc');
  const outerArcGroup = document.getElementById('outerArc');
  if (!tickGroup || !labelGroup || !redZoneGroup || !outerArcGroup) return;

  const CX = 200, CY = 200, R = 155;
  const START = 135, END = 405, SWEEP = 270, MAX = 9, RED_START = 7;

  function pt(r: number, angle: number): { x: number; y: number } {
    const rad = (angle * Math.PI) / 180;
    return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
  }

  function arc(r: number, s: number, e: number): string {
    const a = pt(r, e), b = pt(r, s);
    return `M ${a.x} ${a.y} A ${r} ${r} 0 ${e - s > 180 ? 1 : 0} 0 ${b.x} ${b.y}`;
  }

  // Outer arc track
  const track = document.createElementNS(SVG_NS, 'path');
  track.setAttribute('d', arc(R + 8, START, END));
  track.setAttribute('fill', 'none');
  track.setAttribute('stroke', '#1E1E22');
  track.setAttribute('stroke-width', '3');
  track.setAttribute('stroke-linecap', 'round');
  outerArcGroup.appendChild(track);

  // Red zone arc
  const redStart = START + (RED_START / MAX) * SWEEP;
  [['3', '0.7', ''], ['8', '0.15', 'url(#redGlow)']].forEach(([w, o, f]) => {
    const p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', arc(R + 8, redStart, END));
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', '#E31E24');
    p.setAttribute('stroke-width', w);
    p.setAttribute('stroke-linecap', 'round');
    p.setAttribute('opacity', o);
    if (f) p.setAttribute('filter', f);
    redZoneGroup.appendChild(p);
  });

  // Ticks
  const MINOR_PER_MAJOR = 4;
  const totalTicks = (MAX) * (MINOR_PER_MAJOR + 1) + 1;
  for (let i = 0; i < totalTicks; i++) {
    const frac = i / (totalTicks - 1);
    const angle = START + frac * SWEEP;
    const isMajor = i % (MINOR_PER_MAJOR + 1) === 0;
    const isRed = frac * MAX >= RED_START;
    const outer = pt(R, angle);
    const inner = pt(isMajor ? 140 : 147, angle);

    const tick = document.createElementNS(SVG_NS, 'line');
    tick.setAttribute('x1', outer.x.toFixed(2));
    tick.setAttribute('y1', outer.y.toFixed(2));
    tick.setAttribute('x2', inner.x.toFixed(2));
    tick.setAttribute('y2', inner.y.toFixed(2));
    tick.setAttribute('stroke', isRed ? '#E31E24' : isMajor ? '#CCCCCC' : '#555555');
    tick.setAttribute('stroke-width', isMajor ? '2.5' : '1');
    tick.setAttribute('stroke-linecap', 'round');
    tick.classList.add('tick');
    tick.style.opacity = '0';
    tickGroup.appendChild(tick);
  }

  // Labels
  for (let i = 0; i <= MAX; i++) {
    const angle = START + (i / MAX) * SWEEP;
    const pos = pt(125, angle);
    const isRed = i >= RED_START;

    const text = document.createElementNS(SVG_NS, 'text');
    text.setAttribute('x', pos.x.toFixed(2));
    text.setAttribute('y', (pos.y + 4).toFixed(2));
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', isRed ? '#E31E24' : '#999999');
    text.setAttribute('font-family', "'JetBrains Mono', monospace");
    text.setAttribute('font-size', '14');
    text.setAttribute('font-weight', isRed ? '700' : '400');
    text.textContent = String(i);
    text.classList.add('label');
    text.style.opacity = '0';
    labelGroup.appendChild(text);
  }
}

/* ===== TACHOMETER ANIMATION ===== */
function animateTachometer(engine: EngineSound): void {
  const needle = document.getElementById('needleGroup');
  const needleShadow = document.getElementById('needleShadow');
  const rpmText = document.getElementById('rpmText');
  const svgEl = document.getElementById('tachometer');
  const ticks = document.querySelectorAll('.tick');
  const labels = document.querySelectorAll('.label');
  if (!needle || !rpmText || !svgEl) return;

  const CX = 200, CY = 200, START_ROT = 225, SWEEP = 270, MAX = 9;
  const rpmTracker = { value: 0 };

  function rpmToRot(rpm: number): number {
    return START_ROT + (rpm / MAX) * SWEEP;
  }

  gsap.set(needle, { rotation: START_ROT, svgOrigin: `${CX} ${CY}` });

  const tl = gsap.timeline({
    delay: 0.5,
    onUpdate() {
      rpmText.textContent = Math.round(rpmTracker.value * 1000).toLocaleString();
      engine.update(rpmTracker.value);
      if (rpmTracker.value >= 7) {
        svgEl.classList.add('redzone-active');
      } else {
        svgEl.classList.remove('redzone-active');
      }
    },
  });

  // Phase 1: Ticks fade in
  tl.to(ticks, { opacity: 1, duration: 0.04, stagger: 0.02, ease: 'power1.in' });

  // Phase 2: Labels fade in
  tl.to(labels, { opacity: 1, duration: 0.1, stagger: 0.05, ease: 'power1.in' }, '-=0.3');

  // Phase 3: Startup sweep to max
  tl.to(needle, { rotation: rpmToRot(MAX), svgOrigin: `${CX} ${CY}`, duration: 1.8, ease: 'power2.in' }, '+=0.3');
  tl.to(rpmTracker, { value: MAX, duration: 1.8, ease: 'power2.in' }, '<');
  tl.to(needleShadow, { opacity: 0.4, duration: 0.3 }, '<');

  // Phase 4: Drop to idle
  tl.to(needle, { rotation: rpmToRot(0.8), svgOrigin: `${CX} ${CY}`, duration: 1.4, ease: 'power3.out' });
  tl.to(rpmTracker, { value: 0.8, duration: 1.4, ease: 'power3.out' }, '<');

  // Phase 5: Rev to 6500
  tl.to(needle, { rotation: rpmToRot(6.5), svgOrigin: `${CX} ${CY}`, duration: 1.0, ease: 'power4.in' }, '+=0.8');
  tl.to(rpmTracker, { value: 6.5, duration: 1.0, ease: 'power4.in' }, '<');

  // Phase 6: Gear shift drop to 3000
  tl.to(needle, { rotation: rpmToRot(3), svgOrigin: `${CX} ${CY}`, duration: 0.3, ease: 'power2.out' });
  tl.to(rpmTracker, { value: 3, duration: 0.3, ease: 'power2.out' }, '<');

  // Phase 7: Rev past redline to 8200
  tl.to(needle, { rotation: rpmToRot(8.2), svgOrigin: `${CX} ${CY}`, duration: 1.6, ease: 'power3.in' }, '+=0.2');
  tl.to(rpmTracker, { value: 8.2, duration: 1.6, ease: 'power3.in' }, '<');

  // Phase 8: Settle to idle
  tl.to(needle, { rotation: rpmToRot(0.8), svgOrigin: `${CX} ${CY}`, duration: 2.0, ease: 'power2.out' }, '+=0.5');
  tl.to(rpmTracker, { value: 0.8, duration: 2.0, ease: 'power2.out' }, '<');

  // Idle vibration
  tl.call(() => {
    gsap.to(needle, {
      rotation: '+=0.8',
      svgOrigin: `${CX} ${CY}`,
      duration: 0.08,
      yoyo: true,
      repeat: -1,
      ease: 'none',
    });
  });
}

/* ===== MAIN INIT ===== */
function initAnimations(): void {
  if (prefersReducedMotion()) {
    document.querySelectorAll('[data-animate]').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
    });
    buildTachometer();
    document.querySelectorAll('.tick, .label').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
    });
    return;
  }

  // Build tachometer gauge
  buildTachometer();

  // Engine sound (starts on first user interaction due to autoplay policy)
  const engine = new EngineSound();

  // Auto-start sound on first click anywhere
  const startSound = (): void => {
    engine.start();
    document.removeEventListener('click', startSound);
    document.removeEventListener('touchstart', startSound);
  };
  document.addEventListener('click', startSound, { once: true });
  document.addEventListener('touchstart', startSound, { once: true });

  // Try starting immediately (works if user already interacted)
  try { engine.start(); } catch {}

  // 1. Header fade down
  gsap.fromTo('#header', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });

  // 2. Hero greeting
  gsap.fromTo('#hero-greeting', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.3 });

  // 3. Tachometer fade in
  gsap.fromTo('#hero-tachometer', { opacity: 0, scale: 0.9 }, {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.5,
    onComplete: () => animateTachometer(engine),
  });

  // 4. Tagline
  gsap.fromTo('#hero-tagline', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.8 });

  // 5. CTA buttons
  gsap.fromTo('#hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.2 });

  // 6. Stats
  gsap.fromTo('#hero-stats', { y: 20, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.5,
    onComplete: animateCounters,
  });

  // 7. Section headings — scroll
  gsap.utils.toArray<HTMLElement>('#projects [data-animate]:first-child, #contact [data-animate]').forEach((el) => {
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });

  // 8. Project cards
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
    gsap.fromTo(card, { y: 60, opacity: 0, scale: 0.95 }, {
      y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
      delay: i * 0.1,
    });
  });

  // 9. Tech badges
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
    const badges = card.querySelectorAll('.tech-badge');
    gsap.fromTo(badges, { x: -20, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 75%', toggleActions: 'play none none none' },
    });
  });

  // 10. Scroll indicator bounce
  gsap.to('#scroll-indicator', { y: 10, duration: 1.2, ease: 'power1.inOut', yoyo: true, repeat: -1, delay: 2 });
  gsap.set('#scroll-indicator', { opacity: 1 });
}

function animateCounters(): void {
  document.querySelectorAll('.stat-number').forEach((el) => {
    const target = parseInt(el.getAttribute('data-target') ?? '0', 10);
    const obj = { value: 0 };
    gsap.to(obj, {
      value: target, duration: 1.5, ease: 'power2.out',
      onUpdate: () => { el.textContent = Math.round(obj.value).toString(); },
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
