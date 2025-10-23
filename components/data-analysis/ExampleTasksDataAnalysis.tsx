'use client';

import { motion } from 'framer-motion';

const examples = [
  {
    title: 'Data Integration',
    prompt: 'Connect to Salesforce API and integrate customer data with our internal database, cleaning and harmonizing the datasets',
    description: 'Integrate multiple data sources with automated cleaning and transformation scripts.'
  },
  {
    title: 'Exploratory Data Analysis',
    prompt: 'Perform EDA on this sales dataset with summary statistics, visualizations, and outlier detection',
    description: 'Conduct rapid exploratory analysis with automated summary statistics and visualizations.'
  },
  {
    title: 'Statistical Modeling',
    prompt: 'Run regression analysis to identify relationships between customer metrics and churn rates',
    description: 'Execute advanced statistical tests and regression analysis with automated code generation.'
  },
  {
    title: 'Pattern Recognition',
    prompt: 'Identify trends and anomalies in our customer behavior data and create alerting for unusual patterns',
    description: 'Detect patterns, trends, and anomalies with automated alerting capabilities.'
  },
  {
    title: 'Data Visualization',
    prompt: 'Create compelling business dashboards with KPIs, insights, and recommendations from our sales data',
    description: 'Generate dynamic visualizations and business summaries for stakeholder presentations.'
  },
  {
    title: 'Pipeline Engineering',
    prompt: 'Build automated data pipelines for processing customer data from multiple sources with error handling',
    description: 'Create modular, reusable data pipelines with monitoring and troubleshooting capabilities.'
  }
];

export default function ExampleTasksDataAnalysis() {
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
