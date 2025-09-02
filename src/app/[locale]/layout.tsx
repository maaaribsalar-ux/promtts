import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import logo from '@/assets/images/logo.png';
import { DEFAULT_PAGE_TITLE } from '@/assets/data/constants';
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper';
import NextTopLoader from 'nextjs-toploader';
import 'aos/dist/aos.css';
import '@/assets/scss/theme.scss';

const BeVietnamPro = Be_Vietnam_Pro({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: 'normal',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Premium Landing Pages',
    default: DEFAULT_PAGE_TITLE,
  },
  description: 'A fully featured multi purpose template',
};

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`;

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  let messages;
  try {
    messages = (await import(`@/assets/data/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body className={BeVietnamPro.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div id="splash-screen">
            <Image alt="logo-text" src={logo} style={{ height: '8%', width: 'auto' }} priority />
          </div>
          <NextTopLoader color="#05f" showSpinner={false} />
          <div id="__next_splash">
            <AppProvidersWrapper>{children}</AppProvidersWrapper>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
