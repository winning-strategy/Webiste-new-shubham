'use client';

import { motion } from 'framer-motion';

const useCases = [
  {
    title: 'Executive Summary Reports',
    description: 'Transform lengthy market analysis, project reports, and research documents into concise executive summaries with strategic recommendations.',
    icon: '📊',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Compliance & Regulatory Reports',
    description: 'Generate jurisdiction-specific regulatory filings, compliance summaries, and risk assessment reports with proper formatting.',
    icon: '🛡️',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Market Research Reports',
    description: 'Create comprehensive market sizing, competitor analysis, and industry trend reports by synthesizing data from multiple sources.',
    icon: '🔍',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Performance Analysis Reports',
    description: 'Generate detailed performance reports with KPIs, benchmarks, attribution analysis, and actionable insights from portfolio data.',
    icon: '📈',
    color: 'from-orange-600 to-red-600'
  }
];

export default function UseCasesReports() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Use Cases</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Report Generation Agent transforms how professionals create comprehensive documents across industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-morphism p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

