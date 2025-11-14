# Stripe Integration Setup Guide

This guide will walk you through setting up Stripe payments for your AI agents platform.

## Prerequisites

1. A Stripe account ([Sign up here](https://dashboard.stripe.com/register))
2. Node.js and npm installed
3. Your Next.js application running

## Step 1: Get Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/)
2. Click on **Developers** in the top navigation
3. Go to **API keys**
4. Copy your **Publishable key** and **Secret key**
   - For testing, use the **Test mode** keys
   - For production, use the **Live mode** keys

## Step 2: Create Products and Prices in Stripe

1. Go to **Products** in your Stripe Dashboard
2. Click **+ Add product**
3. Create products for each plan:

### Plus Plan ($99/month)
- **Product name**: Plus Plan
- **Pricing model**: Recurring
- **Price**: $99
- **Billing period**: Monthly
- **Payment type**: Subscription
- Copy the **Price ID** (starts with `price_...`)

### Pro Plan ($299/month)
- **Product name**: Pro Plan
- **Pricing model**: Recurring
- **Price**: $299
- **Billing period**: Monthly
- **Payment type**: Subscription
- Copy the **Price ID** (starts with `price_...`)

## Step 3: Set Up Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your Stripe keys and Price IDs:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key
   NEXT_PUBLIC_STRIPE_PRICE_PLUS=price_xxxxxxxxxxxxx
   NEXT_PUBLIC_STRIPE_PRICE_PRO=price_xxxxxxxxxxxxx
   ```

3. **Important**: Add `.env.local` to your `.gitignore` to keep your keys secure

## Step 4: Set Up Webhooks

Webhooks are essential for handling subscription events (payments, cancellations, etc.)

### For Local Development (Using Stripe CLI)

1. Install Stripe CLI:
   ```bash
   # macOS
   brew install stripe/stripe-cli/stripe
   
   # Other platforms: https://stripe.com/docs/stripe-cli
   ```

2. Login to Stripe CLI:
   ```bash
   stripe login
   ```

3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. Copy the webhook signing secret (starts with `whsec_...`) and add it to `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
   ```

### For Production

1. Go to **Developers** → **Webhooks** in Stripe Dashboard
2. Click **+ Add endpoint**
3. Set the endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the **Signing secret** and add it to your production environment variables

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. In a separate terminal, start the Stripe CLI webhook forwarding:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

3. Navigate to `http://localhost:3000/pricing`

4. Click on a paid plan (Plus or Pro)

5. Use Stripe's test card numbers:
   - **Successful payment**: `4242 4242 4242 4242`
   - **Requires authentication**: `4000 0025 0000 3155`
   - **Declined payment**: `4000 0000 0000 9995`
   - Use any future expiry date, any 3-digit CVC, and any ZIP code

6. Complete the checkout process

7. You should be redirected to the success page

## Step 6: Implement Database Logic

The current implementation includes webhook handlers with TODO comments. You need to:

1. Set up a database (PostgreSQL, MongoDB, etc.)
2. Create tables/collections for:
   - Users
   - Subscriptions
   - Payment history

3. Update the webhook handlers in `app/api/webhooks/stripe/route.ts`:
   - Save subscription details when `checkout.session.completed`
   - Update subscription status on `customer.subscription.updated`
   - Revoke access when `customer.subscription.deleted`
   - Handle payment failures

## Step 7: Going Live

Before launching to production:

1. **Switch to Live Mode** in Stripe Dashboard
2. Create **live products and prices**
3. Update environment variables with **live keys**
4. Set up the **production webhook endpoint**
5. Test thoroughly with real (small amount) transactions
6. Implement proper error logging and monitoring
7. Set up email notifications for payment events

## Security Best Practices

1. ✅ **Never expose secret keys** - Keep `STRIPE_SECRET_KEY` server-side only
2. ✅ **Verify webhook signatures** - Always validate webhook events
3. ✅ **Use HTTPS** - Always use HTTPS in production
4. ✅ **Implement rate limiting** - Prevent API abuse
5. ✅ **Add CSRF protection** - Protect against cross-site attacks
6. ✅ **Validate inputs** - Always validate user inputs
7. ✅ **Log events** - Keep audit logs for all payment events

## Common Issues and Solutions

### Issue: "No such price" error
**Solution**: Make sure the Price IDs in `.env.local` match the ones in your Stripe Dashboard

### Issue: Webhook signature verification fails
**Solution**: Ensure your `STRIPE_WEBHOOK_SECRET` is correct and matches the webhook endpoint

### Issue: Redirect to Stripe checkout doesn't work
**Solution**: Check browser console for errors and ensure `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set

### Issue: Success page shows no session ID
**Solution**: Check that the success URL in the checkout session includes `{CHECKOUT_SESSION_ID}`

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Testing Guide](https://stripe.com/docs/testing)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check your Next.js server logs
3. Review Stripe Dashboard logs (Developers → Events)
4. Contact Stripe support for payment-related issues

---

**Note**: This is a basic implementation. For production, consider:
- Adding user authentication
- Implementing proper database integration
- Adding email notifications
- Setting up customer portals for subscription management
- Implementing usage-based billing if needed
- Adding analytics and monitoring

