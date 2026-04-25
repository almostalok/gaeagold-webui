import Link from 'next/link';
import { X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  /** The navigation items to display */
  navItems: NavItem[];
  /** Function to close the mobile menu */
  onClose: () => void;
}

/**
 * MobileMenu Component
 * 
 * Displays a full-screen mobile navigation menu.
 * 
 * @param {MobileMenuProps} props - Component props
 * @returns {React.ReactNode} The rendered mobile menu
 */
export function MobileMenu({ navItems, onClose }: MobileMenuProps): React.ReactNode {
  return (
    <div className="fixed inset-0 z-[100] bg-white md:hidden flex flex-col">
      <div className="flex items-center justify-between p-6 border-b border-[#e8e6e1]">
        <span className="font-heading text-xl font-medium text-[#102f23]">Menu</span>
        <button onClick={onClose} className="text-[#102f23] hover:text-[#b48344] transition-colors">
          <X className="h-8 w-8 stroke-[1.5]" />
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="text-4xl font-medium tracking-tight text-[#102f23] hover:text-[#b48344] transition-colors flex items-center justify-between"
          >
            {item.label}
          </Link>
        ))}
        
        <div className="mt-12 pt-8 border-t border-[#e8e6e1] flex flex-col gap-6">
          <Link href="/login" onClick={onClose} className="text-[15px] font-bold uppercase tracking-widest text-[#102f23] hover:text-[#b48344]">
            Login / Register
          </Link>
          <Link href="/contact" onClick={onClose} className="text-[13px] font-bold uppercase tracking-widest text-[#102f23]/60 hover:text-[#102f23]">
            Contact Us
          </Link>
          <Link href="/about" onClick={onClose} className="text-[13px] font-bold uppercase tracking-widest text-[#102f23]/60 hover:text-[#102f23]">
            Our Story
          </Link>
        </div>
      </nav>
    </div>
  );
}
