'use client';

import { ArrowRight, Leaf, ShieldCheck, Sun } from 'lucide-react';
import Link from 'next/link';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from '../animations/TextReveal';
import Magnetic from '../animations/Magnetic';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 },
  },
};

/**
 * HeroSection Component
 * 
 * The main landing section of the website. Uses Framer Motion for scroll
 * animations and parallax effects. Delivers a high-impact visual first
 * impression using the Gaea Gold branding.
 * 
 * @returns {React.ReactNode} The rendered hero section
 */
export function HeroSection(): React.ReactNode {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBackground = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#102f23]">
      {/* Immersive Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y: yBackground, opacity: opacityBackground }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/premium_hero_bg.png"
          alt="Premium traditional Indian spices and agricultural products"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        {/* Soft, deep gradient instead of stark cuts */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102f23] via-[#102f23]/40 to-[#102f23]/80"></div>
        
        {/* Ambient light glow (Mac style) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#b48344]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-24 flex flex-col items-center mt-12 md:mt-20"
      >
        
        {/* Clean Editorial Badge */}
        <motion.div variants={itemVariants} className="mb-10 flex items-center justify-center gap-4 w-fit">
           <div className="h-[1px] w-8 md:w-16 bg-[#b48344]/40" />
           <Leaf className="w-4 h-4 text-[#b48344]" strokeWidth={1.5} />
           <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#e6d5bf]">Rooted in Tradition</span>
           <div className="h-[1px] w-8 md:w-16 bg-[#b48344]/40" />
        </motion.div>
        
        {/* Typography */}
        <motion.h1 variants={itemVariants} className="text-center font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[1.05] tracking-tight text-white mb-8 filter drop-shadow-sm flex flex-col items-center">
          <TextReveal text="From Indian farms" />
          <TextReveal text="to your heritage" className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6d5bf] to-[#b48344]" />
        </motion.h1>
        
        <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-center text-base md:text-lg font-light leading-relaxed text-white/80 mb-14 px-4 hover-trigger">
          Gaea Gold Harvest brings you premium spices, native grains, pure ghee, and unadulterated ingredients. Meticulously sourced for families that value tradition.
        </motion.p>
        
        {/* Action Buttons with soft radii */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none justify-center items-center">
          <Magnetic>
            <Link
              href="/products"
              className="group flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-[#102f23] px-8 py-4 rounded-full text-[13px] font-semibold shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 hover-trigger"
            >
              <span>Explore Collection</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/about"
              className="flex w-full sm:w-auto items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full text-[13px] font-semibold text-white transition-all duration-300 hover:bg-white/20 hover-trigger"
            >
               Our Story
            </Link>
          </Magnetic>
        </motion.div>

        {/* Floating Glass Features Bar (fixes mobile layout distortion) */}
        <motion.div variants={itemVariants} className="mt-20 sm:mt-32 w-full max-w-4xl mx-auto">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl sm:rounded-full px-8 py-8 sm:py-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              
              <div className="flex items-center gap-4 group">
                 <div className="bg-[#b48344]/20 p-3 rounded-full border border-[#b48344]/30 transiton-all group-hover:scale-110 duration-500 hover-trigger">
                    <Sun className="h-5 w-5 text-[#e6d5bf] stroke-[1.5]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-white">Sun Dried</span>
                    <span className="text-[10px] text-white/50">Traditional processing</span>
                 </div>
              </div>
              
              <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
              <div className="w-full h-[1px] sm:hidden bg-white/10"></div>
              
              <div className="flex items-center gap-4 group">
                 <div className="bg-[#b48344]/20 p-3 rounded-full border border-[#b48344]/30 transiton-all group-hover:scale-110 duration-500 hover-trigger">
                    <ShieldCheck className="h-5 w-5 text-[#e6d5bf] stroke-[1.5]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-white">100% Pure</span>
                    <span className="text-[10px] text-white/50">No artificial additives</span>
                 </div>
              </div>
              
              <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
              <div className="w-full h-[1px] sm:hidden bg-white/10"></div>
              
              <div className="flex items-center gap-4 group">
                 <div className="bg-[#b48344]/20 p-3 rounded-full border border-[#b48344]/30 transiton-all group-hover:scale-110 duration-500 hover-trigger">
                    <Leaf className="h-5 w-5 text-[#e6d5bf] stroke-[1.5]" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-white">Farm Direct</span>
                    <span className="text-[10px] text-white/50">Ethically sourced</span>
                 </div>
              </div>

           </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
