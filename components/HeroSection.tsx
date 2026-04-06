import { ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
  return (
    <div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232c1810'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#4a6741]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#4a6741] backdrop-blur">
          <Leaf className="h-4 w-4" />
          Rooted in tradition, meticulously crafted for you
        </div>
        <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-[#2c1810] sm:text-6xl lg:text-7xl">
          From the farm
          <br />
          <span className="text-[#4a6741]">to your kitchen</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6b5a48]">
          Gaea Gold Harvest brings you premium spices, grains, ghee, and processed food ingredients
          — sourced directly from Indian farms with care for purity and tradition.
        </p>
        <div className="mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[#4a6741] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#3d5636] hover:shadow-xl"
          >
            Explore Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
