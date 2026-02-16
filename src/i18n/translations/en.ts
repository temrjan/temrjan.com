export const en = {
  meta: {
    title: 'Temrjan — Full-Stack Developer',
    description: 'I build products from idea to production. 7 products, 60K+ lines of code, 5 technology stacks.',
  },
  nav: {
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    name: 'TEMRJAN',
    role: 'Full-Stack Developer',
    tagline: 'I build products from idea to production',
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
  },
  contact: {
    title: "Let's Build Something",
    subtitle: 'Have an idea? Let me turn it into a product.',
    telegram: 'Message on Telegram',
    email: 'Send Email',
  },
  footer: {
    copyright: '© 2026 Temrjan',
    built: 'Built with Astro',
  },
} as const;

export type TranslationSchema = typeof en;
