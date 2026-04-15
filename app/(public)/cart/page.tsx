import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';

export default function CartPage() {
  return (
    <div className="relative min-h-[calc(100vh-100px)] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Textured Premium Background */}
      <div className="fixed inset-0 z-0 bg-[#f9f6f0] pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
         <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#102f23 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <h1 className="mb-12 font-heading text-4xl sm:text-5xl font-medium tracking-tight text-[#102f23]">Your Collection</h1>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Item 1 */}
            <div className="flex flex-col gap-6 rounded-[2rem] bg-white border border-[#e8e6e1] p-6 sm:flex-row sm:items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="h-36 w-36 shrink-0 overflow-hidden rounded-[1.5rem] bg-[#f9f6f0] border border-[#e8e6e1]"></div>
              <div className="flex flex-1 flex-col justify-between py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#102f23]">Premium Arabica Coffee</h3>
                    <p className="mt-2 text-[12px] text-[#102f23]/60 tracking-wider uppercase font-semibold">500g — Dark Roast</p>
                  </div>
                  <button className="text-[#102f23]/30 transition hover:text-red-500">
                    <X className="h-6 w-6 stroke-[1.5]" />
                  </button>
                </div>
                
                <div className="mt-8 flex items-end justify-between">
                  <div className="flex items-center rounded-xl border border-[#e8e6e1] bg-white p-1">
                    <button className="rounded-lg p-2 text-[#102f23]/60 transition hover:bg-[#f9f6f0] hover:text-[#102f23]">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center text-[15px] font-bold text-[#102f23]">1</span>
                    <button className="rounded-lg p-2 text-[#102f23]/60 transition hover:bg-[#f9f6f0] hover:text-[#102f23]">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="font-heading text-2xl font-bold text-[#b48344]">₹ 1,299</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-6 rounded-[2rem] bg-white border border-[#e8e6e1] p-6 sm:flex-row sm:items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="h-36 w-36 shrink-0 overflow-hidden rounded-[1.5rem] bg-[#f9f6f0] border border-[#e8e6e1]"></div>
              <div className="flex flex-1 flex-col justify-between py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#102f23]">Organic Raw Honey</h3>
                    <p className="mt-2 text-[12px] text-[#102f23]/60 tracking-wider uppercase font-semibold">250g — Forest Flora</p>
                  </div>
                  <button className="text-[#102f23]/30 transition hover:text-red-500">
                    <X className="h-6 w-6 stroke-[1.5]" />
                  </button>
                </div>
                
                <div className="mt-8 flex items-end justify-between">
                  <div className="flex items-center rounded-xl border border-[#e8e6e1] bg-white p-1">
                    <button className="rounded-lg p-2 text-[#102f23]/60 transition hover:bg-[#f9f6f0] hover:text-[#102f23]">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center text-[15px] font-bold text-[#102f23]">2</span>
                    <button className="rounded-lg p-2 text-[#102f23]/60 transition hover:bg-[#f9f6f0] hover:text-[#102f23]">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="font-heading text-2xl font-bold text-[#b48344]">₹ 899</p>
                </div>
              </div>
            </div>

          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-[2.5rem] bg-white border border-[#e8e6e1] p-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
              <h2 className="mb-8 font-heading text-2xl font-bold text-[#102f23]">Order Summary</h2>
              
              <div className="space-y-4 text-[15px] text-[#102f23]/80 mb-8">
                <div className="flex justify-between items-center py-2">
                  <span>Subtotal <span className="text-[#102f23]/40 ml-1">(3 items)</span></span>
                  <span className="font-semibold text-[#102f23]">₹ 3,097</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Shipping</span>
                  <span className="font-bold text-[#b48344] uppercase text-[12px] tracking-wider">Complimentary</span>
                </div>
                
                <div className="my-6 border-t border-[#e8e6e1]/80"></div>
                
                <div className="flex justify-between items-end">
                  <span className="text-[12px] tracking-widest uppercase font-bold text-[#102f23]/50 mb-1">Total</span>
                  <span className="font-heading text-4xl font-bold text-[#102f23]">₹ 3,097</span>
                </div>
              </div>

              <Link href="/checkout" className="block">
                <Button className="w-full h-16 rounded-2xl bg-[#102f23] text-[13px] uppercase tracking-[0.1em] font-bold text-[#e6d5bf] shadow-[0_8px_20px_rgba(16,47,35,0.15)] transition-all duration-300 hover:bg-[#b48344] hover:text-[#102f23] hover:-translate-y-0.5 border-none">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
