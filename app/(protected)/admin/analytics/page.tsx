import { Download } from 'lucide-react';

export default function AdminAnalyticsPage() {
  return (
    <section>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-4xl font-bold text-[#2e4531]">Analytics</h1>
          <p className="mt-2 text-sm text-[#615843]">Overview of visitor and product performance.</p>
        </div>
        <button type="button" className="flex items-center gap-2 rounded-full bg-white border border-[#e8dfc8] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#2e4531] shadow-sm transition hover:bg-[#F6F4ED] hover:border-[#b48344]">
          <Download className="h-4 w-4" /> Download Report
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#e8dfc8] bg-white p-6 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#A19D93]">Product Views Trend</h2>
          <div className="mt-6 h-64 rounded-xl border border-[#e8dfc8]/50 bg-[linear-gradient(180deg,#F6F4ED,#FFFFFF)] flex items-end justify-between p-4" />
        </article>
        <article className="rounded-2xl border border-[#e8dfc8] bg-white p-6 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#A19D93]">Visitor by Country</h2>
          <div className="mt-6 h-64 rounded-xl border border-[#e8dfc8]/50 bg-[radial-gradient(circle_at_top,#FBF7ED,#FFFFFF)] flex items-center justify-center p-4" />
        </article>
      </div>

      <article className="mt-6 rounded-2xl border border-[#e8dfc8] bg-white shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#e8dfc8]">
           <h2 className="text-xs font-bold uppercase tracking-widest text-[#A19D93]">Referrer Sources</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-[#FBF7ED] text-xs uppercase tracking-widest text-[#7A6C4A]">
              <tr>
                <th className="px-6 py-4 font-semibold">Source</th>
                <th className="px-6 py-4 font-semibold">Sessions</th>
                <th className="px-6 py-4 font-semibold">Bounce Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8dfc8]/60 text-[#3f3b30]">
              {[
                ['Google Search', '1,420', '32%'],
                ['Direct', '960', '28%'],
                ['LinkedIn', '430', '24%'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-[#FCFAF4] transition">
                  <td className="px-6 py-4 font-bold text-[#2e4531]">{row[0]}</td>
                  <td className="px-6 py-4 font-semibold">{row[1]}</td>
                  <td className="px-6 py-4 text-[#615843]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
