import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/ProductCard";
import { categories } from "@/mock/categories";
import { products } from "@/mock/products";
import { useLocale } from "@/context/LocaleContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

const Index = () => {
  const { t, locale } = useLocale();
  const featured = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${t('brand.name')} — ${t('home.title')}`} description={t('brand.tagline')} />
      <Header />
      <main>
        <section aria-labelledby="hero-title" className="relative overflow-hidden">
          <div className="absolute inset-0 pattern-arabic opacity-30" />
          <div className="container mx-auto px-4 py-16 relative">
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`text-4xl md:text-5xl font-bold heading-ar`}
            >
              {t('brand.name')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mt-3 text-lg text-muted-foreground max-w-2xl"
            >
              {t('brand.tagline')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mt-6 flex gap-3"
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/categories">{t('home.hero.cta')}</Link>
              </Button>
              <Button asChild variant="gold" size="lg">
                <Link to="/cart">{t('nav.cart')}</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section aria-labelledby="categories" className="container mx-auto px-4 py-8">
          <h2 id="categories" className={`text-2xl font-semibold mb-4 ${locale==='ar'?'heading-ar':''}`}>{t('nav.categories')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {categories.map(c => (
              <Link key={c.id} to={`/category/${c.id}`} className="group rounded-lg border bg-card p-3 flex flex-col items-center hover:shadow-md transition-shadow">
                <img src={c.image?.url} alt={locale==='ar'?c.nameAr:c.name} className="w-full h-20 object-cover rounded-md" loading="lazy" />
                <div className={`mt-2 text-sm font-medium text-center ${locale==='ar'?'heading-ar':''}`}>{locale==='ar'?c.nameAr:c.name}</div>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="featured" className="container mx-auto px-4 py-8">
          <h2 id="featured" className={`text-2xl font-semibold mb-4 ${locale==='ar'?'heading-ar':''}`}>{t('home.featured')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

