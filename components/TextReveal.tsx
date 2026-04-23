'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ');
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top pb-2">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.05,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
