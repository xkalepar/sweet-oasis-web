export type Messages = Record<string, any>;

export const messages: Record<'ar' | 'en' | 'tr', Messages> = {
  ar: {
    brand: {
      name: 'وليد اوقلو للحلويات',
      tagline: 'نكهات عربية أصيلة بلمسة عصرية',
    },
    nav: {
      home: 'الرئيسية',
      categories: 'التصنيفات',
      favorites: 'المفضلة',
      cart: 'السلة',
      about: 'من نحن',
      contact: 'تواصل معنا',
      privacy: 'الخصوصية',
      terms: 'الشروط',
    },
    home: {
      title: 'حلويات عربية فاخرة',
      hero: { cta: 'تسوق الآن' },
      featured: 'الأكثر تميزًا',
      bestSellers: 'الأكثر مبيعًا',
      searchPlaceholder: 'ابحث عن كنافة، بقلاوة، معمول...'
    },
    product: {
      addToCart: 'أضف إلى السلة',
      added: 'تمت الإضافة إلى السلة',
      details: 'تفاصيل المنتج',
      quantity: 'الكمية',
    },
    cart: {
      title: 'سلة التسوق',
      empty: 'سلتك فارغة',
      checkout: 'إتمام الشراء',
      subtotal: 'الإجمالي الفرعي',
      remove: 'إزالة',
    },
    checkout: {
      title: 'إتمام الشراء',
      name: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      address: 'العنوان',
      payment: 'طريقة الدفع',
      placeOrder: 'إتمام الطلب',
      success: 'تم تنفيذ الطلب بنجاح',
    },
    footer: { rights: '© جميع الحقوق محفوظة' },
    notFound: { title: 'الصفحة غير موجودة' }
  },
  en: {
    brand: { name: 'Walid Oqlo Sweets', tagline: 'Classic Arabic flavors' },
    nav: {
      home: 'Home', categories: 'Categories', favorites: 'Favorites', cart: 'Cart', about: 'About', contact: 'Contact', privacy: 'Privacy', terms: 'Terms'
    },
    home: {
      title: 'Premium Arabic Sweets',
      hero: { cta: 'Shop now' },
      featured: 'Featured',
      bestSellers: 'Best sellers',
      searchPlaceholder: 'Search kunafa, baklava, maamoul...'
    },
    product: { addToCart: 'Add to cart', added: 'Added to cart', details: 'Product details', quantity: 'Quantity' },
    cart: { title: 'Shopping cart', empty: 'Your cart is empty', checkout: 'Checkout', subtotal: 'Subtotal', remove: 'Remove' },
    checkout: { title: 'Checkout', name: 'Full name', phone: 'Phone', address: 'Address', payment: 'Payment method', placeOrder: 'Place order', success: 'Order placed successfully' },
    footer: { rights: '© All rights reserved' },
    notFound: { title: 'Page not found' }
  },
  tr: {
    brand: { name: 'Walid Oqlo Tatlıları', tagline: 'Klasik Arap tatları' },
    nav: {
      home: 'Ana Sayfa', categories: 'Kategoriler', favorites: 'Favoriler', cart: 'Sepet', about: 'Hakkımızda', contact: 'İletişim', privacy: 'Gizlilik', terms: 'Şartlar'
    },
    home: {
      title: 'Seçkin Arap Tatlıları',
      hero: { cta: 'Şimdi keşfet' },
      featured: 'Öne çıkanlar',
      bestSellers: 'Çok satanlar',
      searchPlaceholder: 'Kunefe, baklava, maamoul ara...'
    },
    product: { addToCart: 'Sepete ekle', added: 'Sepete eklendi', details: 'Ürün detayları', quantity: 'Adet' },
    cart: { title: 'Alışveriş sepeti', empty: 'Sepetiniz boş', checkout: 'Ödeme', subtotal: 'Ara toplam', remove: 'Kaldır' },
    checkout: { title: 'Ödeme', name: 'Ad Soyad', phone: 'Telefon', address: 'Adres', payment: 'Ödeme yöntemi', placeOrder: 'Siparişi ver', success: 'Sipariş başarıyla oluşturuldu' },
    footer: { rights: '© Tüm hakları saklıdır' },
    notFound: { title: 'Sayfa bulunamadı' }
  }
};
