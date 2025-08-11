import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Seo } from "@/components/Seo";
import { useLocale } from "@/context/LocaleContext";

export default function Terms() {
  const { t, locale } = useLocale();
  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${t('brand.name')} — ${t('nav.terms')}`} description={t('nav.terms')} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${locale==='ar'?'heading-ar':''}`}>{t('nav.terms')}</h1>
        <article className="prose prose-sm max-w-none text-foreground">
          <p>Terms of usage for this mock storefront.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
