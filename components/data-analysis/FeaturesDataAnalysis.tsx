'use client';

import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  DocumentChartBarIcon,
  TableCellsIcon,
  ChartPieIcon,
  LightBulbIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: <CpuChipIcon className="w-7 h-7" />,
    title: 'Code-Free Analysis',
    description: 'Write executable code through natural language prompts - no coding knowledge required. Perfect for business analysts.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: <ChartBarIcon className="w-7 h-7" />,
    title: 'Jupyter Notebook Interface',
    description: 'Work in a Jupyter notebook-like interface with code cells, markdown, and automatic execution for interactive data analysis.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: <CloudIcon className="w-7 h-7" />,
    title: 'Data Integration',
    description: 'Integrate multiple data sources including databases, APIs, and external feeds with automated cleaning and transformation.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <MagnifyingGlassIcon className="w-7 h-7" />,
    title: 'Exploratory Data Analysis',
    description: 'Conduct rapid EDA with summary statistics, visualizations, and outlier detection for quick data understanding.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: <BeakerIcon className="w-7 h-7" />,
    title: 'Statistical Modeling',
    description: 'Run advanced statistical tests, regression analysis, and simulations with automated code generation.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: <ChartPieIcon className="w-7 h-7" />,
    title: 'Pattern Recognition',
    description: 'Identify trends, patterns, and anomalies in datasets with automated detection and alerting capabilities.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: <DocumentChartBarIcon className="w-7 h-7" />,
    title: 'Data Visualization',
    description: 'Generate compelling business summaries and dashboards with dynamic, customizable visualizations.',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: <TableCellsIcon className="w-7 h-7" />,
    title: 'Pipeline Engineering',
    description: 'Build and automate data pipelines for ingestion and processing with modular, reusable components.',
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: <LightBulbIcon className="w-7 h-7" />,
    title: 'Model Prototyping',
    description: 'Prototype machine learning models with end-to-end ML pipeline code and evaluation reports.',
    color: 'from-rose-500 to-red-600'
  }
];

export default function FeaturesDataAnalysis() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Key Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphism p-6 rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] glass-morphism-hover group relative overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              
              <div className="flex items-center gap-4 mb-3 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} border-2 border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-400 flex-shrink-0`}>
                  <div className="text-white [&>svg]:stroke-[3]">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
