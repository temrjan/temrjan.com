export const SUPPORTED_LANGS = ['en', 'uz', 'ru'] as const;
export type Language = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Language = 'en';

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'EN',
  uz: 'UZ',
  ru: 'RU',
};
