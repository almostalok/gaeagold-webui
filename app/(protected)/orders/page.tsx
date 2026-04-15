import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Package } from 'lucide-react';

export default function OrdersPage() {
  return (
    <div className="relative min-h-[calc(100vh-100px)] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Textured Premium Background */}
      <div className="fixed inset-0 z-0 bg-[#f9f6f0] pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
         <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#102f23 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-[#102f23]">Order History</h1>
          <p className="mt-3 text-[13px] uppercase tracking-[0.15em] text-[#b48344] font-semibold">Your past purchases & tracking</p>
        </div>

        <div className="space-y-8">
          {/* Order 1 */}
          <div className="rounded-[2rem] bg-white border border-[#e8e6e1] p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.03)] focus-within:ring-2 focus-within:ring-[#b48344]/20 transition-all">
            <div className="flex flex-col sm:flex-row justify-between gap-6 border-b border-[#e8e6e1] pb-8">
              <div>
                <p className="text-[11px] tracking-widest text-[#102f23]/50 uppercase font-bold mb-2">Order #GAEA-1204</p>
                <p className="font-heading text-3xl font-bold text-[#102f23]">Oct 12, 2024</p>
              </div>
              <div className="flex flex-col sm:items-end">
                <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 mb-3 w-fit sm:w-auto">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-[11px] tracking-widest uppercase font-bold text-green-700">Delivered</span>
                </div>
                <p className="font-heading text-2xl font-bold text-[#b48344]">₹ 3,097</p>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#f9f6f0] border border-[#e8e6e1]">
                  <Package className="text-[#b48344] h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#102f23] text-[15px]">Delivered successfully</p>
                  <p className="text-[12px] text-[#102f23]/60">Oct 15, 2024 at 2:30 PM</p>
                </div>
              </div>
              
              <details className="group cursor-pointer">
                <summary className="flex items-center gap-3 text-[12px] tracking-widest uppercase text-[#102f23] font-bold hover:text-[#b48344] transition-colors list-none select-none">
                  <span>View Item Details</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:-rotate-180" />
                </summary>
                <div className="mt-8 grid gap-8 pl-5 border-l-2 border-[#e8e6e1] ml-[5px]">
                  <div className="flex gap-6 items-center">
                    <div className="h-20 w-20 bg-[#f9f6f0] border border-[#e8e6e1] rounded-2xl flex-shrink-0"></div>
                    <div>
                      <p className="font-heading text-xl font-bold text-[#102f23] mb-1">Premium Arabica Coffee</p>
                      <p className="text-[12px] tracking-widest uppercase text-[#102f23]/50 font-bold">Qty: 1</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="h-20 w-20 bg-[#f9f6f0] border border-[#e8e6e1] rounded-2xl flex-shrink-0"></div>
                    <div>
                      <p className="font-heading text-xl font-bold text-[#102f23] mb-1">Organic Raw Honey</p>
                      <p className="text-[12px] tracking-widest uppercase text-[#102f23]/50 font-bold">Qty: 2</p>
                    </div>
                  </div>
                </div>
              </details>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-8 border-t border-[#e8e6e1]">
                <Button variant="outline" className="h-14 rounded-xl border-[#e8e6e1] text-[#102f23] bg-transparent hover:bg-[#f9f6f0] hover:text-[#b48344] font-bold text-[13px] uppercase tracking-wider">Download Invoice</Button>
                <Link href="/orders/GAEA-1204/tracking" className="flex-1 sm:flex-none">
                  <Button className="w-full h-14 rounded-xl bg-[#102f23] px-8 text-[13px] uppercase tracking-[0.1em] font-bold text-[#e6d5bf] shadow-[0_8px_20px_rgba(16,47,35,0.15)] transition-all duration-300 hover:bg-[#b48344] hover:text-[#102f23] border-none">
                    Track Shipment
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Order 2 */}
          <div className="rounded-[2rem] bg-white border border-[#e8e6e1] p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.03)] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col sm:flex-row justify-between gap-6 pb-2">
              <div>
                <p className="text-[11px] tracking-widest text-[#102f23]/50 uppercase font-bold mb-2">Order #GAEA-0988</p>
                <p className="font-heading text-2xl font-bold text-[#102f23]">Sep 05, 2024</p>
              </div>
              <div className="flex flex-col sm:items-end">
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 mb-3 w-fit sm:w-auto">
                  <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                  <span className="text-[11px] tracking-widest uppercase font-bold text-gray-600">Archived</span>
                </div>
                <p className="font-heading text-xl font-bold text-[#102f23]/60">₹ 1,450</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
