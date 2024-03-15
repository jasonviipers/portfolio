import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Formats the given price according to specified options.
 * @param price - The price to format.
 * @param options - Formatting options including currency, locale, and notation.
 * @returns The formatted price string.
 */
export function formatPrice(price: number | string, options: {
  currency?: string,
  locale?: string,
  notation?: Intl.NumberFormatOptions['notation']
} = {}) {
  const { currency = 'USD', locale, notation = 'compact' } = options;

  // Ensure numeric price value
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

  // Validate price
  if (isNaN(numericPrice)) {
    throw new Error('Invalid price provided');
  }

  // Determine locale
  const resolvedLocale = locale || navigator.language || 'en-US';

  // Format price
  try {
    const formattedPrice = new Intl.NumberFormat(resolvedLocale, {
      style: 'currency',
      currency,
      notation,
      maximumFractionDigits: 0
    }).format(numericPrice);
    
    return formattedPrice;
  } catch (error) {
    throw new Error('Failed to format price');
  }
}