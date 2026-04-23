'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorMedia, setCursorMedia] = useState<string | null>(null);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsVisible(true);
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for media reveal attribute
      const mediaElement = target.closest('[data-cursor-media]') as HTMLElement;
      if (mediaElement) {
        setCursorMedia(mediaElement.getAttribute('data-cursor-media'));
        setIsHovering(true);
      } else {
        setCursorMedia(null);
        if (
          target.tagName.toLowerCase() === 'button' ||
          target.tagName.toLowerCase() === 'a' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('hover-trigger')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#b48344] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering && !cursorMedia ? 0 : cursorMedia ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      
      {/* Hover Ring / Media Container */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998] flex items-center justify-center overflow-hidden"
        style={{
          mixBlendMode: cursorMedia ? 'normal' : 'difference',
        }}
        animate={{
          x: cursorMedia ? mousePosition.x - 100 : mousePosition.x - 24,
          y: cursorMedia ? mousePosition.y - 150 : mousePosition.y - 24,
          width: cursorMedia ? 200 : 48,
          height: cursorMedia ? 250 : 48,
          borderRadius: cursorMedia ? '12px' : '9999px',
          scale: isHovering && !cursorMedia ? 1.5 : 1,
          backgroundColor: isHovering && !cursorMedia ? 'rgba(180, 131, 68, 0.15)' : 'transparent',
          border: cursorMedia ? 'none' : isHovering ? '0px solid transparent' : '1px solid #b48344',
          backdropFilter: cursorMedia ? 'none' : 'blur(2px)'
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <AnimatePresence>
          {cursorMedia && (
            <motion.img
              key={cursorMedia}
              src={cursorMedia}
              alt="Cursor Preview"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
