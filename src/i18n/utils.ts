import type { Language } from './config';
import type { SiteCopy } from './translations/en';
import { en } from './translations/en';
import { ru } from './translations/ru';
import { uz } from './translations/uz';

const translations: Record<Language, SiteCopy> = { en, ru, uz };

export function getCopy(lang: Language): SiteCopy {
  return translations[lang];
}
