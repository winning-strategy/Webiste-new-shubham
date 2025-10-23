'use client';

import { motion } from 'framer-motion';

export default function GettingStartedDataAnalysis() {
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
                  Begin from scratch and describe your analysis requirements in natural language.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Statistical analysis requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Predictive modeling tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Data exploration queries</span>
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
                <h4 className="text-xl font-semibold mb-3">Upload your datasets</h4>
                <p className="text-white/70 mb-4">
                  Import CSV files, Excel spreadsheets, or connect to databases to provide data for analysis.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>CSV, Excel, JSON files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Database connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>API data sources</span>
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
              <span className="text-primary font-bold">Step 2:</span> Define Your Analysis
            </h3>
            <div className="glass-morphism p-6 rounded-xl">
              <p className="text-white/80 mb-4">
                Specify the type of analysis you need, the variables to focus on, and any specific hypotheses to test. The agent will structure the analysis approach.
              </p>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border-l-4 border-primary">
                <p className="text-white/90 font-semibold mb-2">Example prompts:</p>
                <p className="text-white/70 italic mb-1">&ldquo;Perform statistical analysis on this sales data&rdquo;</p>
                <p className="text-white/70 italic mb-1">&ldquo;Build a predictive model for customer churn&rdquo;</p>
                <p className="text-white/70 italic">&ldquo;Explore this dataset and identify key patterns&rdquo;</p>
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
              <span className="text-primary font-bold">Step 3:</span> AI Performs Analysis
            </h3>
            <div className="glass-morphism p-6 rounded-xl">
              <p className="text-white/80">
                Watch as the AI conducts comprehensive data analysis including statistical tests, model building, and insight generation. Results are presented with visualizations and detailed explanations.
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
                <h4 className="text-xl font-semibold mb-3">Explore results</h4>
                <p className="text-white/70 mb-4">
                  Review statistical outputs, model performance metrics, and generated insights.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Statistical test results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Model performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Export results and visualizations</span>
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
                <h4 className="text-xl font-semibold mb-3">Request deeper analysis</h4>
                <p className="text-white/70 mb-4">
                  Ask for additional analysis or different approaches.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>&ldquo;Try a different model algorithm&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>&ldquo;Add more statistical tests&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>&ldquo;Create additional visualizations&rdquo;</span>
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
