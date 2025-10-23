'use client';

import { motion } from 'framer-motion';
import {
  PresentationChartLineIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  ChartBarIcon,
  DocumentDuplicateIcon,
  CloudArrowUpIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: <PresentationChartLineIcon className="w-7 h-7" />,
    title: 'Professional-Grade Slides',
    description: 'Create boardroom-ready presentations that surpass tools like Canva and Gamma. Build slides that meet professional consulting and corporate standards.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: <MagnifyingGlassIcon className="w-7 h-7" />,
    title: 'Web Search Integration',
    description: 'Automatically research and populate slides with real-time data, market insights, and industry information with complete source citations.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: <SparklesIcon className="w-7 h-7" />,
    title: 'Story-Structured Presentations',
    description: 'Generate business-ready slide decks with logical narrative flow and strategic structure, just through natural language prompts.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: <ChartBarIcon className="w-7 h-7" />,
    title: 'Data Visualization',
    description: 'Transform raw data into compelling charts, graphs, and infographics. Automatically create visualizations from uploaded spreadsheets and data files.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: <DocumentDuplicateIcon className="w-7 h-7" />,
    title: 'Template-Based Creation',
    description: 'Upload your company templates and brand guidelines. AI generates slides that match your existing style, formatting, and design standards.',
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: <CloudArrowUpIcon className="w-7 h-7" />,
    title: 'Multi-Format File Upload',
    description: 'Upload Excel sheets, PDFs, CSVs, and images to provide context. AI extracts insights and creates slides based on your existing materials.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: <LightBulbIcon className="w-7 h-7" />,
    title: 'Insight Generation',
    description: 'AI doesn\'t just present data—it generates "So What" insights and strategic implications, turning raw information into actionable recommendations.',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: <ShieldCheckIcon className="w-7 h-7" />,
    title: 'Source Attribution & Citations',
    description: 'Every data point and insight comes with complete source citations and audit trails, ensuring credibility and compliance for professional settings.',
    color: 'from-rose-500 to-red-600'
  },
  {
    icon: <ChartBarIcon className="w-7 h-7" />,
    title: 'Competitor Analysis',
    description: 'Research competitors, consolidate data from multiple sources, and automatically create comprehensive benchmarking tables and comparison charts.',
    color: 'from-indigo-500 to-blue-600'
  }
];

export default function FeaturesSlides() {
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              
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

