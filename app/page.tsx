'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [chartHeights, setChartHeights] = useState([30, 40, 50, 60, 70, 80]);
  const [checkmarks, setCheckmarks] = useState([false, false, false, false]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Simplified animation - just set final values
    setChartHeights([30, 45, 60, 75, 90, 100]);
    
    // Animate checkmarks appearing with reduced frequency
    const checkmarkTimers = [
      setTimeout(() => setCheckmarks(prev => [true, prev[1], prev[2], prev[3]]), 500),
      setTimeout(() => setCheckmarks(prev => [prev[0], true, prev[2], prev[3]]), 1000),
      setTimeout(() => setCheckmarks(prev => [prev[0], prev[1], true, prev[3]]), 1500),
      setTimeout(() => setCheckmarks(prev => [prev[0], prev[1], prev[2], true]), 2000),
    ];

    return () => {
      checkmarkTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  if (!mounted) {
    return (
      <main>
        <Header />
        <section className="min-h-[calc(100vh-80px)] px-8 py-12 flex items-center bg-gradient-to-br from-dark-200 via-dark-200 to-dark-100">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-medium text-sm">AI-Powered Business Analyst</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Accelerate your productivity by 
                  <span className="text-white"> 10X</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    with AI Agents
                  </span>
                </h1>
                <p className="text-xl text-gray-400 mb-10">
                  Instant insights for Strategy and Finance Teams
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-primary/30"
                  >
                    Book a demo
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-white hover:bg-gray-100 text-dark-200 px-8 py-4 rounded-lg font-semibold transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-white font-semibold text-lg">Market Research</h3>
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="flex items-end justify-between h-48 gap-3">
                        {[30, 45, 60, 75, 90, 100].map((height, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center gap-2">
                            <div 
                              className="w-full bg-gradient-to-t from-primary to-emerald-400 rounded-t-lg relative"
                              style={{ height: `${height}%` }}
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-white whitespace-nowrap">
                                ${[15, 22, 33, 50, 68, 91][index]}B
                              </div>
                            </div>
                            <span className="text-xs text-gray-400">
                              {2025 + index}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {['Market Size Calculations', 'Growth Trends', 'Excel Model Generated', 'Report Citations'].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-emerald-500">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-sm text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between p-4 bg-dark-100/50 rounded-lg border border-white/5">
                      <span className="text-white/70 text-sm">Market Research Report Generated</span>
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 glass-morphism rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                      Identify Top Growth Opportunities
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                      Design GTM Strategy
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-xl">/</span>
                    <input
                      type="text"
                      placeholder="Analyze EV charging infrastructure Market Size in USA"
                      className="flex-1 bg-transparent text-white/50 outline-none text-sm"
                      disabled
                    />
                    <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-8 bg-dark-200">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cut Weeks of Work into 
              <span className="text-primary"> Minutes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
              Plug-and-Play AI-Agent Teams for Accelerating Market Research, Data Analysis, 
              Data Modelling, and Report Generation Workflows.
            </p>
            <Link 
              href="/products/spreadsheet-agent" 
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-primary/30"
            >
              Explore Our Products
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section - Split Layout */}
      <section className="min-h-[calc(100vh-80px)] px-8 py-12 flex items-center bg-gradient-to-br from-dark-200 via-dark-200 to-dark-100">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">AI-Powered Business Analyst</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Accelerate your productivity by 
                <span className="text-white"> 10X</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  with AI Agents
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10">
                Instant insights for Strategy and Finance Teams
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-primary/30"
                  >
                    Book a demo
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-block bg-white hover:bg-gray-100 text-dark-200 px-8 py-4 rounded-lg font-semibold transition-all"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Animated Chart Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5"></div>
                
                <div className="relative z-10">
                  {/* Header with checkmark */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-semibold text-lg">Market Research</h3>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-sm">✓</span>
                    </motion.div>
                  </div>

                  {/* Animated Bar Chart */}
                  <div className="mb-8">
                    <div className="flex items-end justify-between h-48 gap-3">
                      {chartHeights.map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                            className="w-full bg-gradient-to-t from-primary to-emerald-400 rounded-t-lg relative"
                          >
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 + index * 0.05 }}
                              className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-white whitespace-nowrap"
                            >
                              ${[15, 22, 33, 50, 68, 91][index]}B
                            </motion.div>
                          </motion.div>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                            className="text-xs text-gray-400"
                          >
                            {2025 + index}
                          </motion.span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Checkmarks */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {['Market Size Calculations', 'Growth Trends', 'Excel Model Generated', 'Report Citations'].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: checkmarks[index] ? 1 : 0.3, x: 0 }}
                        transition={{ duration: 0.3, delay: 1 + index * 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${checkmarks[index] ? 'bg-emerald-500' : 'bg-gray-600'}`}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Status Bar */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="flex items-center justify-between p-4 bg-dark-100/50 rounded-lg border border-white/5"
                  >
                    <span className="text-white/70 text-sm">Market Research Report Generated</span>
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-6 glass-morphism rounded-2xl p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                    Identify Top Growth Opportunities
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                    Design GTM Strategy
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xl">/</span>
                  <input
                    type="text"
                    placeholder="Analyze EV charging infrastructure Market Size in USA"
                    className="flex-1 bg-transparent text-white/50 outline-none text-sm"
                    disabled
                  />
                  <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Search
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the page content can go here */}
      <section className="py-20 px-8 bg-dark-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cut Weeks of Work into 
              <span className="text-primary"> Minutes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
              Plug-and-Play AI-Agent Teams for Accelerating Market Research, Data Analysis, 
              Data Modelling, and Report Generation Workflows.
            </p>
            <Link 
              href="/products/spreadsheet-agent" 
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-primary/30"
            >
              Explore Our Products
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
