"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, School, Zap, CreditCard, CheckCircle2 } from "lucide-react";

interface StepFormProps {
  currentStep: number;
  steps: { id: number; title: string; icon: React.ReactNode }[];
  children: React.ReactNode;
}

export default function StepForm({ currentStep, steps, children }: StepFormProps) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Header */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 -z-10 -translate-y-1/2"></div>
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`flex flex-col items-center gap-2 ${
                currentStep >= step.id ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                currentStep >= step.id 
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30" 
                  : "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-400"
              }`}>
                {step.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Container */}
      <motion.div 
        layout
        className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-black/5 p-8 border border-gray-100 dark:border-zinc-800"
      >
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
