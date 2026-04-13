import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage(): React.ReactNode {
  return (
    <div className="flex w-full min-h-screen bg-[#F6F4ED] items-center justify-center lg:grid lg:grid-cols-2 p-0 overflow-hidden">
      {/* Left side Image - hidden on small screens */}
      <div className="relative hidden w-full h-screen lg:block bg-[#1e2a1f]">
        <Image
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Premium Farm Fields"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a1f] via-transparent to-black/30" />
        <div className="absolute top-10 left-12 flex items-center gap-3">
          <Image src="/images/logo.png" alt="Logo" width={48} height={48} className="object-contain" />
          <div className="flex flex-col justify-center translate-y-[2px]">
            <p className="font-heading text-[1.3rem] leading-none font-bold tracking-[0.1em] text-white">GAEA GOLD</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.28em] text-[#dccbaf] mt-1 opacity-90">
              Premium Agri Exports
            </p>
          </div>
        </div>
        <div className="absolute bottom-16 left-12 max-w-sm">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b48344]">Management Portal</p>
          <h2 className="mt-3 font-heading text-4xl text-white">Access Your Account</h2>
          <p className="mt-3 text-sm leading-relax text-white/70">
            Securely log in to manage products, view bulk inquiries, and analyze farm-to-table logistics.
          </p>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex w-full flex-col items-center justify-center px-6 lg:px-12 h-screen">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_20px_50px_rgba(46,69,49,0.08)] border border-[#e8dfc8]">
          <div className="mb-8 text-center lg:text-left pt-2">
            <h1 className="font-heading text-3xl font-bold text-[#2e4531]">Admin Login</h1>
            <p className="mt-3 text-sm text-[#615843]">Welcome back. Please enter your credentials.</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#7A6C4A]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="admin@gaeagold.com"
                className="mt-2 w-full rounded-xl border border-[#e8dfc8] bg-[#FBF7ED] px-4 py-3.5 text-sm outline-none transition focus:border-[#b48344] focus:ring-1 focus:ring-[#b48344]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#7A6C4A]">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-[#e8dfc8] bg-[#FBF7ED] px-4 py-3.5 text-sm outline-none transition focus:border-[#b48344] focus:ring-1 focus:ring-[#b48344]/30"
              />
            </div>
            
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-[#2e4531] focus:ring-[#2e4531] w-4 h-4 accent-[#2e4531]" />
                <span className="text-xs text-[#615843] font-semibold">Remember me</span>
              </label>
              <Link href="#" className="flex text-xs font-bold text-[#b48344] transition hover:text-[#8a662c]">
                Forgot Password?
              </Link>
            </div>

            <Link href="/admin" className="mt-8 flex w-full justify-center rounded-full bg-[#2e4531] py-3.5 text-sm font-bold tracking-wide text-white transition hover:bg-[#1f3022] shadow-[0_8px_20px_rgba(46,69,49,0.2)]">
              Sign In to Portal
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[#e8dfc8]/60 text-center">
                        <Link href="/" className="text-xs font-semibold text-[#615843] flex items-center justify-center gap-2 hover:text-[#2e4531] transition">
              &larr; Return to Main Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
