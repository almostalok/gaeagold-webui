'use client';

import * as React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Product } from '@/lib/site-data';
import Link from 'next/link';

export default function ProductTabsCarousel({ products }: { products: Product[] }) {
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

function ProductCarousel({ products }: { products: Product[] }) {
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

function ProductCard({ product }: { product: Product }) {
  // Setup State for Variant
  const hasVariants = product.variants && product.variants.length > 0;
  const [selectedVariantIdx, setSelectedVariantIdx] = React.useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  
  const currentPrice = hasVariants ? product.variants![selectedVariantIdx].price : product.price;
  const currentWeight = hasVariants ? product.variants![selectedVariantIdx].weight : product.weight;

  return (
    <div className="group h-full flex flex-col bg-white border border-[#e8e6e1] transition-all duration-500 hover:border-[#b48344] rounded-[2rem] overflow-visible hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] shadow-sm">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[2rem] bg-[#f9f6f0] p-6 flex flex-col items-center justify-center">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-[#b48344] border border-[#e8e6e1] rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 pb-8 text-center bg-white border-t border-[#e8e6e1] z-10 relative rounded-b-[2rem]">
        <h3 className="font-heading text-lg lg:text-xl font-medium text-[#102f23] mb-2 leading-tight">{product.name}</h3>
        <p className="text-[11px] uppercase tracking-widest text-[#102f23]/50 font-semibold mb-6 flex-1">
          {product.category}
        </p>
        
        {/* Dynamic Price Display */}
        <div className="mb-4 flex flex-col items-center border-t border-[#e8e6e1] pt-4">
           <span className="text-xl font-medium text-[#102f23]">₹{currentPrice}</span>
        </div>
        
        {/* Variant Selector */}
        {hasVariants ? (
          <div className="relative w-full mb-4">
             <button 
                type="button" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between border border-[#e8e6e1] bg-[#f9f6f0] px-4 py-2.5 rounded-full text-xs font-bold text-[#102f23] transition-colors hover:border-[#b48344]"
             >
                <span>{currentWeight}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
             </button>
             
             {isDropdownOpen && (
                <div className="absolute left-0 right-0 bottom-full mb-2 bg-white border border-[#e8e6e1] rounded-2xl shadow-xl overflow-hidden z-50">
                   {product.variants!.map((variant, idx) => (
                      <button
                         key={idx}
                         onClick={() => { setSelectedVariantIdx(idx); setIsDropdownOpen(false); }}
                         className={`w-full text-left px-5 py-3 text-xs font-bold border-b border-[#e8e6e1] last:border-0 hover:bg-[#f9f6f0] transition-colors flex justify-between items-center ${idx === selectedVariantIdx ? 'text-[#b48344] bg-[#f9f6f0]' : 'text-[#102f23]'}`}
                      >
                         <span>{variant.weight}</span>
                         <span className="text-[#102f23]/60 font-semibold">₹{variant.price}</span>
                      </button>
                   ))}
                </div>
             )}
          </div>
        ) : (
          <div className="mb-4">
             <span className="inline-block px-4 py-2.5 text-xs font-bold text-[#102f23]/60 uppercase tracking-widest">{currentWeight}</span>
          </div>
        )}
        
        {/* Advanced Quantity & Add to Cart */}
        <div className="flex w-full items-center justify-between border border-[#e8e6e1] group-hover:border-[#b48344] rounded-full overflow-hidden transition-all duration-300">
           <div className="flex items-center px-4 bg-[#f9f6f0] border-r border-[#e8e6e1] group-hover:border-[#b48344] transition-colors">
              <span className="text-sm font-bold text-[#102f23]/40 cursor-pointer hover:text-[#b48344] py-2">-</span>
              <span className="text-sm font-bold text-[#102f23] px-3">1</span>
              <span className="text-sm font-bold text-[#102f23]/40 cursor-pointer hover:text-[#b48344] py-2">+</span>
           </div>
           <button className="flex-1 flex items-center justify-center gap-2 bg-transparent px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] group-hover:bg-[#b48344] group-hover:text-white transition-all">
             Add
           </button>
        </div>
      </div>
    </div>
  );
}
