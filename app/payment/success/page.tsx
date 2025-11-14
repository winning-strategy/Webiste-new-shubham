'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId) {
      // You can verify the session here if needed
      setLoading(false);
    } else {
      setError('No session ID found');
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-400">Processing your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark-200 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <Link
            href="/pricing"
            className="text-primary hover:text-emerald-400 transition-colors"
          >
            Back to Pricing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-dark-200">
      <Header />
      
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-morphism rounded-2xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <CheckCircleIcon className="w-24 h-24 text-primary mx-auto" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Payment Successful!
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Thank you for subscribing to our AI agents platform. 
              Your payment has been processed successfully.
            </p>

            <div className="bg-dark-100/50 rounded-lg p-6 mb-8">
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-white">Session ID:</span>{' '}
                <span className="text-sm font-mono text-gray-400 break-all">
                  {sessionId}
                </span>
              </p>
              <p className="text-gray-400 text-sm mt-4">
                A confirmation email has been sent to your email address with all the details.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">What's Next?</h2>
              <div className="text-left space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    Access all AI agents in your dashboard
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    Start creating amazing content with our AI tools
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    Explore advanced features and integrations
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-gradient-to-r from-primary to-emerald-400 text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Go to Dashboard
              </Link>
              <Link
                href="/products/spreadsheet-agent"
                className="bg-white/10 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                Explore Our Agents
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}

