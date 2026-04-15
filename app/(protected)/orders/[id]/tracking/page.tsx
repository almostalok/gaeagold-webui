import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Truck, CheckCircle2, Box } from 'lucide-react';

export default function TrackingPage({ params }: { params: { id: string } }) {
  const steps = [
    { name: 'Order Confirmed', date: 'Oct 12, 10:00 AM', status: 'completed', icon: Box },
    { name: 'Packed & Dispatch Ready', date: 'Oct 13, 02:30 PM', status: 'completed', icon: Box },
    { name: 'Shipped (In Transit)', date: 'Oct 14, 08:15 AM', status: 'completed', icon: Truck },
    { name: 'Out for delivery', date: 'Oct 15, 09:00 AM', status: 'active', icon: MapPin },
    { name: 'Delivered', date: 'Estimated: Oct 15, by 8 PM', status: 'pending', icon: CheckCircle2 },
  ];

  return (
    <div className="relative min-h-[calc(100vh-100px)] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Textured Premium Background */}
      <div className="fixed inset-0 z-0 bg-[#f9f6f0] pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
         <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#102f23 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <Link href="/orders" className="mb-12 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold text-[#102f23]/60 hover:text-[#b48344] transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Return to Orders
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-10 border-b border-[#e8e6e1]">
           <div>
              <p className="text-[12px] tracking-widest text-[#b48344] font-bold uppercase mb-3">Order Tracking: #GAEA-1204</p>
              <h1 className="font-heading text-4xl sm:text-5xl font-medium text-[#102f23] tracking-tight">Shipment Status</h1>
           </div>
           <div className="mt-6 sm:mt-0 px-5 py-3 rounded-xl bg-[#b48344]/10 border border-[#b48344]/20 flex items-center gap-3 w-fit shadow-sm">
              <Truck className="h-5 w-5 text-[#b48344]" />
              <span className="text-[12px] font-bold text-[#b48344] uppercase tracking-widest">In Transit</span>
           </div>
        </div>

        <div className="rounded-[2rem] bg-white border border-[#e8e6e1] p-10 sm:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
          
          <div className="relative pl-8 sm:pl-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="mb-14 last:mb-0 relative py-2">
                  {/* Connecting Line */}
                  {index !== steps.length - 1 && (
                    <div className={`absolute left-[15px] top-14 h-[calc(100%+16px)] w-[2px] -translate-x-1/2 ${
                      step.status === 'completed' ? 'bg-[#102f23]' : 'bg-[#e8e6e1]'
                    }`}></div>
                  )}
                  
                  {/* Node */}
                  <div className={`absolute left-[15px] top-5 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] bg-white ${
                    step.status === 'completed' ? 'border-[#102f23]' : 
                    step.status === 'active' ? 'border-[#b48344] ring-[6px] ring-[#b48344]/10' : 'border-[#e8e6e1]'
                  }`}>
                    {step.status === 'completed' ? <div className="h-3 w-3 rounded-full bg-[#102f23]" /> : 
                     step.status === 'active' ? <div className="h-3 w-3 rounded-full bg-[#b48344] animate-pulse" /> : null}
                  </div>

                  <div className="pl-12">
                    <div className="flex items-center gap-3">
                       <h3 className={`font-heading text-2xl font-bold ${
                         step.status === 'pending' ? 'text-[#102f23]/40' : 'text-[#102f23]'
                       }`}>{step.name}</h3>
                    </div>
                    <p className={`mt-2 text-[13px] tracking-wide font-medium ${
                      step.status === 'pending' ? 'text-[#102f23]/30' : 'text-[#102f23]/60'
                    }`}>{step.date}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center rounded-[2rem] bg-white p-10 border border-[#e8e6e1] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
           <p className="text-[#102f23] font-bold text-[18px] mb-2">Need assistance with your delivery?</p>
           <p className="text-[#102f23]/60 text-[14px] mb-8">Our concierge team is available to help resolve any delayed shipment issues.</p>
           <Button variant="outline" className="h-14 rounded-xl border-[#e8e6e1] text-[#102f23] bg-transparent hover:bg-[#f9f6f0] px-10 text-[13px] uppercase tracking-widest font-bold shadow-sm">Contact Support</Button>
        </div>

      </div>
    </div>
  );
}
