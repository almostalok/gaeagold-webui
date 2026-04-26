'use client';

import React from 'react';
import { HeroSection } from './sections/HeroSection';
import FeaturedProducts from './FeaturedProducts';
import { Testimonials } from './sections/Testimonials';
import { BrandStory } from './sections/BrandStory';
import Marquee from './Marquee';
import { products } from '@/lib/site-data';
import Image from 'next/image';
import { BadgeCheck, CircleCheckBig, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-[#f9f6f0] text-[#1a1a1a]">
      <HeroSection />
      
      <Marquee />

      <FeaturedProducts products={products} />
      
      <Testimonials />
      
      <BrandStory />

      {/* Newsletter Section */}
      <motion.section 
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
        className="bg-[#f9f6f0] py-24 relative overflow-hidden"
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 relative z-10">
          <div className="bg-[#102f23] rounded-[2.5rem] lg:rounded-[3.5rem] p-8 sm:p-12 lg:p-20 shadow-[0_30px_60px_rgba(16,47,35,0.2)] relative overflow-hidden grid gap-12 lg:grid-cols-2 items-center group">
             {/* Large ambient glows for pop-up effect */}
             <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#b48344]/15 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
             <div className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] bg-[#e6d5bf]/10 rounded-full blur-[80px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

            <div className="relative z-10 max-w-xl">
              <span className="inline-block bg-[#b48344]/10 border border-[#b48344]/20 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e6d5bf] mb-6">
                Join The Family
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.1] mb-6 tracking-tight">
                Subscribe to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6d5bf] to-[#b48344] italic">purity.</span>
              </h2>
              <p className="text-base lg:text-lg font-light leading-relaxed text-white/70">
                Get updates on seasonal harvests, limited edition drops, and exclusive offers. 
                We bring the finest traditions straight to your inbox.
              </p>
            </div>
            
            <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-12 shadow-2xl">
              <label htmlFor="newsletter" className="text-xs font-bold uppercase tracking-widest text-[#e6d5bf] mb-4 block">
                Email Address
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-none border-b border-white/20 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/40 focus:border-[#b48344] transition-colors hover-trigger"
                />
                <button type="button" className="inline-flex items-center justify-center gap-2 rounded bg-white text-[#102f23] hover:bg-[#b48344] hover:text-white px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover-trigger hover:-translate-y-0.5 shadow-lg">
                  Subscribe
                  <CircleCheckBig className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                <span className="inline-flex items-center gap-2 border border-white/10 rounded px-3 py-1.5 cursor-none hover-trigger hover:border-[#b48344]/40 hover:text-white/80 transition-colors">
                  <BadgeCheck className="h-4 w-4 text-[#b48344]" /> No spam
                </span>
                <span className="inline-flex items-center gap-2 border border-white/10 rounded px-3 py-1.5 cursor-none hover-trigger hover:border-[#b48344]/40 hover:text-white/80 transition-colors">
                  <Sprout className="h-4 w-4 text-[#b48344]" /> Meaningful updates
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

