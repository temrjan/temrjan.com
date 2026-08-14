import type { Language } from '@/i18n/config';

export interface Project {
  id: string;
  title: string;
  category: Record<Language, string>;
  descriptions: Record<Language, string>;
  longDescription: Record<Language, string>;
  strengths: Record<Language, string[]>;
  tech: string[];
  loc: string;
  image: string;
  gradient: string;
  images: string[];
  span?: number;
  url?: string;
  status?: Record<Language, string>;
  role?: Record<Language, string>;
}

export const PROJECTS: Project[] = [
  {
    id: 'oltinpay',
    title: 'OltinPay',
    category: {
      en: 'blockchain \u00b7 exchange',
      ru: '\u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d \u00b7 \u0431\u0438\u0440\u0436\u0430',
      uz: 'blokcheyn \u00b7 birja',
    },
    descriptions: {
      en: 'Telegram wallet and exchange for tokenized gold. Part of OltinChain \u2014 a full exchange with order book, trading bots and smart contracts on zkSync Era.',
      ru: 'Telegram-\u043a\u043e\u0448\u0435\u043b\u0451\u043a \u0438 \u0431\u0438\u0440\u0436\u0430 \u0442\u043e\u043a\u0435\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0437\u043e\u043b\u043e\u0442\u0430. \u0427\u0430\u0441\u0442\u044c OltinChain \u2014 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e\u0439 \u0431\u0438\u0440\u0436\u0438 \u0441 \u043e\u0440\u0434\u0435\u0440\u0431\u0443\u043a\u043e\u043c, \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u043c\u0438 \u0431\u043e\u0442\u0430\u043c\u0438 \u0438 \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430\u043c\u0438 \u043d\u0430 zkSync Era.',
      uz: 'Tokenizatsiya qilingan oltin uchun Telegram hamyon va birja. OltinChain \u2014 orderbook, savdo botlari va zkSync Era smart-kontraktlari bilan to\'liq birja.',
    },
    longDescription: {
      en: 'OltinPay is a Telegram Mini App wallet for buying and selling tokenized gold \u2014 part of the OltinChain ecosystem.\n\nOltinChain is a trading platform where 1 OLTIN token equals 1 gram of gold. The platform features a real order book exchange powered by a bot orchestrator: WyckoffOracle generates price movements based on market cycle phases (accumulation, markup, distribution, markdown), while 10 MarketMaker bots at 5 levels create realistic liquidity.\n\nThe ERC-20 smart contract OltinTokenV2 is deployed on zkSync Era with mint/burn/adminTransfer functions and a 0.5% transaction fee. Real gold prices (XAU/USD) are fetched from metals.live and cached in Redis.\n\nOltinPay adds a user-facing layer: balance in UZS and gold, exchange between them, transfers to contacts, staking, and Aylin \u2014 a built-in AI assistant.',
      ru: 'OltinPay \u2014 Telegram Mini App \u043a\u043e\u0448\u0435\u043b\u0451\u043a \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0438 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u0442\u043e\u043a\u0435\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0437\u043e\u043b\u043e\u0442\u0430, \u0447\u0430\u0441\u0442\u044c \u044d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u044b OltinChain.\n\nOltinChain \u2014 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u0438, \u0433\u0434\u0435 1 \u0442\u043e\u043a\u0435\u043d OLTIN = 1 \u0433\u0440\u0430\u043c\u043c \u0437\u043e\u043b\u043e\u0442\u0430. \u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0440\u0435\u0430\u043b\u044c\u043d\u0443\u044e \u0431\u0438\u0440\u0436\u0443 \u0441 \u043e\u0440\u0434\u0435\u0440\u0431\u0443\u043a\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0440\u043a\u0435\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0431\u043e\u0442\u043e\u0432: WyckoffOracle \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u0446\u0435\u043d\u044b \u043f\u043e \u0444\u0430\u0437\u0430\u043c \u0440\u044b\u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430, \u0430 10 MarketMaker \u0431\u043e\u0442\u043e\u0432 \u043d\u0430 5 \u0443\u0440\u043e\u0432\u043d\u044f\u0445 \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u0443\u044e \u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u044c.\n\n\u0421\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 ERC-20 OltinTokenV2 \u0440\u0430\u0437\u0432\u0451\u0440\u043d\u0443\u0442 \u043d\u0430 zkSync Era \u0441 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 mint/burn/adminTransfer \u0438 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0435\u0439 0.5%. \u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0446\u0435\u043d\u044b \u0437\u043e\u043b\u043e\u0442\u0430 (XAU/USD) \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442\u0441\u044f \u0441 metals.live \u0438 \u043a\u044d\u0448\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 Redis.\n\nOltinPay \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0441\u043b\u043e\u0439: \u0431\u0430\u043b\u0430\u043d\u0441 \u0432 UZS \u0438 \u0437\u043e\u043b\u043e\u0442\u0435, \u043e\u0431\u043c\u0435\u043d, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u043c, \u0441\u0442\u0435\u0439\u043a\u0438\u043d\u0433 \u0438 Aylin \u2014 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442.',
      uz: 'OltinPay \u2014 tokenizatsiya qilingan oltinni sotib olish va sotish uchun Telegram Mini App hamyon, OltinChain ekotizimining bir qismi.\n\nOltinChain \u2014 1 OLTIN token = 1 gramm oltin bo\'lgan savdo platformasi. Platformada haqiqiy orderbook birjasi mavjud, uni bot orkestrator boshqaradi: WyckoffOracle bozor sikli fazalariga ko\'ra narx harakatini generatsiya qiladi, 10 ta MarketMaker bot 5 darajada real likvidlik yaratadi.\n\nERC-20 smart-kontrakt OltinTokenV2 zkSync Era\'da joylashtirilgan \u2014 mint/burn/adminTransfer funksiyalari va 0.5% komissiya. Oltin narxi (XAU/USD) metals.live\'dan olinadi va Redis\'da keshlanadi.\n\nOltinPay foydalanuvchi qatlamini qo\'shadi: UZS va oltin balansi, almashtirish, kontaktlarga o\'tkazish, steyking va Aylin \u2014 o\'rnatilgan AI-assistent.',
    },
    strengths: {
      en: [
        'ERC-20 smart contract on zkSync Era \u2014 mint, burn, adminTransfer, 0.5% fee',
        'WyckoffOracle + 10 MarketMaker bots generating realistic market dynamics',
        'Real-time WebSocket order book and trade feed',
        'Live XAU/USD pricing with 5-min Redis cache',
      ],
      ru: [
        'ERC-20 \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u043d\u0430 zkSync Era \u2014 mint, burn, adminTransfer, \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u044f 0.5%',
        'WyckoffOracle + 10 MarketMaker \u0431\u043e\u0442\u043e\u0432 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442 \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u0443\u044e \u0434\u0438\u043d\u0430\u043c\u0438\u043a\u0443 \u0440\u044b\u043d\u043a\u0430',
        'WebSocket \u043e\u0440\u0434\u0435\u0440\u0431\u0443\u043a \u0438 \u043b\u0435\u043d\u0442\u0430 \u0441\u0434\u0435\u043b\u043e\u043a \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438',
        '\u0420\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430 XAU/USD \u0441 \u043a\u044d\u0448\u0435\u043c Redis 5 \u043c\u0438\u043d',
      ],
      uz: [
        'zkSync Era\'da ERC-20 smart-kontrakt \u2014 mint, burn, adminTransfer, 0.5% komissiya',
        'WyckoffOracle + 10 MarketMaker bot real bozor dinamikasini generatsiya qiladi',
        'Real vaqtda WebSocket orderbook va savdo lentasi',
        'XAU/USD real narx, Redis kesh 5 daqiqa',
      ],
    },
    tech: ['FastAPI', 'Solidity', 'zkSync Era', 'Next.js', 'PostgreSQL', 'Redis', 'WebSocket'],
    loc: '20K',
    image: '/projects/oltinchain.webp',
    gradient: 'linear-gradient(135deg, #F5C518 5%, #B8860B 40%, #0C0C0E 95%)',
    images: ['/projects/oltinpay/1-wallet.png', '/projects/oltinpay/2-exchange.png', '/projects/oltinpay/3-orderbook.png', '/projects/oltinpay/4-staking.png'],
    span: 2,
    url: 'https://t.me/Oltin_Paybot',
  },
  {
    id: 'hexforge',
    title: 'HexForge',
    category: {
      en: 'rust · cryptography',
      ru: 'rust · криптография',
      uz: 'rust · kriptografiya',
    },
    descriptions: {
      en: 'Vanity Ethereum address generator in Rust. Finds a keypair whose address matches your pattern — with real BIP-39 mnemonic, not a random hex string.',
      ru: 'Генератор vanity-адресов Ethereum на Rust. Подбирает ключевую пару под ваш шаблон адреса — с настоящей BIP-39 мнемоникой, а не случайной hex-строкой.',
      uz: 'Rust\'da vanity Ethereum manzil generatori. Manzilni sizning shabloningizga mos kalit juftini tanlaydi — tasodifiy hex emas, haqiqiy BIP-39 mnemonika bilan.',
    },
    longDescription: {
      en: 'A vanity address is an Ethereum address that starts (or ends) with a pattern you choose — for branding or memorability. Finding one is brute force over secp256k1 keys, so the generator is CPU-bound by design.\n\nHexForge is built in Rust with correctness and key hygiene as first-class concerns: cryptographically secure randomness (CSPRNG), BIP-39 mnemonic derivation so the result is a real recoverable wallet, and explicit memory zeroization (zeroize) so private keys don\'t linger in RAM.\n\nThe tool is offline-first: no network calls, no telemetry — key material never leaves the machine. Ships as a CLI with a Linux GUI.\n\nOne of the details that matters in this domain: derivation paths and checksums follow the standards (BIP-32/39/44, EIP-55), so the generated wallet imports cleanly into any standard wallet software.',
      ru: 'Vanity-адрес — это адрес Ethereum, который начинается (или заканчивается) выбранным вами шаблоном — для бренда или запоминаемости. Его поиск — это перебор ключей secp256k1, поэтому генератор по своей природе упирается в CPU.\n\nHexForge написан на Rust, где корректность и гигиена ключей — требования первого класса: криптографически стойкий генератор случайности (CSPRNG), деривация по BIP-39 — результат является настоящим восстанавливаемым кошельком, — и явное зануление памяти (zeroize), чтобы приватные ключи не оставались в RAM.\n\nИнструмент offline-first: ни сетевых вызовов, ни телеметрии — ключевой материал не покидает машину. Поставляется как CLI с графическим интерфейсом для Linux.\n\nДеталь, которая важна в этой области: пути деривации и контрольные суммы следуют стандартам (BIP-32/39/44, EIP-55), поэтому сгенерированный кошелёк без проблем импортируется в любой стандартный кошелёк.',
      uz: 'Vanity manzil — siz tanlagan shablon bilan boshlanadigan (yoki tugaydigan) Ethereum manzili — brend yoki eslab qolish uchun. Uni topish secp256k1 kalitlarini qidirishdir, shuning uchun generator tabiatan CPU\'ga bog\'liq.\n\nHexForge Rust\'da yozilgan, to\'g\'rilik va kalit gigiyenasi birinchi darajali talab: kriptografik xavfsiz tasodifiy sonlar generatori (CSPRNG), BIP-39 bo\'yicha derivatsiya — natija haqiqiy tiklanadigan hamyon, — va xotirani aniq tozalash (zeroize), shunda maxfiy kalitlar RAM\'da qolmaydi.\n\nAsbob offline-first: tarmoq chaqiruvlari ham, telemetriya ham yo\'q — kalit materiali mashinadan chiqmaydi. Linux GUI bilan CLI sifatida tarqatiladi.\n\nBu sohada muhim tafsilot: derivatsiya yo\'llari va checksumlar standartlarga (BIP-32/39/44, EIP-55) amal qiladi, shuning uchun yaratilgan hamyon istalgan standart hamyonga muammosiz import qilinadi.',
    },
    strengths: {
      en: [
        'CSPRNG key generation + BIP-39 mnemonic — a real recoverable wallet, not a hex string',
        'Memory zeroization (zeroize) — private keys don\'t linger in RAM',
        'Offline-first: no network, no telemetry, key material never leaves the machine',
        'Standards-compliant: BIP-32/39/44 derivation, EIP-55 checksum',
      ],
      ru: [
        'CSPRNG-генерация ключей + BIP-39 мнемоника — настоящий восстанавливаемый кошелёк, а не hex-строка',
        'Зануление памяти (zeroize) — приватные ключи не остаются в RAM',
        'Offline-first: без сети и телеметрии, ключевой материал не покидает машину',
        'Соответствие стандартам: деривация BIP-32/39/44, checksum EIP-55',
      ],
      uz: [
        'CSPRNG kalit generatsiyasi + BIP-39 mnemonika — hex qator emas, haqiqiy tiklanadigan hamyon',
        'Xotirani tozalash (zeroize) — maxfiy kalitlar RAM\'da qolmaydi',
        'Offline-first: tarmoq va telemetriyasiz, kalit materiali mashinadan chiqmaydi',
        'Standartlarga mos: BIP-32/39/44 derivatsiya, EIP-55 checksum',
      ],
    },
    tech: ['Rust', 'BIP-39', 'secp256k1', 'CSPRNG', 'Zeroize'],
    loc: '1.5K',
    image: '/projects/hexforge.webp',
    gradient: 'linear-gradient(135deg, #B7410E 5%, #5C2A0E 40%, #0C0C0E 95%)',
    images: [],
    url: 'https://github.com/temrjan/hexforge',
    role: {
      en: 'Rust / Systems',
      ru: 'Rust / Системы',
      uz: 'Rust / Tizimlar',
    },
  },
  {
    id: 'aqllify',
    title: 'Aqllify',
    category: {
      en: 'ai · edtech',
      ru: 'ai · edtech',
      uz: 'ai · edtech',
    },
    descriptions: {
      en: 'AI-powered Uzbek language tutor: 50 structured A1 lessons, GPT-checked exercises, spaced repetition and gamification. Live with a landing page, mini app and Telegram bot.',
      ru: 'AI-репетитор узбекского языка: 50 структурированных уроков уровня A1, упражнения с проверкой GPT, интервальные повторения и геймификация. В продакшене: лендинг, мини-апп и Telegram-бот.',
      uz: 'AI yordamida o\'zbek tili repetitori: 50 ta tuzilgan A1 dars, GPT tekshiradigan mashqlar, intervalli takrorlash va geymifikatsiya. Prodakshenda: lending, mini-app va Telegram-bot.',
    },
    longDescription: {
      en: 'Aqllify is a production language-learning product: it teaches Uzbek through 50 structured A1-level lessons — vocabulary, grammar and exercises generated and checked with GPT-4o-mini.\n\nLearning science is built in, not bolted on: spaced repetition (SM-2 algorithm) schedules reviews, and gamification (streaks, XP, achievements) keeps retention up.\n\nThe product ships on three surfaces: a marketing landing (aqllify.com), a Telegram Mini App (app.aqllify.com) and a Telegram bot (@Aqllify_bot). Backend — FastAPI, frontend — React/TypeScript, bot — aiogram.\n\nThe interesting engineering part is the exercise pipeline: GPT not only generates content but evaluates free-form answers with structured feedback, which requires careful prompt design and validation so that grading stays consistent across thousands of variations.',
      ru: 'Aqllify — продакшен-продукт для изучения языка: узбекский через 50 структурированных уроков уровня A1 — лексика, грамматика и упражнения, генерируемые и проверяемые GPT-4o-mini.\n\nНаука об обучении встроена, а не прикручена: интервальные повторения (алгоритм SM-2) планируют ревью, а геймификация (стрики, XP, достижения) держит удержание.\n\nПродукт живёт на трёх поверхностях: маркетинговый лендинг (aqllify.com), Telegram Mini App (app.aqllify.com) и Telegram-бот (@Aqllify_bot). Бэкенд — FastAPI, фронтенд — React/TypeScript, бот — aiogram.\n\nИнженерно интересная часть — конвейер упражнений: GPT не только генерирует контент, но и оценивает свободные ответы со структурированной обратной связью. Это требует аккуратного дизайна промптов и валидации, чтобы оценка оставалась консистентной на тысячах вариаций.',
      uz: 'Aqllify — til o\'rganish uchun prodakshen mahsulot: o\'zbek tilini 50 ta tuzilgan A1 darajadagi dars orqali o\'rgatadi — lug\'at, grammatika va GPT-4o-mini tomonidan yaratiladigan va tekshiriladigan mashqlar.\n\nO\'qitish fani ichida o\'rnatilgan: intervalli takrorlash (SM-2 algoritmi) takrorlashlarni rejalashtiradi, geymifikatsiya (streaklar, XP, yutuqlar) esa motivatsiyani saqlaydi.\n\nMahsulot uch sirtada ishlaydi: marketing lendingi (aqllify.com), Telegram Mini App (app.aqllify.com) va Telegram-bot (@Aqllify_bot). Backend — FastAPI, frontend — React/TypeScript, bot — aiogram.\n\nMuhandislik jihatdan qiziq qismi — mashq konveyeri: GPT kontent yaratish bilan qolmay, erkin javoblarni tuzilgan fikr-mulohaza bilan baholaydi. Bu baholashning minglab variatsiyada izchil qolishi uchun ehtiyotkor prompt dizayni va validatsiyani talab qiladi.',
    },
    strengths: {
      en: [
        '50 structured A1 lessons with GPT-4o-mini content generation and grading',
        'Spaced repetition (SM-2) + gamification: streaks, XP, achievements',
        'Three live surfaces: landing, Telegram Mini App, Telegram bot',
        'Free-form answer evaluation with structured feedback',
      ],
      ru: [
        '50 структурированных уроков A1: генерация контента и проверка через GPT-4o-mini',
        'Интервальные повторения (SM-2) + геймификация: стрики, XP, достижения',
        'Три живые поверхности: лендинг, Telegram Mini App, Telegram-бот',
        'Оценка свободных ответов со структурированной обратной связью',
      ],
      uz: [
        '50 ta tuzilgan A1 dars: GPT-4o-mini orqali kontent yaratish va baholash',
        'Intervalli takrorlash (SM-2) + geymifikatsiya: streaklar, XP, yutuqlar',
        'Uchta jonli sirt: lending, Telegram Mini App, Telegram-bot',
        'Erkin javoblarni tuzilgan fikr-mulohaza bilan baholash',
      ],
    },
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'aiogram', 'GPT-4o-mini'],
    loc: '5K',
    image: '/projects/aqllify.webp',
    gradient: 'linear-gradient(135deg, #0d9488 5%, #115e59 40%, #0C0C0E 95%)',
    images: ['/projects/aqllify/1-landing.png'],
    url: 'https://aqllify.com',
  },
  {
    id: 'dorify-v2',
    title: 'Dorify v2',
    category: {
      en: 'marketplace · architecture',
      ru: 'маркетплейс · архитектура',
      uz: 'marketplace · arxitektura',
    },
    descriptions: {
      en: 'Multi-tenant pharmacy marketplace: NestJS 11 with DDD and hexagonal architecture, per-tenant payment integration, Telegram storefront. Commercial project, pre-production.',
      ru: 'Мультитенантный маркетплейс аптек: NestJS 11 с DDD и гексагональной архитектурой, платёжная интеграция на каждого тенанта, Telegram-витрина. Коммерческий проект, предпродакшен.',
      uz: 'Multi-tenant dorixona marketplace\'i: DDD va geksagonal arxitekturali NestJS 11, har bir tenant uchun to\'lov integratsiyasi, Telegram-vitrina. Tijorat loyihasi, pre-production.',
    },
    longDescription: {
      en: 'Dorify v2 is a commercial marketplace platform for pharmacy chains: each pharmacy (tenant) gets its own storefront, catalog, orders and payment configuration, while sharing one codebase and one deployment.\n\nThe backend is NestJS 11 built with Domain-Driven Design and hexagonal architecture: business logic lives in domain modules isolated from frameworks and infrastructure, which keeps the multi-tenant rules testable and the payment integrations swappable.\n\nData layer — Prisma 6 over PostgreSQL 17. Customer-facing surface — a Telegram bot storefront (Grammy) plus a React 19 admin/management frontend. Payments — Multicard integration configured per tenant.\n\nThe project is in pre-production: the architecture and the main flows are implemented and covered, and the codebase serves as a reference for how I structure larger TypeScript systems.',
      ru: 'Dorify v2 — коммерческая маркетплейс-платформа для аптечных сетей: каждая аптека (тенант) получает собственную витрину, каталог, заказы и платёжную конфигурацию при общем коде и одном деплое.\n\nБэкенд — NestJS 11, построенный по Domain-Driven Design и гексагональной архитектуре: бизнес-логика живёт в доменных модулях, изолированных от фреймворков и инфраструктуры, — мультитенантные правила остаются тестируемыми, а платёжные интеграции — заменяемыми.\n\nСлой данных — Prisma 6 поверх PostgreSQL 17. Клиентская поверхность — Telegram-витрина (Grammy) плюс фронтенд управления на React 19. Платежи — интеграция Multicard с конфигурацией на каждого тенанта.\n\nПроект в предпродакшене: архитектура и основные потоки реализованы и покрыты, а кодовая база служит примером того, как я структурирую крупные TypeScript-системы.',
      uz: 'Dorify v2 — dorixona tarmoqlari uchun tijorat marketplace platformasi: har bir dorixona (tenant) umumiy kod va bitta deploy bilan o\'z vitrina, katalog, buyurtma va to\'lov konfiguratsiyasiga ega.\n\nBackend — Domain-Driven Design va geksagonal arxitektura asosidagi NestJS 11: biznes-logika freymvork va infratuzilmadan izolyatsiya qilingan domen modullarda yashaydi — multi-tenant qoidalar testlanadigan, to\'lov integratsiyalari esa almashtiriladigan bo\'lib qoladi.\n\nMa\'lumotlar qatlami — PostgreSQL 17 ustida Prisma 6. Mijozga qaragan sirt — Telegram vitrina (Grammy) va React 19 boshqaruv frontendi. To\'lovlar — har bir tenant uchun sozlanadigan Multicard integratsiyasi.\n\nLoyiha pre-production bosqichida: arxitektura va asosiy oqimlar amalga oshirilgan va qamrab olingan, kod bazasi esa katta TypeScript tizimlarni qanday tuzishimning namunasi bo\'lib xizmat qiladi.',
    },
    strengths: {
      en: [
        'DDD + hexagonal architecture: domain logic isolated from frameworks',
        'Multi-tenant design: storefront, catalog, orders and payments per pharmacy',
        'Per-tenant Multicard payment integration',
        'Prisma 6 + PostgreSQL 17, Grammy bot, React 19 frontend',
      ],
      ru: [
        'DDD + гексагональная архитектура: доменная логика изолирована от фреймворков',
        'Мультитенантный дизайн: витрина, каталог, заказы и платежи на каждую аптеку',
        'Интеграция Multicard с конфигурацией на каждого тенанта',
        'Prisma 6 + PostgreSQL 17, бот на Grammy, фронтенд на React 19',
      ],
      uz: [
        'DDD + geksagonal arxitektura: domen logikasi freymvorklardan izolyatsiya qilingan',
        'Multi-tenant dizayn: har bir dorixona uchun vitrina, katalog, buyurtmalar va to\'lovlar',
        'Har bir tenant uchun Multicard to\'lov integratsiyasi',
        'Prisma 6 + PostgreSQL 17, Grammy bot, React 19 frontend',
      ],
    },
    tech: ['TypeScript', 'NestJS 11', 'DDD', 'Prisma 6', 'React 19', 'Grammy'],
    loc: '17K',
    image: '/projects/dorify.webp',
    gradient: 'linear-gradient(135deg, #E0234E 5%, #7A1229 40%, #0C0C0E 95%)',
    images: [],
    url: 'https://github.com/temrjan/dorify-v2',
    status: {
      en: 'Pre-production',
      ru: 'Предпродакшен',
      uz: 'Pre-production',
    },
  },
  {
    id: 'devops-agent',
    title: 'DevOps Agent',
    category: {
      en: 'ai agent · devops',
      ru: 'ai-агент · devops',
      uz: 'ai agent · devops',
    },
    descriptions: {
      en: 'Telegram-based DevOps agent: Claude in an agentic loop executes SSH commands on your servers — with permission levels and dangerous-pattern filtering as a safety layer.',
      ru: 'DevOps-агент в Telegram: Claude в агентном цикле выполняет SSH-команды на ваших серверах — с уровнями доступа и фильтром опасных паттернов как слоем безопасности.',
      uz: 'Telegram\'dagi DevOps agenti: Claude agent tsiklida serverlaringizda SSH buyruqlarini bajaradi — xavfsizlik qatlami sifatida ruxsat darajalari va xavfli patternlar filtri bilan.',
    },
    longDescription: {
      en: 'DevOps Agent lets you administer servers from a Telegram chat: you describe the task in natural language, and a Claude-driven agentic loop plans and executes SSH commands over asyncssh, streams results back and iterates until done.\n\nThe core design problem is safety: an LLM with shell access must not be able to destroy a system because of a hallucination. The agent implements permission levels and a dangerous-pattern filter that blocks destructive commands before they reach the shell.\n\nStack: Python, aiogram 3 for the Telegram surface, asyncssh for connections, SQLite for state. The agentic loop keeps conversation context so multi-step operations ("find the leak, restart the service, verify") work as a single session.',
      ru: 'DevOps Agent позволяет администрировать серверы из Telegram-чата: вы описываете задачу на естественном языке, а агентный цикл на Claude планирует и выполняет SSH-команды через asyncssh, стримит результаты обратно и итерирует до результата.\n\nКлючевая проблема дизайна — безопасность: LLM с доступом к шеллу не должна иметь возможности разрушить систему из-за галлюцинации. Агент реализует уровни доступа и фильтр опасных паттернов, блокирующий деструктивные команды до того, как они дойдут до шелла.\n\nСтек: Python, aiogram 3 для Telegram-поверхности, asyncssh для соединений, SQLite для состояния. Агентный цикл держит контекст разговора, поэтому многошаговые операции («найди утечку, перезапусти сервис, проверь») работают как единая сессия.',
      uz: 'DevOps Agent serverlarni Telegram chatidan boshqarish imkonini beradi: siz vazifani tabiiy tilda yozasiz, Claude\'dagi agent tsikli esa asyncssh orqali SSH buyruqlarini rejalashtirib bajaradi, natijalarni qaytaradi va natijagacha iteratsiya qiladi.\n\nAsosiy dizayn masalasi — xavfsizlik: shell\'ga kirish huquqiga ega LLM gallyutsinatsiya tufayli tizimni buza olmasligi kerak. Agent ruxsat darajalari va xavfli patternlar filtrini amalga oshiradi — destruktiv buyruqlar shell\'ga yetib borishdan oldin bloklanadi.\n\nStek: Python, Telegram sirt uchun aiogram 3, ulanishlar uchun asyncssh, holat uchun SQLite. Agent tsikli suhbat kontekstini saqlaydi, shuning uchun ko\'p bosqichli operatsiyalar («oqmani top, servisni qayta ishga tushir, tekshir») yagona sessiya sifatida ishlaydi.',
    },
    strengths: {
      en: [
        'Agentic loop: Claude plans, executes and iterates over SSH autonomously',
        'Safety layer: permission levels + dangerous-pattern filter before the shell',
        'Natural-language server administration from Telegram',
        'Persistent context for multi-step operations',
      ],
      ru: [
        'Агентный цикл: Claude планирует, выполняет и итерирует по SSH автономно',
        'Слой безопасности: уровни доступа + фильтр опасных паттернов перед шеллом',
        'Администрирование серверов на естественном языке из Telegram',
        'Персистентный контекст для многошаговых операций',
      ],
      uz: [
        'Agent tsikli: Claude SSH bo\'yicha avtonom rejalashtiradi, bajaradi va iteratsiya qiladi',
        'Xavfsizlik qatlami: ruxsat darajalari + shell\'dan oldin xavfli patternlar filtri',
        'Telegram\'dan tabiiy tilda server administratsiyasi',
        'Ko\'p bosqichli operatsiyalar uchun doimiy kontekst',
      ],
    },
    tech: ['Python', 'Claude', 'aiogram 3', 'asyncssh', 'SQLite'],
    loc: '6K',
    image: '/projects/devops-agent.webp',
    gradient: 'linear-gradient(135deg, #F59E0B 5%, #92400E 40%, #0C0C0E 95%)',
    images: [],
    url: 'https://github.com/temrjan/devops-agent',
  },
  {
    id: 'biotact-mcp',
    title: 'Biotact MCP',
    category: {
      en: 'mcp · ai tooling',
      ru: 'mcp · ai-инструменты',
      uz: 'mcp · ai vositalar',
    },
    descriptions: {
      en: 'MCP server that gives AI coding agents semantic access to the Biotact knowledge base: search, stats and transcripts through the production API at core.biotact.uz.',
      ru: 'MCP-сервер, дающий AI-агентам семантический доступ к базе знаний Biotact: поиск, статистика и транскрипты через продакшен-API core.biotact.uz.',
      uz: 'AI agentlarga Biotact bilim bazasiga semantik kirish beradigan MCP server: core.biotact.uz prodakshen API orqali qidiruv, statistika va transkriptlar.',
    },
    longDescription: {
      en: 'Biotact MCP is a Model Context Protocol server that plugs the Biotact knowledge base directly into AI coding agents (Claude Code and other MCP clients) over stdio.\n\nIt exposes three focused tools: biotact_search (semantic search over the knowledge base), biotact_stats (collection statistics) and biotact_get_transcript (full transcript retrieval). The server talks to the production API at core.biotact.uz, so the agent always works with live data.\n\nThe point of MCP as an interface: the agent decides itself when it needs domain knowledge and pulls it in mid-task — no copy-pasting context into prompts. Built with Python, httpx and the Qdrant-backed search API.',
      ru: 'Biotact MCP — сервер Model Context Protocol, подключающий базу знаний Biotact напрямую к AI-агентам (Claude Code и другим MCP-клиентам) через stdio.\n\nСервер экспонирует три сфокусированных тула: biotact_search (семантический поиск по базе знаний), biotact_stats (статистика коллекции) и biotact_get_transcript (получение полного транскрипта). Сервер работает с продакшен-API core.biotact.uz, поэтому агент всегда оперирует живыми данными.\n\nСмысл MCP как интерфейса: агент сам решает, когда ему нужны доменные знания, и подтягивает их посреди задачи — без копирования контекста в промпты. Написан на Python с httpx и поисковым API на базе Qdrant.',
      uz: 'Biotact MCP — Biotact bilim bazasini AI agentlarga (Claude Code va boshqa MCP mijozlariga) stdio orqali to\'g\'ridan-to\'g\'ri ulaydigan Model Context Protocol serveri.\n\nServer uchta aniq tool taqdim etadi: biotact_search (bilim bazasi bo\'yicha semantik qidiruv), biotact_stats (kolleksiya statistikasi) va biotact_get_transcript (to\'liq transkript olish). Server core.biotact.uz prodakshen API bilan ishlaydi, shuning uchun agent har doim jonli ma\'lumotlar bilan ishlaydi.\n\nMCP interfeysining ma\'nosi: agent domen bilimi qachon kerakligini o\'zi hal qiladi va uni vazifa davomida tortib oladi — kontekstni promptlarga ko\'chirishsiz. Python\'da httpx va Qdrant asosidagi qidiruv API bilan yozilgan.',
    },
    strengths: {
      en: [
        'Three focused MCP tools: semantic search, stats, transcript retrieval',
        'Talks to the live production API — no stale snapshots',
        'stdio transport: plugs into Claude Code and any MCP client',
      ],
      ru: [
        'Три сфокусированных MCP-тула: семантический поиск, статистика, транскрипты',
        'Работа с живым продакшен-API — без устаревших снапшотов',
        'Транспорт stdio: подключается к Claude Code и любому MCP-клиенту',
      ],
      uz: [
        'Uchta aniq MCP tool: semantik qidiruv, statistika, transkriptlar',
        'Jonli prodakshen API bilan ishlaydi — eskirgan snapshotlarsiz',
        'stdio transporti: Claude Code va istalgan MCP mijoziga ulanadi',
      ],
    },
    tech: ['Python', 'MCP', 'Claude', 'Qdrant', 'httpx'],
    loc: '—',
    image: '/projects/biotact-mcp.webp',
    gradient: 'linear-gradient(135deg, #8B5CF6 5%, #5B21B6 40%, #0C0C0E 95%)',
    images: [],
    url: 'https://github.com/temrjan/biotact-mcp',
  },
  {
    id: 'znai-cloud',
    title: 'Znai.cloud',
    category: {
      en: 'saas \u00b7 ai platform',
      ru: 'saas \u00b7 ai \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430',
      uz: 'saas \u00b7 ai platforma',
    },
    descriptions: {
      en: 'RAG-as-a-Service platform. Upload your knowledge base, configure the prompt \u2014 get an AI Telegram bot in minutes. No code required.',
      ru: 'RAG-as-a-Service \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430. \u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0431\u0430\u0437\u0443 \u0437\u043d\u0430\u043d\u0438\u0439, \u043d\u0430\u0441\u0442\u0440\u043e\u0439 \u043f\u0440\u043e\u043c\u043f\u0442 \u2014 \u043f\u043e\u043b\u0443\u0447\u0438 AI Telegram-\u0431\u043e\u0442\u0430 \u0437\u0430 \u043c\u0438\u043d\u0443\u0442\u044b. \u0411\u0435\u0437 \u043a\u043e\u0434\u0430.',
      uz: 'RAG-as-a-Service platforma. Bilim bazasini yuklang, promptni sozlang \u2014 bir necha daqiqada AI Telegram-bot oling. Kodsiz.',
    },
    longDescription: {
      en: 'Znai.cloud is a RAG-as-a-Service platform that lets anyone create an AI-powered Telegram bot from their own knowledge base \u2014 without writing code.\n\nUsers register, upload documents (PDF, TXT, DOCX), and the platform automatically splits them into chunks, generates embeddings via OpenAI text-embedding-3-large, and indexes them in Qdrant. Then they provide a Telegram bot token, customize the system prompt \u2014 the bot is live.\n\nEvery query goes through a 3-stage enrichment pipeline: insights from the async ExtractionAgent (topics, entities from prior conversations), context from recent chat history, and semantic triggers that expand queries about prices, delivery, contacts.\n\nThe platform includes per-user quota management, chat session tracking, conversation insights, and a React frontend with landing page, admin panel, and chat interface.',
      ru: 'Znai.cloud \u2014 RAG-as-a-Service \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043b\u044e\u0431\u043e\u043c\u0443 \u0441\u043e\u0437\u0434\u0430\u0442\u044c AI Telegram-\u0431\u043e\u0442\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u0432\u043e\u0435\u0439 \u0431\u0430\u0437\u044b \u0437\u043d\u0430\u043d\u0438\u0439 \u2014 \u0431\u0435\u0437 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043e\u0434\u0430.\n\n\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b (PDF, TXT, DOCX), \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0438\u0445 \u043d\u0430 \u0447\u0430\u043d\u043a\u0438, \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 OpenAI text-embedding-3-large \u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0432 Qdrant. \u0417\u0430\u0442\u0435\u043c \u0432\u0432\u043e\u0434\u0438\u0442 \u0442\u043e\u043a\u0435\u043d Telegram-\u0431\u043e\u0442\u0430, \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u043f\u0442 \u2014 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0432\u0435\u0431\u0445\u0443\u043a, \u0438 \u0431\u043e\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442.\n\n\u041a\u0430\u0436\u0434\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 3-\u0441\u0442\u0443\u043f\u0435\u043d\u0447\u0430\u0442\u044b\u0439 pipeline \u043e\u0431\u043e\u0433\u0430\u0449\u0435\u043d\u0438\u044f: insights \u043e\u0442 async ExtractionAgent, \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0438\u0437 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0447\u0430\u0442\u0430, \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043e \u0446\u0435\u043d\u0430\u0445, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435, \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445.\n\n\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0432\u043e\u0442\u0430\u043c\u0438, \u0442\u0440\u0435\u043a\u0438\u043d\u0433 \u0447\u0430\u0442-\u0441\u0435\u0441\u0441\u0438\u0439, \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432 \u0438 React-\u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u0441 \u043b\u0435\u043d\u0434\u0438\u043d\u0433\u043e\u043c, \u0430\u0434\u043c\u0438\u043d\u043a\u043e\u0439 \u0438 \u0447\u0430\u0442-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u043c.',
      uz: 'Znai.cloud \u2014 har kimga o\'z bilim bazasidan AI Telegram-bot yaratishga imkon beruvchi RAG-as-a-Service platforma \u2014 kod yozmasdan.\n\nFoydalanuvchi ro\'yxatdan o\'tadi, hujjatlarni (PDF, TXT, DOCX) yuklaydi, platforma ularni avtomatik bo\'laklarga ajratadi, OpenAI text-embedding-3-large orqali embeddinglar yaratadi va Qdrant\'da indekslaydi. Telegram-bot tokenini kiritadi, system promptni sozlaydi \u2014 bot ishlaydi.\n\nHar bir so\'rov 3 bosqichli boyitish pipeline\'dan o\'tadi: ExtractionAgent insightlari, chat tarixidan kontekst va semantik triggerlar.\n\nPlatforma kvota boshqaruvi, chat sessiya tracking, dialog tahlili va React frontend \u2014 landing, admin panel va chat interfeysini o\'z ichiga oladi.',
    },
    strengths: {
      en: [
        'Self-service Telegram bot provisioning \u2014 token to live bot in minutes',
        '3-stage query enrichment: DB insights \u2192 chat history \u2192 semantic triggers',
        'Async ExtractionAgent for conversation insights (topics, entities, intent)',
        'Per-user RAG isolation with Qdrant filtering + quota management',
      ],
      ru: [
        'Self-service \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Telegram-\u0431\u043e\u0442\u0430 \u2014 \u043e\u0442 \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u0431\u043e\u0442\u0430 \u0437\u0430 \u043c\u0438\u043d\u0443\u0442\u044b',
        '3-\u0441\u0442\u0443\u043f\u0435\u043d\u0447\u0430\u0442\u043e\u0435 \u043e\u0431\u043e\u0433\u0430\u0449\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432: DB insights \u2192 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0447\u0430\u0442\u0430 \u2192 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u044b',
        'Async ExtractionAgent \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432 (\u0442\u0435\u043c\u044b, \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438, \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0435)',
        '\u0418\u0437\u043e\u043b\u044f\u0446\u0438\u044f RAG \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0447\u0435\u0440\u0435\u0437 \u0444\u0438\u043b\u044c\u0442\u0440\u044b Qdrant + \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0432\u043e\u0442\u0430\u043c\u0438',
      ],
      uz: [
        'Self-service Telegram-bot yaratish \u2014 tokendan ishlaydigan botgacha daqiqalarda',
        '3 bosqichli so\'rov boyitish: DB insights \u2192 chat tarixi \u2192 semantik triggerlar',
        'Async ExtractionAgent dialog tahlili uchun (mavzular, ob\'ektlar, niyat)',
        'Foydalanuvchilar bo\'yicha RAG izolyatsiyasi Qdrant filtrlari + kvota boshqaruvi',
      ],
    },
    tech: ['FastAPI', 'React', 'Qdrant', 'PostgreSQL', 'OpenAI', 'Telegram Bot API'],
    loc: '8K',
    image: '/projects/znai-cloud.webp',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 60%, #0C0C0E 100%)',
    images: ['/projects/znai-cloud/1-landing.png', '/projects/znai-cloud/2-bot-setup.png', '/projects/znai-cloud/3-knowledge-base.png'],
    url: 'https://znai.cloud',
  },
  {
    id: 'askbiotact',
    title: 'AskBiotact',
    category: {
      en: 'ai \u00b7 rag chatbot',
      ru: 'ai \u00b7 rag \u0447\u0430\u0442\u0431\u043e\u0442',
      uz: 'ai \u00b7 rag chatbot',
    },
    descriptions: {
      en: 'AI health consultant for BIOTACT Deutschland. RAG pipeline with 37 documents, async ExtractionAgent, multi-provider LLM and structured order flow.',
      ru: 'AI-\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442 \u043f\u043e \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u044e \u0434\u043b\u044f BIOTACT Deutschland. RAG-\u043f\u0430\u0439\u043f\u043b\u0430\u0439\u043d \u0438\u0437 37 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432, async ExtractionAgent, multi-provider LLM \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432.',
      uz: 'BIOTACT Deutschland uchun AI sog\'liq maslahatchisi. 37 hujjatli RAG pipeline, async ExtractionAgent, multi-provider LLM va tuzilgan buyurtma oqimi.',
    },
    longDescription: {
      en: 'AskBiotact is an AI health consultant built into the biotact-core-v2 platform. It advises customers on BIOTACT Deutschland products (13 supplements, 7 appliances, 9 accessories) via Telegram bot and Public API.\n\nEach request goes through a full pipeline: authentication, Redis chat history, CRM profile from PostgreSQL, order detection, query enrichment (ExtractionAgent insights, history context, semantic triggers for prices), embedding via text-embedding-3-large, Qdrant vector search (37 documents, threshold 0.30), and GPT-5 mini response generation with CRM context in the system prompt.\n\nAfter each response, an async ExtractionAgent (GPT-4o-mini, temperature=0) extracts mentioned products, symptoms, family info, intent, and summary \u2014 stored in conversation_insights for future query enrichment.\n\nWhen a phone number is detected, the Structured Order Flow activates: LLM parses name, phone, address, and products \u2192 formatted order with prices sent to a Telegram sales group.',
      ru: 'AskBiotact \u2014 AI-\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442 \u043f\u043e \u0437\u0434\u043e\u0440\u043e\u0432\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0437\u0443 \u0436\u0438\u0437\u043d\u0438, \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0432 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 biotact-core-v2. \u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u0435\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 BIOTACT Deutschland (13 \u0411\u0410\u0414\u043e\u0432, 7 \u0435\u0434\u0438\u043d\u0438\u0446 \u0442\u0435\u0445\u043d\u0438\u043a\u0438, 9 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u043e\u0432) \u0447\u0435\u0440\u0435\u0437 Telegram-\u0431\u043e\u0442 \u0438 Public API.\n\n\u041a\u0430\u0436\u0434\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u043f\u043e\u043b\u043d\u044b\u0439 \u043f\u0430\u0439\u043f\u043b\u0430\u0439\u043d: \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f, \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0447\u0430\u0442\u0430 \u0438\u0437 Redis, CRM-\u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0438\u0437 PostgreSQL, \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430, \u043e\u0431\u043e\u0433\u0430\u0449\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (insights \u0438\u0437 ExtractionAgent, \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442, \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u044f\u0434\u0440\u0430 \u0434\u043b\u044f \u0446\u0435\u043d), embedding, vector search \u0432 Qdrant (37 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432, threshold 0.30), \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0430 GPT-5 mini.\n\n\u041f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430 async ExtractionAgent (GPT-4o-mini, temperature=0) \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b, \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u044b, \u0441\u0435\u043c\u044c\u044e, \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0435, \u0440\u0435\u0437\u044e\u043c\u0435 \u2014 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u0432 conversation_insights \u0434\u043b\u044f \u043e\u0431\u043e\u0433\u0430\u0449\u0435\u043d\u0438\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432.\n\n\u041f\u0440\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f Structured Order Flow: LLM \u043f\u0430\u0440\u0441\u0438\u0442 \u0438\u043c\u044f, \u0442\u0435\u043b\u0435\u0444\u043e\u043d, \u0430\u0434\u0440\u0435\u0441, \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u2192 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u0430\u0437 \u0441 \u0446\u0435\u043d\u0430\u043c\u0438 \u0432 Telegram-\u0433\u0440\u0443\u043f\u043f\u0443 \u043f\u0440\u043e\u0434\u0430\u0436.',
      uz: 'AskBiotact \u2014 biotact-core-v2 platformasiga o\'rnatilgan AI sog\'liq maslahatchisi. BIOTACT Deutschland mahsulotlari (13 BAD, 7 texnika, 9 aksessuar) bo\'yicha Telegram-bot va Public API orqali maslahat beradi.\n\nHar bir so\'rov to\'liq pipeline\'dan o\'tadi: autentifikatsiya, Redis chat tarixi, PostgreSQL\'dan CRM profil, buyurtma aniqlash, so\'rov boyitish, embedding, Qdrant vector search (37 hujjat, threshold 0.30), GPT-5 mini javob generatsiyasi.\n\nHar javobdan keyin async ExtractionAgent (GPT-4o-mini) mahsulotlar, simptomlar, oila, niyat va xulosani ajratib oladi \u2014 conversation_insights\'ga saqlaydi.\n\nTelefon raqami aniqlanganda Structured Order Flow ishga tushadi: LLM ism, telefon, manzil, mahsulotlarni tahlil qiladi \u2192 narxlar bilan formatli buyurtma Telegram savdo guruhiga yuboriladi.',
    },
    strengths: {
      en: [
        'RAG pipeline: 37 docs in Qdrant, text-embedding-3-large (3072d), cosine similarity',
        'Async ExtractionAgent \u2014 GPT-4o-mini extracts symptoms, products, family, intent',
        'Structured Order Flow \u2014 LLM parses orders and sends to Telegram sales group',
        'Multi-provider LLM (OpenAI/Anthropic) \u2014 switch via .env without code changes',
      ],
      ru: [
        'RAG-\u043f\u0430\u0439\u043f\u043b\u0430\u0439\u043d: 37 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 Qdrant, text-embedding-3-large (3072d), cosine similarity',
        'Async ExtractionAgent \u2014 GPT-4o-mini \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0442 \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u044b, \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b, \u0441\u0435\u043c\u044c\u044e, \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0435',
        'Structured Order Flow \u2014 LLM \u043f\u0430\u0440\u0441\u0438\u0442 \u0437\u0430\u043a\u0430\u0437\u044b \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0432 Telegram-\u0433\u0440\u0443\u043f\u043f\u0443 \u043f\u0440\u043e\u0434\u0430\u0436',
        'Multi-provider LLM (OpenAI/Anthropic) \u2014 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 .env \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043a\u043e\u0434\u0430',
      ],
      uz: [
        'RAG pipeline: 37 hujjat Qdrant\'da, text-embedding-3-large (3072d), cosine similarity',
        'Async ExtractionAgent \u2014 GPT-4o-mini simptomlar, mahsulotlar, oila, niyatni ajratadi',
        'Structured Order Flow \u2014 LLM buyurtmalarni tahlil qiladi va Telegram savdo guruhiga yuboradi',
        'Multi-provider LLM (OpenAI/Anthropic) \u2014 .env orqali almashtirish, kodsiz',
      ],
    },
    tech: ['FastAPI', 'GPT-5 mini', 'Qdrant', 'Redis', 'PostgreSQL', 'OpenAI Embeddings'],
    loc: '15K',
    image: '/projects/biotact.webp',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0C0C0E 100%)',
    images: ['/projects/askbiotact/1-chat.png', '/projects/askbiotact/2-consultation.png'],
    url: 'https://t.me/AskBiotact_bot',
  },
  {
    id: 'biotact',
    title: 'Biotact',
    category: {
      en: 'e-commerce \u00b7 telegram mini app',
      ru: 'e-commerce \u00b7 telegram mini app',
      uz: 'e-commerce \u00b7 telegram mini app',
    },
    descriptions: {
      en: 'Telegram Mini App e-commerce for dietary supplements. Multicard payments with OFD fiscalization, referral system, admin panel, i18n RU/UZ.',
      ru: 'Telegram Mini App e-commerce \u0434\u043b\u044f \u0411\u0410\u0414\u043e\u0432. \u041e\u043f\u043b\u0430\u0442\u0430 Multicard \u0441 OFD-\u0444\u0438\u0441\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439, \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u0430\u0434\u043c\u0438\u043d-\u043f\u0430\u043d\u0435\u043b\u044c, i18n RU/UZ.',
      uz: 'BADlar uchun Telegram Mini App e-commerce. Multicard to\'lov OFD-fiskalizatsiya bilan, referal tizimi, admin panel, i18n RU/UZ.',
    },
    longDescription: {
      en: 'Biotact is a full-featured e-commerce platform for selling BIOTACT Deutschland dietary supplements, built as a Telegram Mini App.\n\nFrontend: React 19 + Vite + Zustand + TanStack Query + Tailwind 4. Backend: FastAPI + PostgreSQL + SQLAlchemy async. Separate Telegram bot on aiogram, referral bot, and admin panel.\n\nPayments through Multicard with full OFD fiscalization \u2014 every purchase generates a fiscal receipt. Multi-level referral system. CRM with family profiles \u2014 the bot remembers health concerns, family composition, purchase history, and AI notes per customer.\n\nCovered by 129 tests, monitoring via Sentry, deployed on PM2 with 4 processes (api, bot, ref-bot, multicard), Nginx, Ubuntu 24.04.',
      ru: 'Biotact \u2014 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u0430\u044f e-commerce \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u0411\u0410\u0414\u043e\u0432 BIOTACT Deutschland, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0430\u044f \u043a\u0430\u043a Telegram Mini App.\n\n\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434: React 19 + Vite + Zustand + TanStack Query + Tailwind 4. \u0411\u044d\u043a\u0435\u043d\u0434: FastAPI + PostgreSQL + SQLAlchemy async. \u041e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 Telegram-\u0431\u043e\u0442 \u043d\u0430 aiogram, \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u043e\u0442 \u0438 \u0430\u0434\u043c\u0438\u043d-\u043f\u0430\u043d\u0435\u043b\u044c.\n\n\u041e\u043f\u043b\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 Multicard \u0441 \u043f\u043e\u043b\u043d\u043e\u0439 OFD-\u0444\u0438\u0441\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u2014 \u043a\u0430\u0436\u0434\u0430\u044f \u043f\u043e\u043a\u0443\u043f\u043a\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0444\u0438\u0441\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0447\u0435\u043a. \u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430. CRM \u0441 \u0441\u0435\u043c\u0435\u0439\u043d\u044b\u043c\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f\u043c\u0438 \u2014 \u0431\u043e\u0442 \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u044f, \u0441\u043e\u0441\u0442\u0430\u0432 \u0441\u0435\u043c\u044c\u0438, \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043f\u043e\u043a\u0443\u043f\u043e\u043a \u0438 AI-\u0437\u0430\u043c\u0435\u0442\u043a\u0438.\n\n129 \u0442\u0435\u0441\u0442\u043e\u0432, \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 Sentry, \u0434\u0435\u043f\u043b\u043e\u0439 PM2 \u0441 4 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c\u0438, Nginx, Ubuntu 24.04.',
      uz: 'Biotact \u2014 BIOTACT Deutschland BADlarini sotish uchun to\'liq e-commerce platforma, Telegram Mini App sifatida ishlaydi.\n\nFrontend: React 19 + Vite + Zustand + TanStack Query + Tailwind 4. Backend: FastAPI + PostgreSQL + SQLAlchemy async. Aiogram\'da alohida Telegram-bot, referal bot va admin panel.\n\nMulticard orqali to\'lov to\'liq OFD-fiskalizatsiya bilan \u2014 har bir xarid fiskal chek generatsiya qiladi. Referal tizimi. Oilaviy profillar bilan CRM \u2014 bot sog\'liq muammolari, oila tarkibi, xaridlar tarixini eslab qoladi.\n\n129 test, Sentry monitoring, PM2 bilan 4 jarayon, Nginx, Ubuntu 24.04.',
    },
    strengths: {
      en: [
        'Telegram WebApp auth with initData HMAC-SHA256 validation',
        'Multicard payment gateway with OFD fiscalization and receipt generation',
        'CRM with family profiles \u2014 health concerns, purchases, AI notes per customer',
        '129 tests, Sentry monitoring, PM2 with 4 processes in production',
      ],
      ru: [
        'Telegram WebApp auth \u0441 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0435\u0439 initData HMAC-SHA256',
        '\u041f\u043b\u0430\u0442\u0451\u0436\u043d\u044b\u0439 \u0448\u043b\u044e\u0437 Multicard \u0441 OFD-\u0444\u0438\u0441\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u0447\u0435\u043a\u043e\u0432',
        'CRM \u0441 \u0441\u0435\u043c\u0435\u0439\u043d\u044b\u043c\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f\u043c\u0438 \u2014 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u044f, \u043f\u043e\u043a\u0443\u043f\u043a\u0438, AI-\u0437\u0430\u043c\u0435\u0442\u043a\u0438',
        '129 \u0442\u0435\u0441\u0442\u043e\u0432, \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 Sentry, PM2 \u0441 4 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c\u0438 \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d\u0435',
      ],
      uz: [
        'Telegram WebApp auth initData HMAC-SHA256 validatsiyasi bilan',
        'Multicard to\'lov shlyuzi OFD-fiskalizatsiya va chek generatsiyasi bilan',
        'Oilaviy profillar bilan CRM \u2014 sog\'liq muammolari, xaridlar, AI eslatmalar',
        '129 test, Sentry monitoring, PM2 bilan 4 jarayon prodakshenda',
      ],
    },
    tech: ['React 19', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind 4', 'aiogram'],
    loc: '18K',
    image: '/projects/biotact.webp',
    gradient: 'linear-gradient(135deg, #E31E24 5%, #991b1f 40%, #0C0C0E 95%)',
    images: ['/projects/biotact/1-home.jpg', '/projects/biotact/2-catalog.png', '/projects/biotact/3-sections.png', '/projects/biotact/4-product.png', '/projects/biotact/5-cart.png', '/projects/biotact/6-payment.png'],
    url: 'https://t.me/BiotactBot',
  },
  {
    id: 'biotact-mail',
    title: 'Biotact Mail',
    category: {
      en: 'infrastructure \u00b7 devops',
      ru: '\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u00b7 devops',
      uz: 'infratuzilma \u00b7 devops',
    },
    descriptions: {
      en: 'Self-hosted corporate email for biotact.uz. Stalwart Mail + Snappymail + Caddy. Full auth chain: SPF, DKIM (RSA + Ed25519), DMARC, PTR.',
      ru: 'Self-hosted \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0434\u043b\u044f biotact.uz. Stalwart Mail + Snappymail + Caddy. \u041f\u043e\u043b\u043d\u0430\u044f \u0446\u0435\u043f\u043e\u0447\u043a\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438: SPF, DKIM (RSA + Ed25519), DMARC, PTR.',
      uz: 'biotact.uz uchun self-hosted korporativ pochta. Stalwart Mail + Snappymail + Caddy. To\'liq autentifikatsiya: SPF, DKIM (RSA + Ed25519), DMARC, PTR.',
    },
    longDescription: {
      en: 'Biotact Mail is a self-hosted corporate email server for the biotact.uz domain, deployed on a Contabo VPS.\n\nThree containers in Docker Compose: Stalwart Mail Server v0.15.5 (SMTP, IMAP, JMAP, Admin API), Snappymail v2.38.2 (webmail interface), and Caddy 2.11 (reverse proxy with automatic TLS via Let\'s Encrypt).\n\nFull email authentication chain: SPF with hard fail (-all), dual DKIM signing (RSA-2048 selector 202603r + Ed25519 selector 202603e) \u2014 outgoing emails signed with both keys, DMARC with quarantine policy, PTR/rDNS configured at Contabo. Result on mail-tester.com \u2014 8.7/10.\n\nCaddy routes: /admin* and /api/* to Stalwart Admin UI and REST API, /jmap* to JMAP endpoint, /.well-known/* to autoconfig, everything else to Snappymail. DKIM keys stored in RocksDB, account management via REST API.',
      ru: 'Biotact Mail \u2014 self-hosted \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043b\u044f \u0434\u043e\u043c\u0435\u043d\u0430 biotact.uz \u043d\u0430 Contabo VPS.\n\n\u0422\u0440\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0432 Docker Compose: Stalwart Mail Server v0.15.5 (SMTP, IMAP, JMAP, Admin API), Snappymail v2.38.2 (\u0432\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u043e\u0447\u0442\u044b) \u0438 Caddy 2.11 (reverse proxy \u0441 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c TLS \u043e\u0442 Let\'s Encrypt).\n\n\u041f\u043e\u043b\u043d\u0430\u044f \u0446\u0435\u043f\u043e\u0447\u043a\u0430 email-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438: SPF \u0441 hard fail (-all), \u0434\u0432\u043e\u0439\u043d\u0430\u044f DKIM-\u043f\u043e\u0434\u043f\u0438\u0441\u044c (RSA-2048 + Ed25519), DMARC \u0441 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 quarantine, PTR/rDNS \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u0432 Contabo. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0430 mail-tester.com \u2014 8.7/10.\n\nCaddy \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u0442: /admin*, /api/* \u2192 Stalwart, /jmap* \u2192 JMAP, /.well-known/* \u2192 autoconfig, \u0432\u0441\u0451 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u2192 Snappymail. DKIM-\u043a\u043b\u044e\u0447\u0438 \u0432 RocksDB, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 REST API.',
      uz: 'Biotact Mail \u2014 biotact.uz domeni uchun Contabo VPS\'da self-hosted korporativ pochta serveri.\n\nDocker Compose\'da uchta konteyner: Stalwart Mail Server v0.15.5, Snappymail v2.38.2 va Caddy 2.11 (Let\'s Encrypt bilan avtomatik TLS).\n\nTo\'liq email autentifikatsiya: SPF hard fail (-all), ikki DKIM imzo (RSA-2048 + Ed25519), DMARC quarantine siyosati, PTR/rDNS. mail-tester.com natijasi \u2014 8.7/10.\n\nCaddy marshrutlash: /admin*, /api/* \u2192 Stalwart, /jmap* \u2192 JMAP, qolganlari \u2192 Snappymail. DKIM kalitlari RocksDB\'da, akkauntlar REST API orqali boshqariladi.',
    },
    strengths: {
      en: [
        'Dual DKIM signing \u2014 RSA-2048 + Ed25519 for maximum deliverability',
        'SPF hard fail + DMARC quarantine + PTR/rDNS \u2014 8.7/10 on mail-tester.com',
        'Caddy reverse proxy with auto TLS \u2014 routes admin, API, JMAP, webmail',
        'Full Docker stack: Stalwart (SMTP/IMAP/JMAP) + Snappymail + Caddy',
      ],
      ru: [
        '\u0414\u0432\u043e\u0439\u043d\u0430\u044f DKIM-\u043f\u043e\u0434\u043f\u0438\u0441\u044c \u2014 RSA-2048 + Ed25519 \u0434\u043b\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0441\u0442\u0438',
        'SPF hard fail + DMARC quarantine + PTR/rDNS \u2014 8.7/10 \u043d\u0430 mail-tester.com',
        'Caddy reverse proxy \u0441 auto TLS \u2014 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f admin, API, JMAP, webmail',
        '\u041f\u043e\u043b\u043d\u044b\u0439 Docker-\u0441\u0442\u0435\u043a: Stalwart (SMTP/IMAP/JMAP) + Snappymail + Caddy',
      ],
      uz: [
        'Ikki DKIM imzo \u2014 RSA-2048 + Ed25519 maksimal yetkazib berish uchun',
        'SPF hard fail + DMARC quarantine + PTR/rDNS \u2014 mail-tester.com\'da 8.7/10',
        'Caddy reverse proxy auto TLS bilan \u2014 admin, API, JMAP, webmail marshrutlash',
        'To\'liq Docker stek: Stalwart (SMTP/IMAP/JMAP) + Snappymail + Caddy',
      ],
    },
    tech: ['Stalwart', 'Snappymail', 'Caddy', 'Docker', 'RocksDB', 'DNS'],
    loc: '\u2014',
    image: '/projects/biotact.webp',
    gradient: 'linear-gradient(135deg, #374151 0%, #1f2937 60%, #0C0C0E 100%)',
    images: ['/projects/biotact-mail/1-webmail.png', '/projects/biotact-mail/2-admin.png'],
    url: 'https://mail.biotact.uz',
  },
];
