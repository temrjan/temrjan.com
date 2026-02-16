import type { TranslationSchema } from './en';

export const uz: TranslationSchema = {
  meta: {
    title: 'Temurjan — Full-Stack Dasturchi',
    description: "Men g'oyadan tayyor mahsulotgacha yarataman. 7 ta mahsulot, 60K+ qator kod, 5 ta texnologiya steki.",
  },
  nav: {
    projects: 'Loyihalar',
    contact: 'Aloqa',
  },
  hero: {
    name: 'TEMURJAN',
    role: 'Full-Stack Dasturchi',
    tagline: "Men g'oyadan tayyor mahsulotgacha yarataman",
    cta: {
      projects: 'Loyihalarni ko\'rish',
      contact: 'Bog\'lanish',
    },
    stats: {
      products: 'Mahsulotlar',
      loc: 'Qator kod',
      stacks: 'Steklar',
    },
  },
  projects: {
    title: 'Loyihalar',
    subtitle: 'Noldan yaratgan mahsulotlarim',
    loc: 'QK',
  },
  contact: {
    title: 'Keling, birgalikda yaratamiz',
    subtitle: "G'oyangiz bormi? Men uni mahsulotga aylantiraman.",
    telegram: 'Telegramda yozish',
    email: 'Email yuborish',
  },
  footer: {
    copyright: '© 2026 Temurjan',
    built: 'Astro bilan yaratilgan',
  },
} as const;
