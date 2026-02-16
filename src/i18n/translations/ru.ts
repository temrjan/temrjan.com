import type { TranslationSchema } from './en';

export const ru: TranslationSchema = {
  meta: {
    title: 'Temrjan — Full-Stack Разработчик',
    description: 'Создаю продукты от идеи до продакшена. 7 продуктов, 60K+ строк кода, 5 технологических стеков.',
  },
  nav: {
    projects: 'Проекты',
    contact: 'Контакт',
  },
  hero: {
    name: 'TEMRJAN',
    role: 'Full-Stack Разработчик',
    tagline: 'Создаю продукты от идеи до продакшена',
    cta: {
      projects: 'Смотреть проекты',
      contact: 'Связаться',
    },
    stats: {
      products: 'Продуктов',
      loc: 'Строк кода',
      stacks: 'Стеков',
    },
  },
  projects: {
    title: 'Проекты',
    subtitle: 'Продукты, которые я создал с нуля',
    loc: 'СК',
  },
  contact: {
    title: 'Давайте создадим что-то',
    subtitle: 'Есть идея? Я превращу её в продукт.',
    telegram: 'Написать в Telegram',
    email: 'Отправить Email',
  },
  footer: {
    copyright: '© 2026 Temrjan',
    built: 'Создано на Astro',
  },
} as const;
