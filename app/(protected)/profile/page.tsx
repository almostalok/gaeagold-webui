'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Lock } from 'lucide-react';

export default function ProfilePage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="relative min-h-[calc(100vh-100px)] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Textured Premium Background */}
      <div className="fixed inset-0 z-0 bg-[#f9f6f0] pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
         <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#102f23 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-4xl">
        
        <div className="mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-[#102f23]">Profile Management</h1>
          <p className="mt-3 text-[13px] uppercase tracking-[0.15em] text-[#b48344] font-semibold">Account Settings & Details</p>
        </div>
        
        <div className="rounded-[2rem] bg-white border border-[#e8e6e1] p-8 sm:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
          
          {/* Avatar Upload */}
          <div className="mb-12 flex flex-col items-center sm:flex-row sm:items-start gap-8 border-b border-[#e8e6e1] pb-12">
            <div className="group relative h-28 w-28 overflow-hidden rounded-full bg-[#f9f6f0] border border-[#e8e6e1] flex-shrink-0 cursor-pointer transition-transform hover:scale-105">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 text-[#102f23] transition group-hover:bg-black/10">
                <Camera className="h-6 w-6 opacity-60 mb-1" />
              </div>
            </div>
            <div className="text-center sm:text-left mt-2">
              <h2 className="text-[18px] font-semibold text-[#102f23]">Profile Photo</h2>
              <p className="mt-1.5 text-[12px] tracking-wide text-[#102f23]/60 mb-5">High-resolution image recommended.</p>
              <Button variant="outline" className="rounded-xl border-[#e8e6e1] text-[#102f23] bg-transparent hover:bg-[#f9f6f0] hover:text-[#b48344] px-6 h-10 font-semibold text-[13px] uppercase tracking-wider">Change Avatar</Button>
            </div>
          </div>

          {/* Form */}
          <form className="grid gap-10 md:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-[11px] uppercase tracking-[0.1em] text-[#102f23]/80 ml-1 font-bold">Full Name</Label>
              <Input id="name" defaultValue="Siddharth Sharma" className="h-14 rounded-xl border-[#e8e6e1] bg-[#f9f6f0]/50 text-[#102f23] px-5 text-[15px] focus-visible:ring-1 focus-visible:ring-[#b48344] focus-visible:border-[#b48344] transition-all" />
            </div>

            <div className="space-y-3 relative">
              <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.1em] text-[#102f23]/80 ml-1 font-bold flex items-center justify-between">
                Email Address
                <span className="text-[#b48344]">(Verified)</span>
              </Label>
              <div className="relative">
                 <Input id="email" defaultValue="siddharth@example.com" readOnly className="h-14 rounded-xl border-[#e8e6e1]/60 bg-[#f9f6f0] text-[#102f23]/60 px-5 text-[15px] cursor-not-allowed" />
                 <Lock className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#102f23]/30" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-[11px] uppercase tracking-[0.1em] text-[#102f23]/80 ml-1 font-bold">Phone Number</Label>
              <Input id="phone" defaultValue="+91 98765 43210" className="h-14 rounded-xl border-[#e8e6e1] bg-[#f9f6f0]/50 text-[#102f23] px-5 text-[15px] focus-visible:ring-1 focus-visible:ring-[#b48344] focus-visible:border-[#b48344] transition-all" />
            </div>

            <div className="space-y-3">
              <Label htmlFor="gender" className="text-[11px] uppercase tracking-[0.1em] text-[#102f23]/80 ml-1 font-bold">Gender</Label>
              <select id="gender" className="h-14 w-full rounded-xl border border-[#e8e6e1] bg-[#f9f6f0]/50 text-[#102f23] px-5 text-[15px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b48344] appearance-none cursor-pointer transition-all">
                <option value="prefer-not">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-3 md:col-span-2">
              <Label htmlFor="address" className="text-[11px] uppercase tracking-[0.1em] text-[#102f23]/80 ml-1 font-bold">Primary Address</Label>
              <Textarea id="address" rows={3} defaultValue="123 Premium Farm Road, Suite 4B&#10;Mumbai, Maharashtra, 400001" className="rounded-xl border-[#e8e6e1] bg-[#f9f6f0]/50 text-[#102f23] p-5 text-[15px] focus-visible:ring-1 focus-visible:ring-[#b48344] focus-visible:border-[#b48344] transition-all leading-relaxed" />
            </div>

            {/* Action Area */}
            <div className="md:col-span-2 pt-8 mt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 border-t border-[#e8e6e1]">
              <button 
                  type="button" 
                  className="text-[12px] font-bold uppercase tracking-widest text-red-600 hover:text-red-700 transition"
                  onClick={() => setShowDeleteModal(true)}
              >
                Delete Account
              </button>
              <Button className="w-full sm:w-auto h-14 rounded-xl bg-[#102f23] px-10 text-[13px] uppercase tracking-[0.1em] font-bold text-[#e6d5bf] shadow-[0_8px_20px_rgba(16,47,35,0.15)] transition-all duration-300 hover:bg-[#b48344] hover:text-[#102f23] border-none">
                Save Preferences
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#102f23]/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl bg-white border border-[#e8e6e1] p-10 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <h3 className="text-2xl font-heading font-medium text-[#102f23] mb-3">Confirm Deletion</h3>
            <p className="text-[15px] text-[#102f23]/70 mb-10 leading-relaxed">
              This action is permanent and will remove all your data, addresses, and order history from Gaea Gold.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 h-12 rounded-xl border-[#e8e6e1] hover:bg-[#f9f6f0] text-[#102f23] font-bold text-[13px] tracking-wider uppercase" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
              <Button className="flex-1 h-12 rounded-xl bg-red-600 text-white hover:bg-red-700 font-bold text-[13px] tracking-wider uppercase">Proceed</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
