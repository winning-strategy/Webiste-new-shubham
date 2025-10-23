'use client';

import { motion } from 'framer-motion';

const examples = [
  {
    title: 'Executive Summary Reports',
    prompt: 'Create a 2-page executive summary from this 50-page market analysis report with key strategic recommendations',
    description: 'Transform lengthy reports into concise executive summaries with actionable insights.'
  },
  {
    title: 'Market Research Reports',
    prompt: 'Generate a comprehensive market sizing report for the EV charging infrastructure sector with competitor analysis',
    description: 'Automatically gather and synthesize market data into structured research reports.'
  },
  {
    title: 'Performance Analysis Reports',
    prompt: 'Create a quarterly performance report with fund returns, attribution analysis, and market outlook',
    description: 'Generate detailed performance reports with KPIs and benchmark comparisons.'
  },
  {
    title: 'Compliance Reports',
    prompt: 'Generate a regulatory compliance report for our investment portfolio with risk concentration analysis',
    description: 'Create jurisdiction-specific regulatory filings and compliance summaries.'
  },
  {
    title: 'Project Status Reports',
    prompt: 'Extract key project updates from these progress reports and create a consolidated status summary',
    description: 'Automatically consolidate project updates into standardized status reports.'
  },
  {
    title: 'Client Proposals',
    prompt: 'Create proposal sections for our consulting services using our firm templates and relevant case studies',
    description: 'Generate customized proposal content with firm branding and market data.'
  }
];

export default function ExampleTasksReports() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Example Tasks You Can Ask</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-morphism p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_16px_48px_rgba(20,184,166,0.2)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h4 className="text-primary text-lg font-semibold mb-3 relative z-10">
                {example.title}
              </h4>
              
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg italic text-white/90 mb-3 border border-primary/20 relative z-10 text-sm leading-relaxed">
                &ldquo;{example.prompt}&rdquo;
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed relative z-10">
                {example.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

