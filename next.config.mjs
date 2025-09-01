/** @type {import('next').NextConfig} */
import nextIntlPlugin from 'next-intl/plugin';

const withNextIntl = nextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'], // Supported locales
    defaultLocale: 'en', // Default locale
    localeDetection: true, // Automatically detect user's locale
  },
};

export default withNextIntl(nextConfig);
