import React from 'react';
import Link from 'next/link';
import FeaturedProducts from './FeaturedProducts';
import { Category, Product } from '@/constants/types';

export default function CategoryShowcase({
  categories,
  products,
}: {
  categories: Category[];
  products: Product[];
}) {
  return (
    <>
      <section className="featured-products bg-[#faf6ef] ">
        <FeaturedProducts categories={categories} products={products} />
      </section>
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#c67a4a]">
              Browse by category
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2c1810] sm:text-4xl">
              What are you looking for?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.slug}`}
                className="group rounded-3xl border border-[#e8dfd0] bg-white p-6 shadow-sm transition hover:border-[#4a6741]/30 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#4a6741]">
                  {category.name}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#6b5a48]">{category.description}</p>
                <p className="mt-4 text-sm font-semibold text-[#c67a4a] transition group-hover:translate-x-1">
                  Shop now &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
