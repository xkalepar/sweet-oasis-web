import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";
import { useLocale } from "@/context/LocaleContext";
import { useCart } from "@/context/CartContext";
import { useFavs } from "@/context/FavsContext";
import { Input } from "@/components/ui/input";

export default function Header() {
  const { t, locale } = useLocale();
  const { count } = useCart();
  const { ids } = useFavs();

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-md" style={{ backgroundImage: 'var(--gradient-primary)' }} />
          <div className="leading-tight">
            <div className={`text-xl font-bold heading-ar ${locale === 'ar' ? '' : ''}`}>{t('brand.name')}</div>
            <div className="text-xs text-muted-foreground">{t('brand.tagline')}</div>
          </div>
        </Link>

        <div className="flex-1 max-w-xl mx-auto">
          <Input placeholder={t('home.searchPlaceholder')} aria-label="search" />
        </div>

        <nav className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link to="/favorites" aria-label={t('nav.favorites')} className="relative inline-flex items-center justify-center p-2 rounded-md hover:bg-accent">
            <Heart className="w-5 h-5" />
            {ids.size > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground">
                {ids.size}
              </span>
            )}
          </Link>
          <Link to="/cart" aria-label={t('nav.cart')} className="relative inline-flex items-center justify-center p-2 rounded-md hover:bg-accent">
            <ShoppingCart className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
