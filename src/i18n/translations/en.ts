import type { Section } from '../config';

interface PageMeta {
  title: string;
  description: string;
}

interface ExperienceCopy {
  period: string;
  organization: string;
  role: string;
  detail: string;
}

interface SkillGroupCopy {
  title: string;
  detail: string;
}

interface DirectionCopy {
  title: string;
  detail: string;
}

interface CaseCopy {
  title: string;
  challenge: string;
  contribution: string;
  status: string;
}

interface StepCopy {
  title: string;
  detail: string;
}

export interface SiteCopy {
  meta: Record<Section, PageMeta>;
  nav: Record<Section, string> & { menu: string; language: string };
  common: {
    skip: string;
    location: string;
    availability: string;
    contact: string;
    telegram: string;
    email: string;
    github: string;
    print: string;
    fullCatalog: string;
    source: string;
  };
  home: {
    eyebrow: string;
    intro: string;
    resumeLink: string;
    servicesLink: string;
    currentLabel: string;
    currentText: string;
    focusLabel: string;
    focusText: string;
    selectedTitle: string;
    selectedText: string;
  };
  resume: {
    eyebrow: string;
    title: string;
    lead: string;
    experienceTitle: string;
    experience: ExperienceCopy[];
    skillsTitle: string;
    skills: SkillGroupCopy[];
    personalTitle: string;
    personalText: string;
    contactTitle: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    directionsTitle: string;
    directions: DirectionCopy[];
    casesTitle: string;
    casesIntro: string;
    caseChallenge: string;
    caseContribution: string;
    caseStatus: string;
    cases: CaseCopy[];
    processTitle: string;
    steps: StepCopy[];
    evidenceTitle: string;
    evidenceText: string;
    ctaTitle: string;
    ctaText: string;
  };
  footer: { line: string };
}

