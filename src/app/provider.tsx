'use client';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

export default function NextThemeProvider({ children }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
