'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/lib/site-data';
import { ProductCard } from './ProductCard';

interface ProductCarouselProps {
  /** Array of products to display in the carousel */
  products: Product[];
}

/**
 * ProductCarousel Component
 * 
 * Handles the Embla Carousel wrapper, logic, and navigation buttons
 * for displaying multiple ProductCards in a horizontal scroll view.
 * 
 * @param {ProductCarouselProps} props
 * @returns {React.ReactNode}
 */
export function ProductCarousel({ products }: ProductCarouselProps): React.ReactNode {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', skipSnaps: false });

  if (!products.length) {
    return <p className="text-[#6b6b6b] text-center font-serif italic">No exquisite products available at the moment.</p>;
  }

  return (
    <div className="relative group/carousel">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 lg:gap-8 pb-8 pt-4">
          {products.map((product) => (
            <div
              key={product.slug}
              className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_23%]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-0 lg:-left-6 top-[40%] -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-none bg-white border border-[#e8e6e1] text-[#102f23] transition-all duration-300 hover:bg-[#102f23] hover:text-white lg:opacity-0 lg:group-hover/carousel:opacity-100 lg:-translate-x-4 lg:group-hover/carousel:translate-x-0 shadow-md"
      >
        <ChevronLeft className="h-5 w-5 stroke-[1.5]" />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-0 lg:-right-6 top-[40%] -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-none bg-white border border-[#e8e6e1] text-[#102f23] transition-all duration-300 hover:bg-[#102f23] hover:text-white lg:opacity-0 lg:group-hover/carousel:opacity-100 lg:translate-x-4 lg:group-hover/carousel:translate-x-0 shadow-md"
      >
        <ChevronRight className="h-5 w-5 stroke-[1.5]" />
      </button>
    </div>
  );
}
