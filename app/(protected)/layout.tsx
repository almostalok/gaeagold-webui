'use client';

import { useProtectedRoute } from '@/hooks/useProtectedRoute';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const allowed = useProtectedRoute();
  if (!allowed)
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return <>{children}</>;
}
