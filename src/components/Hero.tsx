'use client';

import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-[100dvh]           /* ← Use 100dvh (dynamic viewport height) instead of min-h-screen */
        hero-bg                           /* your gradient */
        flex flex-col items-center justify-center
        pt-20 pb-16                       /* navbar height compensation + some bottom breathing room */
        overflow-hidden
      "
    >
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Date badge */}
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-6 py-2 rounded-3xl mb-6 border border-white/40">
            <Calendar className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-sm tracking-widest uppercase">27 March 2026</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-4">
            AVESHA <span className="text-white/90">2026</span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 font-medium mb-8 max-w-3xl mx-auto">
            National Level Technical Symposium
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Department of Electrical & Electronics Engineering
            </div>
            <div className="hidden md:block">•</div>
            <div>University College of Engineering (BIT Campus), Anna University, Tiruchirappalli</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.a
              href="#events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-sky-600 font-semibold rounded-2xl text-lg shadow-2xl hover:shadow-sky-400/40 transition-all"
            >
              View Events
            </motion.a>

            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmCh1kOcyGGXlAFLkbWprKtXW7Pu97F7pyi3VTdlaoDIbA5w/viewform"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-2xl text-lg hover:bg-white/10 transition-all"
            >
              Register Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - optional, but nice */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-xs tracking-widest"
      >
        SCROLL TO EXPLORE
        <div className="w-px h-8 bg-white/30 mt-3 animate-pulse" />
      </motion.div>
    </section>
  );
}