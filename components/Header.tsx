'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navItems, products } from '@/lib/site-data';

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

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
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
                 <span className="font-heading text-xl font-medium leading-none tracking-wide text-white">
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
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[12px] tracking-widest font-semibold uppercase transition-colors duration-300 ${
                    isActive ? 'text-[#b48344]' : 'text-white hover:text-[#b48344]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex w-1/3 items-center justify-end gap-5">
            <button
               type="button"
               className="text-white hover:text-[#b48344] transition-colors"
               onClick={() => setSearchOpen(true)}
               aria-label="Search"
            >
               <Search className="h-5 w-5 stroke-[1.5]" />
            </button>
            <button
               type="button"
               className="relative text-white hover:text-[#b48344] transition-colors"
               onClick={() => setCartOpen(true)}
               aria-label="Cart"
            >
               <ShoppingCart className="h-5 w-5 stroke-[1.5]" />
               <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#b48344] text-[9px] font-bold text-[#102f23]">
                 3
               </span>
            </button>
            
            <button
               type="button"
               onClick={() => setMenuOpen(!menuOpen)}
               className="text-white hover:text-[#b48344] transition-colors md:hidden ml-2"
               aria-label="Menu"
            >
               <Menu className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Clean Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-[#f9f6f0] animate-in fade-in duration-300">
           <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-8 flex flex-col h-full">
              <div className="flex justify-end">
                 <button onClick={() => setSearchOpen(false)} className="text-[#102f23] hover:text-[#b48344] transition-colors">
                    <X className="h-8 w-8 stroke-[1.5]" />
                 </button>
              </div>
              <div className="mx-auto mt-24 w-full max-w-4xl">
                 <div className="flex items-center border-b-2 border-[#102f23] pb-4">
                    <Search className="h-8 w-8 text-[#102f23] mr-4" strokeWidth={1.5} />
                    <input
                       type="text"
                       placeholder="Search products..."
                       className="flex-1 bg-transparent text-4xl md:text-5xl font-medium text-[#102f23] placeholder:text-[#102f23]/30 focus:outline-none"
                       autoFocus
                    />
                 </div>
                 
                 <div className="mt-16">
                    <p className="text-xs uppercase tracking-widest font-bold text-[#102f23]/50 mb-6">Popular Suggestions</p>
                    <div className="flex flex-wrap gap-4">
                       {popularProducts.map((p) => (
                          <Link
                             key={p.id}
                             href={`/products/${p.slug}`}
                             onClick={() => setSearchOpen(false)}
                             className="border border-[#e8e6e1] px-6 py-3 rounded-full text-[13px] font-semibold text-[#102f23] hover:border-[#102f23] hover:bg-[#102f23] hover:text-white transition-all duration-300"
                          >
                             {p.name}
                          </Link>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Clean Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 transition-opacity" onClick={() => setCartOpen(false)}>
           <aside 
              className="absolute right-0 top-0 bottom-0 w-full max-w-[480px] flex flex-col bg-white shadow-2xl transition-transform"
              onClick={e => e.stopPropagation()}
           >
              <div className="flex items-center justify-between border-b border-[#e8e6e1] px-8 py-6">
                 <h2 className="text-2xl font-medium text-[#102f23]">
                   Cart (3)
                 </h2>
                 <button onClick={() => setCartOpen(false)} className="text-[#102f23] hover:text-[#b48344] transition-colors">
                    <X className="h-6 w-6 stroke-[1.5]" />
                 </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
                 {popularProducts.slice(0,3).map((item) => (
                    <div key={item.id} className="flex gap-6 pb-6 border-b border-[#e8e6e1]">
                       <div className="relative h-24 w-20 bg-[#f9f6f0] border border-[#e8e6e1]">
                          <Image src={item.image} alt={item.name} fill className="object-cover p-2" />
                       </div>
                       <div className="flex flex-1 flex-col justify-center">
                          <p className="text-lg font-medium text-[#102f23] leading-tight mb-1">{item.name}</p>
                          <p className="text-[11px] uppercase tracking-widest text-[#102f23]/50 font-semibold mb-4">{item.weight}</p>
                          <div className="flex justify-between items-center">
                             <div className="flex items-center gap-4 bg-white border border-[#e8e6e1] px-3 py-1">
                                <span className="text-sm font-bold text-[#102f23]/60 cursor-pointer hover:text-[#102f23]">-</span>
                                <span className="text-sm font-medium">1</span>
                                <span className="text-sm font-bold text-[#102f23]/60 cursor-pointer hover:text-[#102f23]">+</span>
                             </div>
                             <p className="text-[14px] font-semibold text-[#102f23]">₹{item.price}</p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>

              <div className="p-8 bg-[#f9f6f0] border-t border-[#e8e6e1]">
                 <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#102f23]/70">Subtotal</p>
                      <p className="text-[11px] text-[#102f23]/50 mt-1 uppercase tracking-widest">Shipping calculated at checkout</p>
                    </div>
                    <p className="text-2xl font-medium text-[#102f23]">₹2,355</p>
                 </div>
                 <Link href="/products" className="flex w-full items-center justify-center bg-[#102f23] text-white py-4 px-6 text-[13px] font-bold uppercase tracking-widest hover:bg-[#b48344] transition-colors">
                    Proceed to Checkout
                 </Link>
              </div>
           </aside>
        </div>
      )}

      {/* Clean Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white md:hidden flex flex-col">
           <div className="flex items-center justify-between p-6 border-b border-[#e8e6e1]">
              <span className="font-heading text-xl font-medium text-[#102f23]">Menu</span>
              <button onClick={closeMenu} className="text-[#102f23] hover:text-[#b48344] transition-colors">
                 <X className="h-8 w-8 stroke-[1.5]" />
              </button>
           </div>
           
           <nav className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-8">
              {navItems.map((item) => (
                 <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-4xl font-medium tracking-tight text-[#102f23] hover:text-[#b48344] transition-colors flex items-center justify-between"
                 >
                    {item.label}
                 </Link>
              ))}
              
              <div className="mt-12 pt-8 border-t border-[#e8e6e1] flex flex-col gap-6">
                 <Link href="/contact" onClick={closeMenu} className="text-[13px] font-bold uppercase tracking-widest text-[#102f23]/60 hover:text-[#102f23]">
                   Contact Us
                 </Link>
                 <Link href="/about" onClick={closeMenu} className="text-[13px] font-bold uppercase tracking-widest text-[#102f23]/60 hover:text-[#102f23]">
                   Our Story
                 </Link>
              </div>
           </nav>
        </div>
      )}
    </>
  );
}
