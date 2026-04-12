import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-[#f9f6f0] text-[#1a1a1a] pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#102f23] pt-32 pb-32 text-center text-white">
        <Image
          src="/assets/farm2.jpg"
          alt="About Gaea Gold"
          width={1600}
          height={600}
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b48344]">Bridging farms to the world</p>
          <h1 className="mt-4 font-heading text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">About Gaea Gold</h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative h-[500px] w-full overflow-hidden rounded-xl border border-[#e8e6e1] bg-[#f2f1f0]">
             <Image
              src="/assets/farm2.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-4xl font-medium text-[#102f23]">Our Story</h2>
            <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-[#6b6b6b]">
              <p>
                Gaea Gold was founded to connect ethical farming communities with global buyers who value quality,
                transparency, and long-term sourcing partnerships.
              </p>
              <p>
                We work across spices, oils, grains, pulse, and dry fruits with strict quality checks,
                export-compliant packaging, and responsive support for inquiry-based procurement.
              </p>
            </div>
            <div className="mt-10 border-t border-[#e8e6e1] pt-10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-heading text-[#b48344]">20+</h4>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#102f23]">Global Partners</p>
                </div>
                <div>
                  <h4 className="text-4xl font-heading text-[#b48344]">100%</h4>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#102f23]">Traceable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#f2f1f0] py-24 border-y border-[#e8e6e1]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl font-medium text-[#102f23]">Why We Exist</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              ['Our Mission', 'Deliver premium agricultural products with traceable sourcing and fair value.'],
              ['Our Vision', 'Become the most trusted Indian agri-export partner for modern global trade.'],
              ['Our Values', 'Quality, integrity, sustainability, and long-term customer relationships.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-xl border border-[#e8e6e1] bg-[#f9f6f0] p-10 transition-shadow hover:shadow-sm">
                <div className="h-10 w-10 flex items-center justify-center rounded-sm bg-[#102f23] text-[#b48344] font-heading text-lg">
                  {title.charAt(4)}
                </div>
                <h3 className="mt-8 font-heading text-2xl font-medium text-[#102f23]">{title}</h3>
                <p className="mt-4 text-base font-light leading-relaxed text-[#6b6b6b]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24">
        <h2 className="font-heading text-3xl font-medium text-[#102f23] text-center">Certifications & Partners</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {['Organic', 'ISO 9001', 'Fair Trade', 'Export Council'].map((item) => (
            <div key={item} className="flex min-w-[200px] flex-col items-center justify-center rounded-xl border border-[#e8e6e1] bg-white p-8">
              <div className="h-12 w-12 rounded-full border border-[#e8e6e1] bg-[#f2f1f0]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#102f23]">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
