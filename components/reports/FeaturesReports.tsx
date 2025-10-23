'use client';

import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  DocumentDuplicateIcon,
  LightBulbIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: <DocumentTextIcon className="w-7 h-7" />,
    title: 'Executive Summary Generation',
    description: 'Transform complex data and long reports into concise 1-2 page executive summaries with strategic recommendations.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: <MagnifyingGlassIcon className="w-7 h-7" />,
    title: 'Market Research Reports',
    description: 'Automatically gather market sizing, competitor analysis, and industry trends from multiple sources into comprehensive reports.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: <ChartBarIcon className="w-7 h-7" />,
    title: 'Performance Analysis Reports',
    description: 'Generate detailed performance reports with KPIs, benchmarks, and actionable insights from portfolio and business data.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <ShieldCheckIcon className="w-7 h-7" />,
    title: 'Compliance & Regulatory Reports',
    description: 'Create jurisdiction-specific regulatory filings, compliance summaries, and risk assessment reports with proper formatting.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: <ClipboardDocumentListIcon className="w-7 h-7" />,
    title: 'Project Status Reports',
    description: 'Automatically extract key details from project updates and consolidate them into standardized status summaries.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: <DocumentDuplicateIcon className="w-7 h-7" />,
    title: 'Client-Ready Proposals',
    description: 'Generate customized proposal sections using firm templates with up-to-date market data and relevant case studies.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: <LightBulbIcon className="w-7 h-7" />,
    title: 'Risk Assessment Reports',
    description: 'Create comprehensive risk analysis reports highlighting concentration risks, credit risks, and regulatory compliance gaps.',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: <DocumentTextIcon className="w-7 h-7" />,
    title: 'Data Ingestion & Insight Generation',
    description: 'Upload files, documents, and data sources to automatically extract insights and generate comprehensive reports with analysis.',
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: <ChartBarIcon className="w-7 h-7" />,
    title: 'Visualizations and Charts',
    description: 'Create professional charts, graphs, and data visualizations to enhance report readability and impact.',
    color: 'from-rose-500 to-red-600'
  }
];

export default function FeaturesReports() {
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              
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

