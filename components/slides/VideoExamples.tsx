'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const videoExamples = [
  {
    id: 'ic-presentation',
    category: 'Investment Committee Presentations',
    description: 'Convert deal memos into standardized IC decks with valuation analysis',
    prompt: 'Take this deal memo and create an IC presentation with valuation, returns, and risk slides',
    videoSrc: '/videos/slides/ic-presentation.mp4',
    tag: 'Finance'
  },
  {
    id: 'market-research',
    category: 'Market Research Presentations',
    description: 'Research competitors and create insight-rich slides with citations',
    prompt: 'Research the top 5 competitors in the EV charging space and create benchmarking slides with market positioning',
    videoSrc: '/videos/slides/market-research.mp4',
    tag: 'Research'
  },
  {
    id: 'pitch-deck',
    category: 'Client Pitch Decks',
    description: 'Generate pitch decks from RFPs with firm capabilities and case studies',
    prompt: 'Build a pitch deck for this RFP using our consulting firm\'s capabilities and relevant case studies',
    videoSrc: '/videos/slides/pitch-deck.mp4',
    tag: 'Sales'
  },
  {
    id: 'campaign-report',
    category: 'Campaign Performance Reports',
    description: 'Transform marketing data into branded slides with insights and visuals',
    prompt: 'Create a Q4 marketing performance deck from this data with campaign insights and ROI analysis',
    videoSrc: '/videos/slides/campaign-report.mp4',
    tag: 'Marketing'
  },
  {
    id: 'portfolio-review',
    category: 'Portfolio Review Decks',
    description: 'Auto-populate review slides with KPIs, financial trends, and metrics',
    prompt: 'Generate portfolio company review slides showing YoY growth, KPIs, and key metrics',
    videoSrc: '/videos/slides/portfolio-review.mp4',
    tag: 'Finance'
  },
  {
    id: 'exec-summary',
    category: 'Executive Summary Slides',
    description: 'Condense detailed reports into boardroom-ready summary presentations',
    prompt: 'Take this 50-page report and create a 5-slide executive summary for the board meeting',
    videoSrc: '/videos/slides/exec-summary.mp4',
    tag: 'Executive'
  }
];

export default function VideoExamples() {
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
            Watch AI Generate
            <span className="block bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Professional Presentations
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Real examples of how prompts transform into complete slide decks in seconds
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

