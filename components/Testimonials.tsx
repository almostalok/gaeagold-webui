'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Aarti Sharma",
    location: "Mumbai, Maharashtra",
    text: "The bilona ghee reminds me of my grandmother's recipe. Pure, aromatic, and absolutely transformative for our daily meals. Gaea has brought true authenticity back to our kitchen.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544168190-79c15427015f?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Rohan Desai",
    location: "Ahmedabad, Gujarat",
    text: "I've tried many organic brands, but the spices from Gaea Gold are on another level. The single-origin turmeric has this intense color and flavor that you just don't find in supermarkets.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Meera Krishnan",
    location: "Chennai, Tamil Nadu",
    text: "Their wood-pressed oils have become a staple in my home. You can taste the unadulterated purity in every drop. Highly recommend to anyone who values traditional cooking.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1558203728-00f45181b84e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    text: "As a chef, sourcing authentic Indian ingredients is paramount. Gaea's commitment to native farming shines through their grains and spices. Truly an exceptional standard.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Anjali Patel",
    location: "Pune, Maharashtra",
    text: "The purity of their products is unmatched. The packaging is premium, making it a perfect gift. It feels good to support sustainable, native agriculture while enjoying rich flavors.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1508214751196-bfdd4ca4ccaa?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#102f23] overflow-hidden relative">
      {/* Premium Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] mix-blend-overlay" 
        style={{ backgroundImage: 'url(/images/rural_pattern.png)', backgroundSize: '400px', backgroundRepeat: 'repeat' }} 
      />
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#b48344]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center flex flex-col items-center mb-16"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#b48344] mb-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
            Authenticity
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[4rem] px-4 font-medium text-white mb-6 tracking-tight">
            Voices of Tradition
          </h2>
          <p className="text-white/60 max-w-lg font-light text-base leading-relaxed px-4">
             Discover what families across the country are saying about the uncompromising purity of Gaea Gold Harvest.
          </p>
        </motion.div>
      </div>

      {/* Horizontally scrolling elongated cards */}
      <div className="relative w-full z-10 pb-8 pt-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#102f23] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#102f23] to-transparent z-20 pointer-events-none" />
        
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[450px] flex shrink-0 flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/10 transition-colors duration-300 hover-trigger group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b48344] text-[#b48344]" />
                ))}
              </div>
              <p className="text-white/80 font-light leading-relaxed mb-8 flex-1 italic group-hover:text-white transition-colors">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#b48344]/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-white font-medium text-sm tracking-wide">{testimonial.name}</h4>
                  <span className="text-[#b48344] text-xs uppercase tracking-wider font-semibold">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
