export const SUPPORTED_LANGS = ['en', 'ru', 'uz'] as const;
export type Language = (typeof SUPPORTED_LANGS)[number];
export type Section = 'home' | 'resume' | 'services';
export const DEFAULT_LANG: Language = 'en';

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'EN',
  ru: 'RU',
  uz: 'UZ',
};

export function sectionPath(lang: Language, section: Section): string {
  return section === 'home' ? `/${lang}/` : `/${lang}/${section}/`;
}
