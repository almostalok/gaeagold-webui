import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-[#f9f6f0] text-[#1a1a1a] pb-24">
      <section className="relative bg-[#102f23] pt-32 pb-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#102f23_100%)] z-10" />
        <div className="relative z-20 mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b48344]">We&apos;re here to help</p>
          <h1 className="mt-4 font-heading text-5xl font-medium md:text-6xl text-white">Get in Touch</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
        <div className="grid gap-16 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <h2 className="font-heading text-4xl font-medium text-[#102f23]">Contact Us</h2>
            <p className="mt-4 text-lg font-light leading-relaxed text-[#6b6b6b]">
              Reach out to us for bulk orders, general inquiries, or partnership opportunities.
            </p>
            
            <div className="mt-12 space-y-10 border-l border-[#e8e6e1] pl-6">
              <div>
                <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#102f23]">
                  <Mail className="h-4 w-4 text-[#b48344]" /> Email
                </h4>
                <p className="mt-3 text-base text-[#6b6b6b]">info@gaeagold.com</p>
              </div>
              <div>
                <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#102f23]">
                  <Phone className="h-4 w-4 text-[#b48344]" /> Phone
                </h4>
                <p className="mt-3 text-base text-[#6b6b6b]">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#102f23]">
                  <MapPin className="h-4 w-4 text-[#b48344]" /> Address
                </h4>
                <p className="mt-3 text-base text-[#6b6b6b]">123 Farm Road, Rajasthan, India</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Business Hours</h4>
                <p className="mt-3 text-base text-[#6b6b6b]">Mon - Fri: 9am - 6pm IST</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#e8e6e1] bg-white p-8 lg:p-12 shadow-sm">
            <h2 className="font-heading text-3xl font-medium text-[#102f23]">Send us a Message</h2>
            
            <form className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Full Name *</label>
                <input className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Email Address *</label>
                <input type="email" className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Phone Number</label>
                <input type="tel" className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Company Name</label>
                <input className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors" placeholder="Your Company" />
              </div>

              <div className="space-y-2 md:col-span-2 mt-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Product Interested In</label>
                <select className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none focus:border-[#b48344] transition-colors appearance-none">
                  <option>All Products</option>
                  <option>Spices</option>
                  <option>Oils</option>
                  <option>Grains</option>
                  <option>Pulses</option>
                  <option>Dry Fruits</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2 mt-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#102f23]">Your Message *</label>
                <textarea rows={5} className="w-full rounded-none border-b border-[#e8e6e1] bg-transparent py-3 text-base text-[#1a1a1a] outline-none placeholder:text-[#a0a0a0] focus:border-[#b48344] transition-colors resize-none" placeholder="Tell us about your requirements..." />
              </div>

              <div className="md:col-span-2 mt-2">
                <label className="flex items-center gap-3 text-sm text-[#6b6b6b]">
                  <input type="checkbox" className="h-4 w-4 accent-[#b48344] border-[#e8e6e1] rounded-sm" />
                  Subscribe to our newsletter for updates
                </label>
              </div>

              <div className="md:col-span-2 mt-4">
                <button type="submit" className="w-full bg-[#102f23] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#b48344]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
