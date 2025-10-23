'use client';

import { motion } from 'framer-motion';

export default function WhenToUseSlides() {
  return (
    <section className="py-16 px-8 bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">When to Use Slide Generation Agent</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Slide Generation Agent excels at <span className="text-primary font-semibold">data-rich, insight-driven presentations</span>. Here&apos;s how to get the most out of it:
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-emerald-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/30 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-primary text-xl font-semibold">Perfect For</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Data-driven presentations</strong> requiring charts, analysis, and insights</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Multi-source research decks</strong> with web data and citations</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Recurring reports</strong> like portfolio reviews and KPI dashboards</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Business-ready decks</strong> for consulting, finance, and corporate settings</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-morphism p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 to-primary/80"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/30 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-primary text-xl font-semibold">Less Optimal For</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Single-slide edits</strong> like changing one image or text box</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Creative design work</strong> requiring custom illustrations or graphics</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Simple formatting</strong> adjustments you can do manually in seconds</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Highly artistic presentations</strong> for branding or marketing campaigns</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10"></div>
          <div className="glass-morphism p-8 rounded-2xl border-2 border-purple-500/30 relative">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">💡</span>
              </div>
              <div className="flex-1">
                <h3 className="text-primary text-xl font-bold mb-2">The Golden Rule</h3>
                <p className="text-white/90 leading-relaxed">
                  If creating a presentation manually would take you <strong className="text-primary">more than 15 minutes</strong>, 
                  that&apos;s where Slide Generation Agent excels. Think <strong className="text-white">content automation and insight generation</strong> over design tweaks. 
                  Let AI handle the research, structure, and data visualization while you focus on <strong className="text-white">strategic messaging and refinement</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


