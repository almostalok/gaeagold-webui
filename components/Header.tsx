'use client';

import Link from 'next/link';
// import { useSession, signOut } from 'next-auth/react';
import { Leaf, Menu, X, ShoppingCart, Home, Package, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Header(): React.ReactNode {
  // const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="main-header sticky top-0 z-50 border-b border-[#e8dfd0] bg-[#faf6ef]/95 backdrop-blur">
        <div className="navbar mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="header-logo flex items-center gap-3" onClick={closeMenu}>
            <div className="rounded-full bg-[#4a6741]/10 p-2 text-[#4a6741]">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="header-title text-lg font-semibold tracking-tight text-[#2c1810]">
                Gaea Gold Harvest
              </p>
              <p className="header-subtitle text-[11px] tracking-wide text-[#8a7560]">
                From Sacred Soil to Sovereign Table
              </p>
            </div>
          </Link>

          <div className="nav-links flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="nav-desktop hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-[#2c1810] hover:text-[#4a6741]">
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium text-[#2c1810] hover:text-[#4a6741]"
              >
                Products
              </Link>
              <Link
                href="/orders"
                className="text-sm font-medium text-[#2c1810] hover:text-[#4a6741]"
              >
                My Orders
              </Link>
            </nav>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative inline-flex items-center gap-1.5 rounded-full border border-[#e8dfd0] px-3 py-2 text-sm font-medium text-[#2c1810] transition hover:border-[#4a6741] hover:text-[#4a6741]"
            >
              <ShoppingCart className="h-4 w-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden rounded-full border border-[#e8dfd0] p-2 text-[#2c1810] transition hover:border-[#4a6741] hover:text-[#4a6741]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={closeMenu}>
          {/* Menu Panel */}
          <div
            className="absolute left-0 top-[73px] w-full border-b border-[#e8dfd0] bg-[#faf6ef] shadow-xl animate-in fade-in slide-in-from-top-2"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-4 rounded-xl px-4 py-3 text-base font-medium text-[#2c1810] hover:bg-[#f3ece0]"
              >
                <Home className="h-5 w-5 text-[#4a6741]" />
                Home
              </Link>

              <Link
                href="/products"
                onClick={closeMenu}
                className="flex items-center gap-4 rounded-xl px-4 py-3 text-base font-medium text-[#2c1810] hover:bg-[#f3ece0]"
              >
                <ShoppingBag className="h-5 w-5 text-[#4a6741]" />
                Products
              </Link>

              <Link
                href="/orders"
                onClick={closeMenu}
                className="flex items-center gap-4 rounded-xl px-4 py-3 text-base font-medium text-[#2c1810] hover:bg-[#f3ece0]"
              >
                <Package className="h-5 w-5 text-[#4a6741]" />
                My Orders
              </Link>

              <Link
                href="/cart"
                onClick={closeMenu}
                className="flex items-center gap-4 rounded-xl px-4 py-3 text-base font-medium text-[#2c1810] hover:bg-[#f3ece0]"
              >
                <ShoppingCart className="h-5 w-5 text-[#4a6741]" />
                Cart
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
