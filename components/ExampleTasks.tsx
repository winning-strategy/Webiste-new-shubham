'use client';

import { motion } from 'framer-motion';

const examples = [
  {
    title: 'Building Models from PDF/Web Data',
    prompt: 'Build me a detailed income statement based on this 10K filing PDF',
    description: 'Upload financial documents and let AI extract data to create structured models.'
  },
  {
    title: 'Updating Models Based on Feedback',
    prompt: 'Can you update this cap table to account for the increased employee option pool?',
    description: 'Make iterative changes and refinements to existing financial models.'
  },
  {
    title: 'Analyzing Data and Building Reports',
    prompt: 'Analyze this CSV dataset for key trends and make a detailed dashboard for me',
    description: 'Transform raw data into actionable insights with automated analysis.'
  },
  {
    title: 'Web Search Integration',
    prompt: 'Update my list of 100 favorite founders. Add a column for recent news on each founder',
    description: 'Enhance your data with real-time information from the web.'
  },
  {
    title: 'Data Cleaning and Processing',
    prompt: 'Please extract utm_source, medium, & campaign from the URL into separate columns',
    description: 'Clean messy datasets and standardize data formats automatically.'
  },
  {
    title: 'Model Validation',
    prompt: 'Double check my DCF model before I send it to my boss. What do you think?',
    description: 'Get AI validation and error detection for your financial models.'
  }
];

export default function ExampleTasks() {
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

