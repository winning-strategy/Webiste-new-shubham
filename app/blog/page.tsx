'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from './blogData';

export default function BlogPage() {
  return (
    <main>
      <Header />
      
      <section className="py-16 px-8 bg-dark-200">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Insights, trends, and best practices in AI-powered business analytics
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="glass-morphism p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_16px_48px_rgba(20,184,166,0.2)] group relative overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <div className="flex justify-end items-center text-sm text-white/50">
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
