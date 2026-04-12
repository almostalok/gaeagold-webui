export default function AdminInquiriesPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-[#1B5E3F]">Inquiries</h1>
      <p className="mt-2 text-sm text-[#6B6B6B]">Track and respond to buyer requirements.</p>

      <article className="brand-card mt-6 overflow-x-auto p-4">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#F2F1F0] text-left text-xs font-bold text-[#1B5E3F]">
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Customer</th>
              <th className="px-3 py-2">Product Interest</th>
              <th className="px-3 py-2">Quantity</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Apr 09, 2026', 'Acme Imports', 'Kashmiri Red Chilli Powder', '500 kg', 'New'],
              ['Apr 08, 2026', 'Freshline Foods', 'Cold Pressed Mustard Oil', '250 L', 'Replied'],
              ['Apr 08, 2026', 'Northbay Retail', 'Export Basmati Rice', '1,000 kg', 'Pending'],
            ].map((row) => (
              <tr key={row[0] + row[1]} className="border-b border-[#E0E0E0]">
                <td className="px-3 py-3">{row[0]}</td>
                <td className="px-3 py-3 font-semibold">{row[1]}</td>
                <td className="px-3 py-3">{row[2]}</td>
                <td className="px-3 py-3">{row[3]}</td>
                <td className="px-3 py-3">
                  <span
                    className={`rounded px-2 py-1 text-xs font-bold text-white ${
                      row[4] === 'New' ? 'bg-[#E67E22]' : row[4] === 'Replied' ? 'bg-[#27AE60]' : 'bg-[#6B6B6B]'
                    }`}
                  >
                    {row[4]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
