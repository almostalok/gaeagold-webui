import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function TrustCTA() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Trusted by families who care about what they eat
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/80">
          Every Gaea Gold Harvest product is selected for quality, processed with integrity, and
          delivered with the promise of purity. Start your order today.
        </p>
        <div className="mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#4a6741] shadow-lg transition hover:bg-[#f3ece0] hover:shadow-xl"
          >
            Start Shopping
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
