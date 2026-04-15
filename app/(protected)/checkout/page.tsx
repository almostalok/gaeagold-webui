'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ChevronRight, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const [step, setStep] = useState(2);
  const [showRazorpay, setShowRazorpay] = useState(false);

  const steps = [
    { id: 1, name: 'Cart' },
    { id: 2, name: 'Address' },
    { id: 3, name: 'Payment' },
    { id: 4, name: 'Done' }
  ];

  return (
    <div className="relative min-h-[calc(100vh-100px)] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Textured Premium Background */}
      <div className="fixed inset-0 z-0 bg-[#f9f6f0] pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
         <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#102f23 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-0 sm:px-4">
        
        {/* Progress Bar */}
        <div className="mb-20">
          <ul className="flex items-center justify-between relative max-w-2xl mx-auto">
            {/* Background Line */}
            <div className="absolute left-0 top-[20px] -z-10 h-[2px] w-full bg-[#e8e6e1]"></div>
            
            {/* Active Progress Line */}
            <div 
              className="absolute left-0 top-[20px] -z-10 h-[2px] bg-[#102f23] transition-all duration-500 ease-out"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            ></div>

            {steps.map((s) => (
              <li key={s.id} className="flex flex-col items-center gap-4 bg-[#f9f6f0] px-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  step >= s.id 
                    ? 'border-[#102f23] bg-[#102f23] text-[#e6d5bf] shadow-[0_0_15px_rgba(16,47,35,0.2)] scale-110' 
                    : 'border-[#e8e6e1] bg-white text-[#102f23]/30'
                }`}>
                  {step > s.id ? <CheckCircle2 className="h-5 w-5 text-[#e6d5bf]" /> : <span className="text-[13px] font-bold">{s.id}</span>}
                </div>
                <span className={`text-[10px] uppercase tracking-widest font-bold ${
                  step >= s.id ? 'text-[#102f23]' : 'text-[#102f23]/30'
                }`}>{s.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-white border border-[#e8e6e1] p-8 sm:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
          
          {/* Step 2: Address */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="mb-10 font-heading text-3xl font-bold text-[#102f23]">Select Delivery Address</h2>
               
              <div className="space-y-6 mb-10">
                <label className="flex cursor-pointer gap-6 rounded-2xl border-2 border-[#102f23] bg-[#f9f6f0]/50 p-8 transition-all hover:bg-[#f9f6f0] shadow-sm">
                  <input type="radio" name="address" defaultChecked className="mt-1 h-5 w-5 accent-[#102f23] cursor-pointer" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#102f23]">Primary Home</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#102f23]/70">123 Premium Farm Road, Suite 4B<br/>Mumbai, Maharashtra, 400001</p>
                    <p className="mt-4 text-[12px] tracking-widest uppercase font-bold text-[#b48344]">+91 98765 43210</p>
                  </div>
                </label>

                <div className="rounded-2xl border border-[#e8e6e1] hover:border-[#102f23]/30 bg-white p-8 transition-colors cursor-pointer flex items-center justify-center min-h-[140px] shadow-sm">
                  <span className="text-[12px] uppercase tracking-widest font-bold text-[#102f23]">+ Add a new address</span>
                </div>
              </div>

              <div className="pt-8 border-t border-[#e8e6e1]">
                <Button onClick={() => setStep(3)} className="w-full sm:w-auto h-14 rounded-xl bg-[#102f23] px-12 text-[13px] uppercase tracking-[0.1em] font-bold text-[#e6d5bf] shadow-[0_8px_20px_rgba(16,47,35,0.15)] transition-all duration-300 hover:bg-[#b48344] hover:text-[#102f23] border-none float-right">
                  Continue to Payment
                </Button>
                <div className="clear-both"></div>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
               <h2 className="mb-10 font-heading text-3xl font-bold text-[#102f23]">Payment Details</h2>
               
               <div className="mb-10 rounded-2xl border border-[#e8e6e1] bg-[#f9f6f0] p-8 flex flex-col sm:flex-row items-center justify-between">
                  <div>
                    <p className="text-[11px] tracking-widest uppercase font-bold text-[#102f23]/60 mb-2">Total Amount Payable</p>
                    <p className="font-heading text-4xl font-bold text-[#102f23]">₹ 3,097</p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 sm:mt-0 text-[#102f23] border border-[#e8e6e1] bg-white shadow-sm px-5 py-3 rounded-xl">
                    <Lock className="h-4 w-4 text-[#b48344]" />
                    <span className="text-[11px] uppercase tracking-widest font-bold">Secure Processing</span>
                  </div>
               </div>

              <div className="flex flex-col-reverse sm:flex-row gap-4 pt-8 border-t border-[#e8e6e1]">
                <Button onClick={() => setStep(2)} variant="outline" className="h-14 rounded-xl border-[#e8e6e1] px-10 text-[#102f23] bg-transparent hover:bg-[#f9f6f0] text-[13px] uppercase tracking-widest font-bold sm:w-auto w-full">
                  Back
                </Button>
                <Button onClick={() => setShowRazorpay(true)} className="flex-1 h-14 rounded-xl bg-[#102f23] text-[13px] uppercase tracking-[0.1em] font-bold text-[#e6d5bf] shadow-[0_8px_20px_rgba(16,47,35,0.15)] transition-all duration-300 hover:bg-[#b48344] hover:text-[#102f23] border-none">
                  Secure Checkout
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
           {step === 4 && (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-700">
              <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[#f9f6f0] border border-[#e8e6e1] shadow-sm">
                <CheckCircle2 className="h-12 w-12 text-[#102f23]" strokeWidth={2.5} />
              </div>
              <h2 className="mb-4 font-heading text-[2.5rem] font-bold text-[#102f23]">Order Confirmed</h2>
              <p className="text-[15px] text-[#102f23]/70 mb-12 max-w-md mx-auto leading-relaxed">Thank you for choosing Gaea Gold. Your heritage order <span className="font-bold">#GAEA-1205</span> is confirmed and being prepared.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/orders">
                   <Button variant="outline" className="w-full sm:w-auto h-14 rounded-xl border-[#e8e6e1] px-10 text-[#102f23] hover:bg-[#f9f6f0] text-[13px] uppercase tracking-widest font-bold">
                     Order History
                   </Button>
                 </Link>
                 <Link href="/">
                   <Button className="w-full sm:w-auto h-14 rounded-xl bg-[#102f23] px-10 text-[13px] uppercase tracking-[0.1em] font-bold text-[#e6d5bf] shadow-[0_8px_20px_rgba(16,47,35,0.15)] transition-all duration-300 hover:bg-[#b48344] hover:text-[#102f23] border-none">
                     Continue Shopping
                   </Button>
                 </Link>
              </div>
            </div>
          )}
        </div>

        {/* Razorpay Mock Modal */}
        {showRazorpay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#102f23]/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-[#e8e6e1] relative animate-in zoom-in-95 duration-200">
              {/* Header */}
              <div className="bg-[#3395ff] p-8 text-center text-white">
                 <div className="text-[11px] opacity-90 uppercase tracking-widest font-bold mb-2">Gaea Gold Retail</div>
                 <div className="text-4xl font-bold font-sans tracking-tight">₹ 3,097</div>
              </div>
              {/* Body */}
              <div className="p-8 bg-[#f9f6f0]">
                <p className="font-bold text-[#102f23] text-[13px] uppercase tracking-wide mb-5 px-1">Select Payment Method</p>
                
                <div className="space-y-4">
                  <button className="w-full flex items-center gap-5 rounded-2xl border border-[#e8e6e1] bg-white p-5 hover:border-gray-300 transition-colors text-left shadow-sm">
                     <div className="h-10 w-10 flex border border-gray-100 rounded-lg items-center justify-center bg-gray-50"><div className="w-6 h-6 bg-[#3395ff]/20 rounded-full"></div></div>
                     <div className="flex-1">
                       <p className="font-bold text-[#102f23] text-[15px]">UPI</p>
                       <p className="text-[12px] text-[#102f23]/50 mt-0.5">Google Pay, PhonePe, Paytm</p>
                     </div>
                     <ChevronRight className="h-5 w-5 text-gray-300" />
                  </button>

                  <button className="w-full flex items-center gap-5 rounded-2xl border border-[#e8e6e1] bg-white p-5 hover:border-gray-300 transition-colors text-left shadow-sm">
                     <div className="h-10 w-10 flex border border-gray-100 rounded-lg items-center justify-center bg-gray-50"><div className="w-6 h-4 bg-gray-300 rounded-sm"></div></div>
                     <div className="flex-1">
                       <p className="font-bold text-[#102f23] text-[15px]">Card</p>
                       <p className="text-[12px] text-[#102f23]/50 mt-0.5">Visa, MasterCard, RuPay</p>
                     </div>
                     <ChevronRight className="h-5 w-5 text-gray-300" />
                  </button>
                  
                  <button className="w-full flex items-center gap-5 rounded-2xl border border-[#e8e6e1] bg-white p-5 hover:border-gray-300 transition-colors text-left shadow-sm">
                     <div className="h-10 w-10 flex border border-gray-100 rounded-lg items-center justify-center bg-gray-50"><div className="w-4 h-4 rounded-[3px] border-[2px] border-gray-400"></div></div>
                     <div className="flex-1">
                       <p className="font-bold text-[#102f23] text-[15px]">Netbanking</p>
                       <p className="text-[12px] text-[#102f23]/50 mt-0.5">All Indian banks</p>
                     </div>
                     <ChevronRight className="h-5 w-5 text-gray-300" />
                  </button>
                </div>

                 <div className="mt-8 flex gap-4">
                   <Button onClick={() => setShowRazorpay(false)} variant="ghost" className="flex-1 h-12 rounded-xl text-[#102f23]/60 hover:text-[#102f23] hover:bg-white font-bold text-[13px] uppercase tracking-wider">Cancel</Button>
                   <Button onClick={() => { setShowRazorpay(false); setStep(4); }} className="flex-1 h-12 bg-[#3395ff] text-white hover:bg-[#2575ce] rounded-xl font-bold text-[13px] uppercase tracking-wider shadow-md">Simulate Success</Button>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
