'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-dark-200 font-sans">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8">
          <div className="max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base text-gray-400 mb-3 font-medium tracking-wide uppercase"
            >
              About WinningStrategy.ai
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-snug tracking-tight max-w-4xl"
            >
              We're building the{' '}
              <span className="relative inline-block whitespace-nowrap">
                <motion.span
                  className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  AI Business Analyst
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              {' '}that strategy teams actually need
            </motion.h1>
          </div>
        </section>

        {/* Story Section 1 */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gradient-to-br from-primary/10 to-emerald-400/10 rounded-2xl flex items-center justify-center border border-primary/20 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(20, 184, 166, 0.1)',
                    '0 0 30px rgba(20, 184, 166, 0.2)',
                    '0 0 20px rgba(20, 184, 166, 0.1)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  {/* Background glow */}
                  <motion.circle 
                    cx="50" cy="60" r="40" 
                    fill="url(#personGlow)" 
                    opacity="0.2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <defs>
                    <radialGradient id="personGlow">
                      <stop offset="0%" stopColor="#14B8A6" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>
                  
                  {/* Person head - animated breathing */}
                  <motion.circle 
                    cx="50" cy="28" r="12" 
                    fill="#14B8A6"
                    animate={{ 
                      scale: [1, 1.08, 1],
                      y: [0, -1, 0]
                    }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                  />
                  
                  {/* Eyes blinking */}
                  <motion.ellipse
                    cx="45" cy="28" rx="1.5" ry="2"
                    fill="#0D9488"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <motion.ellipse
                    cx="55" cy="28" rx="1.5" ry="2"
                    fill="#0D9488"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  
                  {/* Body with subtle movement */}
                  <motion.rect 
                    x="38" y="40" width="24" height="30" rx="3" 
                    fill="#0D9488"
                    animate={{ 
                      y: [40, 42, 40],
                      rotateZ: [0, 1, 0, -1, 0]
                    }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: '50px 40px' }}
                  />
                  
                  {/* Arms typing */}
                  <motion.line
                    x1="38" y1="55" x2="30" y2="65"
                    stroke="#0D9488"
                    strokeWidth="3"
                    strokeLinecap="round"
                    animate={{ x2: [30, 28, 30], y2: [65, 67, 65] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                  />
                  <motion.line
                    x1="62" y1="55" x2="70" y2="65"
                    stroke="#0D9488"
                    strokeWidth="3"
                    strokeLinecap="round"
                    animate={{ x2: [70, 72, 70], y2: [65, 67, 65] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.3, delay: 0.2 }}
                  />
                  
                  {/* Laptop base */}
                  <rect x="20" y="70" width="60" height="4" fill="#64748B" rx="1" />
                  
                  {/* Laptop screen with glow */}
                  <motion.rect 
                    x="25" y="52" width="50" height="18" rx="1" 
                    fill="#1E293B"
                    stroke="#475569"
                    strokeWidth="1"
                  />
                  <motion.rect 
                    x="25" y="52" width="50" height="18" rx="1" 
                    fill="url(#screenGlow)"
                    opacity="0.8"
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <defs>
                    <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  
                  {/* Code lines typing effect */}
                  <motion.line 
                    x1="28" y1="58" x2="28" y2="58"
                    stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round"
                    animate={{ x2: [28, 48, 48] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.8, 1] }}
                  />
                  <motion.line 
                    x1="28" y1="62" x2="28" y2="62"
                    stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round"
                    animate={{ x2: [28, 55, 55] }}
                    transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.5, delay: 0.3, times: [0, 0.8, 1] }}
                  />
                  <motion.line 
                    x1="28" y1="66" x2="28" y2="66"
                    stroke="#5EEAD4" strokeWidth="1.5" strokeLinecap="round"
                    animate={{ x2: [28, 42, 42] }}
                    transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.5, delay: 0.6, times: [0, 0.8, 1] }}
                  />
                  
                  {/* Cursor blink */}
                  <motion.rect
                    x="72" y="66" width="1.5" height="3"
                    fill="#14B8A6"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                  
                  {/* Data particles floating up */}
                  {[...Array(6)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={30 + i * 8}
                      cy={75}
                      r="1"
                      fill="#14B8A6"
                      animate={{
                        y: [-20, -35],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-normal">
                  <span className="text-2xl md:text-3xl font-semibold text-white block mb-4">Hi there!</span>
                  If you're reading this, you're probably like us—spending most of your days 
                  analyzing markets, building financial models, and preparing presentations for stakeholders.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story Section 2 */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(249, 115, 22, 0.1)',
                    '0 0 35px rgba(239, 68, 68, 0.25)',
                    '0 0 20px rgba(249, 115, 22, 0.1)'
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  {/* Pulsing urgency circles */}
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      cx="50" cy="50" r="35"
                      stroke="#EF4444"
                      strokeWidth="2"
                      fill="none"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{
                        scale: [1, 1.3, 1.3],
                        opacity: [0.5, 0, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeOut"
                      }}
                      style={{ transformOrigin: '50px 50px' }}
                    />
                  ))}
                  
                  {/* Clock face with glow */}
                  <motion.circle 
                    cx="50" cy="50" r="35" 
                    stroke="#F97316" 
                    strokeWidth="2.5" 
                    fill="none" 
                    opacity="0.4"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Hour markers with pulse */}
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
                    const x = 50 + 30 * Math.cos((angle - 90) * Math.PI / 180);
                    const y = 50 + 30 * Math.sin((angle - 90) * Math.PI / 180);
                    return (
                      <motion.circle 
                        key={i} 
                        cx={x} 
                        cy={y} 
                        r="2" 
                        fill="#F97316"
                        animate={{
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    );
                  })}
                  
                  {/* Speed lines indicating rush */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    const startX = 50 + Math.cos(angle) * 40;
                    const startY = 50 + Math.sin(angle) * 40;
                    const endX = 50 + Math.cos(angle) * 50;
                    const endY = 50 + Math.sin(angle) * 50;
                    return (
                      <motion.line
                        key={i}
                        x1={startX} y1={startY}
                        x2={endX} y2={endY}
                        stroke="#FBBF24"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        animate={{
                          opacity: [0, 0.8, 0],
                          x1: [startX, startX - Math.cos(angle) * 5],
                          y1: [startY, startY - Math.sin(angle) * 5],
                          x2: [endX, endX + Math.cos(angle) * 5],
                          y2: [endY, endY + Math.sin(angle) * 5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeOut"
                        }}
                      />
                    );
                  })}
                  
                  {/* Hour hand - faster rotation */}
                  <motion.line
                    x1="50" y1="50"
                    x2="50" y2="30"
                    stroke="#EF4444"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: '50px 50px' }}
                  />
                  
                  {/* Minute hand - very fast */}
                  <motion.line
                    x1="50" y1="50"
                    x2="50" y2="20"
                    stroke="#F97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: '50px 50px' }}
                  />
                  
                  {/* Center dot with pulse */}
                  <motion.circle 
                    cx="50" cy="50" r="4" 
                    fill="#DC2626"
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 0px rgba(220, 38, 38, 0.5)',
                        '0 0 15px rgba(220, 38, 38, 0.8)',
                        '0 0 0px rgba(220, 38, 38, 0.5)'
                      ]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  
                  {/* Time pressure particles */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * Math.PI / 180;
                    return (
                      <motion.circle
                        key={i}
                        cx={50 + Math.cos(angle) * 20}
                        cy={50 + Math.sin(angle) * 20}
                        r="1.5"
                        fill="#FBBF24"
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          x: [0, Math.cos(angle) * 15],
                          y: [0, Math.sin(angle) * 15]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    );
                  })}
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-normal">
                  You probably have fifteen tabs open: Excel, PowerPoint, research databases, email, 
                  and countless more... But have you ever thought about{' '}
                  <span className="text-xl md:text-2xl font-bold text-white">why it takes 4-5 weeks 
                  to complete market research</span> that should take hours?
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Old Way */}
        <section className="py-20 px-8 bg-dark-100/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-2xl flex items-center justify-center border border-slate-600/20 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(100, 116, 139, 0.1)',
                    '0 0 25px rgba(100, 116, 139, 0.15)',
                    '0 0 15px rgba(100, 116, 139, 0.1)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg viewBox="0 0 100 100" className="w-24 h-24">
                  {/* Background stress waves */}
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      cx="50" cy="70" r="30"
                      stroke="#475569"
                      strokeWidth="1"
                      fill="none"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.3, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut"
                      }}
                      style={{ transformOrigin: '50px 70px' }}
                    />
                  ))}
                  
                  {/* Pile of documents/tasks stacking up */}
                  {[0, 1, 2, 3, 4, 5].map((i) => {
                    const yPos = 75 - i * 8;
                    return (
                      <motion.g key={i}>
                        {/* Document */}
                        <motion.rect
                          x="25"
                          y={yPos}
                          width="50"
                          height="12"
                          rx="1"
                          fill={i % 2 === 0 ? "#64748B" : "#475569"}
                          stroke="#334155"
                          strokeWidth="0.5"
                          animate={{
                            y: [yPos, yPos - 2, yPos],
                            opacity: [0.6, 0.9, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                        {/* Document lines */}
                        <motion.line
                          x1="30" y1={yPos + 4}
                          x2="60" y2={yPos + 4}
                          stroke="#1E293B"
                          strokeWidth="1"
                          opacity="0.5"
                          animate={{
                            y: [0, -2, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.line
                          x1="30" y1={yPos + 8}
                          x2="55" y2={yPos + 8}
                          stroke="#1E293B"
                          strokeWidth="1"
                          opacity="0.5"
                          animate={{
                            y: [0, -2, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.g>
                    );
                  })}
                  
                  {/* New documents flying in from top */}
                  {[0, 1, 2].map((i) => (
                    <motion.rect
                      key={`fly${i}`}
                      x="30"
                      y="10"
                      width="40"
                      height="10"
                      rx="1"
                      fill="#94A3B8"
                      opacity="0.8"
                      animate={{
                        y: [10, 85],
                        opacity: [0, 0.8, 0],
                        rotateZ: [0, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeIn"
                      }}
                      style={{ transformOrigin: '50px 50px' }}
                    />
                  ))}
                  
                  {/* Exhausted person figure at bottom */}
                  <motion.g
                    animate={{
                      y: [0, 2, 0],
                      rotateZ: [0, -2, 0, 2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ transformOrigin: '50px 85px' }}
                  >
                    {/* Head drooping */}
                    <motion.circle
                      cx="50" cy="85" r="5"
                      fill="#64748B"
                      animate={{
                        scale: [1, 0.95, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                    />
                    {/* Tired eyes */}
                    <motion.line
                      x1="47" y1="85"
                      x2="48" y2="85"
                      stroke="#334155"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <motion.line
                      x1="52" y1="85"
                      x2="53" y2="85"
                      stroke="#334155"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    {/* Slumped shoulders */}
                    <motion.path
                      d="M 45 90 Q 50 92 55 90"
                      stroke="#64748B"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      animate={{
                        d: [
                          "M 45 90 Q 50 92 55 90",
                          "M 45 91 Q 50 93 55 91",
                          "M 45 90 Q 50 92 55 90"
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.g>
                  
                  {/* Stress/sweat drops */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.circle
                      key={`stress${i}`}
                      cx={45 + i * 3}
                      cy={80}
                      r="1.5"
                      fill="#94A3B8"
                      animate={{
                        y: [0, 10],
                        opacity: [0.8, 0],
                        scale: [1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeIn"
                      }}
                    />
                  ))}
                  
                  {/* Overwhelm particles radiating */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    return (
                      <motion.line
                        key={`overwhelm${i}`}
                        x1="50" y1="85"
                        x2={50 + Math.cos(angle) * 10}
                        y2={85 + Math.sin(angle) * 10}
                        stroke="#94A3B8"
                        strokeWidth="1"
                        strokeLinecap="round"
                        animate={{
                          opacity: [0, 0.6, 0],
                          x2: [50 + Math.cos(angle) * 10, 50 + Math.cos(angle) * 20],
                          y2: [85 + Math.sin(angle) * 10, 85 + Math.sin(angle) * 20]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeOut"
                        }}
                      />
                    );
                  })}
                  
                  {/* Heavy weight/burden indicator */}
                  <motion.text
                    x="50"
                    y="20"
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="24"
                    fontWeight="bold"
                    animate={{
                      y: [20, 15, 20],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ⚠
                  </motion.text>
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  For decades, strategy and finance teams have relied on the same workflow:
                </p>
                <div className="space-y-4 text-lg text-gray-400 pl-6 border-l-4 border-primary/30">
                  <p>→ Spend days gathering data from multiple sources</p>
                  <p>→ Manually build spreadsheets and financial models</p>
                  <p>→ Create presentations from scratch, slide by slide</p>
                  <p>→ Write lengthy reports that take weeks to finalize</p>
                </div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6">
                  It's exhausting, slow, and honestly... soul-crushing.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Revolution */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <svg viewBox="0 0 100 100" className="w-24 h-24">
                  {/* AI Neural network - central brain */}
                  <motion.circle
                    cx="50" cy="50" r="8"
                    fill="#A855F7"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Connecting nodes */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 50 + Math.cos(rad) * 25;
                    const y = 50 + Math.sin(rad) * 25;
                    return (
                      <g key={i}>
                        <motion.line
                          x1="50" y1="50" x2={x} y2={y}
                          stroke="#C084FC"
                          strokeWidth="1"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        />
                        <motion.circle
                          cx={x} cy={y} r="4"
                          fill="#E879F9"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ 
                            scale: { duration: 0.5, delay: 0.3 + i * 0.1 },
                            opacity: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                          }}
                          viewport={{ once: true }}
                        />
                      </g>
                    );
                  })}
                  {/* Data particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={30 + Math.random() * 40}
                      cy={30 + Math.random() * 40}
                      r="1"
                      fill="#00B3A6"
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-white block mb-4">Then something magical happened in 2023.</span>
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  AI technology reached a breakthrough moment. Not just for generating text, but for 
                  <span className="font-semibold text-white"> truly understanding business problems</span>, 
                  analyzing complex data, and delivering insights that rival top consultants.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  We saw an opportunity to fundamentally <span className="font-semibold text-white">transform how strategy work gets done</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Current Problem */}
        <section className="py-20 px-8 bg-dark-100/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl flex items-center justify-center border border-gray-600/20 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  {/* Tangled mess of lines representing confusion */}
                  {[...Array(12)].map((_, i) => {
                    const x1 = 20 + Math.random() * 60;
                    const y1 = 20 + Math.random() * 60;
                    const x2 = 20 + Math.random() * 60;
                    const y2 = 20 + Math.random() * 60;
                    return (
                      <motion.path
                        key={i}
                        d={`M ${x1} ${y1} Q ${50} ${50} ${x2} ${y2}`}
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        viewport={{ once: true }}
                      />
                    );
                  })}
                  {/* Question mark */}
                  <motion.text
                    x="50"
                    y="65"
                    textAnchor="middle"
                    fill="#9CA3AF"
                    fontSize="36"
                    fontWeight="bold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    ?
                  </motion.text>
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  And that's where we are today.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  ChatGPT gives you generic answers. Excel is still manual. PowerPoint slides are still 
                  built one by one. Teams are drowning in data but starving for insights.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  We're still duct-taping everything together with copy/paste, endless meetings, 
                  and countless open tabs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gradient-to-br from-primary/20 via-emerald-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center border border-primary/30 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  {/* Rocket */}
                  <motion.g
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Body */}
                    <ellipse cx="50" cy="40" rx="8" ry="12" fill="#14B8A6" />
                    <path d="M 50 28 L 45 35 L 55 35 Z" fill="#0D9488" />
                    {/* Window */}
                    <circle cx="50" cy="40" r="3" fill="#2DD4BF" opacity="0.8" />
                    {/* Fins */}
                    <path d="M 42 48 L 38 58 L 42 54 Z" fill="#0D9488" />
                    <path d="M 58 48 L 62 58 L 58 54 Z" fill="#0D9488" />
                    {/* Flame */}
                    <motion.path
                      d="M 47 52 L 45 62 L 50 58 L 55 62 L 53 52 Z"
                      fill="#F59E0B"
                      animate={{ scaleY: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      style={{ transformOrigin: '50px 52px' }}
                    />
                    <motion.path
                      d="M 48 58 L 47 68 L 50 64 L 53 68 L 52 58 Z"
                      fill="#EF4444"
                      animate={{ scaleY: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 0.4, repeat: Infinity }}
                      style={{ transformOrigin: '50px 58px' }}
                    />
                  </motion.g>
                  {/* Stars */}
                  {[{x: 25, y: 25}, {x: 75, y: 30}, {x: 70, y: 70}, {x: 30, y: 75}].map((pos, i) => (
                    <motion.circle
                      key={i}
                      cx={pos.x} cy={pos.y} r="1.5"
                      fill="#00B3A6"
                      animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-white block mb-4">That's where WinningStrategy.ai comes in.</span>
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  We're not just another AI chatbot. We're building something fundamentally different—
                  <span className="font-semibold text-white"> a multi-agent AI platform that acts as your AI Business Analyst</span>.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  As a first step, we're blending much of your workflow into <span className="font-semibold text-white">four specialized AI agents</span>. 
                  Want to analyze market data? Build financial models? Generate presentations? Create comprehensive reports? 
                  They all work together seamlessly.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Four Agents */}
        <section className="py-16 px-8 bg-dark-100/50">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            >
              Meet your AI team
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-morphism rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary to-emerald-400 rounded-2xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Spreadsheet Agent</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Build complex financial models and data tables instantly. What used to take days 
                  now takes minutes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-morphism rounded-3xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Data Analysis Agent</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Extract insights from your data in seconds. No more manual number crunching or 
                  complex SQL queries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-morphism rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Slide Generation Agent</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Create professional presentations instantly. Beautiful slides with compelling narratives, 
                  ready for your stakeholders.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-morphism rounded-3xl p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Report Generation Agent</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Generate comprehensive business reports with authentic insights. From market research to 
                  due diligence—done in minutes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Result */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center border border-yellow-500/30 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <svg viewBox="0 0 100 100" className="w-24 h-24">
                  {/* Lightning bolt */}
                  <motion.path
                    d="M 50 15 L 35 50 L 50 50 L 40 85 L 70 45 L 55 45 Z"
                    fill="#F59E0B"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    animate={{
                      filter: [
                        'drop-shadow(0 0 4px #F59E0B)',
                        'drop-shadow(0 0 12px #F59E0B)',
                        'drop-shadow(0 0 4px #F59E0B)'
                      ]
                    }}
                    transition={{
                      scale: { duration: 0.5 },
                      filter: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    viewport={{ once: true }}
                  />
                  {/* Energy particles */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * Math.PI / 180;
                    return (
                      <motion.circle
                        key={i}
                        cx={50 + Math.cos(angle) * 30}
                        cy={50 + Math.sin(angle) * 30}
                        r="2"
                        fill="#FBBF24"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          x: [0, Math.cos(angle) * 15],
                          y: [0, Math.sin(angle) * 15]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    );
                  })}
                </svg>
              </motion.div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-white block mb-4">10X faster</span>
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  The result? Authentic insights. Professional deliverables.
                  What used to take your team 4-5 weeks now takes a fraction of a minute.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Solve your business problems your way, bounded only by your imagination.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="pt-20 pb-32 px-8 bg-dark-100 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Hopefully you've gotten a good sense of why we started WinningStrategy.ai.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                Transforming how strategy work gets done is not an easy task. We need early adopters like 
                you to start a movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://calendly.com/gaurav-saha-winningstrategy/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg"
                >
                  Book a Demo
                </a>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg"
                >
                  View Pricing
                </Link>
              </div>
              <p className="text-gray-400 text-lg italic">
                See you soon! 👋
              </p>
              <div className="mt-16 pt-8 border-t border-gray-700">
                <p className="text-2xl md:text-3xl text-white font-light mb-2">
                  "The purpose of computing is insight, not numbers."
                </p>
                <p className="text-gray-400">
                  — Richard Hamming
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
