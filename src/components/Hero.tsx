// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen hero-bg flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-6 py-2 rounded-3xl mb-6 border border-white/40">
            <Calendar className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-sm tracking-widest">27 MARCH 2026</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-4">
            AVESHA <span className="text-white/90">2026</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 font-medium mb-8 max-w-2xl mx-auto">
            National Level Technical Symposium
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="text-white/80 text-sm flex items-center gap-2">
              <Users className="w-5 h-5" />
              Organized by Department of Electrical &amp; Electronics Engineering
            </div>
            <div className="text-white/70 text-sm">•</div>
            <div className="text-white/80 text-sm">University College of Engineering (BIT Campus), Anna University</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-sky-600 font-semibold rounded-2xl text-lg shadow-2xl hover:shadow-sky-400/30 transition-all inline-flex items-center justify-center"
            >
              View Events
            </motion.a>
            
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmCh1kOcyGGXlAFLkbWprKtXW7Pu97F7pyi3VTdlaoDIbA5w/viewform"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-2xl text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              Register Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 text-xs tracking-widest"
      >
        SCROLL TO EXPLORE
        <div className="w-px h-8 bg-white/30 mt-3" />
      </motion.div>
    </section>
  );
}