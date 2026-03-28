import type { TranslationSchema } from './en';

export const uz: TranslationSchema = {
  meta: {
    title: 'Temrjan \u2014 Full-Stack Dasturchi',
    description: 'AI mahsulotlar, Telegram ilovalar va platformalar \u2014 noldan prodakshengacha. 5 ta mahsulot, 90K+ qator kod.',
  },
  nav: {
    projects: 'Loyihalar',
    approach: 'Yondashuv',
    contact: 'Aloqa',
  },
  hero: {
    name: 'TEMRJAN',
    role: 'Full-Stack Dasturchi',
    tagline: 'AI mahsulotlar, Telegram ekotizimi\nva murakkab platformalar',
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
    details: 'Batafsil',
  },
  contact: {
    title: 'Keling, birgalikda yaratamiz',
    subtitle: 'G\'oyangiz bormi? Men uni mahsulotga aylantiraman.',
    telegram: 'Telegramda yozish',
    email: 'Email yuborish',
  },
  footer: {
    copyright: '\u00a9 2026 Temrjan',
    built: 'Astro bilan yaratilgan',
  },
  projectPage: {
    back: 'Barcha loyihalar',
    strengths: 'Asosiy yechimlar',
    gallery: 'Galereya',
    stack: 'Texnologiya steki',
    live: 'Live',
    role: 'Rol',
    period: 'Davr',
    status: 'Holat',
    fullStack: 'Full-Stack',
    production: 'Production',
    periodValue: '2025\u20132026',
  },
  approach: {
    meta: {
      title: 'Yondashuv — Temrjan',
      description: 'AI-driven development: qat\'iy sifat tizimi bilan mahsulotlar yaratish.',
    },
    label: 'Qanday ishlayman',
    title: 'AI-Driven Development',
    subtitle: 'Men arxitekturani loyihalayman va AI bilan qat\'iy standartlar tizimi bo\'yicha ishlayman. ChatGPT\'dan ko\'chirib olish emas — avtomatik sifat nazorati bilan muhandislik jarayoni.',
    pipeline: {
      title: 'Pipeline',
      steps: [
        { icon: '💻', name: 'Kod', desc: 'Codex standartlari stek bo\'yicha avtomatik yuklanadi' },
        { icon: '🔍', name: 'Tekshiruv', desc: 'Har bir o\'zgarishda self-review + code review' },
        { icon: '🚀', name: 'Push', desc: 'Conventional commits, feature branches' },
        { icon: '⚙️', name: 'CI', desc: 'Lint + typecheck + tests — yashil bo\'lishi shart' },
        { icon: '🌐', name: 'Deploy', desc: 'Productionga avtodeploy' },
      ],
    },
    codex: {
      title: 'Codex',
      subtitle: 'Men ham, AI ham rioya qiladigan kod sifati qoidalari tizimi. Har bir loyiha, har bir commit.',
      rules: {
        read: {
          name: 'READ before WRITE',
          desc: 'O\'zgartirmoqchi bo\'lgan faylni + loyihadagi 2-3 o\'xshash faylni o\'qi. Yozishdan oldin patternlarni tushun.',
        },
        verify: {
          name: 'VERIFY, don\'t guess',
          desc: 'Har bir API chaqiruvi uchun hujjatlarni tekshir. Hech qachon signaturalarni taxmin qilma.',
        },
        one: {
          name: 'ONE thing at a time',
          desc: 'Bir vazifani to\'liq tugatib, keyin keyingisiga o\'t. Minimal difflar, aniq o\'zgarishlar.',
        },
        check: {
          name: 'CHECK after writing',
          desc: 'O\'z diffingni qayta o\'qi. Importlar mavjudligini, tiplar mos kelishini tekshir.',
        },
      },
    },
    analogy: {
      title: 'Analogiya',
      current: 'Biz shu yerdamiz',
      stages: [
        {
          era: 'Qog\'oz davri',
          icon: '📝',
          title: 'Qo\'lda hisoblash',
          dev: 'Dasturlashda: har bir qatorni qo\'lda yozish, xatolarni ko\'z bilan qidirish.',
          desc: 'Sekin, xatolarga moyil, lekin to\'liq nazorat.',
        },
        {
          era: 'Kalkulyator davri',
          icon: '🔢',
          title: 'Kalkulyator',
          dev: 'Dasturlashda: ChatGPT / Copilot — tez javoblar, lekin tekshiruvsiz. Gallyutsinatsiyalar productionga ketadi.',
          desc: 'Tezroq, lekin ko\'r-ko\'rona ishonasan. Formulada xato bo\'lsa — buzilganda bilasan.',
        },
        {
          era: 'Tizimlar davri',
          icon: '🏗️',
          title: '1C Buxgalteriya → AI-Driven Dev',
          dev: 'Dasturlashda: standartlar, avtomatik tekshiruvlar, CI/CD. Men qaror qabul qilaman, tizim sifatni nazorat qiladi.',
          desc: '1C buxgalterni almashtirgani yo\'q — uni 10× samaraliroq qildi. Bu yerda ham xuddi shunday.',
        },
      ],
    },
    cta: 'Amalda ko\'rmoqchimisiz? Gaplashaylik.',
  },
} as const;
