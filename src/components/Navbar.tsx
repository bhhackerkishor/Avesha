// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Committee', href: '#committee' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">A</div>
          <div>
            <h1 className="font-bold text-2xl tracking-tighter text-sky-950">AVESHA <span className="text-sky-500">2026</span></h1>
            <p className="text-[10px] text-slate-500 -mt-1">National Level Technical Symposium</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="hover:text-sky-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfmCh1kOcyGGXlAFLkbWprKtXW7Pu97F7pyi3VTdlaoDIbA5w/viewform"
            target="_blank"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-semibold text-sm transition-all active:scale-95 shadow-lg shadow-sky-200"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t px-6 py-8"
        >
          <div className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left hover:text-sky-600"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmCh1kOcyGGXlAFLkbWprKtXW7Pu97F7pyi3VTdlaoDIbA5w/viewform"
              target="_blank"
              className="block w-full text-center py-4 bg-sky-500 text-white rounded-2xl font-semibold"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}