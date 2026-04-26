'use client';

import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { Product } from '@/lib/site-data';
import Link from 'next/link';
import { ProductCarousel } from '../ui/ProductCarousel';

interface ProductTabsCarouselProps {
  /** Array of all products, the component will filter out featured ones */
  products: Product[];
}

/**
 * ProductTabsCarousel Component
 * 
 * The main section wrapper for displaying featured products.
 * Filters products based on rating/badges and renders the ProductCarousel.
 * 
 * @param {ProductTabsCarouselProps} props
 * @returns {React.ReactNode}
 */
export function ProductTabsCarousel({ products }: ProductTabsCarouselProps): React.ReactNode {
  // Filter only featured products, either by rating or slice
  const featuredProducts = products.filter(p => (p.rating && p.rating >= 4.6) || p.badge);

  return (
    <section className="relative py-24 bg-[#f9f6f0] border-b border-[#e8e6e1] overflow-hidden">
      {/* Minimalistic Farm Pattern Overlay - Pop Enabled */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-multiply" 
          style={{ backgroundImage: 'url(/images/cream_pattern.png)', backgroundSize: '450px', backgroundPosition: 'center', backgroundRepeat: 'repeat' }} />
          
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#102f23] mb-4">Our Finest Selection</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[#102f23] mb-6">Handpicked Best Sellers</h2>
          <div className="h-[1px] w-12 bg-[#102f23]" />
        </div>
        
        <ProductCarousel products={featuredProducts} />
        
        <div className="mt-20 flex justify-center">
          <Link href="/products" className="inline-flex items-center gap-3 border border-[#102f23] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#102f23] transition-all bg-transparent hover:bg-[#102f23] hover:text-white">
            <span>Explore All Products</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
