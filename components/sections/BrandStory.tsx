'use client';

import { Flame, ShieldCheck, Wheat } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

/**
 * BrandStory Component
 * 
 * Displays the core values and story behind Gaea Gold Harvest.
 * Utilizes scroll-triggered Framer Motion animations to reveal
 * the 'Gaea Standard' pillars: Source, Process, and Quality.
 * 
 * @returns {React.ReactNode} The rendered Brand Story section
 */
export function BrandStory(): React.ReactNode {
  return (
    <section className="relative py-32 bg-[#f9f6f0] text-[#102f23] overflow-hidden">
      {/* Immersive Creme Pattern Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-multiply" 
          style={{ backgroundImage: 'url(/images/rural_pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          
      {/* Soft overlay gradients for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b48344]/10 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e6d5bf]/30 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12"
      >
        <div className="flex flex-col lg:flex-row mb-20 border-b border-[#102f23]/10 pb-20">
          <motion.div variants={itemVariants} className="w-full lg:w-5/12">
            <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-[#b48344] mb-8 bg-white px-4 py-2 rounded-sm shadow-sm border border-[#102f23]/5">
              The Gaea Standard
            </span>
            <h2 className="font-heading text-5xl lg:text-7xl font-medium leading-[0.95] tracking-tight">
              Honest <span className="text-[#b48344] italic pr-2">Ingredients.</span><br /> Absolute Purity.
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full lg:w-7/12 mt-12 lg:mt-0 lg:pl-20 flex items-end">
            <div className="relative pl-8 border-l-2 border-[#b48344]/30">
               <p className="text-xl lg:text-2xl font-light leading-relaxed text-[#1a1a1a]/80 max-w-2xl hover-trigger hover:text-[#102f23] transition-colors">
                 We work directly with farming communities across India to bring you unadulterated, native ingredients. Everything is processed traditionally—no shortcuts, no additives.
               </p>
               <span className="absolute -left-[1.5rem] top-0 text-6xl font-heading text-[#b48344]/20 leading-none pointer-events-none">"</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="relative p-12 bg-white/60 backdrop-blur-sm border border-[#102f23]/5 shadow-sm rounded-2xl group hover:bg-white hover:shadow-[0_20px_40px_rgba(16,47,35,0.05)] transition-all duration-500 cursor-none hover-trigger hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b48344]/0 via-[#b48344] to-[#b48344]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
            <div className="flex items-center justify-between mb-12">
               <Wheat className="h-10 w-10 text-[#b48344] stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
               <div className="text-[10px] font-mono tracking-wider text-[#102f23]/30 font-semibold border border-[#102f23]/10 px-3 py-1 rounded-full group-hover:border-[#b48344]/30 group-hover:text-[#b48344] transition-colors">01</div>
            </div>
            <div className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/40 mb-3 font-semibold">Source</div>
            <h3 className="font-heading text-3xl font-medium mb-4 text-[#102f23]">Verified Farms</h3>
            <p className="text-sm font-light leading-relaxed text-[#1a1a1a]/70 w-5/6">
              Every product traces back to generational native farms, ensuring ethical harvesting and absolute freshness from the soil to you.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative p-12 bg-white/60 backdrop-blur-sm border border-[#102f23]/5 shadow-sm rounded-2xl group hover:bg-white hover:shadow-[0_20px_40px_rgba(16,47,35,0.05)] transition-all duration-500 cursor-none hover-trigger hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b48344]/0 via-[#b48344] to-[#b48344]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
            <div className="flex items-center justify-between mb-12">
               <Flame className="h-10 w-10 text-[#b48344] stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
               <div className="text-[10px] font-mono tracking-wider text-[#102f23]/30 font-semibold border border-[#102f23]/10 px-3 py-1 rounded-full group-hover:border-[#b48344]/30 group-hover:text-[#b48344] transition-colors">02</div>
            </div>
            <div className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/40 mb-3 font-semibold">Process</div>
            <h3 className="font-heading text-3xl font-medium mb-4 text-[#102f23]">Ancestral Methods</h3>
            <p className="text-sm font-light leading-relaxed text-[#1a1a1a]/70 w-5/6">
              Our spices, native grains, and rich ghee are processed using slow, time-tested methods to protect their active nutrients.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative p-12 bg-white/60 backdrop-blur-sm border border-[#102f23]/5 shadow-sm rounded-2xl group hover:bg-white hover:shadow-[0_20px_40px_rgba(16,47,35,0.05)] transition-all duration-500 cursor-none hover-trigger hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b48344]/0 via-[#b48344] to-[#b48344]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
            <div className="flex items-center justify-between mb-12">
               <ShieldCheck className="h-10 w-10 text-[#b48344] stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
               <div className="text-[10px] font-mono tracking-wider text-[#102f23]/30 font-semibold border border-[#102f23]/10 px-3 py-1 rounded-full group-hover:border-[#b48344]/30 group-hover:text-[#b48344] transition-colors">03</div>
            </div>
            <div className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/40 mb-3 font-semibold">Quality</div>
            <h3 className="font-heading text-3xl font-medium mb-4 text-[#102f23]">Zero Additives</h3>
            <p className="text-sm font-light leading-relaxed text-[#1a1a1a]/70 w-5/6">
              Rigorous testing ensures no fillers, artificial colours, or harsh preservatives—only the clean taste of genuine food.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
