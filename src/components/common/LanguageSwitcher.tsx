import { useRouter, usePathname, Link } from 'next-intl/client';
import { i18n } from '@/i18n/request';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      {i18n.locales.map((locale) => (
        <Link key={locale} href={pathname} locale={locale} style={{ marginRight: '10px' }}>
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
