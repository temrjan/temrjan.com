import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ===== ENGINE SOUND ===== */
class EngineSound {
  private ctx: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private masterGain: GainNode | null = null;
  private noiseGain: GainNode | null = null;
  private noiseSource: AudioBufferSourceNode | null = null;
  private active = false;

  start(): void {
    if (this.active) return;
    try {
      this.ctx = new AudioContext();

      // Master volume
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0;
      this.masterGain.connect(this.ctx.destination);

      // Distortion for grit
      const distortion = this.ctx.createWaveShaper();
      distortion.curve = this.makeDistortionCurve(80);
      distortion.oversample = '4x';

      // Low rumble
      const osc1 = this.ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.value = 55;
      const g1 = this.ctx.createGain();
      g1.gain.value = 0.35;
      osc1.connect(g1).connect(distortion).connect(this.masterGain);
      osc1.start();
      this.oscillators.push(osc1);

      // Mid harmonic
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'square';
      osc2.frequency.value = 110;
      const g2 = this.ctx.createGain();
      g2.gain.value = 0.15;
      osc2.connect(g2).connect(distortion).connect(this.masterGain);
      osc2.start();
      this.oscillators.push(osc2);

      // Sub bass
      const osc3 = this.ctx.createOscillator();
      osc3.type = 'triangle';
      osc3.frequency.value = 30;
      const g3 = this.ctx.createGain();
      g3.gain.value = 0.25;
      osc3.connect(g3).connect(this.masterGain);
      osc3.start();
      this.oscillators.push(osc3);

      // High whine (turbo feel)
      const osc4 = this.ctx.createOscillator();
      osc4.type = 'sine';
      osc4.frequency.value = 220;
      const g4 = this.ctx.createGain();
      g4.gain.value = 0.05;
      osc4.connect(g4).connect(this.masterGain);
      osc4.start();
      this.oscillators.push(osc4);

      // Exhaust noise
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1);
      }
      this.noiseSource = this.ctx.createBufferSource();
      this.noiseSource.buffer = buffer;
      this.noiseSource.loop = true;

      const lpFilter = this.ctx.createBiquadFilter();
      lpFilter.type = 'lowpass';
      lpFilter.frequency.value = 400;
      lpFilter.Q.value = 1;

      this.noiseGain = this.ctx.createGain();
      this.noiseGain.gain.value = 0.06;
      this.noiseSource.connect(lpFilter).connect(this.noiseGain).connect(this.masterGain);
      this.noiseSource.start();

