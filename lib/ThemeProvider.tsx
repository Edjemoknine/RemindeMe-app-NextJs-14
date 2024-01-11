"use client";
import { ReactNode } from "react";

import { ThemeProvider } from "next-themes";
const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
