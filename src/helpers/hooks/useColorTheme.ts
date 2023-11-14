import {useEffect, useState} from "react";

const modeKey: string = "darkMode";

enum EMode {
  dark,
  light
}

type TMode = keyof typeof EMode

type TTheme = {
  theme: TMode,
  toggleTheme: () => void
}
export const useColorTheme = (): TTheme => {
  const prevTheme = localStorage.getItem(modeKey) as TMode | null;
  const [theme, setTheme] = useState<TMode>(() => {
    if (prevTheme) {
      return prevTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (!document.body.classList.contains("dark:bg-slate-900")) {
      document.body.classList.add("dark:bg-slate-900", "transition-all", "duration-500", "easy-leaner", "font-main");
    }
    if (theme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem(modeKey, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return {
    theme,
    toggleTheme
  };
};