import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { ProductTabsCarousel } from './ProductsTabsCarousel';
import { Product } from '@/lib/site-data';

export default function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <div>
      <div className="">
        <div className="mx-auto  text-center">
          <ProductTabsCarousel products={products} />
        </div>
      </div>
    </div>
  );
}
