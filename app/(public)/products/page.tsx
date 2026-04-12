import Link from 'next/link';
import { categories, certifications, products } from '@/lib/site-data';

export default function ProductsPage() {
  return (
    <main className="bg-[#f9f6f0] pb-24 pt-12 text-[#1a1a1a]">
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <nav className="mb-10 text-xs font-semibold uppercase tracking-widest text-[#6b6b6b]">
          Home <span className="px-2 text-[#b48344]">/</span> Products
        </nav>

        <div className="mb-6 flex items-center justify-between border-b border-[#e8e6e1] bg-transparent pb-4 md:hidden">
          <p className="text-sm text-[#6b6b6b]">Results: {products.length} products</p>
          <div className="flex gap-4">
            <button type="button" className="text-xs font-bold uppercase tracking-widest text-[#102f23]">
              Filter
            </button>
            <button type="button" className="text-xs font-bold uppercase tracking-widest text-[#102f23]">
              Sort
            </button>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[250px_1fr]">
          <aside className="sticky top-[100px] hidden h-fit lg:block">
            <h2 className="mb-6 font-heading text-lg font-medium text-[#102f23]">Filters</h2>

            <div className="border-t border-[#e8e6e1] py-6">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#102f23]">Category</h3>
              <ul className="space-y-3">
                {categories.map((item) => (
                  <li key={item.name} className="flex items-center justify-between text-base">
                    <label className="flex items-center gap-3 text-[#6b6b6b] hover:text-[#102f23] cursor-pointer transition-colors">
                      <input type="checkbox" className="h-4 w-4 accent-[#b48344]" />
                      {item.name}
                    </label>
                    <span className="text-sm text-[#a0a0a0]">({item.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#e8e6e1] py-6">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#102f23]">Price Range</h3>
              <input type="range" min={0} max={10000} className="w-full accent-[#b48344]" />
              <p className="mt-4 text-sm text-[#6b6b6b]">INR 0 - INR 10,000</p>
            </div>

            <div className="border-t border-[#e8e6e1] py-6">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#102f23]">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((item) => (
                  <li key={item} className="text-base text-[#6b6b6b]">
                    <label className="flex items-center gap-3 hover:text-[#102f23] cursor-pointer transition-colors text-[#6b6b6b]">
                      <input type="checkbox" className="h-4 w-4 accent-[#b48344]" />
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button type="button" className="w-full bg-[#102f23] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b48344]">
                Apply Filters
              </button>
              <button type="button" className="mt-4 w-full text-xs font-bold uppercase tracking-widest text-[#6b6b6b] hover:text-[#102f23] transition-colors">
                Clear All
              </button>
            </div>
          </aside>

          <div>
            <div className="mb-8 hidden items-center justify-between border-b border-[#e8e6e1] pb-6 md:flex">
              <p className="text-lg font-light text-[#6b6b6b]">Showing {products.length} of 120 products</p>
              <select className="rounded-none border-none bg-transparent text-sm font-semibold uppercase tracking-widest text-[#102f23] outline-none">
                <option>Sort by: Popular</option>
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {products.map((item) => (
                <article key={item.id} className="group relative flex flex-col bg-white p-4 transition-all hover:shadow-md border border-[#e8e6e1]">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f2f1f0] mb-4">
                    {item.badge ? (
                      <span className="absolute left-3 top-3 z-10 bg-[#102f23] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#b48344]">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-heading text-lg font-medium text-[#102f23] group-hover:underline">
                        <Link href={`/products/${item.slug}`}>
                          <span className="absolute inset-0" />
                          {item.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-[#6b6b6b]">
                        ₹{item.price}{' '}
                        {item.originalPrice ? (
                          <span className="ml-2 text-xs line-through text-[#a0a0a0]">₹{item.originalPrice}</span>
                        ) : null}
                      </p>
                    </div>
                    {item.moq ? (
                      <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#6b6b6b]">
                        MOQ: {item.moq}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 flex justify-center gap-2 border-t border-[#e8e6e1] pt-12">
              {['Previous', '1', '2', '3', 'Next'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                    item === '2'
                      ? 'border-[#b48344] bg-[#b48344] text-white'
                      : 'border-[#e8e6e1] bg-transparent text-[#6b6b6b] hover:border-[#102f23] hover:text-[#102f23]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
