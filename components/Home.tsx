'use client';

import React from 'react';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import BrandStory from './BrandStory';
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#f2f1f0] py-24 relative overflow-hidden border-t border-[#e8e6e1]"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10 grid gap-12 lg:grid-cols-2 items-center">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b48344]">
              Join The Family
            </p>
            <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-medium text-[#102f23]">
              Subscribe to purity.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#6b6b6b]">
              Get updates on seasonal harvests, limited edition drops, and exclusive offers. 
              We bring the finest traditions straight to your inbox.
            </p>
          </div>
          <div className="rounded-xl border border-[#e8e6e1] bg-white p-8 lg:p-10 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-500">
             {/* Subtle decorative accent */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#b48344]/5 rounded-bl-[100px] group-hover:scale-110 group-hover:bg-[#b48344]/10 transition-all duration-500" />
             
             <div className="relative z-10">
              <label htmlFor="newsletter" className="text-sm font-semibold uppercase tracking-widest text-[#102f23]">
                Email Address
              </label>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-none border-b border-[#e8e6e1] bg-transparent pb-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors hover-trigger"
                />
                <button type="button" className="inline-flex items-center justify-center gap-2 rounded bg-[#102f23] px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#b48344] hover-trigger">
                  Subscribe
                  <CircleCheckBig className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-[#6b6b6b]">
                <span className="inline-flex items-center gap-1.5 border border-[#e8e6e1] rounded px-3 py-1 cursor-none hover-trigger hover:border-[#b48344]/40 transition-colors">
                  <BadgeCheck className="h-3.5 w-3.5 text-[#b48344]" /> No spam
                </span>
                <span className="inline-flex items-center gap-1.5 border border-[#e8e6e1] rounded px-3 py-1 cursor-none hover-trigger hover:border-[#b48344]/40 transition-colors">
                  <Sprout className="h-3.5 w-3.5 text-[#b48344]" /> Meaningful updates
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

