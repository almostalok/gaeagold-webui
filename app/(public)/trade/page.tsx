import { ArrowRight, Building, Globe, Mail, MapPin, Package, Phone } from 'lucide-react';
import Image from 'next/image';

export default function TradePage() {
  return (
    <div className="bg-[#f9f6f0] text-[#1a1a1a] pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#102f23] pt-32 pb-32 text-white text-center">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80"
          alt="Bulk Goods Export"
          width={1600}
          height={600}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay border-none"
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b48344]">Global Partnerships</p>
          <h1 className="mt-4 font-heading text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">
            Gaea Gold Trade & Export
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/85">
            Secure, reliable, and compliant sourcing of premium agricultural commodities from India.
            We specialize in large-scale shipments customized to your manufacturing, wholesale, or
            private-label requirements.
          </p>
        </div>
      </section>

      {/* Trade Value Proposition */}
      <section className="relative z-20 mx-auto max-w-[1400px] px-6 lg:px-12 -mt-10 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Global Compliance', desc: 'ISO, Organic, and destination-specific certifications available.', icon: Globe },
            { title: 'Scalable Volumes', desc: 'From LCL (Less than Container Load) to multi-container contracts.', icon: Package },
            { title: 'Private Labeling', desc: 'Custom packaging solutions designed for international retail shelves.', icon: Building },
          ].map((item) => (
            <article key={item.title} className="rounded-xl border border-[#e8e6e1] bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
              <div className="inline-flex rounded-sm bg-[#102f23] p-4 text-[#b48344]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-medium text-[#102f23]">{item.title}</h3>
              <p className="mt-4 text-base font-light leading-relaxed text-[#6b6b6b]">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Recommended Bulk Commodities */}
      <section className="bg-[#f2f1f0] py-24 border-y border-[#e8e6e1]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-medium text-[#102f23]">Featured Export Commodities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-light leading-relaxed text-[#6b6b6b]">
              Top-tier Indian agricultural products available for immediate scalable supply.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Premium Basmati Rice',
                desc: 'Aged 1121 Steam & Sella Basmati, known for extra long grain and aroma. Custom poly-packs available.',
                moq: '1x 20ft FCL',
                img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
              },
              {
                title: 'Sharbati Wheat & Atta',
                desc: 'Golden premium wheat sourced directly from MP. Available as whole grain or stone-ground flour.',
                moq: '500 KG',
                img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80',
              },
              {
                title: 'Makhana (Fox Nuts)',
                desc: 'High-grade Phool Makhana from Bihar. Highly scalable sizes (4 Suta to 6 Suta).',
                moq: '100 KG',
                img: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&q=80',
              },
            ].map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-xl border border-[#e8e6e1] bg-[#f9f6f0] transition hover:-translate-y-1 hover:shadow-sm">
                <div className="relative h-64 overflow-hidden bg-[#e8e6e1]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 pb-10">
                  <h3 className="font-heading text-2xl font-medium text-[#102f23]">{item.title}</h3>
                  <p className="mt-4 text-base font-light leading-relaxed text-[#6b6b6b]">{item.desc}</p>
                  <div className="mt-6 inline-block border border-[#e8e6e1] bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#102f23]">
                    MOQ: {item.moq}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-4xl font-medium text-[#102f23]">Start the Conversation</h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#6b6b6b]">
              Looking for a specific grade of spice, bulk cold-pressed oils, or customized combo
              packs? Our dedicated trade team is ready to process your request.
            </p>

            <div className="mt-12 space-y-10 border-l border-[#e8e6e1] pl-6">
              <div>
                <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#102f23]">
                  <Mail className="h-4 w-4 text-[#b48344]" /> Email Us
                </h4>
                <p className="mt-3 text-base text-[#6b6b6b]">trade@gaeagold.com</p>
                <p className="text-sm text-[#a0a0a0]">Average response: 2-4 hours</p>
              </div>
              <div>
                <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#102f23]">
                  <Phone className="h-4 w-4 text-[#b48344]" /> Call Direct
                </h4>
                <p className="mt-3 text-base text-[#6b6b6b]">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#102f23]">
                  <MapPin className="h-4 w-4 text-[#b48344]" /> Global Hub
                </h4>
                <p className="mt-3 text-base leading-relaxed text-[#6b6b6b]">
                  Gaea Gold Corporate Park<br />
                  Sector 32, Gurugram<br />
                  Haryana, India - 122001
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-[#e8e6e1] bg-white p-8 lg:p-12 shadow-sm">
            <h3 className="font-heading text-3xl font-medium text-[#102f23]">Bulk Order Inquiry</h3>
            <p className="mt-2 text-sm text-[#6b6b6b]">Fill out the details below to receive a custom quote.</p>
            
            <form className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Company Name *</label>
                <input 
                  type="text" 
                  className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" 
                  placeholder="Your Business Entity"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Contact Person *</label>
                <input 
                  type="text" 
                  className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" 
                  placeholder="Full Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Business Email *</label>
                <input 
                  type="email" 
                  className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" 
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Products of Interest *</label>
                <input 
                  type="text" 
                  className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" 
                  placeholder="e.g. Export Basmati Rice, Cold Pressed Mustard Oil"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Estimated Quantity</label>
                <input 
                  type="text" 
                  className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" 
                  placeholder="e.g. 500kg, 1x 20ft Container"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Additional Requirements</label>
                <textarea 
                  rows={4}
                  className="w-full resize-none rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" 
                  placeholder="Tell us about certification needs, packaging requirements..."
                />
              </div>

              <div className="sm:col-span-2 mt-4">
                <button type="button" className="inline-flex items-center justify-center gap-3 w-full bg-[#102f23] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#b48344]">
                  Submit Trade Inquiry <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}