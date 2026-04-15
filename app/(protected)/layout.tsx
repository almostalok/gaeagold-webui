'use client';

import { useProtectedRoute } from '@/hooks/useProtectedRoute';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const allowed = useProtectedRoute();
  if (!allowed)
    return <div className="min-h-[100dvh] flex items-center justify-center bg-[#f9f6f0] text-[#102f23]">Loading...</div>;

  return (
    <div className="main-container">
      <Header />
      <div className="relative min-h-[calc(100vh-200px)]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
