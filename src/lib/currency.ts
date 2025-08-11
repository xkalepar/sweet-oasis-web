export function formatCurrency(value: number, locale: string) {
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(value);
  } catch {
    return `${value.toFixed(2)}`;
  }
}
