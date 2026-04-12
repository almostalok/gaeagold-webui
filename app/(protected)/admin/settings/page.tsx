export default function AdminSettingsPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-[#1B5E3F]">Settings</h1>
      <p className="mt-2 text-sm text-[#6B6B6B]">Manage store configuration and platform preferences.</p>

      <form className="brand-card mt-6 grid gap-4 p-6 md:grid-cols-2">
        <label className="text-sm font-semibold text-[#1B5E3F]">
          Store Name
          <input className="mt-1 w-full rounded border border-[#E0E0E0] px-3 py-2.5 text-sm" defaultValue="GAEA GOLD" />
        </label>
        <label className="text-sm font-semibold text-[#1B5E3F]">
          Store Email
          <input className="mt-1 w-full rounded border border-[#E0E0E0] px-3 py-2.5 text-sm" defaultValue="info@gaeagold.com" />
        </label>
        <label className="text-sm font-semibold text-[#1B5E3F]">
          Store Phone
          <input className="mt-1 w-full rounded border border-[#E0E0E0] px-3 py-2.5 text-sm" defaultValue="+91 98765 43210" />
        </label>
        <label className="text-sm font-semibold text-[#1B5E3F]">
          Currency
          <select className="mt-1 w-full rounded border border-[#E0E0E0] px-3 py-2.5 text-sm">
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-[#1B5E3F] md:col-span-2">
          Store Address
          <input className="mt-1 w-full rounded border border-[#E0E0E0] px-3 py-2.5 text-sm" defaultValue="123 Farm Road, Rajasthan, India" />
        </label>

        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="brand-btn-primary">Save Settings</button>
        </div>
      </form>
    </section>
  );
}
