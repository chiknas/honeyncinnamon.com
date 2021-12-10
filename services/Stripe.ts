import { Stripe, loadStripe } from '@stripe/stripe-js';

export const config = {
  MIN_AMOUNT: 10.0,
  MAX_AMOUNT: 5000.0,
  AMOUNT_STEP: 5.0,
};

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export function formatAmountForDisplay(
  amount: number,
  currency: string,
  locale: string
): string {
  const numberFormat = new Intl.NumberFormat([locale], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(amount);
}

export function formatAmountForStripe(
  amount: number,
  currency: string,
  locale: string
): number {
  const numberFormat = new Intl.NumberFormat([locale], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (const part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
