'use client';

import { motion } from 'framer-motion';

export default function WhenToUseReports() {
  return (
    <section className="py-16 px-8 bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">When to Use Report Generation Agent</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Report Generation Agent excels at <span className="text-primary font-semibold">comprehensive document creation and synthesis</span>. Here&apos;s how to get the most out of it:
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
                  <span className="text-white/80"><strong className="text-white font-medium">Executive summaries</strong> from lengthy reports and documents</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Compliance reports</strong> with regulatory formatting requirements</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Market research</strong> with data synthesis from multiple sources</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Performance reports</strong> with KPIs and benchmark analysis</span>
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
                  <span className="text-white/80"><strong className="text-white font-medium">Simple text edits</strong> like changing a few sentences</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Basic formatting</strong> adjustments you can do manually</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Short documents</strong> that take less than 10 minutes to write</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Highly creative writing</strong> requiring unique voice and style</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10"></div>
          <div className="glass-morphism p-8 rounded-2xl border-2 border-orange-500/30 relative">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">💡</span>
              </div>
              <div className="flex-1">
                <h3 className="text-primary text-xl font-bold mb-2">The Golden Rule</h3>
                <p className="text-white/90 leading-relaxed">
                  If creating a report manually would take you <strong className="text-primary">more than 20 minutes</strong>, 
                  that&apos;s where Report Generation Agent excels. Think <strong className="text-white">document synthesis and analysis</strong> over simple edits. 
                  Let AI handle the research, structuring, and formatting while you focus on <strong className="text-white">strategic review and refinement</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

