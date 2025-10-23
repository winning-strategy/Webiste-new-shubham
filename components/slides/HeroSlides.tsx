'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const typingPhrases = [
  "Generate Boardroom-Ready Slide Decks",
  "Build Pitch Deck Slides from RFPs",
  "Turn Data into Strategic Insight Slides",
  "Create Competitor Benchmarking Slides"
];

export default function HeroSlides() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentPhrase = typingPhrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <section className="py-16 px-8 text-center max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent">
            Slide Generation Agent
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 min-h-[80px] md:min-h-[100px]">
          <span className="text-white">
            {displayedText}
            <span className="animate-pulse text-primary">|</span>
          </span>
          <br />
          <span className="text-primary text-xl md:text-2xl lg:text-3xl">10x Faster with AI</span>
        </h2>

        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Transform your workflow with an AI agent that creates professional, business-ready presentations 
          with insights, visualizations, and story structure from simple prompts.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105">
            Book a Demo
          </button>
          <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-semibold transition-all">
            Try it Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}

