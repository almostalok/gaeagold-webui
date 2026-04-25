import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Product } from '@/lib/site-data';

interface CartSidebarProps {
  /** The popular products to display as sample cart items */
  popularProducts: Product[];
  /** Function to close the cart sidebar */
  onClose: () => void;
}

/**
 * CartSidebar Component
 * 
 * Displays the user's shopping cart in a slide-out sidebar overlay.
 * Handles item display, quantity adjustments, subtotal calculation,
 * and routing to the checkout page.
 * 
 * @param {CartSidebarProps} props - Component props
 * @returns {React.ReactNode} The rendered cart sidebar
 */
export function CartSidebar({ popularProducts, onClose }: CartSidebarProps): React.ReactNode {
  return (
    <div className="fixed inset-0 z-[100] bg-black/50 transition-opacity" onClick={onClose}>
      <aside 
        className="absolute right-0 top-0 bottom-0 w-full max-w-[480px] flex flex-col bg-white shadow-2xl transition-transform animate-in slide-in-from-right duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#e8e6e1] px-8 py-6">
          <h2 className="text-2xl font-medium text-[#102f23]">
            Cart (3)
          </h2>
          <button onClick={onClose} className="text-[#102f23] hover:text-[#b48344] transition-colors">
            <X className="h-6 w-6 stroke-[1.5]" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {popularProducts.slice(0,3).map((item) => (
            <div key={item.id} className="flex gap-6 pb-6 border-b border-[#e8e6e1]">
              <div className="relative h-24 w-20 bg-[#f9f6f0] border border-[#e8e6e1]">
                <Image src={item.image} alt={item.name} fill className="object-cover p-2" />
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-lg font-medium text-[#102f23] leading-tight mb-1">{item.name}</p>
                <p className="text-[11px] uppercase tracking-widest text-[#102f23]/50 font-semibold mb-4">{item.weight}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 bg-white border border-[#e8e6e1] px-3 py-1">
                    <span className="text-sm font-bold text-[#102f23]/60 cursor-pointer hover:text-[#102f23]">-</span>
                    <span className="text-sm font-medium">1</span>
                    <span className="text-sm font-bold text-[#102f23]/60 cursor-pointer hover:text-[#102f23]">+</span>
                  </div>
                  <p className="text-[14px] font-semibold text-[#102f23]">₹{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-[#f9f6f0] border-t border-[#e8e6e1]">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-sm font-medium text-[#102f23]/70">Subtotal</p>
              <p className="text-[11px] text-[#102f23]/50 mt-1 uppercase tracking-widest">Shipping calculated at checkout</p>
            </div>
            <p className="text-2xl font-medium text-[#102f23]">₹2,355</p>
          </div>
          <Link href="/cart" onClick={onClose} className="flex w-full items-center justify-center bg-[#102f23] text-white py-4 px-6 text-[13px] font-bold uppercase tracking-widest hover:bg-[#b48344] transition-colors">
            View Cart & Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}
