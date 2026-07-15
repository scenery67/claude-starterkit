'use client';

import { ThemeProvider } from 'next-themes';
import { type ReactNode } from 'react';

// next-themes ThemeProvider를 래핑하는 컴포넌트
export function ThemeProviderComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
