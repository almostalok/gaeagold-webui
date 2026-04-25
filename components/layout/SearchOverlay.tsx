import Link from 'next/link';
import { X, Search } from 'lucide-react';
import { Product } from '@/lib/site-data';

interface SearchOverlayProps {
  /** Popular products to show as initial suggestions */
  popularProducts: Product[];
  /** Function to close the search overlay */
  onClose: () => void;
}

/**
 * SearchOverlay Component
 * 
 * Displays a full-screen search overlay with popular product suggestions
 * and an immediate autofocus input for user query.
 * 
 * @param {SearchOverlayProps} props - Component props
 * @returns {React.ReactNode} The rendered search overlay
 */
export function SearchOverlay({ popularProducts, onClose }: SearchOverlayProps): React.ReactNode {
  return (
    <div className="fixed inset-0 z-[100] bg-[#f9f6f0] animate-in fade-in duration-300">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-8 flex flex-col h-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-[#102f23] hover:text-[#b48344] transition-colors">
            <X className="h-8 w-8 stroke-[1.5]" />
          </button>
        </div>
        <div className="mx-auto mt-24 w-full max-w-4xl">
          <div className="flex items-center border-b-2 border-[#102f23] pb-4">
            <Search className="h-8 w-8 text-[#102f23] mr-4" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 bg-transparent text-4xl md:text-5xl font-medium text-[#102f23] placeholder:text-[#102f23]/30 focus:outline-none"
              autoFocus
            />
          </div>
          
          <div className="mt-16">
            <p className="text-xs uppercase tracking-widest font-bold text-[#102f23]/50 mb-6">Popular Suggestions</p>
            <div className="flex flex-wrap gap-4">
              {popularProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  onClick={onClose}
                  data-cursor-media={p.image}
                  className="border border-[#e8e6e1] px-6 py-3 rounded-full text-[13px] font-semibold text-[#102f23] hover:border-[#102f23] hover:bg-[#102f23] hover:text-white transition-all duration-300 hover-trigger"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
