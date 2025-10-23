'use client';

import { motion } from 'framer-motion';
import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  DocumentTextIcon,
  ChartBarIcon,
  TableCellsIcon,
  LightBulbIcon,
  CodeBracketIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: <CalendarDaysIcon className="w-7 h-7" />,
    title: 'Financial Modelling',
    description: 'Create sophisticated financial models with automated calculations, scenario analysis, and forecasting capabilities.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: <MagnifyingGlassIcon className="w-7 h-7" />,
    title: 'Web Search Integration',
    description: 'Access real-time data from the web to populate your spreadsheets with current market information and industry data.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: <BoltIcon className="w-7 h-7" />,
    title: 'Multi Sheet Linking',
    description: 'Seamlessly connect multiple worksheets and workbooks with intelligent cross-referencing and data synchronization.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <DocumentTextIcon className="w-7 h-7" />,
    title: 'File Import & Processing',
    description: 'Import and process data from various file formats including CSV, Excel, PDF, and more with intelligent parsing.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: <ChartBarIcon className="w-7 h-7" />,
    title: 'Data Visualization & Charts',
    description: 'Create interactive dashboards with charts, graphs, and visualizations that automatically update based on your data changes.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: <TableCellsIcon className="w-7 h-7" />,
    title: 'Project & Budget Tracking',
    description: 'Create custom trackers for projects, budgets, and performance metrics just like in Excel, with real-time updates and monitoring.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: <LightBulbIcon className="w-7 h-7" />,
    title: 'Data Insights & Analysis',
    description: 'Get intelligent insights from your data with automated analysis, trend identification, and actionable recommendations.',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: <CodeBracketIcon className="w-7 h-7" />,
    title: 'Smart Formulas & Automation',
    description: 'Advanced formula integration with natural language processing and automated calculations for complex business logic.',
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: <ShieldCheckIcon className="w-7 h-7" />,
    title: 'Source Citation & Auditability',
    description: 'Every data point comes with complete source attribution and audit trails, ensuring transparency and compliance.',
    color: 'from-rose-500 to-red-600'
  }
];

export default function Features() {
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              
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
