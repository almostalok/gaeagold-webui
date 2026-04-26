'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
  const items = [
    "100% NATIVE SOURCED",
    "•",
    "TIME-HONORED TRADITIONS",
    "•",
    "ZERO ADDITIVES",
    "•",
    "PREMIUM GRADE",
    "•",
    "ABSOLUTE PURITY",
    "•",
    "SUSTAINABLE HARVEST",
    "•",
    "SINGLE ORIGIN",
    "•",
    "HANDCRAFTED CARE",
    "•"
  ];
  const loopCount = 4;
  const content = Array(loopCount).fill(items).flat();

  return (
    <div className="py-4 bg-[#102f23] text-[#e6d5bf] overflow-hidden whitespace-nowrap flex items-center shadow-inner relative z-20 border-b border-[#b48344]/20">
      <motion.div
        className="flex gap-8 px-4 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ 
          duration: 35, 
          ease: "linear", 
          repeat: Infinity 
        }}
        style={{ width: "max-content" }}
      >
        {content.map((text, i) => (
          <span 
            key={i} 
            className={`font-heading uppercase tracking-[0.2em] font-medium leading-none ${text === '•' ? 'opacity-40 text-xs' : 'text-sm'}`}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
