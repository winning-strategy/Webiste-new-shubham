"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Heroanimation from './Heroanimation';
import ContactModal from './ContactModal';

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden pt-20 md:pt-28 pb-10 bg-gray-900">

      {/* Chart background element */}
      <div className="hero-background-element absolute inset-0 z-0 pointer-events-none"></div>
      
      {/* Animated wave elements */}
      <div className="wave-container absolute inset-0 z-0 pointer-events-none">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
      </div>

      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-sheen">
        <div className="blob-1 absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#007770]/30 via-[#00B3A6]/20 to-transparent blur-3xl" />
        <div className="blob-2 absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-[#00B3A6]/20 via-[#007770]/20 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,transparent_60%)]" />
      </div>

      {/* Content Container */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10 grid items-center gap-12 md:grid-cols-2">
        {/* Left copy */}
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur px-4 py-2 text-sm font-medium text-primary">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            AI-Powered Business Analyst 
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-white">Accelerate your productivity by 10X </span>
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">with AI Agents</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl">
            Instant insights for Strategy and Finance Teams
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://calendly.com/gaurav-saha-winningstrategy/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl min-w-[140px]">
              Book a demo
            </a>
            
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl min-w-[140px]">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right visuals */}
        <div className="w-full h-full">
          <Heroanimation />
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Embedded Styles for Background Animations */}
      <style jsx>{`
        /* Background grid pattern */
        .hero-background-element {
          position: absolute;
          inset: 0;
          background-color: rgba(30, 41, 59, 0.3);
          overflow: hidden;
        }
        
        .hero-background-element::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(0deg, transparent, transparent 25px, rgba(0, 119, 112, 0.03) 25px, rgba(0, 119, 112, 0.03) 26px),
            repeating-linear-gradient(90deg, transparent, transparent 25px, rgba(0, 119, 112, 0.03) 25px, rgba(0, 119, 112, 0.03) 26px);
        }

        /* Animated bar chart elements */
        .hero-background-element::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Crect x='100' y='220' width='40' height='100' fill='%23007770' fill-opacity='0.05' /%3E%3Crect x='300' y='180' width='40' height='140' fill='%23007770' fill-opacity='0.05' /%3E%3Crect x='500' y='150' width='40' height='170' fill='%23007770' fill-opacity='0.05' /%3E%3Crect x='700' y='100' width='40' height='220' fill='%23007770' fill-opacity='0.05' /%3E%3Crect x='900' y='120' width='40' height='200' fill='%23007770' fill-opacity='0.05' /%3E%3Crect x='1100' y='80' width='40' height='240' fill='%23007770' fill-opacity='0.05' /%3E%3Crect x='1300' y='160' width='40' height='160' fill='%23007770' fill-opacity='0.05' /%3E%3C/svg%3E") center bottom / 100% no-repeat;
          animation: pulse 8s infinite ease-in-out;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.85; }
        }
        
        /* Wave container */
        .wave-container {
          overflow: hidden;
        }
        
        /* Base wave styles */
        .wave {
          position: absolute;
          width: 200%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: 0 50%;
          transform-origin: center bottom;
        }
        
        /* First wave - slower */
        .wave1 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath d='M0,160 C100,100 200,240 300,200 C400,160 500,80 600,120 C700,160 800,240 900,200 C1000,160 1100,80 1200,40 C1300,0 1400,80 1440,160' stroke='%23007770' stroke-width='4' stroke-opacity='0.2' fill='none' /%3E%3C/svg%3E");
          animation: wave1 20s infinite linear;
          opacity: 0.6;
        }
        
        /* Second wave - faster, different direction */
        .wave2 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath d='M0,200 C120,180 240,120 360,160 C480,200 600,240 720,220 C840,200 960,160 1080,140 C1200,120 1320,160 1440,180' stroke='%23007770' stroke-width='3' stroke-opacity='0.15' fill='none' /%3E%3C/svg%3E");
          animation: wave2 15s infinite linear;
          opacity: 0.5;
        }
        
        /* Wave animations */
        @keyframes wave1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes wave2 {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Floating blob animations */
        .blob-1 { 
          animation: drift1 18s ease-in-out infinite; 
        }
        
        .blob-2 { 
          animation: drift2 22s ease-in-out infinite; 
        }
        
        @keyframes drift1 {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-45%, 10%) scale(1.06); }
        }
        
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(8%, -6%) scale(1.05); }
        }
        
        /* Rotating sheen effect */
        .bg-sheen::before {
          content: '';
          position: absolute;
          inset: -50%;
          background: conic-gradient(from 90deg at 50% 50%, transparent 0 10%, rgba(0,119,112,0.16) 35%, transparent 65% 100%);
          filter: blur(36px);
          animation: rotateSheen 28s linear infinite;
        }
        
        @keyframes rotateSheen {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .wave1 { animation-duration: 15s; }
          .wave2 { animation-duration: 12s; }
        }
      `}</style>
    </section>
  );
};

export default Hero; 