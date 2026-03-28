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
