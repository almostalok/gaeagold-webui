'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Product } from '@/lib/site-data';

interface ProductCardProps {
  /** The product data to display */
  product: Product;
}

/**
 * ProductCard Component
 * 
 * Displays a single product with its image, pricing, and variant selection.
 * Handles local state for selecting different variants (e.g. weights).
 * 
 * @param {ProductCardProps} props
 * @returns {React.ReactNode}
 */
export function ProductCard({ product }: ProductCardProps): React.ReactNode {
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
