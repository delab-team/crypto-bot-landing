"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

interface ProvidersType {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersType) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeProvider themes={['light', 'dark']} defaultTheme='light'>{children}</ThemeProvider>;
}