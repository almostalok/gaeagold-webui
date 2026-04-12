import Link from 'next/link';
import Image from 'next/image';
import { Bell, LayoutDashboard, LineChart, Mail, Package, Settings, UserCircle, LogOut } from 'lucide-react';
import { adminNav } from '@/lib/site-data';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#F6F4ED] overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-[280px] flex-col border-r border-[#e8dfc8] bg-white">
        <div className="flex h-[80px] items-center gap-3 border-b border-[#e8dfc8] px-6">
          <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
          <div className="flex flex-col justify-center">
            <Link href="/" className="font-heading text-lg font-bold tracking-widest text-[#2e4531]">GAEA GOLD</Link>
            <p className="text-[8px] uppercase font-bold tracking-[0.28em] text-[#b48344]">Management</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <p className="mb-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A19D93]">Main Menu</p>
          <ul className="space-y-1.5">
            {adminNav.map((item) => {
              const icons: Record<string, React.ElementType> = {
                Dashboard: LayoutDashboard,
                Products: Package,
                Inquiries: Mail,
                Analytics: LineChart,
                Settings: Settings,
              };
              const MenuIcon = icons[item.label] || LayoutDashboard;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold text-[#615843] transition hover:bg-[#F2EDDF] hover:text-[#2e4531]"
                  >
                    <MenuIcon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="border-t border-[#e8dfc8] p-4">
          <Link href="/login" className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-bold text-[#8a3c3c] transition hover:bg-[#ffeaea]">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-[80px] items-center justify-between border-b border-[#e8dfc8] bg-white px-6 lg:px-10">
          <div className="flex items-center gap-4 lg:hidden">
            <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
            <Link href="/" className="font-heading text-xl font-bold tracking-widest text-[#2e4531]">GAEA GOLD</Link>
          </div>
          
          <h2 className="hidden lg:block font-heading text-2xl text-[#2e4531]">Dashboard Overview</h2>

          <div className="flex items-center gap-5">
            <button type="button" aria-label="Notifications" className="relative text-[#615843] hover:text-[#b48344] transition">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#b48344] text-[9px] font-bold text-white">
                3
              </span>
            </button>
            <div className="flex items-center gap-3 border-l border-[#e8dfc8] pl-5">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#2e4531]">Admin User</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#A19D93]">Superadmin</p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8dfc8] text-[#2e4531]">
                <UserCircle className="h-6 w-6" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-[#FAFAF8] p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
