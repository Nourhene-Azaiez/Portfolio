"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Icons for light/dark themes

export const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until mounted

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-5 right-4 md:right-8 p-2 rounded-full bg-zinc-800 dark:bg-zinc-500 text-white dark:text-white shadow-lg hover:text-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all z-50"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};
