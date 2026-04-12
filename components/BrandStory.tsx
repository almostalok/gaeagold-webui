import { Flame, ShieldCheck, Wheat } from 'lucide-react';
import React from 'react';

export default function BrandStory() {
  return (
    <section className="relative py-24 bg-[#102f23] text-white overflow-hidden">
      {/* Immersive Rural Farm Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-luminosity" 
          style={{ backgroundImage: 'url(/images/rural_pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row mb-16 border-b border-white/20 pb-16">
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#b48344] mb-6 block">
              The Gaea Standard
            </span>
            <h2 className="font-heading text-5xl lg:text-7xl font-medium leading-[0.95]">
              Honest <br className="hidden lg:block" /> Ingredients. <br /> Absolute Purity.
            </h2>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-16 border-l-0 lg:border-l border-white/20 flex items-end">
            <p className="text-base lg:text-xl font-light leading-relaxed text-white/70 max-w-lg">
              We work directly with farming communities across India to bring you unadulterated, native ingredients. Everything is processed traditionally—no shortcuts, no additives.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/20">
          <div className="p-12 border-b border-r border-white/20 group hover:bg-white/5 transition-colors">
            <Wheat className="h-10 w-10 text-[#b48344] mb-12 stroke-[1.5]" />
            <div className="text-[9px] uppercase tracking-widest text-white/50 mb-3 font-semibold">01 &mdash; Source</div>
            <h3 className="font-heading text-3xl font-medium mb-4 text-[#e6d5bf]">Verified Farms</h3>
            <p className="text-sm font-light leading-relaxed text-white/60 w-5/6">
              Every product traces back to generational native farms, ensuring ethical harvesting and absolute freshness from the soil to you.
            </p>
          </div>

          <div className="p-12 border-b border-r border-white/20 group hover:bg-white/5 transition-colors">
            <Flame className="h-10 w-10 text-[#b48344] mb-12 stroke-[1.5]" />
            <div className="text-[9px] uppercase tracking-widest text-white/50 mb-3 font-semibold">02 &mdash; Process</div>
            <h3 className="font-heading text-3xl font-medium mb-4 text-[#e6d5bf]">Ancestral Methods</h3>
            <p className="text-sm font-light leading-relaxed text-white/60 w-5/6">
              Our spices, native grains, and rich ghee are processed using slow, time-tested methods to protect their active nutrients.
            </p>
          </div>

          <div className="p-12 border-b border-r border-white/20 group hover:bg-white/5 transition-colors">
            <ShieldCheck className="h-10 w-10 text-[#b48344] mb-12 stroke-[1.5]" />
            <div className="text-[9px] uppercase tracking-widest text-white/50 mb-3 font-semibold">03 &mdash; Quality</div>
            <h3 className="font-heading text-3xl font-medium mb-4 text-[#e6d5bf]">Zero Additives</h3>
            <p className="text-sm font-light leading-relaxed text-white/60 w-5/6">
              Rigorous testing ensures no fillers, artificial colours, or harsh preservatives—only the clean taste of genuine food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
