import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, PackageSearch, Users, Download } from 'lucide-react';

export default function page() {
  const stats = [
    { title: 'Total Products', value: '427', meta: '+12 this month', icon: PackageSearch, color: 'text-[#b48344]' },
    { title: 'Total Inquiries', value: '156', meta: '+23 this week', icon: Users, color: 'text-[#2e4531]' },
    { title: 'Visitors', value: '4,230', meta: '+8.2% this month', icon: TrendingUp, color: 'text-[#b48344]' },
    { title: 'Export Inquiries', value: '45', meta: '15 pending review', icon: ArrowUpRight, color: 'text-[#8a3c3c]' },
  ];

  return (
    <section>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-4xl font-bold text-[#2e4531]">Overview</h1>
          <p className="mt-2 text-sm text-[#615843]">Welcome back. Here is what is happening today.</p>
        </div>
        <button type="button" className="flex items-center gap-2 rounded-full bg-white border border-[#e8dfc8] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#2e4531] shadow-sm transition hover:bg-[#F6F4ED] hover:border-[#b48344]">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article key={item.title} className="relative overflow-hidden rounded-2xl bg-white border border-[#e8dfc8] p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-[#A19D93]">{item.title}</p>
              <div className={`rounded-xl bg-[#F6F4ED] p-2.5 ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-4xl font-heading font-bold text-[#2e4531]">{item.value}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="flex items-center gap-1 text-xs font-bold text-[#b48344]">
                  <ArrowUpRight className="h-3 w-3" />
                  {item.meta.includes('+') ? item.meta.split(' ')[0] : item.meta.split(' ')[0]}
                </span>
                <span className="text-xs text-[#A19D93]">{item.meta.includes('+') ? item.meta.split(' ').slice(1).join(' ') : item.meta.split(' ').slice(1).join(' ')}</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#e8dfc8] to-transparent opacity-50" />
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl bg-white border border-[#e8dfc8] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-bold text-[#2e4531]">Recent Bulk Inquiries</h3>
            <Link href="/admin/inquiries" className="text-xs font-bold text-[#b48344] hover:text-[#8a662c] uppercase tracking-wider">View All</Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FBF7ED] text-xs uppercase tracking-widest text-[#7A6C4A]">
                <tr>
                  <th className="px-4 py-3 font-semibold rounded-tl-xl rounded-bl-xl">ID</th>
                  <th className="px-4 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Product</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold rounded-tr-xl rounded-br-xl">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8dfc8]/60 text-[#3f3b30]">
                {[
                  { id: 'INQ-1042', client: 'Lulu Hypermarket', prod: 'Basmati Rice (5MT)', date: 'Oct 12, 2026', status: 'Pending' },
                  { id: 'INQ-1041', client: 'Emirates Dist.', prod: 'Mustard Oil (100L)', date: 'Oct 11, 2026', status: 'Reviewed' },
                  { id: 'INQ-1040', client: 'Gourmet US', prod: 'Ghee Combo (50 Boxes)', date: 'Oct 10, 2026', status: 'Closed' },
                ].map((row) => (
                  <tr key={row.id} className="hover:bg-[#FCFAF4] transition">
                    <td className="px-4 py-4 font-bold text-[#2e4531]">{row.id}</td>
                    <td className="px-4 py-4 font-semibold">{row.client}</td>
                    <td className="px-4 py-4">{row.prod}</td>
                    <td className="px-4 py-4 text-xs text-[#A19D93]">{row.date}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
                        row.status === 'Pending' ? 'bg-[#fff5e6] text-[#b48344]' :
                        row.status === 'Reviewed' ? 'bg-[#e6f2eb] text-[#2e4531]' :
                        'bg-[#f2f1f0] text-[#A19D93]'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl bg-[#1e2a1f] p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border-[20px] border-white/5" />
          <h3 className="font-heading text-xl font-bold text-[#e6d5bf] relative z-10">Quick Actions</h3>
          <p className="mt-2 text-sm text-white/70 relative z-10">Manage commonly accessed tools directly.</p>
          
                    <div className="mt-8 space-y-3 relative z-10">
            <Link href="/admin/products/new" className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-4 transition hover:bg-white/20 border border-white/5">
              <span className="text-sm font-semibold tracking-wide">Add New Product</span>
              <ArrowUpRight className="h-4 w-4 text-[#b48344]" />
            </Link>
            <Link href="/admin/settings" className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-4 transition hover:bg-white/20 border border-white/5">
              <span className="text-sm font-semibold tracking-wide">Update Pricing</span>
              <ArrowUpRight className="h-4 w-4 text-[#b48344]" />
            </Link>
            <Link href="/contact" className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-4 transition hover:bg-white/20 border border-white/5">
              <span className="text-sm font-semibold tracking-wide">Customer Support</span>
              <ArrowUpRight className="h-4 w-4 text-[#b48344]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
