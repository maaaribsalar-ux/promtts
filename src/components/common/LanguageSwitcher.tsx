import { useRouter, usePathname } from 'next-intl/client';
import { Link } from 'next-intl/link';
import { i18n, Locale } from '@/i18n/request';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      {i18n.locales.map((locale: Locale) => (
        <Link key={locale} href={pathname} locale={locale} style={{ marginRight: '10px' }}>
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
