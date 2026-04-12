import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/site-data';

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
    <main className="bg-[#F8F7F5] pb-16 pt-6">
      <section className="section-shell">
        <nav className="mb-6 rounded-md bg-[#F2F1F0] px-4 py-3 text-xs text-[#1A1A1A]">
          <Link href="/" className="text-[#D4AF37]">Home</Link> <span className="px-1 text-[#D4AF37]">&gt;</span>{' '}
          <Link href="/products" className="text-[#D4AF37]">Products</Link> <span className="px-1 text-[#D4AF37]">&gt;</span> {product.name}
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="lg:sticky lg:top-[120px]">
            <div className="h-[340px] rounded-lg border-2 border-[#E0E0E0] bg-[linear-gradient(135deg,#E8F5E9,#F4E4C1)] sm:h-[500px]" />
            <div className="mt-4 grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-16 rounded border border-[#E0E0E0] bg-[linear-gradient(135deg,#F2F1F0,#FFFFFF)] sm:h-20" />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#1B5E3F] sm:text-4xl">{product.name}</h1>
            <span className="mt-3 inline-block rounded bg-[#E8F5E9] px-3 py-1 text-xs font-bold text-[#1B5E3F]">
              {product.category}
            </span>
            <p className="mt-4 text-sm text-[#6B6B6B]">{product.rating} stars ({product.reviews} reviews)</p>

            <div className="mt-4 border-b border-[#E0E0E0] pb-5">
              <p className="text-3xl font-bold text-[#D4AF37]">INR {product.price}</p>
              {product.originalPrice ? (
                <p className="mt-1 text-sm text-[#6B6B6B] line-through">INR {product.originalPrice}</p>
              ) : null}
              {product.originalPrice ? (
                <p className="mt-1 text-sm font-bold text-[#E67E22]">Save INR {product.originalPrice - product.price}</p>
              ) : null}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ['Origin', product.origin],
                ['Type/Grade', product.grade],
                ['Weight', product.weight],
                ['Packaging', product.packaging],
                ['Shelf Life', product.shelfLife],
                ['Certification', product.certification],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md bg-[#F2F1F0] p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#1B5E3F]">{label}</p>
                  <p className="mt-1 text-sm text-[#1A1A1A]">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md bg-[#E67E22] px-4 py-3 text-sm font-semibold text-white">
              Minimum Order Quantity: {product.moq ?? 'Not specified'}
            </div>

            <div className="mt-5 space-y-3">
              <button type="button" className="brand-btn-primary w-full">Add to Inquiry</button>
              <button type="button" className="brand-btn-secondary w-full">Contact Seller</button>
              <button type="button" className="brand-btn-outline w-full">Share</button>
            </div>

            <p className="mt-6 text-sm leading-7 text-[#6B6B6B]">{product.description}</p>
          </div>
        </div>

        <section className="mt-12 rounded-lg border border-[#E0E0E0] bg-white">
          <div className="border-b border-[#E0E0E0] bg-[#F2F1F0] px-4 py-3">
            <div className="hidden gap-2 md:flex">
              {['Description', 'Specifications', 'Reviews', 'Certifications'].map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`rounded px-4 py-2 text-sm font-semibold ${
                    index === 0 ? 'bg-white text-[#1B5E3F]' : 'text-[#1B5E3F]/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="space-y-2 md:hidden">
              {['Description', 'Specifications', 'Reviews', 'Certifications'].map((item) => (
                <details key={item} className="rounded bg-white p-3">
                  <summary className="cursor-pointer text-sm font-bold text-[#1B5E3F]">{item}</summary>
                  <p className="mt-2 text-sm text-[#6B6B6B]">Detailed {item.toLowerCase()} content appears here.</p>
                </details>
              ))}
            </div>
          </div>
          <div className="hidden px-6 py-8 md:block">
            <p className="text-sm leading-8 text-[#1A1A1A]">{product.description}</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-[#1B5E3F]">Similar Products</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <article key={item.id} className="brand-card overflow-hidden">
                <div className="h-44 bg-[linear-gradient(135deg,#E8F5E9,#F4E4C1)]" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">{item.name}</h3>
                  <p className="mt-2 text-sm font-bold text-[#D4AF37]">INR {item.price}</p>
                  <Link href={`/products/${item.slug}`} className="mt-3 block rounded bg-[#1B5E3F] px-3 py-2 text-center text-xs font-bold text-white">
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
