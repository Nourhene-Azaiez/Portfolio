"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

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
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Define the background images for light and dark themes
  const backgroundImage =
    theme === "dark" ? "/giphy.gif" : "/lightgiphy.gif"; // Adjust this to your images

  return (
    <div
      className={cn("h-full relative w-full", containerClassName)}
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image based on the theme
        backgroundSize: "cover", // Ensure the image covers the full container
        backgroundPosition: "center", // Center the image
      }}
    >
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-100 dark:from-zinc-800 to-transparent" />
      )}
    </div>
  );
};

export default CanvasRevealEffect;
