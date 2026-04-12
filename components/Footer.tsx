import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative bg-[#102f23] text-[#f9f6f0] selection:bg-[#b48344] selection:text-white border-t-4 border-[#b48344] overflow-hidden">
      
      {/* Immersive Rural Farm Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-luminosity" 
          style={{ backgroundImage: 'url(/images/rural_pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      
      {/* Massive subtle background logo layer */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/images/logo.png')] bg-no-repeat bg-right-top bg-[length:auto_150%] opacity-[0.03] grayscale pointer-events-none z-0" style={{ filter: 'brightness(0) invert(1)' }} />

      {/* Upper Grid */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-24 pb-16">
        
        {/* Brand Column */}
        <div className="lg:col-span-5 flex flex-col">
          <Link href="/" className="mb-8 block inline-flex items-center gap-4">
            <div className="bg-[#b48344]/10 p-3 rounded-full border border-[#b48344]/30 backdrop-blur-sm">
                <Image src="/images/logo.png" alt="Gaea Gold" width={45} height={45} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(85%) saturate(301%) hue-rotate(349deg) brightness(88%) contrast(85%)' }} />
            </div>
            <div>
               <h3 className="font-heading text-4xl font-medium tracking-[0.05em] text-[#e6d5bf]">
                 GAEA GOLD
               </h3>
               <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#b48344] mt-1 block">
                 Purity Preserved
               </span>
            </div>
          </Link>
          <p className="text-sm font-light leading-relaxed text-[#f9f6f0]/80 max-w-sm mb-10">
            Absolute purity sourced directly from India's generational native farms. 
            Meticulously processed and delivered globally with unwavering adherence to traditional wisdom.
          </p>
          <div className="flex gap-4 mt-auto">
            {['Instagram', 'LinkedIn', 'Journal'].map((social) => (
              <a key={social} href="#" className="border border-[#b48344]/30 rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.15em] font-bold text-[#b48344] hover:bg-[#b48344] hover:text-[#102f23] transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="lg:col-span-2 lg:pl-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b48344] mb-8 pb-3 border-b border-[#b48344]/20 inline-block w-full">
            Collections
          </h4>
          <ul className="space-y-4">
            {['Shop All', 'Native Spices', 'Cold Pressed Oils', 'Grains & Pulses', 'Dried Fruits', 'Combo Packs'].map((item) => (
              <li key={item}>
                <Link href="/products" className="text-sm font-light text-[#f9f6f0]/70 hover:text-[#e6d5bf] hover:translate-x-1 transition-all inline-block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="lg:col-span-2 lg:pl-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b48344] mb-8 pb-3 border-b border-[#b48344]/20 inline-block w-full">
            Company
          </h4>
          <ul className="space-y-4">
            {['The Gaea Standard', 'Our Story', 'Sustainability', 'Wholesale Inquiry', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link href="/about" className="text-sm font-light text-[#f9f6f0]/70 hover:text-[#e6d5bf] hover:translate-x-1 transition-all inline-block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-3 lg:pl-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b48344] mb-8 pb-3 border-b border-[#b48344]/20 inline-block w-full">
            Support & Connect
          </h4>
          <address className="not-italic text-sm font-light text-[#f9f6f0]/80 space-y-5 mb-8">
            <p className="flex items-start gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b48344" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               <span>Gaea Gold Harvest<br />Sector 54, Gurugram<br />Haryana, India 122002</span>
            </p>
            <p className="flex items-center gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b48344" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
               <a href="mailto:trade@gaeagold.com" className="hover:text-[#e6d5bf] transition-colors">trade@gaeagold.com</a>
            </p>
            <p className="flex items-center gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b48344" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
               <a href="tel:+919876543210" className="hover:text-[#e6d5bf] transition-colors">+91 98765 43210</a>
            </p>
          </address>
        </div>
      </div>

      {/* Accreditations Banner */}
      <div className="relative z-10 w-full overflow-hidden flex justify-center items-center py-10 px-6 border-y border-[#b48344]/20 bg-[#102f23] shadow-[inset_0_5px_20px_rgba(0,0,0,0.3)]">
         <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-60">
            {/* Minimal SVG replacements for standard badges */}
            <div className="flex flex-col items-center"><span className="font-heading text-4xl text-[#e6d5bf] font-bold">100%</span><span className="text-[9px] uppercase tracking-widest text-[#b48344] font-bold">Direct Source</span></div>
            <div className="flex flex-col items-center"><span className="font-heading text-4xl text-[#e6d5bf] font-bold">ZERO</span><span className="text-[9px] uppercase tracking-widest text-[#b48344] font-bold">Additives</span></div>
            <div className="flex flex-col items-center"><span className="font-heading text-4xl text-[#e6d5bf] font-bold">FSSAI</span><span className="text-[9px] uppercase tracking-widest text-[#b48344] font-bold">Registered</span></div>
            <div className="flex flex-col items-center"><span className="font-heading text-4xl text-[#e6d5bf] font-bold">PREMIUM</span><span className="text-[9px] uppercase tracking-widest text-[#b48344] font-bold">Export Grade</span></div>
         </div>
      </div>



      {/* Bottom Bar */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[11px] uppercase tracking-widest text-[#f9f6f0]/40 font-semibold">
          &copy; {new Date().getFullYear()} Gaea Gold Harvest. All rights reserved.
        </p>
        <div className="flex gap-6 text-[11px] uppercase tracking-widest text-[#f9f6f0]/40 font-semibold">
          <Link href="#" className="hover:text-[#b48344] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#b48344] transition-colors">Terms of Trade</Link>
          <Link href="#" className="hover:text-[#b48344] transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
