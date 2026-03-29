'use client';

import { useAuthRoute } from '@/hooks/useAuthRouter';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const allowed = useAuthRoute();
  if (!allowed)
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return <div className="min-h-screen flex items-center justify-center">{children}</div>;
}
