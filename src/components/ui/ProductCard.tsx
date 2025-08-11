import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useFavs } from "@/context/FavsContext";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import type { Product } from "@/types/prisma";
import { Heart, Plus } from "lucide-react";
import { formatCurrency } from "@/lib/currency";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const { has, toggle } = useFavs();
  const { locale, t } = useLocale();

  const isFav = has(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
    >
      <div className="relative">
        <img
          src={product.image.url}
          alt={product.nameAr || product.name}
          loading="lazy"
          className="w-full h-44 object-cover"
        />
        <button
          aria-label={t('nav.favorites')}
          onClick={() => toggle(product.id)}
          className="absolute top-2 end-2 inline-flex items-center justify-center p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background"
        >
          <Heart className={`w-4 h-4 ${isFav ? 'text-primary' : ''}`} />
        </button>
      </div>
      <div className="p-4 space-y-2">
        <h3 className={`text-base font-semibold ${locale === 'ar' ? 'heading-ar' : ''}`}>{locale === 'ar' ? product.nameAr : product.name}</h3>
        <div className="text-sm text-muted-foreground line-clamp-2">
          {locale === 'ar' ? (product.descriptionAr || product.description) : product.description}
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-primary font-semibold">{formatCurrency(product.price, locale)}</span>
          <Button variant="gold" size="sm" onClick={() => add({ productId: product.id, name: product.name, nameAr: product.nameAr, image: product.image.url, price: product.price, quantity: 1 })}>
            <Plus className="w-4 h-4" />
            {t('product.addToCart')}
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
