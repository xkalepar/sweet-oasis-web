import { useParams } from "react-router-dom";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Seo } from "@/components/Seo";
import { products } from "@/mock/products";
import { useLocale } from "@/context/LocaleContext";
import { useCart } from "@/context/CartContext";
import { useFavs } from "@/context/FavsContext";
import { formatCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";
import QuantityStepper from "@/components/ui/QuantityStepper";
import { useMemo, useState } from "react";
import { Heart } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const { locale, t } = useLocale();
  const { add } = useCart();
  const { has, toggle } = useFavs();
  const [qty, setQty] = useState(1);

  const product = useMemo(() => products.find(p => p.id === id), [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <p className="text-muted-foreground">Not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const isFav = has(product.id);

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${product.nameAr || product.name} — ${t('brand.name')}`} description={product.descriptionAr || product.description || ''} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={product.image.url} alt={product.nameAr || product.name} className="w-full h-80 object-cover rounded-lg border" />
          <div>
            <h1 className={`text-3xl font-bold mb-2 ${locale==='ar'?'heading-ar':''}`}>{locale==='ar'?product.nameAr:product.name}</h1>
            {product.description || product.descriptionAr ? (
              <p className="text-muted-foreground mb-4">{locale==='ar'? (product.descriptionAr || product.description) : (product.description || '')}</p>
            ) : null}
            <div className="text-2xl font-semibold text-primary mb-4">{formatCurrency(product.price, locale)}</div>
            <div className="flex items-center gap-4 mb-6">
              <QuantityStepper value={qty} onChange={setQty} />
              <button aria-label={t('nav.favorites')} onClick={() => toggle(product.id)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-accent">
                <Heart className={`w-4 h-4 ${isFav ? 'text-primary' : ''}`} />
                <span>{t('nav.favorites')}</span>
              </button>
            </div>
            <Button variant="gold" size="lg" onClick={() => add({ productId: product.id, name: product.name, nameAr: product.nameAr, image: product.image.url, price: product.price, quantity: qty })}>
              {t('product.addToCart')}
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
