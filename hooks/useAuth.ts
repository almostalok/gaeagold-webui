'use client';

import { useSelector } from 'react-redux';
import { getAuthData } from '@/stores/appSelector';

export function useAuth() {
  const auth = useSelector(getAuthData);
  return {
    user: auth?.user,
    token: auth?.token,
    isLoggedIn: !!auth?.token,
  };
}
