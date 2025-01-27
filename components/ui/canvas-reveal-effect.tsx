"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

const DotMatrix = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the theme is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-full w-full flex items-center justify-center">
      <img
        src="/giphy.gif"
        alt="Dot Matrix Animation"
        className={`transition-opacity duration-500 ${
          theme === "dark" ? "opacity-100" : "opacity-70"
        }`}
      />
    </div>
  );
};

const CanvasRevealEffect = ({
  containerClassName,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 to-[84%]" />
      )}
    </div>
  );
};

export default CanvasRevealEffect;
