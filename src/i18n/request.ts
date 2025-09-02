export const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localeDetection: true, // Enable automatic locale detection based on browser settings
} as const;

export type Locale = (typeof i18n)['locales'][number];
