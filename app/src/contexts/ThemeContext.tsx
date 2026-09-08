"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type ThemeContextType = {
  theme: string;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    if (media.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    };
    media.addEventListener(("change"), () => setTheme(media.matches ? 'dark' : 'light'))
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
};

export function useTheme(): "dark" | "light" {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  // "setTheme" não funciona pois "theme" pega o tema do sistema e não o valor passado em "setTheme"
  return context.theme == "dark" ? "dark" : "light";
}