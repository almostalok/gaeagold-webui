import React from 'react';
import Link from 'next/link';
import FeaturedProducts from './FeaturedProducts';
import { Category, Product } from '@/lib/site-data';
import { ArrowRight } from 'lucide-react';

export default function CategoryShowcase({
  categories,
  products,
}: {
  categories: Category[];
  products: Product[];
}) {
  return (
    <>
      <FeaturedProducts products={products} />
      
      <section className="py-24 bg-[#f8f7f5] overflow-hidden relative">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 relative z-10">
          <div className="mx-auto max-w-2xl text-center flex flex-col items-center mb-16">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#b48344] mb-4 bg-white px-4 py-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">Excellence</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[4rem] px-4 font-medium text-[#102f23] mb-6 tracking-tight">
              Purity in Every Grain
            </h2>
            <p className="text-[#1a1a1a]/60 max-w-lg font-light text-base leading-relaxed px-4">
               We select the highest grade raw ingredients from native regions to preserve their nutrient profiles. Uncompromising quality.
            </p>
          </div>

          {/* Liquid Glass Curved Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.slug}`}
                className="group relative flex flex-col items-center justify-center p-12 text-center bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden min-h-[320px]"
              >
                {/* Ambient glow effect inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#b48344]/5 blur-[60px] rounded-full group-hover:bg-[#b48344]/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#102f23]/5 blur-[60px] rounded-full group-hover:bg-[#102f23]/10 transition-colors duration-500" />
                
                <h3 className="font-heading text-3xl font-medium text-[#102f23] relative z-10 w-full mb-4 tracking-tight">
                  {category.name}
                </h3>
                
                <div className="h-[2px] w-8 rounded-full bg-[#b48344]/30 mb-6 transition-all duration-500 group-hover:w-16 group-hover:bg-[#b48344]" />

                <p className="text-sm font-light leading-relaxed text-[#1a1a1a]/60 relative z-10 line-clamp-3 px-2 transition-colors group-hover:text-[#1a1a1a]/80">
                  {category.description}
                </p>
                
                <div className="mt-8 flex items-center justify-center w-12 h-12 rounded-full bg-[#f8f7f5] text-[#102f23]/40 transition-all duration-500 group-hover:bg-[#102f23] group-hover:text-white z-10">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Large background decorative blur */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none" />
      </section>
    </>
  );
}
