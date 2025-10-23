'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, BuildingLibraryIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const useCases = [
  {
    title: 'Strategy Consulting Deliverables',
    persona: 'Business Analysts & Project Leads',
    description: 'Automatically generate client-ready presentations with market analysis, competitor insights, and strategic recommendations with consistent formatting.',
    examples: [
      'Market sizing and competitor analysis decks',
      'Strategic insights and "So What" slides',
      'Pitch decks from RFPs with capabilities',
      'Executive summary slides from reports'
    ],
    icon: <BriefcaseIcon className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Investment & Portfolio Analysis',
    persona: 'Investment Analysts & Portfolio Managers',
    description: 'Create investment committee presentations, portfolio reviews, and deal analysis decks with standardized formats and financial visualizations.',
    examples: [
      'IC presentations from deal memos',
      'Portfolio company KPI reviews',
      'Client performance decks with attribution',
      'Valuation slides with returns analysis'
    ],
    icon: <BuildingLibraryIcon className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Marketing & Campaign Reporting',
    persona: 'Marketing Analysts & Managers',
    description: 'Generate campaign performance decks, competitor benchmarking presentations, and marketing ROI summaries with branded visuals and insights.',
    examples: [
      'Campaign performance with insights',
      'Competitive benchmarking decks',
      'Marketing budget and ROI summaries',
      'Multi-channel attribution reports'
    ],
    icon: <ChartBarIcon className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'HR & Operations Dashboards',
    persona: 'HR Managers & Operations Leaders',
    description: 'Build workforce analytics dashboards, recruitment metrics, and operations performance reviews with automated data visualization and trend analysis.',
    examples: [
      'Workforce analytics dashboards',
      'Recruitment funnel and hiring metrics',
      'Operations performance reviews',
      'Project timeline and milestone updates'
    ],
    icon: <UserGroupIcon className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500'
  }
];

export default function UseCasesSlides() {
  return (
    <section className="py-16 px-8 bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Business Use Cases</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            From strategy consulting to corporate functions, see how professionals across industries leverage AI-powered slide generation
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
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
                    <p className="text-sm text-purple-400/80 font-medium">
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
                        <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
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
