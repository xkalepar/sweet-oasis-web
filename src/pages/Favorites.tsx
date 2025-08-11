import { useMemo } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { Seo } from "@/components/Seo";
import { products } from "@/mock/products";
import { useFavs } from "@/context/FavsContext";
import { useLocale } from "@/context/LocaleContext";

export default function Favorites() {
  const { ids } = useFavs();
  const { t, locale } = useLocale();

  const favProducts = useMemo(
    () => products.filter(p => ids.has(p.id)),
    [ids]
  );

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${t('brand.name')} — ${t('nav.favorites')}`} description={t('nav.favorites')} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${locale==='ar'?'heading-ar':''}`}>{t('nav.favorites')}</h1>
        {favProducts.length === 0 ? (
          <p className="text-muted-foreground">—</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
