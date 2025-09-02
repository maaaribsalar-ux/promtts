import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src/assets/scss'],
  },
};

export default withNextIntl(nextConfig);
