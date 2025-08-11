import { Link } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { t, locale } = useLocale();
  return (
    <footer className="mt-12 border-t bg-background">
      <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <div className={`text-xl font-bold heading-ar`}>{t('brand.name')}</div>
          <p className="text-sm text-muted-foreground mt-2">{t('brand.tagline')}</p>
          <p className="text-xs text-muted-foreground mt-4">{t('footer.rights')}</p>
        </div>
        <nav className="space-y-2">
          <div className="font-semibold">Links</div>
          <ul className="text-sm space-y-1">
            <li><Link className="hover:underline" to="/about">{t('nav.about')}</Link></li>
            <li><Link className="hover:underline" to="/contact">{t('nav.contact')}</Link></li>
            <li><Link className="hover:underline" to="/privacy">{t('nav.privacy')}</Link></li>
            <li><Link className="hover:underline" to="/terms">{t('nav.terms')}</Link></li>
          </ul>
        </nav>
        <div className="space-y-2">
          <div className="font-semibold">Contact</div>
          <div className="text-sm text-muted-foreground">+90 555 000 000</div>
          <div className="text-sm text-muted-foreground">Damascus • Istanbul</div>
        </div>
      </div>
    </footer>
  );
}
