import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Seo } from "@/components/Seo";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/mock/products";
import { useLocale } from "@/context/LocaleContext";

export default function Products() {
  const { t, locale } = useLocale();
  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${t('brand.name')} — ${t('home.featured')}`} description={t('home.featured')} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${locale==='ar'?'heading-ar':''}`}>{t('home.featured')}</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
