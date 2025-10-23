'use client';

import { motion } from 'framer-motion';

const examples = [
  {
    title: 'Market Sizing Presentations',
    prompt: 'Generate slides for market sizing analysis from this data report with charts and insights',
    description: 'Automatically convert data reports into presentation slides with visualizations and key takeaways.'
  },
  {
    title: 'Investment Committee Decks',
    prompt: 'Create an IC presentation from this deal memo with valuation, returns, and risk analysis',
    description: 'Transform detailed deal memos into standardized investment committee slide decks.'
  },
  {
    title: 'Client Pitch Decks',
    prompt: 'Build a pitch deck using this RFP and our firm\'s capabilities data',
    description: 'Generate customized pitch presentations with relevant case studies and capabilities.'
  },
  {
    title: 'Campaign Performance Reports',
    prompt: 'Create a marketing dashboard deck from this campaign data with performance insights',
    description: 'Transform marketing analytics into branded slides with visuals and strategic summaries.'
  },
  {
    title: 'Portfolio Review Presentations',
    prompt: 'Generate portfolio company review slides showing KPIs and financial trends',
    description: 'Auto-populate review decks with updated charts, metrics, and performance data.'
  },
  {
    title: 'Web Research Presentations',
    prompt: 'Create insight-rich slides on EV market trends using web-searched data with citations',
    description: 'Research, summarize, and format web data into structured slides with verified sources.'
  }
];

export default function ExampleTasksSlides() {
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