export const en: SiteCopy = {
  meta: {
    home: {
      title: 'Temrjan Khasenov — AI products and software engineering',
      description: 'Temrjan Khasenov builds digital products, integrations and AI tools with human oversight. Based in Tashkent; available for project and remote work.',
    },
    resume: {
      title: 'Résumé — Temrjan Khasenov',
      description: 'Experience from Kinopro and Multicard Payment to SaaS projects and current AI development at Biotact Deutschland.',
    },
    services: {
      title: 'Services and selected work — Temrjan Khasenov',
      description: 'APIs, Telegram products, knowledge search, operations automation and bounded AI agents. Selected work: Biotact, Rustok and OltinPay.',
    },
  },
  nav: { home: 'Home', resume: 'Résumé', services: 'Services', menu: 'Menu', language: 'Language' },
  common: {
    skip: 'Skip to content',
    location: 'Tashkent, Uzbekistan',
    availability: 'Project and remote work',
    contact: 'Get in touch',
    telegram: 'Telegram',
    email: 'Email',
    github: 'GitHub',
    print: 'Print résumé',
    fullCatalog: 'Explore the full capabilities catalog',
    source: 'View source',
  },
  home: {
    eyebrow: 'Product thinking · Engineering · AI',
    intro: 'I design and build digital products, integrations and AI tools. I make the technical decisions, review the work and remain accountable for the result.',
    resumeLink: 'Read my résumé',
    servicesLink: 'Explore services',
    currentLabel: 'Current work',
    currentText: 'Fullstack AI Developer at Biotact Deutschland since 2025.',
    focusLabel: 'How I work',
    focusText: 'Clear scope, a working first result, review and careful handover.',
    selectedTitle: 'Selected work, with context',
    selectedText: 'The services page shows three concise cases, their current status and links you can inspect.',
  },
  resume: {
    eyebrow: 'Professional path',
    title: 'Experience, in context.',
    lead: 'I combine product decisions and hands-on development. My experience spans an operating business, payment products, independent SaaS work and current AI development.',
    experienceTitle: 'Experience',
    experience: [
      {
        period: '2025–present',
        organization: 'Biotact Deutschland',
        role: 'Fullstack AI Developer',
        detail: 'Design and develop AI tools for knowledge access and operational workflows.',
      },
      {
        period: '2024–2025',
        organization: 'Independent SaaS and AI projects',
        role: 'Architect and developer',
        detail: 'Designed and built product architecture, APIs and user workflows for my own projects.',
      },
      {
        period: 'May 2024',
        organization: 'Multicard Payment',
        role: 'Product Manager',
        detail: 'Worked on the planning and development of payment products.',
      },
      {
        period: '2013–2019',
        organization: 'CLEVER IT MEDIA / Kinopro.uz',
        role: 'Founder and Director',
        detail: 'Founded and directed Kinopro.uz; later sold the project.',
      },
    ],
    skillsTitle: 'What I work with',
    skills: [
      { title: 'Product & delivery', detail: 'Scoping, architecture, review, quality checks and handover.' },
      { title: 'Software', detail: 'Rust, TypeScript, Python, APIs and integrations.' },
      { title: 'AI systems', detail: 'Knowledge search, workflow automation and agents with explicit permissions.' },
    ],
    personalTitle: 'Personal project — Rustok',
    personalText: 'Rustok is an open-source wallet and agent-access project I develop alongside my current work at Biotact. It is a personal project, not another employer.',
    contactTitle: 'Contact',
  },
  services: {
    eyebrow: 'Ways to work together',
    title: 'Useful software, built with care.',
    lead: 'I help turn a concrete need into a working product or a well-defined first stage. AI can speed up delivery; decisions, review and responsibility stay with a person.',
    directionsTitle: 'What I can build',
    directions: [
      { title: 'APIs & integrations', detail: 'Connect products, data and external services through clear interfaces.' },
      { title: 'Telegram bots & Mini Apps', detail: 'Build customer journeys, requests and operations inside Telegram.' },
      { title: 'Knowledge search', detail: 'Make agreed documents and product information easier to find and use.' },
      { title: 'Operations automation', detail: 'Reduce repeated manual steps while keeping a reviewable process.' },
      { title: 'AI agents with boundaries', detail: 'Give an agent defined tools and permissions, with a human approval point where needed.' },
    ],
    casesTitle: 'Three selected cases',
    casesIntro: 'Each example separates the problem, my contribution and its current status.',
    caseChallenge: 'Need',
    caseContribution: 'Contribution',
    caseStatus: 'Status',
    cases: [
      {
        title: 'Biotact',
        challenge: 'Make product knowledge and incoming requests usable across several customer channels.',
        contribution: 'Built knowledge search, an AI consultant and structured request handling for Telegram and related interfaces.',
        status: 'Operating product',
      },
      {
        title: 'Rustok',
        challenge: 'Let an AI assistant work with a self-custody wallet without unrestricted control.',
        contribution: 'Built a Rust wallet core and transaction checks with distinct read, preview and execute permissions.',
        status: 'Personal open-source project',
      },
      {
        title: 'OltinPay',
        challenge: 'Make tokenized obligations and their coverage constraints explicit and testable.',
        contribution: 'Developed contract logic and product interfaces for the test network.',
        status: 'Testnet; no external audit claimed',
      },
    ],
    processTitle: 'A practical process',
    steps: [
      { title: 'Define the need', detail: 'We clarify users, systems, constraints and the result you need.' },
      { title: 'Agree on a first stage', detail: 'We set its scope and acceptance criteria before development.' },
      { title: 'Build and show', detail: 'I deliver working parts, review them and show what is ready.' },
      { title: 'Verify and hand over', detail: 'We check key scenarios and agree on documentation and next steps.' },
    ],
    evidenceTitle: 'Work you can inspect',
    evidenceText: 'Selected merged contributions to external open-source projects:',
    ctaTitle: 'Have a project in mind?',
    ctaText: 'Tell me what you want to change and what already exists. We can define a useful first step together.',
  },
  footer: { line: 'Temrjan Khasenov · Tashkent' },
};
