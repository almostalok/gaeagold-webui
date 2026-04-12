import { products } from '@/lib/site-data';

export default function AdminProductsPage() {
  return (
    <section>
      <div className="brand-card flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1B5E3F]">Products</h1>
          <p className="text-sm text-[#6B6B6B]">Manage inventory, pricing, and product visibility.</p>
        </div>
        <button type="button" className="brand-btn-primary w-full md:w-auto">
          Add New Product
        </button>
      </div>

      <article className="brand-card mt-6 overflow-x-auto p-4">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#F2F1F0] text-left text-xs font-bold text-[#1B5E3F]">
              <th className="px-3 py-2">Product Name</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Price</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Views</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-b border-[#E0E0E0] text-[#1A1A1A]">
                <td className="px-3 py-3 font-semibold">{item.name}</td>
                <td className="px-3 py-3">{item.category}</td>
                <td className="px-3 py-3 font-bold text-[#D4AF37]">INR {item.price}</td>
                <td className="px-3 py-3">
                  <span className="rounded bg-[#27AE60] px-2 py-1 text-xs font-bold text-white">In stock</span>
                </td>
                <td className="px-3 py-3">{item.reviews * 9}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
