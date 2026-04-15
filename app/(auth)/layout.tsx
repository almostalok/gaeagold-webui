'use client';

import { useAuthRoute } from '@/hooks/useAuthRouter';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const allowed = useAuthRoute();
  if (!allowed)
    return <div className="min-h-screen flex items-center justify-center bg-[#f9f6f0] text-[#102f23]">Loading...</div>;

  return (
    <div className="main-container">
      <Header />
      <div className="relative min-h-[calc(100vh-200px)]">
        {/* Immersive background texture will be handled by the pages or placed here */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