      this.active = true;
    } catch {
      // Silent fallback
    }
  }

  update(rpm: number): void {
    if (!this.active || !this.ctx || !this.masterGain) return;
    const t = this.ctx.currentTime;

    // Volume ramps with RPM
    const vol = Math.min(0.25, (rpm / 9) * 0.25);
    this.masterGain.gain.setTargetAtTime(vol, t, 0.03);

    // Pitch scales with RPM
    const base = 35 + (rpm / 9) * 180;
    if (this.oscillators[0]) this.oscillators[0].frequency.setTargetAtTime(base, t, 0.03);
    if (this.oscillators[1]) this.oscillators[1].frequency.setTargetAtTime(base * 2.02, t, 0.03);
    if (this.oscillators[2]) this.oscillators[2].frequency.setTargetAtTime(base * 0.5, t, 0.03);
    if (this.oscillators[3]) this.oscillators[3].frequency.setTargetAtTime(base * 4, t, 0.05);

    // Noise louder at high RPM
    if (this.noiseGain) {
      this.noiseGain.gain.setTargetAtTime(0.03 + (rpm / 9) * 0.12, t, 0.03);
    }
  }

  private makeDistortionCurve(amount: number): Float32Array {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < samples; i++) {
      const x = (i * 2) / samples - 1;
      curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    return curve;
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
const SVG_NS = 'http://www.w3.org/2000/svg';
const CX = 200, CY = 200, R = 155;
const START = 135, END = 405, SWEEP = 270, MAX = 9, RED_START = 7;
const START_ROT = START + 90; // 225

function pt(r: number, angle: number): { x: number; y: number } {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function arc(r: number, s: number, e: number): string {
  const a = pt(r, e), b = pt(r, s);
  return `M ${a.x} ${a.y} A ${r} ${r} 0 ${e - s > 180 ? 1 : 0} 0 ${b.x} ${b.y}`;
}

function rpmToRot(rpm: number): number {
  return START_ROT + (rpm / MAX) * SWEEP;
}

function buildTachometer(): void {
  const tickGroup = document.getElementById('tickMarks');
  const labelGroup = document.getElementById('numberLabels');
  const redZoneGroup = document.getElementById('redZoneArc');
  const outerArcGroup = document.getElementById('outerArc');
  if (!tickGroup || !labelGroup || !redZoneGroup || !outerArcGroup) return;

  // Outer arc
  const track = document.createElementNS(SVG_NS, 'path');
  track.setAttribute('d', arc(R + 8, START, END));
  track.setAttribute('fill', 'none');
  track.setAttribute('stroke', '#1E1E22');
  track.setAttribute('stroke-width', '3');
  track.setAttribute('stroke-linecap', 'round');
  outerArcGroup.appendChild(track);

  // Red zone
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
  const MINOR = 4;
  const total = MAX * (MINOR + 1) + 1;
  for (let i = 0; i < total; i++) {
    const frac = i / (total - 1);
    const angle = START + frac * SWEEP;
    const isMajor = i % (MINOR + 1) === 0;
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

/* ===== INTERACTIVE TACHOMETER ===== */
function initInteractiveTacho(engine: EngineSound): void {
  const needle = document.getElementById('needleGroup');
  const rpmText = document.getElementById('rpmText');
  const svgEl = document.getElementById('tachometer');
  const container = document.querySelector('.tachometer-container') as HTMLElement | null;
  if (!needle || !rpmText || !svgEl || !container) return;

  let currentRpm = 0;
  let targetRpm = 0;
  let isRevving = false;
  let animFrame = 0;
  let soundStarted = false;

  function updateDisplay(): void {
    // Smooth interpolation
    const speed = isRevving ? 0.04 : 0.025;
    currentRpm += (targetRpm - currentRpm) * speed;

    // Clamp
    if (Math.abs(currentRpm - targetRpm) < 0.01) currentRpm = targetRpm;

    // Needle
    gsap.set(needle, { rotation: rpmToRot(currentRpm), svgOrigin: `${CX} ${CY}` });

    // RPM text
    rpmText.textContent = Math.round(currentRpm * 1000).toLocaleString();

    // Red zone glow
    if (currentRpm >= RED_START) {
      svgEl.classList.add('redzone-active');
    } else {
      svgEl.classList.remove('redzone-active');
    }

    // Engine sound
    engine.update(currentRpm);

    // Idle vibration
    if (!isRevving && currentRpm < 1.2 && currentRpm > 0.5) {
      const jitter = (Math.random() - 0.5) * 0.15;
      gsap.set(needle, { rotation: rpmToRot(currentRpm + jitter), svgOrigin: `${CX} ${CY}` });
    }

    animFrame = requestAnimationFrame(updateDisplay);
  }

  function startRev(): void {
    if (!soundStarted) {
      engine.start();
      soundStarted = true;
    }
    isRevving = true;
    targetRpm = 8.5; // Rev to near redline
  }

  function stopRev(): void {
    isRevving = false;
    targetRpm = 0.8; // Back to idle
  }

  // Cursor hint
  container.style.cursor = 'pointer';
  container.title = 'Hold to rev!';

  // Mouse events
  container.addEventListener('mousedown', (e) => { e.preventDefault(); startRev(); });
  document.addEventListener('mouseup', stopRev);

  // Touch events
  container.addEventListener('touchstart', (e) => { e.preventDefault(); startRev(); }, { passive: false });
  document.addEventListener('touchend', stopRev);
  document.addEventListener('touchcancel', stopRev);

  // Set to idle and start loop
  currentRpm = 0.8;
  targetRpm = 0.8;
  gsap.set(needle, { rotation: rpmToRot(0.8), svgOrigin: `${CX} ${CY}` });
  rpmText.textContent = '800';
  animFrame = requestAnimationFrame(updateDisplay);
}

/* ===== STARTUP ANIMATION ===== */
function playStartupThenInteractive(engine: EngineSound): void {
  const needle = document.getElementById('needleGroup');
  const needleShadow = document.getElementById('needleShadow');
  const rpmText = document.getElementById('rpmText');
  const svgEl = document.getElementById('tachometer');
  const ticks = document.querySelectorAll('.tick');
  const labels = document.querySelectorAll('.label');
  if (!needle || !rpmText || !svgEl) return;

  const rpmTracker = { value: 0 };
  gsap.set(needle, { rotation: START_ROT, svgOrigin: `${CX} ${CY}` });

  const tl = gsap.timeline({
    onUpdate() {
      rpmText.textContent = Math.round(rpmTracker.value * 1000).toLocaleString();
      if (rpmTracker.value >= RED_START) {
        svgEl.classList.add('redzone-active');
      } else {
        svgEl.classList.remove('redzone-active');
      }
    },
    onComplete() {
      // After startup animation -> switch to interactive mode
      initInteractiveTacho(engine);
    },
  });

  // Ticks fade in
  tl.to(ticks, { opacity: 1, duration: 0.04, stagger: 0.02, ease: 'power1.in' });
  tl.to(labels, { opacity: 1, duration: 0.1, stagger: 0.05, ease: 'power1.in' }, '-=0.3');

  // Startup sweep
  tl.to(needle, { rotation: rpmToRot(MAX), svgOrigin: `${CX} ${CY}`, duration: 1.4, ease: 'power2.in' }, '+=0.2');
  tl.to(rpmTracker, { value: MAX, duration: 1.4, ease: 'power2.in' }, '<');
  if (needleShadow) tl.to(needleShadow, { opacity: 0.4, duration: 0.3 }, '<');

  // Drop to idle
  tl.to(needle, { rotation: rpmToRot(0.8), svgOrigin: `${CX} ${CY}`, duration: 1.2, ease: 'power3.out' });
  tl.to(rpmTracker, { value: 0.8, duration: 1.2, ease: 'power3.out' }, '<');
}

/* ===== MAIN ===== */
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

  buildTachometer();
  const engine = new EngineSound();

  // 1. Header
  gsap.fromTo('#header', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });

  // 2. Greeting
  gsap.fromTo('#hero-greeting', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.3 });

  // 3. Tachometer appear + startup animation
  gsap.fromTo('#hero-tachometer', { opacity: 0, scale: 0.9 }, {
    opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', delay: 0.5,
    onComplete: () => playStartupThenInteractive(engine),
  });

  // 4. Tagline
  gsap.fromTo('#hero-tagline', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.8 });

  // 5. CTA
  gsap.fromTo('#hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.2 });

  // 6. Stats
  gsap.fromTo('#hero-stats', { y: 20, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.5,
    onComplete: animateCounters,
  });

  // 7. Section headings
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
    gsap.fromTo(card.querySelectorAll('.tech-badge'), { x: -20, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 75%', toggleActions: 'play none none none' },
    });
  });

  // 10. Scroll indicator
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
