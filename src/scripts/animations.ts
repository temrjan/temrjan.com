import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ===== HYBRID ENGINE SOUND (Real sample + Web Audio processing) ===== */
class EngineSound {
  private ctx: AudioContext | null = null;
  private source: AudioBufferSourceNode | null = null;
  private buffer: AudioBuffer | null = null;
  private masterGain: GainNode | null = null;
  private lowpass: BiquadFilterNode | null = null;
  private presence: BiquadFilterNode | null = null;
  private exhaustRes: BiquadFilterNode | null = null;
  private noiseGain: GainNode | null = null;
  private noiseSource: AudioBufferSourceNode | null = null;
  private noiseBandpass: BiquadFilterNode | null = null;
  private active = false;
  private loaded = false;
  private baseRpm = 3500;

  async load(): Promise<void> {
    try {
      this.ctx = new AudioContext();
      const response = await fetch('/sounds/engine-loop.mp3');
      const arrayBuffer = await response.arrayBuffer();
      this.buffer = await this.ctx.decodeAudioData(arrayBuffer);
      this.loaded = true;
    } catch {
      // Audio not available
    }
  }

  start(): void {
    if (this.active || !this.loaded || !this.ctx || !this.buffer) return;

    // Resume context (autoplay policy)
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // Master volume
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0;
    this.masterGain.connect(this.ctx.destination);

    // Distortion for aggression
    const distortion = this.ctx.createWaveShaper();
    distortion.curve = this.makeDistortionCurve(150);
    distortion.oversample = '2x';
    distortion.connect(this.masterGain);

    // High-shelf presence (opens up at high RPM)
    this.presence = this.ctx.createBiquadFilter();
    this.presence.type = 'highshelf';
    this.presence.frequency.value = 2000;
    this.presence.gain.value = 0;
    this.presence.connect(distortion);

    // Exhaust resonance (fixed formant)
    this.exhaustRes = this.ctx.createBiquadFilter();
    this.exhaustRes.type = 'peaking';
    this.exhaustRes.frequency.value = 200;
    this.exhaustRes.Q.value = 2;
    this.exhaustRes.gain.value = 6;
    this.exhaustRes.connect(this.presence);

    // Low-pass (muffled at low RPM, opens at high)
    this.lowpass = this.ctx.createBiquadFilter();
    this.lowpass.type = 'lowpass';
    this.lowpass.frequency.value = 1500;
    this.lowpass.Q.value = 0.7;
    this.lowpass.connect(this.exhaustRes);

    // Sample source (looped)
    this.source = this.ctx.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.loop = true;
    this.source.connect(this.lowpass);
    this.source.start();

    // Combustion noise texture
    const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    this.noiseSource = this.ctx.createBufferSource();
    this.noiseSource.buffer = noiseBuffer;
    this.noiseSource.loop = true;

    this.noiseBandpass = this.ctx.createBiquadFilter();
    this.noiseBandpass.type = 'bandpass';
    this.noiseBandpass.frequency.value = 400;
    this.noiseBandpass.Q.value = 1.0;

    this.noiseGain = this.ctx.createGain();
    this.noiseGain.gain.value = 0.005;

    this.noiseSource.connect(this.noiseBandpass);
    this.noiseBandpass.connect(this.noiseGain);
    this.noiseGain.connect(this.masterGain);
    this.noiseSource.start();

    this.active = true;
  }

  update(rpm: number): void {
    if (!this.active || !this.ctx || !this.masterGain || !this.source) return;
    const t = this.ctx.currentTime;
    const ramp = 0.06;
    const norm = Math.max(0, Math.min(1, rpm / 9));

    // Playback rate — pitch shifts the sample
    const rate = Math.max(0.4, Math.min(2.2, (rpm * 1000) / (this.baseRpm)));
    this.source.playbackRate.linearRampToValueAtTime(rate, t + ramp);

    // Volume ramps with RPM
    const vol = 0.15 + norm * 0.55;
    this.masterGain.gain.linearRampToValueAtTime(vol, t + ramp);

    // Low-pass opens with RPM
    if (this.lowpass) {
      const lpFreq = 1200 + norm * 7000;
      this.lowpass.frequency.linearRampToValueAtTime(lpFreq, t + ramp);
    }

    // Presence increases with RPM
    if (this.presence) {
      this.presence.gain.linearRampToValueAtTime(norm * 12, t + ramp);
    }

    // Exhaust resonance shifts slightly
    if (this.exhaustRes) {
      this.exhaustRes.frequency.linearRampToValueAtTime(150 + norm * 100, t + ramp);
    }

    // Noise louder at high RPM
    if (this.noiseGain) {
      this.noiseGain.gain.linearRampToValueAtTime(0.003 + norm * 0.04, t + ramp);
    }
    if (this.noiseBandpass) {
      this.noiseBandpass.frequency.linearRampToValueAtTime(300 + norm * 600, t + ramp);
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
    try { this.source?.stop(); } catch {}
    try { this.noiseSource?.stop(); } catch {}
    this.active = false;
  }
}

/* ===== TACHOMETER BUILD ===== */
const SVG_NS = 'http://www.w3.org/2000/svg';
const CX = 200, CY = 200, R = 155;
const START = 135, END = 405, SWEEP = 270, MAX = 9, RED_START = 7;
const START_ROT = START + 90;

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

