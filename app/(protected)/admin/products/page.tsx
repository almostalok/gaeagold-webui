import { products } from '@/lib/site-data';
import { Plus, Search, Filter } from 'lucide-react';

export default function AdminProductsPage() {
  return (
    <section>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-4xl font-bold text-[#2e4531]">Products</h1>
          <p className="mt-2 text-sm text-[#615843]">Manage inventory, pricing, and product visibility.</p>
        </div>
        <button type="button" className="flex items-center gap-2 rounded-full bg-[#2e4531] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-[0_8px_20px_rgba(46,69,49,0.2)] transition hover:bg-[#1f3022]">
          <Plus className="h-4 w-4" /> Add New Product
        </button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A19D93]" />
          <input 
            type="text" 
            placeholder="Search products by name or category..." 
            className="w-full rounded-2xl border border-[#e8dfc8] bg-white py-3 pl-10 pr-4 text-sm text-[#2e4531] outline-none focus:border-[#b48344]"
          />
        </div>
        <button className="flex items-center gap-2 rounded-2xl border border-[#e8dfc8] bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#2e4531] hover:bg-[#F6F4ED] transition">
          <Filter className="h-4 w-4" /> Filter
        </button>
      </div>

      <article className="rounded-2xl bg-white border border-[#e8dfc8] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-[#FBF7ED] text-xs uppercase tracking-widest text-[#7A6C4A]">
              <tr>
                <th className="px-6 py-4 font-semibold">Product Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Price</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Views</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8dfc8]/60 text-[#3f3b30]">
              {products.map((item) => (
                <tr key={item.id} className="hover:bg-[#FCFAF4] transition">
                  <td className="px-6 py-4 font-bold text-[#2e4531]">{item.name}</td>
                  <td className="px-6 py-4 font-semibold">{item.category}</td>
                  <td className="px-6 py-4 font-bold text-[#b48344]">INR {item.price}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-[#e6f2eb] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#2e4531]">
                      In stock
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{item.reviews * 9}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <div className="mt-8 flex justify-center pb-8">
         <div className="flex gap-2">
            <button className="rounded-xl border border-[#e8dfc8] bg-white px-4 py-2 text-xs font-bold text-[#615843] hover:text-[#2e4531] hover:border-[#b48344]">Prev</button>
            <button className="rounded-xl bg-[#2e4531] px-4 py-2 text-xs font-bold text-white shadow-md">1</button>
            <button className="rounded-xl border border-[#e8dfc8] bg-white px-4 py-2 text-xs font-bold text-[#615843] hover:text-[#2e4531] hover:border-[#b48344]">Next</button>
         </div>
      </div>
    </section>
  );
}
