import useDarkMode from 'use-dark-mode';
import { useState, useEffect, useMemo } from 'react';
import { darkTheme, lightTheme } from '@/theme';

/* -------------------------------------------------------------------------- */
/* CUSTOM HOOK                                                                */
/* -------------------------------------------------------------------------- */

export const useDarkTheme = (initialValue: boolean = false) => {
  const darkMode = useDarkMode(initialValue);
  const currentTheme = darkMode.value ? darkTheme : lightTheme;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return useMemo(
    () => ({
      isMounted,
      currentTheme,
      isDarkTheme: darkMode.value,
      toggleTheme: darkMode.toggle,
      enableDarkTheme: darkMode.enable,
      disableDarkTheme: darkMode.disable,
    }),
    [isMounted, currentTheme, darkMode]
  );
};
