export const en = {
  meta: {
    title: 'Temrjan \u2014 Full-Stack Developer',
    description: 'AI products, Telegram apps and platforms \u2014 from zero to production. 5 products, 90K+ lines of code.',
  },
  nav: {
    projects: 'Projects',
    approach: 'Approach',
    contact: 'Contact',
  },
  hero: {
    name: 'TEMRJAN',
    role: 'Full-Stack Developer',
    tagline: 'AI products, Telegram ecosystem\nand complex platforms',
    cta: {
      projects: 'View Projects',
      contact: 'Get in Touch',
    },
    stats: {
      products: 'Products',
      loc: 'Lines of Code',
      stacks: 'Stacks',
    },
  },
  projects: {
    title: 'Projects',
    subtitle: 'Products I have built from scratch',
    loc: 'LOC',
    details: 'Details',
  },
  contact: {
    title: "Let's Build Something",
    subtitle: 'Have an idea? Let me turn it into a product.',
    telegram: 'Message on Telegram',
    email: 'Send Email',
  },
  footer: {
    copyright: '\u00a9 2026 Temrjan',
    built: 'Built with Astro',
  },
  projectPage: {
    back: 'All Projects',
    strengths: 'Key Decisions',
    gallery: 'Gallery',
    stack: 'Tech Stack',
    live: 'Live',
    role: 'Role',
    period: 'Period',
    status: 'Status',
    fullStack: 'Full-Stack',
    production: 'Production',
    periodValue: '2025\u20132026',
  },
  approach: {
    meta: {
      title: 'Approach — Temrjan',
      description: 'AI-driven development: how I build products with a strict quality pipeline.',
    },
    label: 'How I Work',
    title: 'AI-Driven Development',
    subtitle: 'I architect solutions and pair with AI under a strict system of standards. Not "copy from ChatGPT" — an engineered process with automated quality gates.',
    pipeline: {
      title: 'Pipeline',
      steps: [
        { icon: '💻', name: 'Code', desc: 'Codex standards auto-loaded per stack' },
        { icon: '🔍', name: 'Review', desc: 'Self-review + code review on every change' },
        { icon: '🚀', name: 'Push', desc: 'Conventional commits, feature branches' },
        { icon: '⚙️', name: 'CI', desc: 'Lint + typecheck + tests — must be green' },
        { icon: '🌐', name: 'Deploy', desc: 'Auto-deploy to production' },
      ],
    },
    codex: {
      title: 'Codex',
      subtitle: 'A system of code quality rules that both I and AI follow. Every project, every commit.',
      rules: {
        read: {
          name: 'READ before WRITE',
          desc: 'Read the file you\'re changing + 2-3 similar files in the project. Understand patterns before writing.',
        },
        verify: {
          name: 'VERIFY, don\'t guess',
          desc: 'Check library docs for every API call. Never guess method signatures or behavior.',
        },
        one: {
          name: 'ONE thing at a time',
          desc: 'Finish one task completely before starting the next. Minimal diffs, focused changes.',
        },
        check: {
          name: 'CHECK after writing',
          desc: 'Re-read your own diff. Verify imports exist, types match, edge cases are handled.',
        },
      },
    },
    analogy: {
      title: 'Analogy',
      current: 'This is us',
      stages: [
        {
          era: 'Paper Era',
          icon: '📝',
          title: 'Manual Counting',
          dev: 'In development: writing every line by hand, catching bugs with your eyes.',
          desc: 'Slow, error-prone, but full control.',
        },
        {
          era: 'Calculator Era',
          icon: '🔢',
          title: 'Calculator',
          dev: 'In development: ChatGPT / Copilot — fast answers, but no verification. Hallucinated APIs go to production.',
          desc: 'Faster, but you trust blindly. Wrong formula? You won\'t know until it breaks.',
        },
        {
          era: 'System Era',
          icon: '🏗️',
          title: '1C Accounting → AI-Driven Dev',
          dev: 'In development: standards, automated reviews, CI/CD. I make decisions, the system enforces quality.',
          desc: '1C didn\'t replace accountants — it made them 10× more productive. Same here.',
        },
      ],
    },
    cta: 'Want to see it in action? Let\'s talk.',
  },
} as const;

export type TranslationSchema = typeof en;
