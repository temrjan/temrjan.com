import type { Language } from '@/i18n/config';

export interface Project {
  id: string;
  title: string;
  descriptions: Record<Language, string>;
  tech: string[];
  loc: string;
  image: string;
  span?: number;
  url?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'biotact',
    title: 'Biotact',
    descriptions: {
      en: 'Biotech marketplace connecting labs, suppliers and researchers with real-time inventory and ordering.',
      uz: 'Laboratoriyalar, yetkazib beruvchilar va tadqiqotchilarni real vaqtda inventar va buyurtma bilan boglovchi biotech marketplace.',
      ru: 'Биотех-маркетплейс, соединяющий лаборатории, поставщиков и исследователей с инвентарём и заказами в реальном времени.',
    },
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind'],
    loc: '18K',
    image: '/projects/biotact.webp',
    span: 2,
    url: 'https://t.me/BiotactBot',
  },
  {
    id: 'znai-cloud',
    title: 'Znai.cloud',
    descriptions: {
      en: 'Cloud platform for deploying and managing web applications with one-click setup.',
      uz: 'Bir marta bosish bilan veb-ilovalarni joylashtirish va boshqarish uchun bulut platformasi.',
      ru: 'Облачная платформа для развёртывания и управления веб-приложениями в один клик.',
    },
    tech: ['Node.js', 'Express', 'Docker', 'Nginx', 'Ubuntu'],
    loc: '8K',
    image: '/projects/znai-cloud.webp',
    url: 'https://znai.cloud',
  },
  {
    id: 'oltinchain',
    title: 'OltinChain',
    descriptions: {
      en: 'Gold-backed digital asset tracking system with blockchain verification and real-time pricing.',
      uz: 'Blockchain tekshiruvi va real vaqtda narxlash bilan oltin bilan ta\'minlangan raqamli aktivlarni kuzatish tizimi.',
      ru: 'Система отслеживания цифровых активов, обеспеченных золотом, с верификацией на блокчейне и ценами в реальном времени.',
    },
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    loc: '12K',
    image: '/projects/oltinchain.webp',
    url: 'https://oltinchain.com',
  },
  {
    id: 'sulum',
    title: 'Sulum',
    descriptions: {
      en: 'Water delivery management platform with route optimization and subscription billing.',
      uz: 'Marshrut optimallashtirish va obuna to\'lovlari bilan suv yetkazib berish boshqaruv platformasi.',
      ru: 'Платформа управления доставкой воды с оптимизацией маршрутов и подписочной оплатой.',
    },
    tech: ['Telegram Bot', 'Python', 'FastAPI', 'PostgreSQL'],
    loc: '6K',
    image: '/projects/sulum.webp',
    url: 'https://t.me/Sulum_bot',
  },
  {
    id: 'ai-prikorm',
    title: 'AI-Prikorm',
    descriptions: {
      en: 'AI-powered baby nutrition advisor generating personalized feeding plans based on age and preferences.',
      uz: 'Yosh va afzalliklarga asoslangan shaxsiylashtirilgan ovqatlanish rejalarini yaratuvchi AI bolalar ovqatlanish maslahatchisi.',
      ru: 'ИИ-советник по детскому питанию, генерирующий персонализированные планы кормления на основе возраста и предпочтений.',
    },
    tech: ['Python', 'FastAPI', 'OpenAI', 'Telegram Bot', 'PostgreSQL'],
    loc: '4K',
    image: '/projects/ai-prikorm.webp',
    url: 'https://t.me/aiprikormbot',
  },
  {
    id: 'dorify',
    title: 'Dorify',
    descriptions: {
      en: 'Pharmacy management system with inventory tracking, prescription handling and analytics dashboard.',
      uz: 'Inventar kuzatuvi, retseptlarni boshqarish va analitika paneli bilan dorixona boshqaruv tizimi.',
      ru: 'Система управления аптекой с отслеживанием запасов, обработкой рецептов и аналитической панелью.',
    },
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Redis'],
    loc: '15K',
    image: '/projects/dorify.webp',
    span: 2,
    url: 'https://dorify.uz',
  },
  {
    id: 'shared-rag',
    title: 'Shared RAG',
    descriptions: {
      en: 'Multi-tenant RAG system for teams to query shared knowledge bases with AI-powered search.',
      uz: 'Jamoalar uchun AI qidiruv bilan umumiy bilim bazalarini so\'rash uchun ko\'p foydalanuvchili RAG tizimi.',
      ru: 'Мультитенантная RAG-система для команд с ИИ-поиском по общим базам знаний.',
    },
    tech: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'OpenAI'],
    loc: '5K',
    image: '/projects/shared-rag.webp',
  },
];
