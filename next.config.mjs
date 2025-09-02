/** @type {import('next').NextConfig} */
import nextIntlPlugin from 'next-intl/plugin';

const withNextIntl = nextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  reactStrictMode: true,
  // Removed i18n property to avoid conflicts with next-intl
};
