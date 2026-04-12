export default function AdminAnalyticsPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-[#1B5E3F]">Analytics</h1>
      <p className="mt-2 text-sm text-[#6B6B6B]">Overview of visitor and product performance.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="brand-card p-6">
          <h2 className="text-sm font-bold text-[#1B5E3F]">Product Views Trend</h2>
          <div className="mt-4 h-64 rounded bg-[linear-gradient(180deg,#F2F1F0,#FFFFFF)]" />
        </article>
        <article className="brand-card p-6">
          <h2 className="text-sm font-bold text-[#1B5E3F]">Visitor by Country</h2>
          <div className="mt-4 h-64 rounded bg-[radial-gradient(circle_at_top,#F4E4C1,#F2F1F0)]" />
        </article>
      </div>

      <article className="brand-card mt-6 p-6">
        <h2 className="text-sm font-bold text-[#1B5E3F]">Referrer Sources</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#F2F1F0] text-left text-xs font-bold text-[#1B5E3F]">
                <th className="px-3 py-2">Source</th>
                <th className="px-3 py-2">Sessions</th>
                <th className="px-3 py-2">Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Google Search', '1,420', '32%'],
                ['Direct', '960', '28%'],
                ['LinkedIn', '430', '24%'],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-[#E0E0E0]">
                  <td className="px-3 py-2">{row[0]}</td>
                  <td className="px-3 py-2">{row[1]}</td>
                  <td className="px-3 py-2">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
