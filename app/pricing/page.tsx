'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '14 days',
    description: 'Perfect for testing our AI agents',
    features: [
      'Access to all 4 AI agents',
      'Up to 50 queries per month',
      'Basic support',
      'Community access',
      'Standard response time',
      'Email support'
    ],
    cta: 'Start Free Trial',
    highlighted: false,
    color: 'from-blue-500 to-cyan-500',
    priceId: '', // Free trial doesn't need a Stripe price ID
    isFree: true
  },
  {
    name: 'Plus',
    price: '$99',
    period: 'per month',
    description: 'Great for individuals and small teams',
    features: [
      'Everything in Free Trial',
      'Up to 500 queries per month',
      'Priority support',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'Collaboration tools',
      '24/7 email support'
    ],
    cta: 'Get Started',
    highlighted: false,
    color: 'from-emerald-500 to-teal-500',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PLUS || '',
    isFree: false
  },
  {
    name: 'Pro',
    price: '$299',
    period: 'per month',
    description: 'Best for growing businesses',
    features: [
      'Everything in Plus',
      'Unlimited queries',
      'Dedicated account manager',
      'Custom AI model training',
      'White-label options',
      'Advanced security features',
      'SSO integration',
      'Priority phone support',
      'Custom workflows',
      'SLA guarantee'
    ],
    cta: 'Get Started',
    highlighted: true,
    color: 'from-primary to-emerald-400',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || '',
    isFree: false
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Contact us',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Custom integrations',
      'On-premise deployment',
      'Dedicated infrastructure',
      'Custom SLA agreements',
      'Enterprise-grade security',
      'Advanced compliance features',
      'Dedicated support team',
      'Custom training & onboarding',
      'API rate limits customization'
    ],
    cta: 'Contact Sales',
    highlighted: false,
    color: 'from-purple-500 to-pink-500',
    priceId: '',
    isEnterprise: true
  }
];

export default function PricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleCheckout = async (plan: typeof pricingPlans[0]) => {
    // Handle free trial and enterprise differently
    if (plan.isFree) {
      // Redirect to signup for free trial
      window.location.href = '/signup';
      return;
    }

    if (plan.isEnterprise) {
      // Open contact modal for enterprise
      setIsContactModalOpen(true);
      return;
    }

    if (!plan.priceId) {
      setError('This plan is not configured yet. Please contact support.');
      return;
    }

    setLoadingPlan(plan.name);
    setError(null);

    try {
      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: plan.priceId,
          planName: plan.name,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();

      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      setError(err.message || 'Failed to start checkout. Please try again.');
      setLoadingPlan(null);
    }
  };

  return (
    <main className="min-h-screen bg-dark-200">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">Plan</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Select the perfect plan for your team. All plans include access to our powerful AI agents.
            </p>
            {error && (
              <div className="mt-4 bg-red-500/10 border border-red-500/50 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-red-400">{error}</p>
              </div>
            )}
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-emerald-400 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                    Most Popular
                  </div>
                )}
                
                <div 
                  className={`glass-morphism rounded-2xl p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                    plan.highlighted 
                      ? 'border-2 border-primary shadow-[0_16px_48px_rgba(20,184,166,0.3)]' 
                      : 'border border-white/10 hover:border-primary/30 hover:shadow-[0_16px_48px_rgba(20,184,166,0.2)]'
                  }`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`}></div>
                  
                  <div className="relative z-10">
                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">/ {plan.period}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    {/* CTA Button */}
                    <button
                      onClick={() => handleCheckout(plan)}
                      disabled={loadingPlan === plan.name}
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 disabled:opacity-50 disabled:cursor-not-allowed ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-primary to-emerald-400 text-white hover:shadow-lg hover:shadow-primary/50'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {loadingPlan === plan.name ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        plan.cta
                      )}
                    </button>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-white mb-4">What's included:</p>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ or Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need help choosing a plan?
              </h2>
              <p className="text-gray-400 mb-6">
                Our team is here to help you find the perfect solution for your business needs.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-block bg-gradient-to-r from-primary to-emerald-400 text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                <span>No credit card required for trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      <Footer />
    </main>
  );
}

