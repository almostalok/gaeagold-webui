'use client';

import { useAuthRoute } from '@/hooks/useAuthRouter';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const allowed = useAuthRoute();
  if (!allowed)
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#1B5E3F,#F4E4C1)] py-10">
      {children}
    </div>
  );
}
