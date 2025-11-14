import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-10-29.clover',
  typescript: true,
});

export const getStripeProducts = () => {
  // Define your pricing tiers with Stripe Price IDs
  // You'll need to create these products in your Stripe Dashboard
  return {
    'Free Trial': {
      priceId: process.env.STRIPE_PRICE_FREE_TRIAL || '',
      price: 0,
    },
    'Plus': {
      priceId: process.env.STRIPE_PRICE_PLUS || '',
      price: 99,
    },
    'Pro': {
      priceId: process.env.STRIPE_PRICE_PRO || '',
      price: 299,
    },
    'Enterprise': {
      priceId: process.env.STRIPE_PRICE_ENTERPRISE || '',
      price: 0, // Custom pricing
    },
  };
};

