import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initAnimations(): void {
  if (prefersReducedMotion()) {
    // Remove FOUC prevention — show everything immediately
    document.querySelectorAll('[data-animate]').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
    });
    return;
  }

  // 1. Header — fade down
  gsap.fromTo(
    '#header',
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
  );

  // 2. Hero chars — stagger per letter
  gsap.fromTo(
    '.hero-char',
    { y: 80, opacity: 0, rotationX: -40 },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      delay: 0.3,
    }
  );

  // 3. Hero role + tagline — fade up
  gsap.fromTo(
    '#hero-greeting, #hero-tagline',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out', delay: 0.8 }
  );

  // 4. CTA buttons — fade up stagger
  gsap.fromTo(
    '#hero-cta',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.2 }
  );

  // 5. Stats count-up
  gsap.fromTo(
    '#hero-stats',
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      delay: 1.5,
      onComplete: animateCounters,
    }
  );

  // 6. Section headings — scroll-triggered fade up
  gsap.utils.toArray<HTMLElement>('#projects [data-animate]:first-child, #contact [data-animate]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // 7. Project cards — stagger reveal
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
    gsap.fromTo(
      card,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: i * 0.1,
      }
    );
  });

  // 8. Tech badges — slide in per card
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
    const badges = card.querySelectorAll('.tech-badge');
    gsap.fromTo(
      badges,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // 10. Scroll indicator — continuous bounce
  gsap.to('#scroll-indicator', {
    y: 10,
    duration: 1.2,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
    delay: 2,
  });
  // Make scroll indicator visible
  gsap.set('#scroll-indicator', { opacity: 1 });
}

function animateCounters(): void {
  document.querySelectorAll('.stat-number').forEach((el) => {
    const target = parseInt(el.getAttribute('data-target') ?? '0', 10);
    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = Math.round(obj.value).toString();
      },
    });
  });
}

// Init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
