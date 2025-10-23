'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const videoExamples = [
  {
    id: 'data-integration',
    category: 'Data Integration',
    description: 'Integrate multiple data sources including databases, APIs, and external feeds with automated cleaning',
    prompt: 'Connect to Salesforce API and integrate customer data with our internal database, cleaning and harmonizing the datasets',
    videoSrc: '/videos/data-analysis/data-integration.mp4',
    tag: 'Integration'
  },
  {
    id: 'exploratory-analysis',
    category: 'Exploratory Data Analysis',
    description: 'Conduct rapid EDA with summary statistics, visualizations, and outlier detection',
    prompt: 'Perform EDA on this sales dataset with summary statistics, visualizations, and outlier detection',
    videoSrc: '/videos/data-analysis/exploratory-analysis.mp4',
    tag: 'EDA'
  },
  {
    id: 'statistical-modeling',
    category: 'Statistical Modeling',
    description: 'Run advanced statistical tests, regression analysis, and simulations with automated code generation',
    prompt: 'Run regression analysis to identify relationships between customer metrics and churn rates',
    videoSrc: '/videos/data-analysis/statistical-modeling.mp4',
    tag: 'Statistics'
  },
  {
    id: 'pattern-recognition',
    category: 'Pattern Recognition',
    description: 'Identify trends, patterns, and anomalies in datasets with automated detection and alerting',
    prompt: 'Identify trends and anomalies in our customer behavior data and create alerting for unusual patterns',
    videoSrc: '/videos/data-analysis/pattern-recognition.mp4',
    tag: 'Patterns'
  },
  {
    id: 'data-visualization',
    category: 'Data Visualization',
    description: 'Generate compelling business summaries and dashboards with dynamic, customizable visualizations',
    prompt: 'Create compelling business dashboards with KPIs, insights, and recommendations from our sales data',
    videoSrc: '/videos/data-analysis/data-visualization.mp4',
    tag: 'Visualization'
  },
  {
    id: 'pipeline-engineering',
    category: 'Pipeline Engineering',
    description: 'Build and automate data pipelines for ingestion and processing with modular, reusable components',
    prompt: 'Build automated data pipelines for processing customer data from multiple sources with error handling',
    videoSrc: '/videos/data-analysis/pipeline-engineering.mp4',
    tag: 'Pipelines'
  }
];

export default function VideoExamplesDataAnalysis() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 px-8 bg-gradient-to-b from-dark-100 to-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold">
              Live Demonstrations
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Watch AI Analyze
            <span className="block bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Complex Datasets
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Real examples of how prompts transform into comprehensive data analysis and insights
          </p>
        </div>
        
        <div className="space-y-8">
          {videoExamples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-4">
                <div className="inline-block">
                  <span className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
                    {example.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {example.category}
                </h3>
                
                <p className="text-white/70 text-base leading-relaxed">
                  {example.description}
                </p>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-emerald-500 rounded-full"></div>
                  <div className="pl-4">
                    <p className="text-sm text-white/50 mb-2 font-mono">Prompt:</p>
                    <p className="text-white/90 italic leading-relaxed">
                      &ldquo;{example.prompt}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Video Side */}
              <div className="flex-1 w-full min-h-[400px] flex items-center">
                <div 
                  className="relative group cursor-pointer w-full"
                  onMouseEnter={() => setActiveVideo(example.id)}
                  onMouseLeave={() => setActiveVideo(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative glass-morphism p-3 rounded-2xl border-2 border-white/10 group-hover:border-primary/50 transition-all duration-300">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <video 
                        className="absolute inset-0 w-full h-full rounded-xl shadow-2xl object-contain" 
                        controls 
                        muted 
                        loop
                        playsInline
                        autoPlay={activeVideo === example.id}
                      >
                        <source src={example.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
