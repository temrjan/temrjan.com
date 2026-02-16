import type { Language } from './config';
import type { TranslationSchema } from './translations/en';
import { en } from './translations/en';
import { uz } from './translations/uz';
import { ru } from './translations/ru';

const translations: Record<Language, TranslationSchema> = { en, uz, ru };

type DotPath<T, Prefix extends string = ''> = T extends Record<string, unknown>
  ? {
      [K in keyof T & string]: T[K] extends Record<string, unknown>
        ? DotPath<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
    }[keyof T & string]
  : never;

type TranslationKey = DotPath<TranslationSchema>;

export function t(lang: Language, key: TranslationKey): string {
  const parts = key.split('.');
  let result: unknown = translations[lang];
  for (const part of parts) {
    result = (result as Record<string, unknown>)[part];
  }
  return result as string;
}

export function getLocalizedPath(lang: Language, path: string = '/'): string {
  return `/${lang}${path}`;
}
