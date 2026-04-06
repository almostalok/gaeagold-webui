'use client';

import * as React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/constants/types';

export default function ProductTabsCarousel({ products }: { products: Product[] }) {
  // Filter only featured products
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="py-16 bg-[#faf6ef]">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-6 text-[#2c1810]">Featured Products</h2>
        <ProductCarousel products={featuredProducts} />
      </div>
    </section>
  );
}

function ProductCarousel({ products }: { products: Product[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

  if (!products.length) {
    return <p className="text-muted-foreground">No products available.</p>;
  }

  return (
    <div className="relative group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {products.map((product) => (
            <div
              key={product.slug}
              className="min-w-[220px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[300px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden py-0 hover:shadow-lg transition bg-primary text-primary-foreground">
      <div className="relative h-48 w-full">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>

      <CardContent className="p-4">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <p className="mt-2 text-sm text-muted-foreground">
          ₹{product.price} / {product.unit}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 ">
        <Button className="w-full cursor-pointer">Get a quote!</Button>
      </CardFooter>
    </Card>
  );
}
