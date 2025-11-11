'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const videoExamples = [
  {
    id: 'financial-modeling',
    category: 'Financial Statement Analysis',
    description: 'Transform annual reports and financial documents into comprehensive analysis models',
    prompt: 'Extract data from this earnings report PDF and create a 3-statement financial model with automated linking',
    videoSrc: '/videos/spreadsheet/pdf-modeling.mp4',
    tag: 'Financial Analysis'
  },
  {
    id: 'competitive-research',
    category: 'Competitive Intelligence',
    description: 'Automatically gather and organize competitor data from multiple online sources',
    prompt: 'Research the top 10 SaaS companies in this space, pull their pricing, features, and create a comparison matrix',
    videoSrc: '/videos/spreadsheet/pdf-modeling.mp4', // Using existing video
    tag: 'Market Research'
  },
  {
    id: 'dashboard-creation',
    category: 'Sales Analytics & Dashboard Creation',
    description: 'Transform sales data into actionable insights with automated dashboards and performance metrics',
    prompt: 'Analyze this sales data, identify top-performing products, and create an executive dashboard',
    videoSrc: '/videos/spreadsheet/data-analysis.mp4',
    tag: 'Sales Analytics'
  },
  {
    id: 'data-transformation',
    category: 'Data Standardization',
    description: 'Clean and transform messy data into structured, analysis-ready formats',
    prompt: 'Standardize these customer records: split full names into first/last, extract domains from emails, and remove duplicates',
    videoSrc: '/videos/spreadsheet/data-analysis.mp4', // Using existing video
    tag: 'Data Engineering'
  },
  {
    id: 'scenario-modeling',
    category: 'Scenario Planning Models',
    description: 'Build sophisticated financial models with multiple scenarios and sensitivity analysis',
    prompt: 'Create a startup fundraising model with Series A projections, including best case, base case, and worst case scenarios',
    videoSrc: '/videos/spreadsheet/pdf-modeling.mp4', // Using existing video
    tag: 'Strategic Planning'
  },
  {
    id: 'audit-review',
    category: 'Model Auditing & QA',
    description: 'AI-powered review to catch errors, circular references, and logic issues in your models',
    prompt: 'Audit this valuation model for errors, check all formulas, and suggest improvements to make it more robust',
    videoSrc: '/videos/spreadsheet/data-analysis.mp4', // Using existing video
    tag: 'Quality Assurance'
  }
];

export default function VideoExamplesSpreadsheet() {
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
            Watch AI Build
            <span className="block bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Complex Excel Models
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Real examples of how prompts transform into sophisticated spreadsheets in seconds
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

