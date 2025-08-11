import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Seo } from "@/components/Seo";
import { useLocale } from "@/context/LocaleContext";

export default function Privacy() {
  const { t, locale } = useLocale();
  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${t('brand.name')} — ${t('nav.privacy')}`} description={t('nav.privacy')} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${locale==='ar'?'heading-ar':''}`}>{t('nav.privacy')}</h1>
        <article className="prose prose-sm max-w-none text-foreground">
          <p>We respect your privacy. This is a mock policy page.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
