// app/providers/Providers.tsx
'use client';
import React, { useEffect, useMemo } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { appStore } from '@/stores';
import {
  GET_MENU_SAGA_REQUESTING,
  GET_USER_DETAILS_SAGA_REQUESTING,
} from '@/constants/actionTypes';
import { getAppMenu, getAuthData, getAppConfig, getUserDetails } from '@/stores/appSelector';
import { ThemeProvider } from 'next-themes';

function useAppInitializer() {
  const dispatch = useDispatch();
  const menuData = useSelector(getAppMenu);
  const userData = useSelector(getUserDetails);
  const config = useSelector(getAppConfig);
  const authData = useSelector(getAuthData);

  useEffect(() => {
    console.log('inside the Provider');
    // dispatch only if we don't have data yet
    if (!userData) dispatch({ type: GET_USER_DETAILS_SAGA_REQUESTING });
    if (!menuData) dispatch({ type: GET_MENU_SAGA_REQUESTING });
  }, [dispatch, menuData, userData]);

  const initialized = useMemo(() => {
    // consider the app initialized when both user and menu have data (or decide your own logic)
    const userReady = !!userData && Object.keys(userData || {}).length > 0;
    const menuReady = Array.isArray(menuData) ? menuData.length >= 0 : !!menuData; // update logic as needed
    const configReady = !!config && !config.requesting && !config.error;
    // return userReady && menuReady && configReady;
    return true;
  }, [userData, menuData, config]);

  return { initialized, menuData, userData, config };
}

function AppInitializer({ children }: { children: React.ReactNode }) {
  const { initialized } = useAppInitializer();

  if (!initialized) {
    return (
      <div className="min-h-screen flex items-center justify-center items-center bg-zinc-900 text-white">
        <div className="flex justify-items-start items-center text-center">
          <div className="mr-4">Initializing application…</div>
          <div className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Provider store={appStore}>
        <AppInitializer>{children}</AppInitializer>
      </Provider>
    </ThemeProvider>
  );
}
