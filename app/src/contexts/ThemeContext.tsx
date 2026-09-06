"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { Dispatch, SetStateAction } from "react"

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('dark');

  // Detecta e continua detectando o tema do sistema
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addEventListener(("change"), () => setTheme(media.matches ? 'dark' : 'light'))
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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