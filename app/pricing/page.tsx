'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

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
    color: 'from-blue-500 to-cyan-500'
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
    color: 'from-emerald-500 to-teal-500'
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
    color: 'from-primary to-emerald-400'
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
    color: 'from-purple-500 to-pink-500'
  }
];

export default function PricingPage() {
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
                    <Link
                      href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-primary to-emerald-400 text-white hover:shadow-lg hover:shadow-primary/50'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                    
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
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-primary to-emerald-400 text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Contact Sales
              </Link>
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

      <Footer />
    </main>
  );
}

