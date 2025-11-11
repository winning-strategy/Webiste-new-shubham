'use client';

import { motion } from 'framer-motion';

export default function GettingStarted() {
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
                  Begin from scratch and describe what you need in natural language.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Create financial models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Analyze uploaded data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Build automated trackers</span>
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
                <h4 className="text-xl font-semibold mb-3">Import your existing spreadsheets</h4>
                <p className="text-white/70 mb-4">
                  Bring your current Excel workbooks to leverage AI-powered enhancements and analysis.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Compatible with .xlsx, .xlsm, .csv formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>No restrictions on file size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Maintains all existing formulas and formatting</span>
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
              <span className="text-primary font-bold">Step 2:</span> Describe Your Task
            </h3>
            <div className="glass-morphism p-6 rounded-xl">
              <p className="text-white/80 mb-4">
                Use natural language to communicate with the AI agent. Explain your objective in your own words - the agent understands context and will request clarification when necessary.
              </p>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border-l-4 border-primary">
                <p className="text-white/90 font-semibold mb-2">Example prompts:</p>
                <p className="text-white/70 italic mb-1">&ldquo;Build a 5-year revenue projection model&rdquo;</p>
                <p className="text-white/70 italic mb-1">&ldquo;Analyze this dataset and identify top-performing regions&rdquo;</p>
                <p className="text-white/70 italic">&ldquo;Create a budget tracker with monthly variance analysis&rdquo;</p>
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
              <span className="text-primary font-bold">Step 3:</span> See It Work
            </h3>
            <div className="glass-morphism p-6 rounded-xl">
              <p className="text-white/80">
                The AI agent processes your request and builds the spreadsheet in real-time. Watch as formulas, visualizations, and insights are generated automatically based on your requirements.
              </p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              <span className="text-primary font-bold">Step 4:</span> Refine Your Results
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-xl flex-1"
              >
                <h4 className="text-xl font-semibold mb-3">Manually adjust as needed</h4>
                <p className="text-white/70 mb-4">
                  Take control and make any modifications you prefer.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Complete spreadsheet functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>All standard formulas available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Edit cells and formatting freely</span>
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
                <h4 className="text-xl font-semibold mb-3">Request additional changes</h4>
                <p className="text-white/70 mb-4">
                  Keep the conversation going to enhance your spreadsheet further.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>&ldquo;Add a trend analysis chart to this data&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>&ldquo;Calculate profit margins for each quarter&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>&ldquo;Apply conditional formatting to highlight outliers&rdquo;</span>
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

