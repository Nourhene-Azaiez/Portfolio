"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const DotMatrix = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <img
        src="/giphy.gif"
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
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

export default CanvasRevealEffect;
