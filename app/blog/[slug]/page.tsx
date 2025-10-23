import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  readTime: string;
}

// This would normally come from a CMS or database
const getBlogPost = (slug: string): BlogPost | null => {
  const posts: BlogPost[] = [
    {
      id: '1',
      slug: 'using-ai-financial-modelling',
      title: 'Using AI for Financial Modelling: A Practical Guide for Finance Teams',
      excerpt: 'Explore how artificial intelligence is transforming financial modeling workflows, from automated data processing to advanced scenario analysis.',
      date: '2025-10-19',
      readTime: '4 min read',
      content: `
Last month, I spent three days building a quarterly forecast model for our board presentation. By day two, I was questioning everything—the formulas, the assumptions, the sanity of manually updating 47 different scenarios. Sound familiar?

This is exactly why AI in financial modeling isn't just a nice-to-have anymore—it's becoming essential for teams that want to focus on analysis instead of data entry.

## The Reality Check: Where We Actually Spend Our Time

Let me share something that might surprise you. I recently tracked my team's time over a month, and here's what I found:

45% of our time went to data collection and cleaning
25% was spent on formula creation and debugging
20% on scenario building and testing
Only 10% on actual analysis and strategic thinking

We're spending 90% of our time on mechanics and only 10% on what actually matters—insights and recommendations.

## How AI Changes the Game

Six months ago, we decided to implement AI-powered tools in our financial modeling workflow. The transformation has been remarkable. Here's what changed:

### The Data Problem Gets Solved

Before: Our team would spend Monday mornings downloading Excel reports from different departments, manually cleaning inconsistent data formats, and inputting everything into our master spreadsheet. One small error in a formula could cascade through the entire model.

After: Now, we upload Excel files directly to our AI system, which automatically standardizes the data formats, identifies inconsistencies, and generates clean, ready-to-analyze datasets. The team starts Monday reviewing insights instead of cleaning data.

The result? We caught three significant data errors in the first month that would have gone unnoticed in our manual process.

### Formula Creation That Actually Works

I used to dread building complex financial models. Not because the math was hard, but because Excel formulas are fragile. One wrong reference, and your entire model breaks.

AI tools now understand natural language descriptions. Instead of writing =IF(AND(B2>0,C2<100),B2*C2*0.15,0), I can simply describe what I want: "Calculate the bonus as 15% of salary if the employee has positive performance and less than 100 days of leave."

The AI generates the formula, explains it, and even suggests optimizations. More importantly, it catches logical errors that I might miss.

### Scenario Analysis That Makes Sense

Traditional scenario modeling is limited by human capacity. We typically test 3-5 scenarios because that's what we can manage manually.

AI changes this completely. Last quarter, we tested 200 different scenarios automatically, varying everything from interest rates to customer acquisition costs. The system identified the top 10 scenarios most likely to occur based on historical patterns and market conditions.

This wasn't just academic—it helped us prepare for a scenario where interest rates increased by 2% while customer acquisition costs rose 15%. When this actually happened in Q3, we were ready.

## Real Results: What We've Achieved

Six months into our AI implementation, here are the concrete results:

Time savings: 60% reduction in data preparation time
Error reduction: 85% fewer formula errors in our models
Scenario capacity: From 5 scenarios to 200+ scenarios per analysis
Model accuracy: 40% improvement in forecast accuracy
Team satisfaction: 90% of team members report higher job satisfaction

But the biggest win? We now spend 70% of our time on analysis and strategic thinking instead of 10%.

## The Future is Here: WinningStrategy's AI Agent

While these capabilities might sound like distant possibilities, they're already reality at WinningStrategy. Our Spreadsheet AI agent is pioneering many of these features today:

Intelligent Data Processing: Our agent automatically processes your Excel files, standardizes data formats, and identifies inconsistencies without manual intervention. No more Monday morning data cleaning sessions.

Natural Language Formula Creation: Instead of wrestling with complex Excel formulas, you simply describe what you want: "Calculate the quarterly growth rate for our top 5 products" and our agent generates the correct formulas instantly.

Advanced Scenario Modeling: While traditional tools limit you to 3-5 scenarios, our agent can test hundreds of scenarios simultaneously, identifying the most likely outcomes based on historical patterns and market conditions.

Real-time Insights: Our agent doesn't just process data—it provides actionable insights. When it detects anomalies or trends, it explains what they mean for your business and suggests next steps.

Seamless Integration: Unlike standalone AI tools that require complex setup, our agent integrates directly into your existing workflow. Upload a spreadsheet, ask a question, get insights—it's that simple.

The future of financial modeling isn't coming—it's here. And it's already helping finance teams focus on what matters most: strategic analysis and decision-making.

## The Bottom Line

AI in financial modeling isn't about replacing finance professionals—it's about making them more effective. By automating routine tasks, we can focus on what we do best: analyzing data, identifying trends, and providing strategic insights that drive business decisions.

The question isn't whether AI will transform financial modeling (it already is), but whether your team will be leading that transformation or following it.

Start small, focus on real pain points, and remember that the goal is to enhance human capabilities, not replace them. The future of finance is human + AI, not human vs. AI.

Ready to get started? Pick one process that's eating up your time and see how AI can help. You might be surprised by how quickly you see results.
      `
    }
  ];
  
  return posts.find(post => post.slug === slug) || null;
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return (
      <main>
        <Header />
        <div className="py-16 px-8 bg-dark-200 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-primary hover:text-primary-dark">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      
      <article className="py-16 px-8 bg-dark-200">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="text-sm">
                {post.readTime}
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-primary via-emerald-500 to-primary"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-white/90 leading-relaxed space-y-8">
              {post.content.split('\n').map((line, index) => {
                if (line.trim() === '') return <br key={index} />;
                
                // Special handling for statistics/metrics with enhanced styling
                if (line.includes('45%') || line.includes('25%') || line.includes('20%') || line.includes('10%')) {
                  return (
                    <div key={index} className="bg-gradient-to-r from-primary/15 to-emerald-500/15 border border-primary/30 rounded-xl p-6 my-8 shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-primary to-emerald-400 rounded-full shadow-md"></div>
                        <p className="mb-0 font-semibold text-lg">{line}</p>
                      </div>
                    </div>
                  );
                }
                
                // Special handling for Before/After sections with enhanced styling
                if (line.startsWith('Before:') || line.startsWith('After:')) {
                  const isBefore = line.startsWith('Before:');
                  return (
                    <div key={index} className={`border-l-4 ${isBefore ? 'border-red-500/60 bg-red-500/8' : 'border-green-500/60 bg-green-500/8'} pl-6 py-4 my-6 rounded-r-xl shadow-md`}>
                      <p className="mb-0 font-medium text-base">
                        <span className={`font-bold text-lg ${isBefore ? 'text-red-300' : 'text-green-300'}`}>
                          {isBefore ? 'Before' : 'After'}
                        </span>
                        {line.slice(isBefore ? 7 : 6)}
                      </p>
                    </div>
                  );
                }
                
                // Special handling for results/metrics with enhanced styling
                if (line.includes('Time savings') || line.includes('Error reduction') || line.includes('Scenario capacity') || line.includes('Model accuracy') || line.includes('Team satisfaction')) {
                  return (
                    <div key={index} className="bg-gradient-to-r from-emerald-500/15 to-primary/15 border border-emerald-500/30 rounded-xl p-5 my-6 shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-primary rounded-full shadow-sm"></div>
                        <p className="mb-0 font-semibold text-base">{line}</p>
                      </div>
                    </div>
                  );
                }
                
                // Special handling for week-by-week timeline with enhanced styling
                if (line.includes('Week 1:') || line.includes('Week 2:') || line.includes('Week 3:') || line.includes('Week 4:') || line.includes('Week 5:')) {
                  const weekNumber = line.match(/Week (\d+):/)?.[1];
                  return (
                    <div key={index} className="flex items-start gap-5 my-6 bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {weekNumber}
                      </div>
                      <p className="mb-0 pt-2 text-base font-medium">{line.replace(/Week \d+:/, '')}</p>
                    </div>
                  );
                }
                
                // Special handling for numbered lists with enhanced styling
                if (line.match(/^\d+\./)) {
                  return (
                    <div key={index} className="flex items-start gap-4 my-4 bg-white/3 rounded-lg p-3 border border-white/5">
                      <div className="flex-shrink-0 w-7 h-7 bg-primary/25 rounded-full flex items-center justify-center text-primary font-bold text-sm border border-primary/30">
                        {line.match(/^\d+/)?.[0]}
                      </div>
                      <p className="mb-0 text-base">{line.replace(/^\d+\.\s*/, '')}</p>
                    </div>
                  );
                }
                
                // Special handling for tool categories
                if (line.includes('For Data Integration:') || line.includes('For Formula Creation:') || line.includes('For Scenario Analysis:')) {
                  return (
                    <div key={index} className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-4 my-6">
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">{line}</h4>
                    </div>
                  );
                }
                
                // Special handling for future features
                if (line.includes('Real-time Financial Modeling:') || line.includes('Predictive Analytics:') || line.includes('Automated Compliance:') || line.includes('Natural Language Queries:')) {
                  return (
                    <div key={index} className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4 my-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="mb-0 font-medium text-base">{line}</p>
                      </div>
                    </div>
                  );
                }
                
                // Special handling for WinningStrategy features
                if (line.includes('Intelligent Data Processing:') || line.includes('Natural Language Formula Creation:') || line.includes('Advanced Scenario Modeling:') || line.includes('Real-time Insights:') || line.includes('Seamless Integration:')) {
                  return (
                    <div key={index} className="bg-gradient-to-r from-primary/20 to-emerald-500/20 border-2 border-primary/40 rounded-xl p-5 my-6 shadow-xl">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-emerald-400 rounded-full mt-1 flex-shrink-0 shadow-md"></div>
                        <div>
                          <h4 className="font-bold text-primary text-lg mb-1">{line.split(':')[0]}:</h4>
                          <p className="mb-0 font-medium text-base">{line.split(':')[1]}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                
                
                // Special handling for bullet points with enhanced styling
                if (line.startsWith('- ') || 
                    line.includes('Time savings:') || line.includes('Error reduction:') || line.includes('Scenario capacity:') || line.includes('Model accuracy:') || line.includes('Team satisfaction:') ||
                    line.includes('45%') || line.includes('25%') || line.includes('20%') || line.includes('Only 10%') ||
                    line.includes('Intelligent Data Processing:') || line.includes('Natural Language Formula Creation:') || line.includes('Advanced Scenario Modeling:') || line.includes('Real-time Insights:') || line.includes('Seamless Integration:')) {
                  return (
                    <div key={index} className="flex items-start gap-3 my-3 bg-white/3 rounded-lg p-3 border border-white/5">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-emerald-400 rounded-full flex-shrink-0 shadow-sm mt-[0.5rem]"></div>
                      <p className="mb-0 text-base leading-relaxed">{line.startsWith('- ') ? line.slice(2) : line}</p>
                    </div>
                  );
                }
                
                // Enhanced heading styles
                if (line.startsWith('## ')) {
                  return (
                    <div key={index} className="mt-16 mb-8">
                      <h2 className="text-3xl font-bold text-white relative group">
                        <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                          {line.slice(3)}
                        </span>
                        <div className="absolute -bottom-3 left-0 w-20 h-1 bg-gradient-to-r from-primary to-emerald-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
                      </h2>
                    </div>
                  );
                }
                
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-white mt-10 mb-6 flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-emerald-400 rounded-full group-hover:scale-110 transition-transform duration-200"></div>
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {line.slice(4)}
                      </span>
                    </h3>
                  );
                }
                
                // Enhanced paragraph styling
                return (
                  <p key={index} className="mb-6 text-white/90 leading-relaxed text-lg">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between">
              <div className="text-gray-400">
                <p className="text-sm">Published on {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
              <Link 
                href="/blog" 
                className="text-primary hover:text-primary-dark transition-colors"
              >
                ← Back to all posts
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  );
}
