import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Seo } from "@/components/Seo";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import QuantityStepper from "@/components/ui/QuantityStepper";
import { formatCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { state, setQty, remove, clear } = useCart();
  const { t, locale } = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${t('brand.name')} — ${t('nav.cart')}`} description={t('cart.title')} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${locale==='ar'?'heading-ar':''}`}>{t('cart.title')}</h1>
        {state.items.length === 0 ? (
          <p className="text-muted-foreground">{t('cart.empty')}</p>
        ) : (
          <div className="grid gap-4">
            {state.items.map(item => (
              <div key={item.productId} className="flex items-center gap-4 p-4 rounded-lg border bg-card">
                <img src={item.image} alt={item.nameAr || item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-1">
                  <div className={`font-medium ${locale==='ar'?'heading-ar':''}`}>{locale==='ar' ? (item.nameAr || item.name) : item.name}</div>
                  <div className="text-sm text-muted-foreground">{formatCurrency(item.price, locale)}</div>
                </div>
                <QuantityStepper value={item.quantity} onChange={(q) => setQty(item.productId, q)} />
                <Button variant="outline" onClick={() => remove(item.productId)}>{t('cart.remove')}</Button>
              </div>
            ))}
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div className="text-lg font-semibold">{t('cart.subtotal')}</div>
              <div className="text-2xl text-primary font-bold">{formatCurrency(state.subtotal, locale)}</div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="gold">{t('cart.checkout')}</Button>
              <Button variant="outline" onClick={clear}>Clear</Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