  const track = document.createElementNS(SVG_NS, 'path');
  track.setAttribute('d', arc(R + 8, START, END));
  track.setAttribute('fill', 'none');
  track.setAttribute('stroke', '#1E1E22');
  track.setAttribute('stroke-width', '3');
  track.setAttribute('stroke-linecap', 'round');
  outerArcGroup.appendChild(track);

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

  let currentRpm = 0.8;
  let targetRpm = 0.8;
  let isRevving = false;
  let soundStarted = false;

  function updateDisplay(): void {
    const speed = isRevving ? 0.04 : 0.025;
    currentRpm += (targetRpm - currentRpm) * speed;
    if (Math.abs(currentRpm - targetRpm) < 0.01) currentRpm = targetRpm;

    gsap.set(needle, { rotation: rpmToRot(currentRpm), svgOrigin: `${CX} ${CY}` });
    rpmText.textContent = Math.round(currentRpm * 1000).toLocaleString();

    if (currentRpm >= RED_START) {
      svgEl.classList.add('redzone-active');
    } else {
      svgEl.classList.remove('redzone-active');
    }

    engine.update(currentRpm);

    if (!isRevving && currentRpm < 1.2 && currentRpm > 0.5) {
      const jitter = (Math.random() - 0.5) * 0.15;
      gsap.set(needle, { rotation: rpmToRot(currentRpm + jitter), svgOrigin: `${CX} ${CY}` });
    }

    requestAnimationFrame(updateDisplay);
  }

  function startRev(): void {
    if (!soundStarted) {
      engine.start();
      soundStarted = true;
    }
    isRevving = true;
    targetRpm = 8.5;
  }

  function stopRev(): void {
    isRevving = false;
    targetRpm = 0.8;
  }

  container.style.cursor = 'pointer';

  container.addEventListener('mousedown', (e) => { e.preventDefault(); startRev(); });
  document.addEventListener('mouseup', stopRev);
  container.addEventListener('touchstart', (e) => { e.preventDefault(); startRev(); }, { passive: false });
  document.addEventListener('touchend', stopRev);
  document.addEventListener('touchcancel', stopRev);

  gsap.set(needle, { rotation: rpmToRot(0.8), svgOrigin: `${CX} ${CY}` });
  rpmText.textContent = '800';
  requestAnimationFrame(updateDisplay);
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
      initInteractiveTacho(engine);
    },
  });

  tl.to(ticks, { opacity: 1, duration: 0.04, stagger: 0.02, ease: 'power1.in' });
  tl.to(labels, { opacity: 1, duration: 0.1, stagger: 0.05, ease: 'power1.in' }, '-=0.3');
  tl.to(needle, { rotation: rpmToRot(MAX), svgOrigin: `${CX} ${CY}`, duration: 1.4, ease: 'power2.in' }, '+=0.2');
  tl.to(rpmTracker, { value: MAX, duration: 1.4, ease: 'power2.in' }, '<');
  if (needleShadow) tl.to(needleShadow, { opacity: 0.4, duration: 0.3 }, '<');
  tl.to(needle, { rotation: rpmToRot(0.8), svgOrigin: `${CX} ${CY}`, duration: 1.2, ease: 'power3.out' });
  tl.to(rpmTracker, { value: 0.8, duration: 1.2, ease: 'power3.out' }, '<');
}

/* ===== MAIN ===== */
async function initAnimations(): Promise<void> {
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

  // Load engine sound (async, non-blocking)
  const engine = new EngineSound();
  engine.load();

  // Header
  gsap.fromTo('#header', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });

  // Greeting
  gsap.fromTo('#hero-greeting', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.3 });

  // Tachometer
  gsap.fromTo('#hero-tachometer', { opacity: 0, scale: 0.9 }, {
    opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', delay: 0.5,
    onComplete: () => playStartupThenInteractive(engine),
  });

  // Tagline
  gsap.fromTo('#hero-tagline', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.8 });

  // CTA
  gsap.fromTo('#hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.2 });

  // Stats
  gsap.fromTo('#hero-stats', { y: 20, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.5,
    onComplete: animateCounters,
  });

  // Section headings
  gsap.utils.toArray<HTMLElement>('#projects [data-animate]:first-child, #contact [data-animate]').forEach((el) => {
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });

  // Project cards
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
    gsap.fromTo(card, { y: 60, opacity: 0, scale: 0.95 }, {
      y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
      delay: i * 0.1,
    });
  });

  // Tech badges
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
    gsap.fromTo(card.querySelectorAll('.tech-badge'), { x: -20, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 75%', toggleActions: 'play none none none' },
    });
  });

  // Scroll indicator
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
  document.addEventListener('DOMContentLoaded', () => { initAnimations(); });
} else {
  initAnimations();
}
