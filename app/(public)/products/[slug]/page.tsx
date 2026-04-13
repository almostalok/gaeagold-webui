import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products, categories } from '@/lib/site-data';

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.slug !== slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f9f6f0] text-[#1a1a1a]">
      <section className="relative w-full overflow-hidden bg-[#102f23] pb-12 pt-32 lg:pt-40 px-6 lg:px-12 -mt-[1px]">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-luminosity" 
          style={{ backgroundImage: 'url(/images/rural_pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        
        <div className="relative z-10 mx-auto max-w-[1400px] text-center flex flex-col items-center">
          <nav className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#f9f6f0]/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> 
            <span className="px-2 text-[#b48344]">/</span> 
            <Link href="/products" className="hover:text-white transition-colors">Products</Link> 
            <span className="px-2 text-[#b48344]">/</span> 
            <span className="text-[#f9f6f0]">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12 py-12 lg:py-24">
        {/* Minimalistic Cream Background farm overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-multiply" 
             style={{ backgroundImage: 'url(/images/cream_pattern.png)', backgroundSize: '450px', backgroundPosition: 'center', backgroundRepeat: 'repeat' }} />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1fr] items-start">
          <div className="lg:sticky lg:top-[120px] flex flex-col gap-4">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] border border-[#e8e6e1] bg-white p-8 flex items-center justify-center overflow-hidden shadow-sm group">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              {product.badge && (
                <span className="absolute top-6 left-6 z-30 bg-[#f9f6f0] px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-[#b48344] border border-[#e8e6e1] rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          <div className="pt-4 lg:pt-8">
            <Link href={`/categories/${categories.find(c => c.name === product.category)?.slug}`} className="text-[10px] sm:text-xs uppercase tracking-widest text-[#102f23]/60 font-bold hover:text-[#b48344] transition-colors mb-4 inline-block">
              {product.category}
            </Link>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#102f23] leading-tight mb-4">{product.name}</h1>
            
            <p className="text-xs uppercase tracking-widest text-[#102f23]/40 font-bold flex items-center gap-2 mb-8">
               <span className="text-[#b48344]">★</span> {product.rating} <span className="opacity-50 mx-2">|</span> {product.reviews} reviews
            </p>

            <div className="border-t border-[#e8e6e1] pt-8 pb-8">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-medium text-[#102f23]">₹{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm font-semibold text-[#102f23]/40 line-through">₹{product.originalPrice}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#b48344] px-3 py-1 bg-[#b48344]/10 rounded-full">
                      Save ₹{product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                ['Grade', product.grade],
                ['Weight/Vol', product.weight],
                ['Packaging', product.packaging],
                ['Shelf Life', product.shelfLife],
                ['Origin', product.origin],
                ['MOQ', product.moq ?? 'Not specified'],
              ].map(([label, value]) => (
                <div key={label} className="border border-[#e8e6e1] rounded-2xl p-4 bg-white shadow-sm flex flex-col justify-center">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-[#102f23]/50 mb-1">{label}</p>
                  <p className="text-xs font-semibold text-[#102f23]">{value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#e8e6e1] pt-8 mb-8 space-y-4">
              <p className="text-sm leading-relaxed text-[#6b6b6b]">{product.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <div className="flex items-center justify-between border border-[#e8e6e1] bg-white rounded-full overflow-hidden w-full sm:w-[150px] shadow-sm">
                  <button className="px-5 py-4 text-[#102f23]/40 hover:text-[#b48344] font-bold transition-colors">-</button>
                  <span className="font-bold text-[#102f23]">1</span>
                  <button className="px-5 py-4 text-[#102f23]/40 hover:text-[#b48344] font-bold transition-colors">+</button>
               </div>
               <button type="button" className="flex-1 bg-[#102f23] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#b48344] transition-colors shadow-md">
                 Add to Inquiry
               </button>
            </div>

            <div className="rounded-2xl border border-[#e8e6e1] bg-white shadow-sm overflow-hidden">
               {['Description', 'Specifications', 'Certifications'].map((item, idx) => (
                  <details key={item} className={`group ${idx > 0 ? 'border-t border-[#e8e6e1]' : ''}`}>
                     <summary className="flex cursor-pointer items-center justify-between p-5 text-xs font-bold uppercase tracking-widest text-[#102f23] hover:bg-[#f9f6f0] transition-colors">
                        {item}
                        <span className="text-[#b48344] transition group-open:rotate-180">↓</span>
                     </summary>
                     <div className="p-5 pt-0 text-sm leading-relaxed text-[#6b6b6b]">
                        {idx === 0 ? product.description : `Detailed ${item.toLowerCase()} information for ${product.name}.`}
                     </div>
                  </details>
               ))}
            </div>
          </div>
        </div>

        <section className="mt-24 pt-16 border-t border-[#e8e6e1]">
          <h2 className="text-center font-heading text-3xl lg:text-4xl font-medium text-[#102f23] mb-12">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <div key={item.id} className="group flex flex-col bg-white border border-[#e8e6e1] transition-all duration-500 hover:border-[#b48344] rounded-[2rem] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] shadow-sm">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[2rem] bg-[#f9f6f0] p-6 flex flex-col items-center justify-center">
                  <Link href={`/products/${item.slug}`} className="absolute inset-0 z-20" />
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 pb-8 text-center bg-white border-t border-[#e8e6e1] rounded-b-[2rem]">
                  <h3 className="font-heading text-base font-medium text-[#102f23] mb-2 leading-tight">
                    <Link href={`/products/${item.slug}`} className="hover:text-[#b48344] transition-colors">{item.name}</Link>
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#102f23]/50 font-semibold mb-4">{item.category}</p>
                  <span className="text-lg font-medium text-[#102f23] mb-6">₹{item.price}</span>
                  <Link href={`/products/${item.slug}`} className="inline-block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#102f23] border border-[#e8e6e1] rounded-full hover:bg-[#b48344] hover:text-white hover:border-[#b48344] transition-all">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

