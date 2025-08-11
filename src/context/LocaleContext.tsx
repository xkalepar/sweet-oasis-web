import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { messages as allMessages } from '@/lib/i18n';
import type { Locale } from '@/types/ui';

const LOCALE_KEY = 'wb_locale_v1';

type LocaleContextValue = {
  locale: Locale;
  dir: 'rtl' | 'ltr';
  setLocale: (next: Locale) => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(LOCALE_KEY) as Locale | null;
    if (saved) return saved;
  } catch {}
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith('ar')) return 'ar';
  if (nav.startsWith('tr')) return 'tr';
  return 'en';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale());
  const dir: 'rtl' | 'ltr' = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    try { localStorage.setItem(LOCALE_KEY, locale); } catch {}
    const html = document.documentElement;
    html.setAttribute('dir', dir);
    html.setAttribute('lang', locale);
  }, [locale, dir]);

  const t = useMemo(() => {
    const dict = allMessages[locale] ?? allMessages.en;
    return (key: string) => key.split('.').reduce((acc: any, part: string) => acc?.[part], dict) ?? key;
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);

  const value = useMemo(() => ({ locale, dir, setLocale, t }), [locale, dir]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
