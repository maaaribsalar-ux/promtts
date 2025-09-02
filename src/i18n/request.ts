export const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localeDetection: true,
} as const;

export type Locale = (typeof i18n)['locales'][number];
