'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/assets/farm1.jpg',
    title: 'From Farm to Kitchen',
    subtitle: 'Pure grains, spices, and dairy products sourced directly from farms.',
  },
  {
    image: '/assets/farm2.jpg',
    title: 'Tradition You Can Taste',
    subtitle: 'Stone-milled flour, bilona ghee, and natural products.',
  },
  {
    image: '/assets/farm3.jpg',
    title: 'Quality You Can Trust',
    subtitle: 'No additives. No shortcuts. Just honest food.',
  },
];

export default function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  // Auto scroll
  const startAutoplay = () => {
    if (!emblaApi) return;
    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi]);

  return (
    <div
      className="relative overflow-hidden"
      ref={emblaRef}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="flex">
        {slides.map((slide, index) => (
          <div className="relative min-w-full h-[300px] sm:h-[400px] lg:h-[500px]" key={index}>
            {/* Image */}
            <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none z-[5]" />

            {/* Text */}
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="mx-auto max-w-7xl px-6 text-white">
                <h2 className="text-4xl font-bold lg:text-6xl">{slide.title}</h2>
                <p className="mt-4 text-lg max-w-xl">{slide.subtitle}</p>
                <button className="mt-6 rounded-full bg-[#4a6741] px-6 py-3 font-semibold text-white hover:bg-[#3d5636] cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white cursor-pointer"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>

      {/* Right Button */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white cursor-pointer"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === selectedIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
