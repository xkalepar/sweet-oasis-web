import { useLocale } from "@/context/LocaleContext";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const langs = [
  { code: 'ar', label: 'العربية' },
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
] as const;

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [locale]);

  return (
    <div className="relative">
      <button
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-input bg-background hover:bg-accent transition-colors"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-sm">{langs.find(l => l.code === locale)?.label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <ul className="absolute z-50 mt-2 w-36 rounded-md border bg-popover shadow-sm p-1" role="listbox">
          {langs.map(l => (
            <li
              key={l.code}
              role="option"
              aria-selected={locale === l.code}
              className="px-3 py-2 rounded-sm hover:bg-accent cursor-pointer text-sm"
              onClick={() => setLocale(l.code as any)}
            >
              {l.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
