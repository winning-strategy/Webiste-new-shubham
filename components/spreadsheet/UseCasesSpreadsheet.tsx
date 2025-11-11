'use client';

import { motion } from 'framer-motion';
import { ChartBarIcon, MagnifyingGlassIcon, PresentationChartLineIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const useCases = [
  {
    title: 'Quantitative Financial Modeling',
    persona: 'Financial Analysts & Investment Teams',
    description: 'Build sophisticated financial models for valuations, forecasting, and due diligence with automated calculations and scenario analysis.',
    examples: [
      'Market sizing & cost analysis',
      'Earnings forecasts & DCF valuations',
      'Credit risk scoring & stress testing',
      'Buy-side/sell-side due diligence workbooks'
    ],
    icon: <ChartBarIcon className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI-Powered Executive Dashboards',
    persona: 'CXOs & Decision Makers',
    description: 'Generate executive-ready dashboards with automated insights, strategic recommendations, and explanations for every metric.',
    examples: [
      'Real-time KPI scorecards with rationale',
      'Portfolio performance tracking',
      'Operations metrics & trend analysis',
      'Client reporting with strategic insights'
    ],
    icon: <PresentationChartLineIcon className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Intelligent Market Research',
    persona: 'Research & Strategy Teams',
    description: 'Automate data collection from the web, benchmark against competitors, and generate analysis-ready datasets with complete source attribution.',
    examples: [
      'Competitor pricing & positioning analysis',
      'Financial statement aggregation',
      'Salary benchmarking from job portals',
      'Industry trend reports with citations'
    ],
    icon: <MagnifyingGlassIcon className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Data Consolidation & Analysis',
    persona: 'Business Analysts & Operations',
    description: 'Consolidate data from multiple sources, perform sentiment analysis, and extract actionable insights from both structured and unstructured data.',
    examples: [
      'Multi-source data preparation for analysis',
      'Survey & feedback sentiment analysis',
      'Customer database analytics',
      'Vendor & project performance tracking'
    ],
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500'
  }
];

export default function UseCases() {
  return (
    <section className="py-16 px-8 bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Business Use Cases</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            From financial modeling to strategic insights, see how professionals across industries leverage AI-powered spreadsheets
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphism p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:opacity-90 transition-opacity relative`}>
                    <div className="text-white [&>svg]:stroke-[3] absolute inset-0 flex items-center justify-center">
                      {useCase.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium">
                      {useCase.persona}
                    </p>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-xs text-white/50 font-semibold uppercase tracking-wider mb-2">
                    Use Cases:
                  </p>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                        <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

