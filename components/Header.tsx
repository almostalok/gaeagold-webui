'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navItems, products } from '@/lib/site-data';
import Magnetic from './Magnetic';
import { CartSidebar } from './layout/CartSidebar';
import { SearchOverlay } from './layout/SearchOverlay';
import { MobileMenu } from './layout/MobileMenu';

/**
 * Header Component
 * 
 * The main site header providing branding, navigation, and user actions (search, cart, profile).
 * Utilizes transparent-to-solid transition on scroll and controls overlay states.
 * 
 * @returns {React.ReactNode} The rendered main header
 */
export function Header(): React.ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setCartOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const popularProducts = products.slice(0, 4);
  const isHomePage = pathname === '/';
  
  // If we are not on the home page, the header should be solid green from the start.
  // On home page, it starts transparent and becomes solid slightly thinner when scrolled.
  const isSolidGreen = !isHomePage || scrolled;
  
  const textColorClass = 'text-white';
  const logoTextClass = 'text-white';

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isSolidGreen 
          ? 'bg-[#102f23] border-b border-white/10 shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center w-1/3">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80" onClick={closeMenu}>
              <Image 
                src="/images/logo.png" 
                alt="Gaea Gold" 
                width={28} 
                height={28} 
                className="object-contain" 
                style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(85%) saturate(301%) hue-rotate(349deg) brightness(88%) contrast(85%)' }}
                priority 
              />
              <div className="hidden sm:flex flex-col justify-center">
                 <span className={`font-heading text-xl font-bold leading-none tracking-wide transition-colors duration-300 ${logoTextClass}`}>
                   GAEA GOLD
                 </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden w-1/3 md:flex items-center justify-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Magnetic key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-[12px] tracking-widest font-bold uppercase transition-colors duration-300 px-2 py-1 ${
                      isActive ? 'text-[#b48344]' : `${textColorClass} hover:text-[#b48344]`
                    }`}
                  >
                    {item.label}
                  </Link>
                </Magnetic>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex w-1/3 items-center justify-end gap-5">
            <Magnetic>
              <button
                 type="button"
                 className={`${textColorClass} hover:text-[#b48344] transition-colors p-2`}
                 onClick={() => setSearchOpen(true)}
                 aria-label="Search"
              >
                 <Search className="h-5 w-5 stroke-[1.5]" />
              </button>
            </Magnetic>
            <Magnetic>
              <button
                 type="button"
                 className={`relative ${textColorClass} hover:text-[#b48344] transition-colors p-2`}
                 onClick={() => setCartOpen(true)}
                 aria-label="Cart"
              >
                 <ShoppingCart className="h-5 w-5 stroke-[1.5]" />
                 <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#b48344] text-[9px] font-bold text-[#102f23]">
                   3
                 </span>
              </button>
            </Magnetic>
            <Magnetic>
              <Link
                 href="/profile"
                 className={`${textColorClass} hover:text-[#b48344] transition-colors p-2`}
                 aria-label="Profile"
              >
                 <User className="h-5 w-5 stroke-[1.5]" />
              </Link>
            </Magnetic>
            
            <button
               type="button"
               onClick={() => setMenuOpen(!menuOpen)}
               className={`${textColorClass} hover:text-[#b48344] transition-colors md:hidden ml-2 p-2`}
               aria-label="Menu"
            >
               <Menu className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlays */}
      {searchOpen && (
        <SearchOverlay 
          popularProducts={popularProducts} 
          onClose={() => setSearchOpen(false)} 
        />
      )}

      {cartOpen && (
        <CartSidebar 
          popularProducts={popularProducts} 
          onClose={() => setCartOpen(false)} 
        />
      )}

      {menuOpen && (
        <MobileMenu 
          navItems={navItems} 
          onClose={closeMenu} 
        />
      )}
    </>
  );
}
