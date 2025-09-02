import createMiddleware from 'next-intl/middleware';
import { i18n } from './src/i18n/request';

export default createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localeDetection: i18n.localeDetection,
  localePrefix: 'always', // Ensures URLs include locale (e.g., /en, /es)
});

export const config = {
  matcher: ['/', '/(en|es)/:path*'],
};
