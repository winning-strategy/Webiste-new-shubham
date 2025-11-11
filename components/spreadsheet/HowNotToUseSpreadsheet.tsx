'use client';

import { motion } from 'framer-motion';

export default function HowNotToUse() {
  return (
    <section className="py-16 px-8 bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">When to Use Spreadsheet Agent</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Spreadsheet Agent excels at <span className="text-primary font-semibold">high-value, analytical work</span>. Here&apos;s how to get the most out of it:
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
                  <span className="text-white/80"><strong className="text-white font-medium">Complex financial models</strong> requiring multiple sheets and calculations</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Data transformation</strong> from PDFs, reports, or web sources</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Large dataset analysis</strong> with thousands of rows</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Automated reporting</strong> with visualizations and insights</span>
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
                  <span className="text-white/80"><strong className="text-white font-medium">Single-cell updates</strong> like changing one value manually</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Basic arithmetic</strong> you can calculate mentally</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Simple formatting</strong> like changing font colors or sizes</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-white/80"><strong className="text-white font-medium">Live team collaboration</strong> with simultaneous editing</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-emerald-500/10 to-primary/10"></div>
          <div className="glass-morphism p-8 rounded-2xl border-2 border-primary/30 relative">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">💡</span>
              </div>
              <div className="flex-1">
                <h3 className="text-primary text-xl font-bold mb-2">The Golden Rule</h3>
                <p className="text-white/90 leading-relaxed">
                  If a task would take you <strong className="text-primary">more than 5 minutes</strong> of manual work, 
                  that&apos;s where Spreadsheet Agent shines. Think <strong className="text-white">strategic automation</strong> over simple edits. 
                  Let AI handle the heavy lifting while you focus on <strong className="text-white">decision-making and analysis</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

