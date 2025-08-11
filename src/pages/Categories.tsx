import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Seo } from "@/components/Seo";
import { categories } from "@/mock/categories";
import { useLocale } from "@/context/LocaleContext";
import { Link } from "react-router-dom";

export default function Categories() {
  const { t, locale } = useLocale();
  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${t('brand.name')} — ${t('nav.categories')}`} description={t('nav.categories')} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${locale==='ar'?'heading-ar':''}`}>{t('nav.categories')}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map(c => (
            <Link key={c.id} to={`/category/${c.id}`} className="group rounded-lg border bg-card p-3 flex flex-col items-center hover:shadow-md transition-shadow">
              <img src={c.image?.url} alt={locale==='ar'?c.nameAr:c.name} className="w-full h-24 object-cover rounded-md" loading="lazy" />
              <div className={`mt-2 text-sm font-medium text-center ${locale==='ar'?'heading-ar':''}`}>{locale==='ar'?c.nameAr:c.name}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
