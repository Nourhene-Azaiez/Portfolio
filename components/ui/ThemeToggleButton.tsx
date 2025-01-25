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
      className="fixed top-4 right-4 p-2 rounded-full bg-zinc-100 dark:bg-zinc-500 text-black dark:text-white shadow-lg hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all z-50"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};
