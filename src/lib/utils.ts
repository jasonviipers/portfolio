import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(price: number | string,
  options: {
    currency?: string, locale?: string,
    notation?: Intl.NumberFormatOptions['notation']
  } = {}) {
  const { currency = 'USD', locale = 'en-US', notation = 'compact' } = options

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 0
  }).format(numericPrice)
}