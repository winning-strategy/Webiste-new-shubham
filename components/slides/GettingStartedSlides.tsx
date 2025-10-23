'use client';

import { motion } from 'framer-motion';

export default function GettingStartedSlides() {
  return (
    <section className="py-16 px-8 bg-dark-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Getting Started</h2>
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              <span className="text-primary font-bold">Step 1:</span> Choose Your Starting Point
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-xl flex-1"
              >
                <h4 className="text-xl font-semibold mb-3">Start with a prompt</h4>
                <p className="text-white/70 mb-4">
                  Begin from scratch and describe your presentation needs in natural language.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Generate pitch decks from RFPs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Create data-driven reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Build executive summaries</span>
                  </li>
                </ul>
              </motion.div>
              
              <div className="text-3xl font-bold text-primary/50 px-4">OR</div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-xl flex-1"
              >
                <h4 className="text-xl font-semibold mb-3">Upload your files & templates</h4>
                <p className="text-white/70 mb-4">
                  Import existing materials, data files, or brand templates to provide context.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Excel sheets, PDFs, images, CSVs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Company templates & brand guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Extracts content via OCR</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              <span className="text-primary font-bold">Step 2:</span> Describe Your Presentation
            </h3>
            <div className="glass-morphism p-6 rounded-xl">
              <p className="text-white/80 mb-4">
                Tell the AI what kind of presentation you need, who the audience is, and what key messages you want to convey. The agent will structure a logical narrative flow.
              </p>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border-l-4 border-primary">
                <p className="text-white/90 font-semibold mb-2">Example prompts:</p>
                <p className="text-white/70 italic mb-1">&ldquo;Create an investment committee deck from this deal memo&rdquo;</p>
                <p className="text-white/70 italic mb-1">&ldquo;Generate client review slides with Q4 performance data&rdquo;</p>
                <p className="text-white/70 italic">&ldquo;Build a pitch deck for a SaaS company targeting enterprise clients&rdquo;</p>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              <span className="text-primary font-bold">Step 3:</span> AI Generates Your Slides
            </h3>
            <div className="glass-morphism p-6 rounded-xl">
              <p className="text-white/80">
                Watch as the AI creates professional slides with data visualizations, insights, and strategic narratives. Charts, graphs, and formatting are applied automatically based on best practices and your templates.
              </p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              <span className="text-primary font-bold">Step 4:</span> Review and Refine
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-xl flex-1"
              >
                <h4 className="text-xl font-semibold mb-3">Edit directly</h4>
                <p className="text-white/70 mb-4">
                  Make manual adjustments to any slide, chart, or text element.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Full editing capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Customize visuals and formatting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Export to PowerPoint or PDF</span>
                  </li>
                </ul>
              </motion.div>
              
              <div className="text-3xl font-bold text-primary/50 px-4">OR</div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-xl flex-1"
              >
                <h4 className="text-xl font-semibold mb-3">Request AI refinements</h4>
                <p className="text-white/70 mb-4">
                  Iterate with the AI to enhance your presentation further.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>&ldquo;Add more data visualizations to slide 5&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>&ldquo;Create a competitive analysis comparison chart&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>&ldquo;Add 'So What' insights to each data slide&rdquo;</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


