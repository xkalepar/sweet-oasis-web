import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { Seo } from "@/components/Seo";
import { categories } from "@/mock/categories";
import { products } from "@/mock/products";
import { useLocale } from "@/context/LocaleContext";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();
  const { locale } = useLocale();
  const category = categories.find(c => c.id === slug);
  const list = products.filter(p => p.categoryId === slug);

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${category ? (locale==='ar'?category.nameAr:category.name) : 'Category'} — وليد`} description={category?.description || category?.descriptionAr || ''} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${locale==='ar'?'heading-ar':''}`}>{category ? (locale==='ar'?category.nameAr:category.name) : '—'}</h1>
        {list.length === 0 ? (
          <p className="text-muted-foreground">—</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {list.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
