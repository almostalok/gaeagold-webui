import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignUpPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-100px)] py-16 px-4 sm:px-6">
      {/* Textured Premium Background */}
      <div className="absolute inset-0 z-0 bg-[#f9f6f0]">
         {/* Subtle Noise Texture */}
         <div 
           className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
         ></div>
         {/* Monogram Pattern Overlay */}
         <div 
           className="absolute inset-0 opacity-[0.015]"
           style={{ backgroundImage: 'radial-gradient(#102f23 1px, transparent 1px)', backgroundSize: '32px 32px' }}
         ></div>
      </div>

      <div className="relative z-10 m-auto w-full max-w-md">
        
        {/* Heritage Card */}
        <div className="rounded-[1.5rem] bg-white border border-[#e8e6e1] p-10 sm:p-14 shadow-[0_15px_50px_rgba(16,47,35,0.04)] relative overflow-hidden">
          
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#102f23]/30 via-[#102f23] to-[#102f23]/30"></div>

          <div className="mb-10 text-center">
            <h1 className="font-heading text-3xl sm:text-[2.2rem] font-bold tracking-tight text-[#102f23] mb-3">Join the Family</h1>
            <p className="text-[11px] sm:text-[12px] tracking-[0.15em] text-[#102f23]/50 font-bold uppercase">Establish your heritage</p>
          </div>

          <form className="flex w-full flex-col gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[11px] uppercase tracking-widest text-[#102f23]/70 font-bold ml-1">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="E.g. Siddharth Sharma" 
                className="h-12 sm:h-14 rounded-xl border border-[#e8e6e1] bg-[#f9f6f0]/50 text-[#102f23] placeholder:text-[#102f23]/30 px-5 text-[15px] focus-visible:ring-1 focus-visible:ring-[#b48344] focus-visible:border-[#b48344] transition-all shadow-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[11px] uppercase tracking-widest text-[#102f23]/70 font-bold ml-1">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                className="h-12 sm:h-14 rounded-xl border border-[#e8e6e1] bg-[#f9f6f0]/50 text-[#102f23] placeholder:text-[#102f23]/30 px-5 text-[15px] focus-visible:ring-1 focus-visible:ring-[#b48344] focus-visible:border-[#b48344] transition-all shadow-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[11px] uppercase tracking-widest text-[#102f23]/70 font-bold ml-1">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="h-12 sm:h-14 rounded-xl border border-[#e8e6e1] bg-[#f9f6f0]/50 text-[#102f23] placeholder:text-[#102f23]/30 px-5 text-[15px] focus-visible:ring-1 focus-visible:ring-[#b48344] focus-visible:border-[#b48344] transition-all shadow-none"
              />
            </div>

            <Button className="mt-6 h-14 w-full rounded-xl bg-[#102f23] text-[12px] uppercase tracking-widest font-bold text-[#e6d5bf] hover:bg-[#b48344] hover:text-[#102f23] hover:shadow-lg transition-all border-none">
              Create Account
            </Button>
          </form>

        </div>

        {/* Footer Link out of the card */}
        <div className="mt-8 text-center text-[12px] sm:text-[13px] tracking-wide text-[#102f23]/60 font-medium">
          Already registered?{' '}
          <Link href="/login" className="font-bold text-[#102f23] hover:text-[#b48344] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#102f23] hover:after:bg-[#b48344]">
            Access portal
          </Link>
        </div>
      </div>
    </div>
  );
}
