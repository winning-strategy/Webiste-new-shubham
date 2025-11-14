'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import OurDifferentiator from '@/components/OurDifferentiator';
import AgentLink from '@/components/AgentLink';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main>
        <Header />
        <Hero />
        <section className="py-20 px-8 bg-dark-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your AI-Powered 
                <span className="text-primary"> Agent Team</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Four specialized agents working together to accelerate your business workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Link href="/products/spreadsheet-agent" className="block h-full">
                <div className="h-full glass-morphism rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-9 h-9 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Spreadsheet Agent</h3>
                  <p className="text-gray-400 text-base mb-6 leading-relaxed">
                    Build complex Excel models, automate data analysis, and generate financial projections in seconds.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Financial Modeling & Projections
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Data Automation & Analysis
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Formula Generation & Optimization
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/products/slide-generation-agent" className="block h-full">
                <div className="h-full glass-morphism rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-9 h-9 text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Slide Generation Agent</h3>
                  <p className="text-gray-400 text-base mb-6 leading-relaxed">
                    Create professional presentations in minutes with AI-generated slides and smart design.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Auto-Design & Smart Templates
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Research Integration & Content
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Visual Design & Formatting
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/products/data-analysis-agent" className="block h-full">
                <div className="h-full glass-morphism rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-9 h-9 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Data Analysis Agent</h3>
                  <p className="text-gray-400 text-base mb-6 leading-relaxed">
                    Transform raw data into actionable insights with advanced analytics and visualizations.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      Trend Analysis & Pattern Detection
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      Smart Visualizations & Charts
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      Predictive Insights & Forecasting
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/products/report-generation-agent" className="block h-full">
                <div className="h-full glass-morphism rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-9 h-9 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Report Generation Agent</h3>
                  <p className="text-gray-400 text-base mb-6 leading-relaxed">
                    Generate comprehensive business reports with automated research and citations.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      Automated Research & Data Collection
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      Citations & Source Verification
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      Professional Formatting & Export
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Our Differentiators Section */}
        <OurDifferentiator />
        
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section with Background Animations */}
      <Hero />

      {/* AI Agents Showcase Section */}
      <section className="py-20 px-8 bg-dark-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your AI-Powered 
              <span className="text-primary"> Agent Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Four specialized agents working together to accelerate your business workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Spreadsheet Agent Card */}
            <div className="h-full glass-morphism rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Spreadsheet Agent</h3>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Build complex Excel models, automate data analysis, and generate financial projections in seconds.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Financial Modeling & Projections
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Data Automation & Analysis
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Formula Generation & Optimization
                </li>
              </ul>
              <div className="flex gap-3">
                <AgentLink 
                  agentUrl="https://spreadsheet-agent.winningstrategy.ai/"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-lg font-semibold text-sm text-center transition-all"
                >
                  Try Agent →
                </AgentLink>
                <Link 
                  href="/products/spreadsheet-agent"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm text-center transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Presentation Agent Card */}
            <div className="h-full glass-morphism rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Presentation Agent</h3>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Create professional presentations in minutes with AI-generated slides and smart design.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Auto-Design & Smart Templates
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Research Integration & Content
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Visual Design & Formatting
                </li>
              </ul>
              <div className="flex gap-3">
                <AgentLink 
                  agentUrl="https://presentation-agent.winningstrategy.ai/"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-lg font-semibold text-sm text-center transition-all"
                >
                  Try Agent →
                </AgentLink>
                <Link 
                  href="/products/slide-generation-agent"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm text-center transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Data Analysis Agent Card */}
            <div className="h-full glass-morphism rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Data Analysis Agent</h3>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Transform raw data into actionable insights with advanced analytics and intelligent visualizations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Trend Analysis & Pattern Detection
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Smart Visualizations & Charts
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Predictive Insights & Forecasting
                </li>
              </ul>
              <div className="flex gap-3">
                <AgentLink 
                  agentUrl="https://data-analysis-agent.winningstrategy.ai/"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-lg font-semibold text-sm text-center transition-all"
                >
                  Try Agent →
                </AgentLink>
                <Link 
                  href="/products/data-analysis-agent"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm text-center transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Report Generation Agent Card */}
            <div className="h-full glass-morphism rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 relative">
              {/* Coming Soon Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-primary/20 border border-primary/40 rounded-full">
                <span className="text-xs text-primary font-semibold">Coming Soon</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Report Generation Agent</h3>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Generate comprehensive business reports with automated research, proper citations, and professional formatting.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Automated Research & Data Collection
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Citations & Source Verification
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Professional Formatting & Export
                </li>
              </ul>
              <div className="flex gap-3">
                <button 
                  disabled
                  className="flex-1 bg-gray-600 text-gray-400 px-4 py-3 rounded-lg font-semibold text-sm text-center cursor-not-allowed opacity-60"
                >
                  Coming Soon
                </button>
                <Link 
                  href="/products/report-generation-agent"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm text-center transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Differentiators Section */}
      <OurDifferentiator />

      <Footer />
    </main>
  );
}
