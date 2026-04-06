import { Flame, ShieldCheck, Wheat } from 'lucide-react';
import React from 'react';

export default function BrandStory() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-bold uppercase tracking-widest text-[#c67a4a]">
            Why Gaea-Gold?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2c1810] sm:text-4xl">
            Honest ingredients for everyday meals
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#6b5a48]">
            We work with farming communities to bring you ingredients that are processed
            traditionally — no shortcuts, no artificial additives.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="rounded-3xl border border-[#e8dfd0] bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#4a6741]/10 text-[#4a6741]">
              <Wheat className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-[#2c1810]">Farm sourced</h3>
            <p className="mt-3 text-sm leading-6 text-[#6b5a48]">
              Every product traces back to verified farms, ensuring freshness and fair sourcing from
              field to shelf.
            </p>
          </div>
          <div className="rounded-3xl border border-[#e8dfd0] bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#c67a4a]/10 text-[#c67a4a]">
              <Flame className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-[#2c1810]">Traditional processing</h3>
            <p className="mt-3 text-sm leading-6 text-[#6b5a48]">
              Our powders, grains, and ghee are processed using time-tested methods to preserve
              natural flavour and nutrition.
            </p>
          </div>
          <div className="rounded-3xl border border-[#e8dfd0] bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#4a6741]/10 text-[#4a6741]">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-[#2c1810]">No additives</h3>
            <p className="mt-3 text-sm leading-6 text-[#6b5a48]">
              Pure ingredients with no fillers, artificial colours, or preservatives — just clean,
              real food.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
